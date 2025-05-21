"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { CheckCircle, ArrowRight, ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import Link from "next/link"

export default function AnalysisPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [progress, setProgress] = useState(0)
  const [currentStage, setCurrentStage] = useState(0)
  const [analysisComplete, setAnalysisComplete] = useState(false)

  const analysisStages = [
    { name: "Extracting user and group attributes", status: "pending" },
    { name: "Identifying API endpoints", status: "pending" },
    { name: "Determining authentication mechanisms", status: "pending" },
    { name: "Assessing SCIM capabilities", status: "pending" },
    { name: "Generating integration prototype", status: "pending" },
  ]

  const [stages, setStages] = useState(analysisStages)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer)
          setAnalysisComplete(true)
          toast({
            title: "Analysis complete",
            description: "Your integration prototype is ready to view.",
            variant: "success",
          })
          return 100
        }
        return prevProgress + 1
      })

      if (progress >= 20 && currentStage === 0) {
        updateStageStatus(0, "complete")
        setCurrentStage(1)
        toast({
          title: "Stage complete",
          description: "User and group attributes extracted successfully.",
          variant: "default",
        })
      } else if (progress >= 40 && currentStage === 1) {
        updateStageStatus(1, "complete")
        setCurrentStage(2)
        toast({
          title: "Stage complete",
          description: "API endpoints identified successfully.",
          variant: "default",
        })
      } else if (progress >= 60 && currentStage === 2) {
        updateStageStatus(2, "complete")
        setCurrentStage(3)
        toast({
          title: "Stage complete",
          description: "Authentication mechanisms determined successfully.",
          variant: "default",
        })
      } else if (progress >= 80 && currentStage === 3) {
        updateStageStatus(3, "complete")
        setCurrentStage(4)
        toast({
          title: "Stage complete",
          description: "SCIM capabilities assessed successfully.",
          variant: "default",
        })
      } else if (progress >= 95 && currentStage === 4) {
        updateStageStatus(4, "complete")
        toast({
          title: "Stage complete",
          description: "Integration prototype generated successfully.",
          variant: "default",
        })
      }
    }, 50)

    return () => clearInterval(timer)
  }, [progress, currentStage, toast])

  const updateStageStatus = (index: number, status: string) => {
    const newStages = [...stages]
    newStages[index].status = status
    setStages(newStages)
  }

  const handleViewResults = () => {
    router.push("/prototype")
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">AI Analysis in Progress</h1>

        <Breadcrumb className="mb-6">
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/upload">Documentation Input</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink>Analysis</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <div className="mb-6">
          <Link href="/upload">
            <Button variant="ghost" size="sm" className="flex items-center" disabled={progress > 50}>
              <ArrowLeft className="h-4 w-4 mr-1" /> Back to Documentation Input
            </Button>
          </Link>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Analyzing Documentation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <Progress value={progress} className="h-2" />
              <p className="text-right text-sm text-gray-500 mt-1">{progress}%</p>
            </div>

            <div className="space-y-4 mt-6">
              {stages.map((stage, index) => (
                <div key={index} className="flex items-center gap-3">
                  {stage.status === "complete" ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : currentStage === index ? (
                    <div className="h-5 w-5 rounded-full border-2 border-[#3ABCB8] border-t-transparent animate-spin" />
                  ) : (
                    <div className="h-5 w-5 rounded-full border border-gray-300" />
                  )}
                  <span className={stage.status === "complete" ? "text-gray-700" : "text-gray-500"}>{stage.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
          {analysisComplete && (
            <CardFooter className="flex justify-end">
              <Button
                onClick={handleViewResults}
                className="gap-2"
                style={{ backgroundColor: "#3ABCB8", borderColor: "#3ABCB8" }}
              >
                View Integration Prototype <ArrowRight size={16} />
              </Button>
            </CardFooter>
          )}
        </Card>

        {analysisComplete && (
          <Card className="bg-green-50 border-green-200">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <h3 className="text-lg font-medium text-green-800">Analysis Complete</h3>
              </div>
              <p className="text-green-700 mb-4">
                The AI has successfully analyzed your documentation and generated a SCIM integration prototype.
              </p>
              <div className="flex justify-end">
                <Button
                  onClick={handleViewResults}
                  className="gap-2"
                  style={{ backgroundColor: "#3ABCB8", borderColor: "#3ABCB8" }}
                >
                  View Integration Prototype <ArrowRight size={16} />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </main>
  )
}
