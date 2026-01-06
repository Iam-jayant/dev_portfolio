import { Navigation } from "@/components/navigation"
import { Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ResumePage() {
  // Replace this with your actual PDF URL
  const pdfUrl = "/resume.pdf"

  return (
    <main className="min-h-screen bg-background pb-24 sm:pb-28">{/* Bottom padding for navigation */}
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">My Resume</h1>
              <p className="text-muted-foreground">View my professional experience and qualifications</p>
            </div>
            <div className="flex gap-3">
              <Button
                asChild
                variant="outline"
                className="border-2 border-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all bg-transparent"
              >
                <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Open in New Tab
                </a>
              </Button>
              <Button
                asChild
                className="bg-black text-white rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                <a href={pdfUrl} download>
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* PDF Viewer Frame */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-4 border-black rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
            {/* PDF Container */}
            <div className="w-full aspect-[8.5/11] min-h-[600px] md:min-h-[800px]">
              <iframe src={`${pdfUrl}#toolbar=1&navpanes=0&scrollbar=1`} className="w-full h-full" title="Resume PDF" />
            </div>
          </div>

          {/* Fallback Note */}
          <p className="text-center text-sm text-muted-foreground mt-4">
            Having trouble viewing? Try{" "}
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground transition-colors"
            >
              opening directly
            </a>{" "}
            or{" "}
            <a href={pdfUrl} download className="underline hover:text-foreground transition-colors">
              downloading the PDF
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  )
}
