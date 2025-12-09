import { FileText, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ExperienceSection() {
  const certificates = [
    {
      issueDate: "Dec 2024",
      title: "AWS Cloud Practitioner",
      description: "Foundational understanding of AWS Cloud concepts, services, security, architecture, and pricing.",
      issuer: "Amazon Web Services",
    },
    {
      issueDate: "Oct 2024",
      title: "Google Data Analytics",
      description: "Professional certificate covering data analysis, visualization, and SQL for business insights.",
      issuer: "Google",
    },
    {
      issueDate: "Aug 2024",
      title: "Meta Front-End Developer",
      description: "Comprehensive training in React, JavaScript, HTML, CSS, and responsive web development.",
      issuer: "Meta",
    },
    {
      issueDate: "Jun 2024",
      title: "IBM Full Stack Developer",
      description: "Full-stack development skills including Node.js, Python, containers, and cloud deployment.",
      issuer: "IBM",
    },
  ]

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="text-white pt-0 md:pt-12 md:sticky md:top-12 self-start">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 md:mb-8 leading-[1.3]">
              Take a look at my <span className="bg-[#6366F1] text-white px-3 py-1 inline-block">past experience</span>
            </h2>
            <p className="text-gray-400 mb-8 md:mb-10 leading-relaxed text-base md:text-lg">
              Professional certifications and credentials that validate my skills and expertise in various technologies.
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
              <div key={index} className="bg-white border-4 border-black rounded-3xl min-h-[220px] md:min-h-[240px]">
                <div className="flex items-center justify-between mb-4 md:mb-6 pt-6 md:pt-8 px-6 md:px-8">
                  <div className="text-base md:text-[22px] leading-tight md:leading-[34px] font-bold text-[#0B0B0B]">
                    {cert.issueDate}
                  </div>
                  <div className="rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-yellow-300 p-2">
                    <Award className="w-6 h-6 md:w-8 md:h-8 text-black" />
                  </div>
                </div>

                <div className="border-t-[3px] border-black mb-4 md:mb-6"></div>

                <div className="px-6 md:px-8 pb-6 md:pb-8">
                  <p className="text-sm md:text-base text-[#6366F1] font-semibold mb-1">{cert.issuer}</p>
                  <h3 className="text-xl md:text-[28px] leading-tight md:leading-[40px] font-bold text-[#0B0B0B] mb-2 md:mb-3">
                    {cert.title}
                  </h3>
                  <p className="text-[#393939] text-base md:text-[20px] leading-relaxed md:leading-[32px]">
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
