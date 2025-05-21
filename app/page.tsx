"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Check, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb"

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const { toast } = useToast()

  const handleSearch = () => {
    if (searchQuery.trim()) {
      toast({
        title: "Search complete",
        description: "No connectors found matching your search criteria.",
        variant: "default",
      })
    }
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">SCIM Integration Builder</h1>

        <Breadcrumb className="mb-6">
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink>Home</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        {/* Search Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Search for SCIM connectors</CardTitle>
            <CardDescription>
              Search our catalog for existing SCIM connectors that match your requirements
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  type="text"
                  placeholder="Search for a SCIM connector..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />
              </div>
              <Button onClick={handleSearch}>Search</Button>
            </div>
          </CardContent>
        </Card>

        {/* Pre-built Connectors Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Pre-built SCIM Connectors</CardTitle>
            <CardDescription>
              Choose from our selection of pre-built connectors for popular identity providers
            </CardDescription>
          </CardHeader>
          <CardContent>
            <PrebuiltConnectors />

            <div className="bg-gray-50 rounded-md p-4 mt-6">
              <p className="text-gray-600 mb-2">No additional SCIM connectors found for your requirements.</p>
              <p className="text-gray-600">Would you like to proceed with AI-driven custom connector creation?</p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Link href="/upload">
              <Button style={{ backgroundColor: "#3ABCB8", borderColor: "#3ABCB8" }}>
                Create Custom Connector with AI
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How it works</CardTitle>
            <CardDescription>Learn about our AI-driven SCIM integration process</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#3ABCB8] text-white flex items-center justify-center font-medium">
                  1
                </div>
                <div>
                  <h3 className="font-medium">Documentation Input</h3>
                  <p className="text-gray-600">
                    Upload mock documents or provide links to online documentation describing your systems' user/group
                    management capabilities.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#3ABCB8] text-white flex items-center justify-center font-medium">
                  2
                </div>
                <div>
                  <h3 className="font-medium">AI Analysis</h3>
                  <p className="text-gray-600">
                    Our AI analyzes the documentation to extract key elements relevant to SCIM integration, including
                    user attributes, API endpoints, and authentication mechanisms.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#3ABCB8] text-white flex items-center justify-center font-medium">
                  3
                </div>
                <div>
                  <h3 className="font-medium">Code-Ready Prototype</h3>
                  <p className="text-gray-600">
                    Based on the analysis, we generate a scalable and user-friendly code prototype demonstrating basic
                    SCIM operations between your systems.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

function PrebuiltConnectors() {
  const [selectedConnector, setSelectedConnector] = useState<string | null>(null)
  const [verificationStep, setVerificationStep] = useState(false)
  const [verificationComplete, setVerificationComplete] = useState(false)
  const { toast } = useToast()

  const handleConnectorSelect = (id: string) => {
    setSelectedConnector(id)
    setVerificationStep(true)
    setVerificationComplete(false)
    toast({
      title: "Connector selected",
      description: "Please verify the configuration details before activation.",
      variant: "default",
    })
  }

  const handleVerify = () => {
    setVerificationComplete(true)
    toast({
      title: "Verification successful",
      description: "The connector has been verified and is ready for activation.",
      variant: "success",
    })
  }

  const prebuiltConnectors = [
    {
      id: "okta-scim",
      name: "Okta SCIM Connector",
      description: "Pre-built connector for Okta identity management",
      compatibility: "High",
    },
    {
      id: "azure-ad-scim",
      name: "Azure AD SCIM Connector",
      description: "Pre-built connector for Microsoft Azure Active Directory",
      compatibility: "Medium",
    },
    {
      id: "onelogin-scim",
      name: "OneLogin SCIM Connector",
      description: "Pre-built connector for OneLogin identity management",
      compatibility: "High",
    },
  ]

  if (verificationStep && selectedConnector) {
    const connector = prebuiltConnectors.find((c) => c.id === selectedConnector)

    return (
      <div>
        <div className="flex items-center mb-4">
          <Button variant="ghost" size="sm" onClick={() => setVerificationStep(false)} className="mr-2">
            <ArrowLeft className="h-4 w-4 mr-1" /> Back to Connectors
          </Button>
          <h3 className="text-lg font-medium">Verify Connector Configuration</h3>
        </div>

        <Card className="mb-4">
          <CardHeader className="pb-2">
            <CardTitle>{connector?.name}</CardTitle>
            <CardDescription>Please verify the following configuration details before activation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-sm mb-1">Authentication Method</h4>
                <RadioGroup defaultValue="oauth2" className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="oauth2" id="oauth2" />
                    <Label htmlFor="oauth2">OAuth 2.0</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="basic" id="basic" />
                    <Label htmlFor="basic">Basic Authentication</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <h4 className="font-medium text-sm mb-1">User Attribute Mapping</h4>
                <div className="bg-gray-50 p-3 rounded-md text-sm">
                  <div className="grid grid-cols-2 gap-2">
                    <div>userName</div>
                    <div>→ user_name</div>
                    <div>displayName</div>
                    <div>→ full_name</div>
                    <div>emails[type=work].value</div>
                    <div>→ email</div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-sm mb-1">Endpoint Configuration</h4>
                <Input
                  type="text"
                  placeholder="https://api.example.com/scim/v2"
                  defaultValue="https://api.example.com/scim/v2"
                  className="mb-2"
                />
                <div className="text-xs text-gray-500">This is the base URL for all SCIM API requests</div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end space-x-2">
            <Button variant="outline" onClick={() => setVerificationStep(false)}>
              Cancel
            </Button>
            <Button style={{ backgroundColor: "#3ABCB8", borderColor: "#3ABCB8" }} onClick={handleVerify}>
              Verify Configuration
            </Button>
          </CardFooter>
        </Card>

        {verificationComplete && (
          <div className="bg-green-50 border border-green-200 rounded-md p-4 mb-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <Check className="h-5 w-5 text-green-500" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-green-800">Verification Complete</h3>
                <div className="mt-2 text-sm text-green-700">
                  <p>The connector has been verified and is ready for activation.</p>
                </div>
                <div className="mt-4">
                  <Link href="/connector-dashboard">
                    <Button size="sm" style={{ backgroundColor: "#3ABCB8", borderColor: "#3ABCB8" }}>
                      Activate Connector
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {prebuiltConnectors.map((connector) => (
        <Card key={connector.id} className="cursor-pointer hover:border-[#3ABCB8] transition-colors">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">{connector.name}</CardTitle>
          </CardHeader>
          <CardContent className="pb-2">
            <p className="text-sm text-gray-600">{connector.description}</p>
            <div className="mt-2 flex items-center">
              <span className="text-xs mr-2">Compatibility:</span>
              <span
                className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                  connector.compatibility === "High" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {connector.compatibility}
              </span>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full" onClick={() => handleConnectorSelect(connector.id)}>
              Select & Verify
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
