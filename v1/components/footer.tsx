import { Instagram, Linkedin, Mail, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/footer-logo.jpeg"
                    alt="Portfolio JK Logo"
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
                <span className="text-lg md:text-xl font-bold">Portfolio JK</span>
              </div>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                This is developer portfolio of me. Refer to my resume and profiles to explore more about me.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/Iam-jayant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#2F81F7] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://x.com/0xjayantxyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#2F81F7] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <XIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com/frames.by.jk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#FF6B7A] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="linkedin.com/in/jayant-kurekar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#FF6B7A] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">Pages</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:text-white transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/resume" className="hover:text-white transition-colors">
                    Resume
                  </Link>
                </li>
                <li>
                  <Link href="/achievements" className="hover:text-white transition-colors">
                    Achievements
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Contact us</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:jayantkurekar1@gmail.com" className="hover:text-white transition-colors">
                    jayantkurekar1@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p className="flex items-center justify-center gap-2">
              Made by Jayant
              <svg viewBox="0 0 900 600" className="w-5 h-4 inline-block" aria-label="Indian Flag">
                <rect width="900" height="200" fill="#FF9933" />
                <rect y="200" width="900" height="200" fill="#FFFFFF" />
                <rect y="400" width="900" height="200" fill="#138808" />
                <circle cx="450" cy="300" r="60" fill="#000080" fillOpacity="0" stroke="#000080" strokeWidth="6" />
                <circle cx="450" cy="300" r="17" fill="#000080" />
                {[...Array(24)].map((_, i) => (
                  <line
                    key={i}
                    x1="450"
                    y1="300"
                    x2={450 + 55 * Math.cos((i * 15 * Math.PI) / 180)}
                    y2={300 + 55 * Math.sin((i * 15 * Math.PI) / 180)}
                    stroke="#000080"
                    strokeWidth="2"
                  />
                ))}
              </svg>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
