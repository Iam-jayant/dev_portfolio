import { FileText, Trophy, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ExperienceSection() {
  const certificates = [
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

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="text-white pt-0 md:pt-12 md:sticky md:top-12 self-start">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 md:mb-8 leading-[1.3]">
              Take a look at my Past<span className="bg-[#6366F1] text-white px-3 py-1 inline-block">experience</span>
            </h2>
            <p className="text-gray-400 mb-8 md:mb-10 leading-relaxed text-base md:text-lg">
              Hackathons, competitions, and recognitions that showcase my journey and achievements in tech.
            </p>
            <Link href="/resume">
              <Button className="bg-white text-black hover:bg-gray-50 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]">
                <FileText className="w-5 h-5" />
                See full resume
              </Button>
            </Link>
          </div>

          <div className="space-y-6">
            {certificates.map((cert, index) => (
              <div key={index} className="bg-white border-4 border-black rounded-3xl min-h-[180px] md:min-h-[200px]">
                <div className="flex items-center justify-between mb-4 md:mb-6 pt-6 md:pt-8 px-6 md:px-8">
                  <div className="text-sm md:text-base text-[#6366F1] font-semibold">{cert.organization}</div>
                  <div className="rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-yellow-300 p-2">
                    <Trophy className="w-6 h-6 md:w-8 md:h-8 text-black" />
                  </div>
                </div>

                <div className="border-t-[3px] border-black mb-4 md:mb-6"></div>

                <div className="px-6 md:px-8 pb-6 md:pb-8 flex items-center justify-between gap-4">
                  <h3 className="text-xl md:text-[28px] leading-tight md:leading-[40px] font-bold text-[#0B0B0B]">
                    {cert.name}
                  </h3>
                  {cert.certificateUrl && (
                    <a
                      href={cert.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 rounded-full border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all bg-white p-2"
                    >
                      <ExternalLink className="w-5 h-5 text-black" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
