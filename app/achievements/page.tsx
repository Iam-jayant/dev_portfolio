import { Navigation } from "@/components/navigation"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const achievements = [
  {
    name: "Web3 Hackathon",
    organization: "IIIT Nagpur",
    certificateUrl: null,
  },
  {
    name: "Krutiverse Hackathon",
    organization: "TGP Nagpur",
    certificateUrl: null,
  },
  {
    name: "Hack On",
    organization: "GDG on Campus GCOEN",
    certificateUrl: null,
  },
  {
    name: "Healthcare Management System Hackathon",
    organization: "FLUXUS - IIT Indore",
    certificateUrl:
      "https://github.com/Iam-jayant/Certificates/blob/a8770f82b4972122a549eef912fd7491ab5a0c92/iit%20indore.pdf",
  },
  {
    name: "Code Of Phoenix",
    organization: "IIIT Naya Raipur",
    certificateUrl:
      "https://github.com/Iam-jayant/Certificates/blob/a8770f82b4972122a549eef912fd7491ab5a0c92/code%20of%20phoenix.pdf",
  },
  {
    name: "CIH 2.0 Nagpur",
    organization: "Suryodaya College Nagpur",
    certificateUrl: null,
  },
  {
    name: "Devcraft Hackathon",
    organization: "IIT Indore",
    certificateUrl: null,
  },
  {
    name: "DSU Devhack 2.0",
    organization: "DSU Bangaluru",
    certificateUrl: null,
  },
  {
    name: "Ethglobal New Delhi",
    organization: "Ethereum Global",
    certificateUrl: null,
  },
  {
    name: "Ecothon 4.0",
    organization: "Sipna College Nagpur",
    certificateUrl: null,
  },
  {
    name: "Gradio Agents & MCP Hackathon",
    organization: "Gradio & Hugging Face",
    certificateUrl: null,
  },
]

export default function AchievementsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Achievements</h1>
          <p className="text-muted-foreground">A collection of hackathons, competitions, and recognitions</p>
        </div>

        {/* Achievements List */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-4 border-black rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
            <ul className="divide-y-2 divide-black">
              {achievements.map((achievement, index) => (
                <li
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-1">
                    <h2 className="text-lg md:text-xl font-bold text-foreground">{achievement.name}</h2>
                    <p className="text-muted-foreground">{achievement.organization}</p>
                  </div>
                  {achievement.certificateUrl ? (
                    <Button
                      asChild
                      variant="outline"
                      className="border-2 border-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all bg-transparent w-full sm:w-auto"
                    >
                      <a href={achievement.certificateUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Certificate
                      </a>
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      disabled
                      className="border-2 border-gray-300 rounded-lg bg-gray-100 text-gray-400 cursor-not-allowed w-full sm:w-auto"
                    >
                      Certificate Pending
                    </Button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
