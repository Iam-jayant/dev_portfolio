import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowRight, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "Ascend Protocol",
    description:
      "Crypto Inheritance protocol that enables users to create inheritance vaults for their crypto assets with automatic distribution to beneficiaries.",
    tag: "Web3",
    bgColor: "bg-[#6366F1]",
    illustration: "/images/studio-workspace.svg",
  },
  {
    title: "SAAD - AI-Powered Customer Sentiment Alert System",
    description:
      "'Saad' is an intelligent AI agent that continuously monitors Twitter/X and Reddit for brand mentions, automatically analyzes sentiment using advanced AI models, and sends real-time alerts via Slack and Email when negative sentiment is detected.",
    tag: "AI/ML",
    bgColor: "bg-[#2F81F7]",
    illustration: "/images/venture-workspace.svg",
  },
  {
    title: "CRYPT - NFT Gift Protocol",
    description:
      "NFT Gift Protocol is a decentralized gifting platform that combines AI-generated art with ERC-20 token vaults. Users can create personalized NFT gift cards that securely store real crypto value, which recipients can keep as collectibles or liquidate instantly.",
    tag: "Web3 x AI",
    bgColor: "bg-[#10B981]",
    illustration: "/images/studio-workspace.svg",
  },
  {
    title: "EraseIt - Ultra-Fast Drive Wiper",
    description:
      "High-Performance NIST SP 800-88 Compliant Data Destruction Solution. It make sure that data is 100% not recoverable even after trying most reliable methods of recovery.",
    tag: "Software",
    bgColor: "bg-[#F59E0B]",
    illustration: "/images/venture-workspace.svg",
  },
  {
    title: "Jeevan Setu – Bridge of Life",
    description:
      "Jeevan Setu is a role-based platform that securely connects organ donors and recipients through verified doctors and hospital networks. Built with a mission to reduce the delay and wastage in organ donation, it enables ethical, transparent, and medically prioritized matching.",
    tag: "Full-stack",
    bgColor: "bg-[#EC4899]",
    illustration: "/images/studio-workspace.svg",
  },
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] pb-24 sm:pb-28">{/* Bottom padding for navigation */}
      <Navigation />

      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#393939] hover:text-black transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              My <span className="bg-[#FFC224] text-black px-3 py-1 inline-block">Projects</span>
            </h1>
            <p className="text-lg md:text-xl text-[#393939] max-w-2xl">
              A collection of my work spanning web development, AI/ML, and innovative digital solutions.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group grid md:grid-cols-2 bg-white border-[3px] border-black rounded-[32px] overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <div className="p-6 md:p-12 flex flex-col justify-center bg-white">
                  <span className="inline-block bg-black text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6 w-fit">
                    {project.tag}
                  </span>

                  <h2 className="text-xl md:text-[28px] font-bold mb-4 leading-tight md:leading-[40px] text-[#0B0B0B]">
                    {project.title}
                  </h2>

                  <p className="text-base md:text-[18px] text-[#393939] mb-8 leading-relaxed md:leading-[30px] font-medium">
                    {project.description}
                  </p>

                  <a
                    href="#"
                    className="flex items-center gap-2 font-semibold text-[#0B0B0B] hover:gap-3 transition-all text-sm md:text-base"
                  >
                    View case study
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                <div className={`${project.bgColor} relative overflow-hidden min-h-[250px] md:min-h-[500px]`}>
                  <Image
                    src={project.illustration || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
