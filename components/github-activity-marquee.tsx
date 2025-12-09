"use client"

import { useEffect, useState } from "react"
import { GitCommit, GitPullRequest, Star, GitFork, MessageSquare } from "lucide-react"

interface GitHubEvent {
  id: string
  type: string
  repo: {
    name: string
  }
  created_at: string
  payload: {
    commits?: Array<{ message: string }>
    action?: string
  }
}

function getEventIcon(type: string) {
  switch (type) {
    case "PushEvent":
      return <GitCommit className="h-4 w-4" />
    case "PullRequestEvent":
      return <GitPullRequest className="h-4 w-4" />
    case "WatchEvent":
      return <Star className="h-4 w-4" />
    case "ForkEvent":
      return <GitFork className="h-4 w-4" />
    case "IssueCommentEvent":
    case "CommitCommentEvent":
      return <MessageSquare className="h-4 w-4" />
    default:
      return <GitCommit className="h-4 w-4" />
  }
}

function getEventDescription(event: GitHubEvent): string {
  const repoName = event.repo.name.split("/")[1] || event.repo.name
  switch (event.type) {
    case "PushEvent":
      const commitMsg = event.payload.commits?.[0]?.message?.split("\n")[0] || "commits"
      return `Pushed to ${repoName}: ${commitMsg.substring(0, 40)}${commitMsg.length > 40 ? "..." : ""}`
    case "PullRequestEvent":
      return `${event.payload.action} PR in ${repoName}`
    case "WatchEvent":
      return `Starred ${repoName}`
    case "ForkEvent":
      return `Forked ${repoName}`
    case "CreateEvent":
      return `Created branch in ${repoName}`
    case "IssueCommentEvent":
      return `Commented on issue in ${repoName}`
    default:
      return `Activity in ${repoName}`
  }
}

export function GithubActivityMarquee() {
  const [events, setEvents] = useState<GitHubEvent[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchGitHubActivity() {
      try {
        const response = await fetch("https://api.github.com/users/Iam-jayant/events/public")
        if (response.ok) {
          const data = await response.json()
          setEvents(data.slice(0, 15))
        }
      } catch (error) {
        console.error("Failed to fetch GitHub activity:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchGitHubActivity()
  }, [])

  // Fallback content if no events
  const displayEvents =
    events.length > 0
      ? events
      : ([
          {
            id: "1",
            type: "PushEvent",
            repo: { name: "Iam-jayant/portfolio" },
            created_at: new Date().toISOString(),
            payload: { commits: [{ message: "Updated portfolio" }] },
          },
          {
            id: "2",
            type: "CreateEvent",
            repo: { name: "Iam-jayant/project" },
            created_at: new Date().toISOString(),
            payload: {},
          },
          {
            id: "3",
            type: "PushEvent",
            repo: { name: "Iam-jayant/webapp" },
            created_at: new Date().toISOString(),
            payload: { commits: [{ message: "Added new features" }] },
          },
        ] as GitHubEvent[])

  return (
    <div className="overflow-hidden my-16">
      <div className="overflow-hidden bg-black py-4 w-full">
        <div className="flex items-center gap-8 whitespace-nowrap animate-scroll-left">
          {[...displayEvents, ...displayEvents, ...displayEvents, ...displayEvents].map((event, index) => (
            <div
              key={`${event.id}-${index}`}
              className="flex items-center gap-2 text-white/90 text-sm font-medium px-4"
            >
              <span className="text-yellow-400">{getEventIcon(event.type)}</span>
              <span>{getEventDescription(event)}</span>
              <span className="text-white/40 mx-4">•</span>
            </div>
          ))}
        </div>
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black">
            <span className="text-white/60 text-sm">Loading GitHub activity...</span>
          </div>
        )}
      </div>
      <div className="flex justify-end mt-2 px-4">
        <span className="text-foreground/60 text-xs font-medium">
          fetched from{" "}
          <a
            href="https://github.com/Iam-jayant"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-600 hover:text-yellow-500 underline underline-offset-2 transition-colors"
          >
            github
          </a>
        </span>
      </div>
    </div>
  )
}
