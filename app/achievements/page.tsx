import { Navigation } from "@/components/navigation"
import { ExternalLink, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"

const achievements = [
  {
    name: "Web3 Hackathon",
    organization: "IIIT Nagpur",
    certificateUrl:
      "https://github.com/Iam-jayant/Certificates/blob/61b0d91300168a44c4be6b2f15dfae1c27fa3d67/Hackathon/IIIT%20Nagpur%20Web3%20Hackathon.pdf",
  },
  {
    name: "Krutiverse Hackathon",
    organization: "TGP Nagpur",
    certificateUrl:
      "https://github.com/Iam-jayant/Certificates/blob/a8770f82b4972122a549eef912fd7491ab5a0c92/TGP%20krutiverese%20Hackathon.pdf",
  },
  {
    name: "Hack On",
    organization: "GDG on Campus GCOEN",
    certificateUrl:
      "https://github.com/Iam-jayant/Certificates/blob/a8770f82b4972122a549eef912fd7491ab5a0c92/Hack%20On%20GCOEN.pdf",
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
    certificateUrl:
      "https://github.com/Iam-jayant/Certificates/blob/bb6c686d9ca212529ada114c12730cc3cfcd0bfe/cih%202.0%20certificate.pdf",
  },
  {
    name: "Devcraft Hackathon",
    organization: "IIT Indore",
    certificateUrl:
      "https://github.com/Iam-jayant/Certificates/blob/61b0d91300168a44c4be6b2f15dfae1c27fa3d67/Hackathon/Devcraft%20Esummit%20IIT%20Indore.pdf",
  },
  {
    name: "DSU Devhack 2.0",
    organization: "DSU Bangaluru",
    certificateUrl:
      "https://github.com/Iam-jayant/Certificates/blob/61b0d91300168a44c4be6b2f15dfae1c27fa3d67/Hackathon/DSU%20Devhack%202.0.pdf",
  },
  {
    name: "Ethglobal New Delhi",
    organization: "Ethereum Global",
    certificateUrl:
      "https://github.com/Iam-jayant/Certificates/blob/61b0d91300168a44c4be6b2f15dfae1c27fa3d67/Hackathon/Ethglobal%20New%20Delhi%202025.pdf",
  },
  {
    name: "Ecothon 4.0",
    organization: "Sipna College Nagpur",
    certificateUrl:
      "https://github.com/Iam-jayant/Certificates/blob/61b0d91300168a44c4be6b2f15dfae1c27fa3d67/Hackathon/ecothon%204.0%20certificate%20jayant.pdf",
  },
  {
    name: "Gradio Agents & MCP Hackathon",
    organization: "Gradio & Hugging Face",
    certificateUrl:
      "https://github.com/Iam-jayant/Certificates/blob/c27e53ac7355c016b58a05abe1a6eac48e7c5675/Certificate-AgentsMCP-Hackathon-1753275644066_6550.pdf",
  },
]

export default function AchievementsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="max-w-6xl mx-auto mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Achievements</h1>
          <p className="text-muted-foreground">A collection of hackathons, competitions, and recognitions</p>
        </div>

        {/* Achievements List */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white border-4 border-black rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all p-6 flex flex-col"
            >
              {/* Trophy Icon */}
              <div className="w-12 h-12 bg-yellow-400 border-2 border-black rounded-lg flex items-center justify-center mb-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <Trophy className="w-6 h-6 text-black" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h2 className="text-lg font-bold text-foreground mb-1 leading-tight">{achievement.name}</h2>
                <p className="text-sm text-muted-foreground mb-4">{achievement.organization}</p>
              </div>

              {/* Certificate Button */}
              {achievement.certificateUrl ? (
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-2 border-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all bg-transparent"
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
                  className="w-full border-2 border-gray-300 rounded-lg bg-gray-100 text-gray-400 cursor-not-allowed"
                >
                  Certificate Pending
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
