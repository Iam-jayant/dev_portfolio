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
      <h3>The Silent Crisis in Web3</h3>
    <p>One of the fundamental tenets of Web3 is self-custody—the idea that "not your keys, not your coins." While this empowers individuals with absolute sovereignty over their assets, it introduces a critical vulnerability: the lack of a standardized succession plan. Unlike traditional finance, where legal frameworks and centralized institutions facilitate wealth transfer post-mortem, the blockchain is indifferent to the user’s status. If private keys are lost or not transmitted, the assets become permanently inaccessible. Current estimates suggest that billions of dollars in cryptocurrency are trapped in "zombie wallets," lost forever due to the absence of inheritance mechanisms.</p>

    <h3>Introducing Ascend Protocol: A Decentralized Succession Solution</h3>
    <p>To address this critical infrastructure gap, I developed <strong>Ascend Protocol</strong>, India's first comprehensive crypto inheritance platform. Built to operate on the Sepolia testnet, Ascend Protocol automates the transmission of digital assets to designated beneficiaries without requiring them to possess advanced technical knowledge of private keys or wallet management.</p>
    <p>The protocol was designed to bridge the gap between decentralized finance (DeFi) complexities and real-world utility, specifically tailoring the "off-ramp" experience for the Indian market.</p>

    <h3>Core Architectural Features</h3>
    <ul>
        <li>
            <strong>Automated Deadman Switch Mechanism:</strong><br>
            At the heart of the protocol is a smart contract-based vault. Users configure a "check-in" period—a specific timeframe within which they must interact with the contract to prove activity. If the user fails to check in within the defined period (plus a grace period), the protocol programmatically infers that the user is incapacitated and triggers the inheritance process.
        </li>
        <li>
            <strong>Decentralized Liquidation Engine:</strong><br>
            Inheritance is often complicated by the volatility of crypto assets and the technical barrier of liquidating them. Ascend Protocol integrates a <strong>Liquidation Engine</strong> that utilizes the QuickSwap DEX to automatically swap volatile holdings (e.g., MATIC, ERC20 tokens) into USDC. This ensures that the value of the estate is preserved in a stable asset class immediately upon triggering, protecting beneficiaries from market fluctuations during the transition.
        </li>
        <li>
            <strong>Fiat Bridging and Compliance (UPI Integration):</strong><br>
            Recognizing that many beneficiaries may not be crypto-native, the protocol includes a unique <strong>UPI Bridge</strong>. This feature tracks the conversion of the liquidated USDC into Indian Rupees (INR) and facilitates the deposit directly into the beneficiary's bank account via UPI. Furthermore, the system records payout details to assist with tax compliance (specifically regarding TDS and Section 194S), ensuring the inheritance process adheres to local regulatory frameworks.
        </li>
    </ul>

    <h3>Innovation at IIIT Nagpur</h3>
    <p>Ascend Protocol was conceptualized and built during my time at <strong>IIIT Nagpur</strong>, where it was developed as a hackathon project. The objective was to move beyond speculative blockchain use cases and solve a tangible, human-centric problem.</p>
    <p>The project was recognized with a prize for its practical application of smart contracts to solve the "last mile" problem of crypto inheritance. By automating the technical heavy lifting—liquidation, conversion, and transfer—Ascend Protocol demonstrates how Web3 technologies can be humanized to secure intergenerational wealth.</p>

    <h3>Conclusion</h3>
    <p>As the adoption of digital assets grows, the need for secure, trustless inheritance solutions becomes non-negotiable. Ascend Protocol represents a significant step forward in this domain, proving that we can build systems that respect the ethos of decentralization while providing the safety nets necessary for mainstream adoption.</p>
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
      <h1>The Art of Problem Solving in Software Engineering</h1>
    <p><em>Discover effective strategies and mindset shifts that help tackle complex coding challenges.</em></p>

    <p>In software engineering, writing code is often the easy part. The real challenge—and the true art—lies in problem-solving. Whether you are debugging a legacy system or architecting a new feature from scratch, your ability to navigate ambiguity effectively is what distinguishes a coder from an engineer.</p>
    
    <p>Here are a few strategies to master the art of problem-solving:</p>

    <h3>1. Understand Before You Solve</h3>
    <p>Albert Einstein famously said, <em>"If I had an hour to solve a problem I'd spend 55 minutes thinking about the problem and 5 minutes thinking about solutions."</em> In engineering, this means stepping away from the keyboard. Resist the urge to jump straight into implementation. Instead, clarify requirements, define constraints, and understand the "why" behind the problem.</p>

    <h3>2. The Divide and Conquer Approach</h3>
    <p>Complex problems can be paralyzing. The most effective way to tackle them is decomposition. Break a monolithic issue into smaller, testable, and manageable components. Solving five small problems is always easier—and less error-prone—than solving one massive one.</p>

    <h3>3. Rubber Duck Debugging</h3>
    <p>Sometimes, the best way to find a solution is to articulate the problem out loud. Explaining your logic line-by-line to a colleague (or an inanimate object on your desk) forces you to slow down and often reveals logical gaps you missed while skimming.</p>

    <h3>4. Embrace the "Scientific Method"</h3>
    <p>Treat bugs like scientific experiments. Don't guess; hypothesize. Changing variables at random hoping for a different result is a recipe for technical debt. Instead, form a hypothesis about why the failure is occurring, create a reproducible test case, and systematically verify your assumptions.</p>

    <h3>Conclusion</h3>
    <p>Great problem solving isn't about knowing every answer; it’s about having a robust process to find them. By cultivating a disciplined mindset and breaking down complexity, you transform obstacles into opportunities for innovation.</p>
</article>
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
