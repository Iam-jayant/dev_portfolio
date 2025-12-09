"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowLeft, Calendar, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

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
    content: `
      <p>In the rapidly evolving world of cryptocurrency and blockchain technology, one critical aspect often overlooked is the question of digital inheritance. What happens to your crypto assets when you're no longer around to manage them?</p>
      
      <h2>The Problem</h2>
      <p>Traditional inheritance systems are ill-equipped to handle digital assets. Private keys, seed phrases, and wallet access present unique challenges that conventional legal frameworks simply cannot address effectively. This gap in the market represents both a significant risk for crypto holders and an opportunity for innovation.</p>
      
      <h2>Introducing Ascend Protocol</h2>
      <p>Ascend Protocol emerges as India's pioneering solution to this pressing problem. Our platform provides a comprehensive crypto inheritance system that handles everything from asset liquidation to bank deposits, ensuring your digital wealth reaches your intended beneficiaries.</p>
      
      <h2>Key Features</h2>
      <ul>
        <li><strong>Smart Contract Security:</strong> All inheritance rules are encoded in tamper-proof smart contracts</li>
        <li><strong>Multi-Signature Verification:</strong> Multiple layers of authentication ensure only legitimate claims are processed</li>
        <li><strong>Automated Liquidation:</strong> Assets can be automatically converted to fiat currency based on predefined conditions</li>
        <li><strong>Legal Compliance:</strong> Built to work within existing legal frameworks while leveraging blockchain advantages</li>
      </ul>
      
      <h2>Looking Forward</h2>
      <p>As cryptocurrency adoption continues to grow, the need for robust inheritance solutions will only become more pressing. Ascend Protocol is positioned to lead this transformation, ensuring that digital legacies are preserved and transferred securely.</p>
    `,
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
    content: `
      <p>In today's fast-paced digital landscape, understanding customer sentiment in real-time can make or break a brand's reputation. Enter Saad - an AI-powered sentiment analysis system designed to keep you ahead of the curve.</p>
      
      <h2>What is Saad?</h2>
      <p>Saad is an intelligent AI agent that continuously monitors social media platforms like Twitter/X and Reddit for brand mentions. Using advanced natural language processing models, it analyzes the sentiment behind each mention and sends real-time alerts when negative sentiment is detected.</p>
      
      <h2>How It Works</h2>
      <p>The system operates on a sophisticated pipeline that includes:</p>
      <ul>
        <li><strong>Data Collection:</strong> Continuous monitoring of social media APIs for brand-related keywords</li>
        <li><strong>Sentiment Analysis:</strong> Advanced AI models classify mentions as positive, negative, or neutral</li>
        <li><strong>Alert Generation:</strong> Automatic notifications via Slack and Email for negative sentiments</li>
        <li><strong>Dashboard Analytics:</strong> Comprehensive overview of sentiment trends over time</li>
      </ul>
      
      <h2>Technical Stack</h2>
      <p>Saad leverages cutting-edge technologies including transformer-based language models, real-time data streaming, and scalable cloud infrastructure to ensure reliable and accurate sentiment detection.</p>
      
      <h2>Impact</h2>
      <p>With Saad, brands can respond to customer concerns before they escalate, maintain a positive online presence, and make data-driven decisions about their marketing strategies.</p>
    `,
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
    content: `
      <p>Problem-solving is the cornerstone of software engineering. While technical skills are essential, the ability to approach and solve complex problems systematically is what truly sets exceptional engineers apart.</p>
      
      <h2>Understanding the Problem</h2>
      <p>Before writing a single line of code, invest time in understanding the problem thoroughly. Ask clarifying questions, identify edge cases, and ensure you grasp the requirements completely. This upfront investment saves countless hours of rework later.</p>
      
      <h2>Breaking Down Complexity</h2>
      <p>Large problems can feel overwhelming. The key is to break them into smaller, manageable pieces. Each sub-problem becomes easier to solve, and the solutions can be composed together to address the original challenge.</p>
      
      <h2>Patterns and Mental Models</h2>
      <p>Experienced engineers recognize patterns from problems they've solved before. Building a library of mental models and design patterns helps you approach new challenges with proven strategies.</p>
      
      <h2>The Debugging Mindset</h2>
      <p>When things go wrong (and they will), approach debugging systematically:</p>
      <ul>
        <li>Reproduce the issue consistently</li>
        <li>Isolate the problem to the smallest possible scope</li>
        <li>Form hypotheses and test them methodically</li>
        <li>Document your findings for future reference</li>
      </ul>
      
      <h2>Continuous Learning</h2>
      <p>The best problem solvers never stop learning. Read code written by others, study algorithms, practice on coding platforms, and always be curious about how things work under the hood.</p>
    `,
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
    content: `
      <p>React Hooks revolutionized how we write React components. Since their introduction in React 16.8, they've become the standard way to manage state and side effects in functional components.</p>
      
      <h2>The Foundation: useState and useEffect</h2>
      <p>These two hooks form the foundation of React development. useState manages local component state, while useEffect handles side effects like API calls, subscriptions, and DOM manipulations.</p>
      
      <h2>Beyond the Basics</h2>
      <p>As your applications grow, you'll need more sophisticated patterns:</p>
      <ul>
        <li><strong>useContext:</strong> Share state across components without prop drilling</li>
        <li><strong>useReducer:</strong> Manage complex state logic with reducer patterns</li>
        <li><strong>useMemo and useCallback:</strong> Optimize performance by memoizing values and functions</li>
        <li><strong>useRef:</strong> Access DOM elements and persist values across renders</li>
      </ul>
      
      <h2>Custom Hooks</h2>
      <p>The true power of hooks lies in creating custom hooks. Extract common logic into reusable hooks that can be shared across components and even projects. This promotes code reuse and maintains separation of concerns.</p>
      
      <h2>Common Pitfalls</h2>
      <p>Watch out for these common mistakes:</p>
      <ul>
        <li>Missing dependencies in useEffect arrays</li>
        <li>Creating infinite loops with incorrectly structured effects</li>
        <li>Over-memoizing when it's not necessary</li>
        <li>Breaking the rules of hooks (calling hooks conditionally)</li>
      </ul>
      
      <h2>Best Practices</h2>
      <p>Follow these guidelines for clean, maintainable hook-based code: keep hooks small and focused, name custom hooks with "use" prefix, and always consider the component lifecycle when managing effects.</p>
    `,
  },
]

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const blog = blogs.find((b) => b.slug === slug)

  if (!blog) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-[#FFFFFF]">
      <Navigation />

      <article className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Back Link */}
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </Link>

          {/* Header */}
          <header className="mb-10">
            <span className="inline-block bg-black text-white text-sm font-semibold px-4 py-2 rounded-lg mb-6">
              {blog.tag}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">{blog.title}</h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">{blog.description}</p>

            {/* Author Info */}
            <div className="flex items-center gap-4 pb-8 border-b-[3px] border-black">
              <div className="w-14 h-14 bg-[#FDB927] border-[3px] border-black rounded-full flex items-center justify-center">
                <span className="text-xl font-bold">J</span>
              </div>
              <div>
                <div className="flex items-center gap-2 font-bold text-lg text-[#0B0B0B]">
                  <User className="w-4 h-4" />
                  {blog.author}
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  {blog.date}
                </div>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="bg-[#EDEDED] relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden border-[3px] border-black mb-10">
            <Image src={blog.image || "/placeholder.svg"} alt={blog.title} fill className="object-cover" />
          </div>

          {/* Blog Content */}
          <div
            className="prose prose-lg max-w-none 
              prose-headings:font-bold prose-headings:text-black 
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
              prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
              prose-li:text-gray-700 prose-li:mb-2
              prose-strong:text-black"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* Bottom Navigation */}
          <div className="mt-16 pt-8 border-t-[3px] border-black">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Blogs
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
