import { Pencil, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const blogs = [
  {
    id: 1,
    slug: "securing-digital-legacies",
    title: "Securing Digital Legacies: The Imperative for On-Chain Inheritance Protocols",
    description:
      "This project, Ascend Protocol, is India's first attempt at a crypto inheritance platform that handles everything from liquidation to deposit in bank",
    tag: "Web3",
    image: "/images/article-design-tools.png",
    author: "Jayant",
    date: "Dec 5, 2024",
    featured: true,
  },
  {
    id: 2,
    slug: "saad-ai-sentiment-alert",
    title: "Saad - AI-Powered Customer Sentiment Alert System",
    description:
      "Agent Saad is an AI-powered monitoring system that tracks social media mentions on Twitter and Reddit to instantly alert teams of negative sentiment.",
    tag: "AI",
    image: "/images/article-font-sizes.png",
    author: "Jayant",
    date: "Nov 28, 2024",
  },
  {
    id: 3,
    slug: "problem-solving-software-engineering",
    title: "The Art of Problem Solving in Software Engineering",
    description: "Discover effective strategies and mindset shifts that help tackle complex coding challenges.",
    tag: "Career",
    image: "/images/article-exercises.png",
    author: "Jayant",
    date: "Nov 15, 2024",
  },
]

export function BlogsSection() {
  return (
    <section id="blogs" className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Blogs</h2>
          <Link href="/blogs">
            <Button
              variant="outline"
              className="border-[3px] border-black rounded-xl px-4 md:px-6 py-4 md:py-6 hover:bg-gray-50 bg-white font-semibold text-sm md:text-base w-full sm:w-auto"
            >
              <Pencil className="w-4 h-4 mr-2" />
              Browse all blogs
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-6 mb-16">
          {/* Large featured blog card */}
          <div className="group bg-white border-[3px] border-black rounded-3xl overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 leading-3">
            <div className="bg-[#EDEDED] relative min-h-[220px] md:min-h-[320px] m-3 md:m-4 rounded-2xl overflow-hidden">
              <span className="absolute top-3 right-3 md:top-4 md:right-4 inline-block bg-black text-white text-xs md:text-sm font-semibold px-3 py-1.5 md:px-4 md:py-2 rounded-lg z-10">
                {blogs[0].tag}
              </span>
              <Image
                src={blogs[0].image || "/placeholder.svg"}
                alt={blogs[0].title}
                fill
                className="object-cover rounded-2xl transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">{blogs[0].title}</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-[#FDB927] border-2 border-black rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center">
                    <span className="text-xl md:text-2xl font-bold">J</span>
                  </div>
                  <div>
                    <div className="font-bold text-base md:text-lg text-[#0B0B0B]">{blogs[0].author}</div>
                    <div className="text-sm md:text-base text-gray-600">{blogs[0].date}</div>
                  </div>
                </div>
                <Link href={`/blogs/${blogs[0].slug}`}>
                  <Button className="bg-black text-white border-2 border-black rounded-xl px-4 py-2 hover:bg-gray-800 font-semibold text-sm flex items-center gap-2">
                    Read Blog
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right side - Two smaller blog cards */}
          <div className="space-y-6 md:space-y-8">
            {blogs.slice(1).map((blog) => (
              <div
                key={blog.id}
                className="group bg-white border-[3px] border-black rounded-3xl overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row">
                  {/* Image area */}
                  <div className="bg-[#EDEDED] min-w-full sm:min-w-[200px] md:min-w-[280px] min-h-[180px] sm:min-h-[200px] relative m-0 sm:m-3 md:m-4 rounded-none sm:rounded-2xl overflow-hidden flex-shrink-0">
                    <span className="absolute top-3 right-3 md:top-4 md:right-4 inline-block bg-black text-white text-xs font-semibold px-3 py-1.5 rounded-lg z-10">
                      {blog.tag}
                    </span>
                    <Image
                      src={blog.image || "/placeholder.svg"}
                      alt={blog.title}
                      fill
                      className="object-cover sm:object-contain p-0 sm:p-3 md:p-4 rounded-none sm:rounded-2xl transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                  </div>
                  {/* Content area */}
                  <div className="p-6 md:p-10 flex flex-col justify-center">
                    <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4">{blog.title}</h3>
                    <p className="text-gray-600 text-sm md:text-lg leading-relaxed mb-4">{blog.description}</p>
                    <Link href={`/blogs/${blog.slug}`}>
                      <Button className="bg-black text-white border-2 border-black rounded-xl px-4 py-2 hover:bg-gray-800 font-semibold text-sm flex items-center gap-2 w-fit">
                        Read Blog
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
