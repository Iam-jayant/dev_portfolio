import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const blogs = [
  {
    id: 1,
    slug: "securing-digital-legacies",
    title: "Securing Digital Legacies: The Imperative for On-Chain Inheritance Protocols",
    description:
      "This project, Ascend Protocol, is India's first attempt at a crypto inheritance platform that handles everything from liquidation to deposit in bank.",
    tag: "Web3",
    image: "/images/article-design-tools.png",
    author: "Jayant",
    date: "Dec 5, 2024",
  },
  {
    id: 2,
    slug: "saad-ai-sentiment-alert",
    title: "Saad - AI-Powered Customer Sentiment Alert System",
    description:
      "Saad is an intelligent AI agent that continuously monitors Twitter/X and Reddit for brand mentions, automatically analyzes sentiment using advanced AI models.",
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
  {
    id: 4,
    slug: "mastering-react-hooks",
    title: "Mastering React Hooks: From Basics to Advanced Patterns",
    description: "A comprehensive guide to understanding and utilizing React Hooks effectively in your projects.",
    tag: "Development",
    image: "/images/article-design-tools.png",
    author: "Jayant",
    date: "Nov 1, 2024",
  },
]

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF]">
      <Navigation />

      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Blogs</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
              Thoughts, ideas, and insights on design, development, and career growth.
            </p>
          </div>

          {/* Blog Cards Gallery */}
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="group bg-white border-[3px] border-black rounded-3xl overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300"
              >
                {/* Image */}
                <div className="bg-[#EDEDED] relative h-[200px] md:h-[240px] m-3 md:m-4 rounded-2xl overflow-hidden">
                  <span className="absolute top-3 right-3 md:top-4 md:right-4 inline-block bg-black text-white text-xs md:text-sm font-semibold px-3 py-1.5 md:px-4 md:py-2 rounded-lg z-10">
                    {blog.tag}
                  </span>
                  <Image
                    src={blog.image || "/placeholder.svg"}
                    alt={blog.title}
                    fill
                    className="object-cover rounded-2xl transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-5 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold mb-3 line-clamp-2">{blog.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4 line-clamp-2">
                    {blog.description}
                  </p>

                  {/* Author & Date & Read Button */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#FDB927] border-2 border-black rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold">J</span>
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-[#0B0B0B]">{blog.author}</div>
                        <div className="text-xs text-gray-500">{blog.date}</div>
                      </div>
                    </div>
                    <Link href={`/blogs/${blog.slug}`}>
                      <Button className="bg-black text-white border-2 border-black rounded-xl px-3 py-2 hover:bg-gray-800 font-semibold text-xs flex items-center gap-1">
                        Read
                        <ArrowRight className="w-3 h-3" />
                      </Button>
                    </Link>
                  </div>
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
