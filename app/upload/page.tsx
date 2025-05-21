"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Upload, LinkIcon, FileText, ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import Link from "next/link"

export default function UploadPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [isUploading, setIsUploading] = useState(false)
  const [uploadComplete, setUploadComplete] = useState(false)
  const [documentLinks, setDocumentLinks] = useState(["", ""])

  const handleFileUpload = () => {
    setIsUploading(true)
    // Simulate file upload
    setTimeout(() => {
      setIsUploading(false)
      setUploadComplete(true)
      toast({
        title: "Files uploaded successfully",
        description: "2 files have been uploaded and are ready for analysis.",
        variant: "success",
      })
      // Simulate analysis time
      setTimeout(() => {
        router.push("/analysis")
      }, 1500)
    }, 2000)
  }

  const handleLinkSubmit = () => {
    // Validate links
    if (documentLinks.filter((link) => link.trim().length > 0).length < 1) {
      toast({
        title: "No links provided",
        description: "Please provide at least one documentation link.",
        variant: "default",
      })
      return
    }

    toast({
      title: "Links submitted",
      description: "Your documentation links have been submitted for analysis.",
      variant: "success",
    })

    // Simulate processing links
    setTimeout(() => {
      router.push("/analysis")
    }, 1500)
  }

  const updateLink = (index: number, value: string) => {
    const newLinks = [...documentLinks]
    newLinks[index] = value
    setDocumentLinks(newLinks)
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Documentation Input</h1>

        <Breadcrumb className="mb-6">
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink>Documentation Input</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <div className="mb-6">
          <Link href="/">
            <Button variant="ghost" size="sm" className="flex items-center">
              <ArrowLeft className="h-4 w-4 mr-1" /> Back to Home
            </Button>
          </Link>
        </div>

        <p className="text-gray-600 mb-8">
          Provide documentation describing two or more systems' user/group management capabilities. This will be used to
          analyze and generate a SCIM integration prototype.
        </p>

        <Tabs defaultValue="upload" className="mb-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="upload">Upload Documents</TabsTrigger>
            <TabsTrigger value="links">Provide Links</TabsTrigger>
          </TabsList>

          <TabsContent value="upload">
            <Card>
              <CardHeader>
                <CardTitle>Upload Documentation</CardTitle>
                <CardDescription>
                  Upload mock documentation files (PDF, Word, HTML, etc.) describing your systems.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-6">
                  <div className="flex flex-col items-center justify-center">
                    <Upload className="h-10 w-10 text-gray-400 mb-2" />
                    <p className="text-sm text-gray-600 mb-2">Drag and drop files here, or click to browse</p>
                    <Input
                      type="file"
                      className="hidden"
                      id="file-upload"
                      multiple
                      accept=".pdf,.doc,.docx,.html,.txt"
                    />
                    <Label
                      htmlFor="file-upload"
                      className="bg-[#3ABCB8] text-white px-4 py-2 rounded-md cursor-pointer hover:bg-opacity-90"
                    >
                      Browse Files
                    </Label>
                  </div>
                </div>

                {uploadComplete && (
                  <div className="bg-green-50 border border-green-200 rounded-md p-4 mb-6">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-green-500 mr-2" />
                      <p className="text-green-700">2 files uploaded successfully</p>
                    </div>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-between">
                <Link href="/">
                  <Button variant="outline">Cancel</Button>
                </Link>
                <Button
                  onClick={handleFileUpload}
                  disabled={isUploading}
                  style={{ backgroundColor: "#3ABCB8", borderColor: "#3ABCB8" }}
                >
                  {isUploading ? "Uploading..." : "Upload and Analyze"}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="links">
            <Card>
              <CardHeader>
                <CardTitle>Provide Documentation Links</CardTitle>
                <CardDescription>Enter links to online documentation describing your systems.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  {documentLinks.map((link, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <LinkIcon className="h-5 w-5 text-gray-400" />
                      <Input
                        type="url"
                        placeholder={`System ${index + 1} documentation URL`}
                        value={link}
                        onChange={(e) => updateLink(index, e.target.value)}
                      />
                    </div>
                  ))}

                  <Button
                    variant="outline"
                    onClick={() => setDocumentLinks([...documentLinks, ""])}
                    className="w-full border-dashed"
                  >
                    Add Another Link
                  </Button>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Link href="/">
                  <Button variant="outline">Cancel</Button>
                </Link>
                <Button onClick={handleLinkSubmit} style={{ backgroundColor: "#3ABCB8", borderColor: "#3ABCB8" }}>
                  Submit Links for Analysis
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
