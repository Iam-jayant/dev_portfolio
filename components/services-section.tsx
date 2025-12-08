import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ServicesSection() {
  const services = [
    {
      category: "Web3",
      title: "Blockchain & Smart Contract Development",
      items: ["Solidity", "Web3.js", "Hardhat"],
    },
    {
      category: "Frontend",
      title: "Frontend Development",
      items: ["React", "TypeScript", "JavaFX", "HTML", "CSS"],
    },
    {
      category: "Backend",
      title: "Backend & API Development",
      items: ["Node.js", "Java", "REST APIs"],
    },
    {
      category: "AI & ML",
      title: "AI & ML Integrations",
      items: ["Azure AI", "HuggingFace", "LangChain", "PyTorch", "scikit-learn"],
    },
    {
      category: "CS Fundamentals",
      title: "Core Computer Science",
      items: ["Data Structures & Algorithms", "OOPs", "Operating Systems", "DBMS"],
    },
    {
      category: "Databases",
      title: "Databases & DB Tools",
      items: ["PostgreSQL", "MongoDB", "Supabase", "Firebase"],
    },
  ]

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-[52px] md:leading-[60px] font-bold mb-4">
              My broad <span className="bg-[#FF4A60] text-white px-3 py-1 inline-block">set of skills</span>
            </h2>
            <p className="text-[#393939] text-base md:text-lg font-medium leading-relaxed md:leading-[30px] max-w-2xl mx-auto">
              A diverse toolkit spanning blockchain, full-stack development, AI integrations, and core computer science
              fundamentals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border-[3px] border-black rounded-[32px] p-8 hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 min-h-[320px] flex flex-col"
              >
                {/* Category badge */}
                <div className="mb-6">
                  <span className="inline-block border-[2px] border-black rounded-full px-4 py-1.5 text-sm font-semibold text-[#0B0B0B]">
                    {service.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[22px] leading-[30px] font-bold mb-4 text-[#0B0B0B]">{service.title}</h3>

                {/* Bullet list */}
                <ul className="space-y-2 flex-1">
                  {service.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-center gap-3 text-[16px] leading-[26px] font-medium text-[#393939]"
                    >
                      <span className="w-2 h-2 rounded-full border-[2px] border-[#393939] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
