"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Download, Copy, Check, Code, FileJson, Users, Key, AlertCircle, ArrowLeft, ArrowRight } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import Link from "next/link"

export default function PrototypePage() {
  const [copied, setCopied] = useState<string | null>(null)
  const { toast } = useToast()

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopied(id)
    toast({
      title: "Code copied",
      description: "The code has been copied to your clipboard.",
      variant: "success",
    })
    setTimeout(() => setCopied(null), 2000)
  }

  const handleDownload = () => {
    toast({
      title: "Download started",
      description: "Your code package is being prepared for download.",
      variant: "success",
    })
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">SCIM Integration Prototype</h1>
          <Button variant="outline" className="gap-2" onClick={handleDownload}>
            <Download size={16} /> Download All Code
          </Button>
        </div>

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
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/analysis">Analysis</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink>Prototype</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <div className="mb-6">
          <Link href="/analysis">
            <Button variant="ghost" size="sm" className="flex items-center">
              <ArrowLeft className="h-4 w-4 mr-1" /> Back to Analysis
            </Button>
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Analysis Results</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Users size={18} className="text-[#3ABCB8]" /> User & Group Attributes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  The following user and group attributes were identified in your systems:
                </p>
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-gray-50">
                      userName
                    </Badge>
                    <Badge variant="outline" className="bg-gray-50">
                      displayName
                    </Badge>
                    <Badge variant="outline" className="bg-gray-50">
                      emails
                    </Badge>
                    <Badge variant="outline" className="bg-gray-50">
                      active
                    </Badge>
                    <Badge variant="outline" className="bg-gray-50">
                      phoneNumbers
                    </Badge>
                    <Badge variant="outline" className="bg-gray-50">
                      groups
                    </Badge>
                    <Badge variant="outline" className="bg-gray-50">
                      roles
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <FileJson size={18} className="text-[#3ABCB8]" /> API Endpoints
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">The following API endpoints were identified:</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">GET</Badge>
                    <span className="font-mono">/api/v2/Users</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">POST</Badge>
                    <span className="font-mono">/api/v2/Users</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">PUT</Badge>
                    <span className="font-mono">/api/v2/Users/{"{id}"}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge className="bg-red-100 text-red-800 hover:bg-red-100">DELETE</Badge>
                    <span className="font-mono">/api/v2/Users/{"{id}"}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Key size={18} className="text-[#3ABCB8]" /> Authentication
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">Authentication mechanisms identified:</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>OAuth 2.0 Bearer Token</li>
                  <li>Basic Authentication</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Code size={18} className="text-[#3ABCB8]" /> SCIM Compatibility
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">SCIM compatibility assessment:</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>System 1: Partial SCIM 2.0 compatibility</li>
                  <li>System 2: No native SCIM support</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <Tabs defaultValue="code" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="code">Code Prototype</TabsTrigger>
            <TabsTrigger value="mapping">Attribute Mapping</TabsTrigger>
            <TabsTrigger value="implementation">Implementation Guide</TabsTrigger>
          </TabsList>

          <TabsContent value="code">
            <Card>
              <CardHeader>
                <CardTitle>SCIM Integration Code</CardTitle>
                <CardDescription>
                  A scalable and user-friendly implementation of basic SCIM operations between your systems.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      <div className="flex items-center gap-2">
                        <Code size={16} className="text-[#3ABCB8]" />
                        <span>SCIM Service Provider (Python)</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="relative">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute right-2 top-2"
                          onClick={() => copyToClipboard(scimServiceProviderCode, "provider")}
                        >
                          {copied === "provider" ? <Check size={16} /> : <Copy size={16} />}
                        </Button>
                        <pre className="bg-gray-50 p-4 rounded-md overflow-x-auto text-sm font-mono">
                          {scimServiceProviderCode}
                        </pre>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>
                      <div className="flex items-center gap-2">
                        <Code size={16} className="text-[#3ABCB8]" />
                        <span>User Resource Handler</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="relative">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute right-2 top-2"
                          onClick={() => copyToClipboard(userResourceHandlerCode, "user-handler")}
                        >
                          {copied === "user-handler" ? <Check size={16} /> : <Copy size={16} />}
                        </Button>
                        <pre className="bg-gray-50 p-4 rounded-md overflow-x-auto text-sm font-mono">
                          {userResourceHandlerCode}
                        </pre>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>
                      <div className="flex items-center gap-2">
                        <Code size={16} className="text-[#3ABCB8]" />
                        <span>SCIM Client Implementation</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="relative">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute right-2 top-2"
                          onClick={() => copyToClipboard(scimClientCode, "client")}
                        >
                          {copied === "client" ? <Check size={16} /> : <Copy size={16} />}
                        </Button>
                        <pre className="bg-gray-50 p-4 rounded-md overflow-x-auto text-sm font-mono">
                          {scimClientCode}
                        </pre>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger>
                      <div className="flex items-center gap-2">
                        <Code size={16} className="text-[#3ABCB8]" />
                        <span>Error Handling Utilities</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="relative">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute right-2 top-2"
                          onClick={() => copyToClipboard(errorHandlingCode, "error")}
                        >
                          {copied === "error" ? <Check size={16} /> : <Copy size={16} />}
                        </Button>
                        <pre className="bg-gray-50 p-4 rounded-md overflow-x-auto text-sm font-mono">
                          {errorHandlingCode}
                        </pre>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="mapping">
            <Card>
              <CardHeader>
                <CardTitle>Attribute Mapping</CardTitle>
                <CardDescription>Mapping between your systems' attributes and SCIM attributes.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border px-4 py-2 text-left">System 1 Attribute</th>
                        <th className="border px-4 py-2 text-left">System 2 Attribute</th>
                        <th className="border px-4 py-2 text-left">SCIM Attribute</th>
                        <th className="border px-4 py-2 text-left">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-4 py-2">user_name</td>
                        <td className="border px-4 py-2">username</td>
                        <td className="border px-4 py-2">userName</td>
                        <td className="border px-4 py-2">Primary identifier</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">full_name</td>
                        <td className="border px-4 py-2">display_name</td>
                        <td className="border px-4 py-2">displayName</td>
                        <td className="border px-4 py-2"></td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">email</td>
                        <td className="border px-4 py-2">email_address</td>
                        <td className="border px-4 py-2">emails[type=work].value</td>
                        <td className="border px-4 py-2">Primary email</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">is_active</td>
                        <td className="border px-4 py-2">status</td>
                        <td className="border px-4 py-2">active</td>
                        <td className="border px-4 py-2">Boolean conversion required</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">phone</td>
                        <td className="border px-4 py-2">contact_number</td>
                        <td className="border px-4 py-2">phoneNumbers[type=work].value</td>
                        <td className="border px-4 py-2"></td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">user_groups</td>
                        <td className="border px-4 py-2">group_memberships</td>
                        <td className="border px-4 py-2">groups</td>
                        <td className="border px-4 py-2">Array conversion required</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">user_role</td>
                        <td className="border px-4 py-2">permissions</td>
                        <td className="border px-4 py-2">roles</td>
                        <td className="border px-4 py-2">Custom mapping required</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="implementation">
            <Card>
              <CardHeader>
                <CardTitle>Implementation Guide</CardTitle>
                <CardDescription>Step-by-step instructions for implementing the SCIM integration.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">1. Setup Authentication</h3>
                    <p className="text-gray-600 mb-3">
                      Configure OAuth 2.0 or Basic Authentication for secure communication between systems.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <pre className="text-sm font-mono overflow-x-auto">
                        {`# Example OAuth 2.0 Configuration
AUTH_CONFIG = {
    "token_url": "https://system1.example.com/oauth/token",
    "client_id": "your_client_id",
    "client_secret": "your_client_secret",
    "scope": "scim:read scim:write"
}`}
                      </pre>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">2. Deploy SCIM Service Provider</h3>
                    <p className="text-gray-600 mb-3">
                      Deploy the SCIM Service Provider code to handle incoming SCIM requests.
                    </p>
                    <ol className="list-decimal list-inside space-y-2 text-gray-600">
                      <li>Install required dependencies (Flask, SQLAlchemy)</li>
                      <li>Configure database connection</li>
                      <li>Deploy the service on a secure endpoint</li>
                      <li>Configure HTTPS and proper security headers</li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">3. Implement Client Integration</h3>
                    <p className="text-gray-600 mb-3">Integrate the SCIM client code with your existing systems.</p>
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <AlertCircle className="h-5 w-5 text-yellow-400" />
                        </div>
                        <div className="ml-3">
                          <p className="text-sm text-yellow-700">
                            Ensure proper error handling and retry logic for production environments.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">4. Test the Integration</h3>
                    <p className="text-gray-600 mb-3">
                      Thoroughly test the integration with sample data before deploying to production.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Test user creation</li>
                      <li>Test user retrieval</li>
                      <li>Test user updates</li>
                      <li>Test user deactivation/deletion</li>
                      <li>Test error scenarios and recovery</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">5. Monitor and Maintain</h3>
                    <p className="text-gray-600 mb-3">
                      Set up monitoring and maintenance procedures for the integration.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Implement logging for all SCIM operations</li>
                      <li>Set up alerts for failed operations</li>
                      <li>Create a maintenance schedule for updates</li>
                      <li>Document the integration for future reference</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <div className="w-full flex justify-end">
                  <Link href="/connector-dashboard">
                    <Button style={{ backgroundColor: "#3ABCB8", borderColor: "#3ABCB8" }} className="gap-2">
                      Deploy Integration <ArrowRight size={16} />
                    </Button>
                  </Link>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}

// Sample code snippets
const scimServiceProviderCode = `from flask import Flask, request, jsonify
import json
from werkzeug.exceptions import BadRequest, NotFound
from datetime import datetime

app = Flask(__name__)

# In-memory storage for demo purposes
# In production, use a proper database
users = {}
groups = {}

# SCIM Service Provider Configuration
@app.route('/ServiceProviderConfig', methods=['GET'])
def service_provider_config():
    return jsonify({
        "schemas": ["urn:ietf:params:scim:schemas:core:2.0:ServiceProviderConfig"],
        "documentationUri": "https://example.com/scim/docs",
        "patch": {
            "supported": True
        },
        "bulk": {
            "supported": True,
            "maxOperations": 1000,
            "maxPayloadSize": 1048576
        },
        "filter": {
            "supported": True,
            "maxResults": 200
        },
        "changePassword": {
            "supported": True
        },
        "sort": {
            "supported": True
        },
        "etag": {
            "supported": True
        },
        "authenticationSchemes": [
            {
                "name": "OAuth Bearer Token",
                "description": "Authentication scheme using the OAuth Bearer Token Standard",
                "specUri": "http://www.rfc-editor.org/info/rfc6750",
                "type": "oauthbearertoken",
                "primary": True
            }
        ]
    })

# User endpoints
@app.route('/Users', methods=['GET'])
def get_users():
    # Implement filtering, sorting, pagination
    start_index = int(request.args.get('startIndex', 1))
    count = int(request.args.get('count', 100))
    
    user_list = list(users.values())
    total_results = len(user_list)
    
    return jsonify({
        "schemas": ["urn:ietf:params:scim:api:messages:2.0:ListResponse"],
        "totalResults": total_results,
        "startIndex": start_index,
        "itemsPerPage": count,
        "Resources": user_list[start_index-1:start_index-1+count]
    })

@app.route('/Users', methods=['POST'])
def create_user():
    if not request.is_json:
        raise BadRequest("Content-Type must be application/json")
    
    user_data = request.get_json()
    
    # Validate required attributes
    if 'userName' not in user_data:
        raise BadRequest("userName is required")
    
    # Check if user already exists
    if any(u['userName'] == user_data['userName'] for u in users.values()):
        raise BadRequest(f"User with userName {user_data['userName']} already exists")
    
    # Generate a unique ID
    user_id = str(len(users) + 1)
    
    # Add metadata
    now = datetime.utcnow().isoformat() + "Z"
    user_data.update({
        "id": user_id,
        "meta": {
            "resourceType": "User",
            "created": now,
            "lastModified": now,
            "location": f"/Users/{user_id}"
        }
    })
    
    # Store the user
    users[user_id] = user_data
    
    return jsonify(user_data), 201

@app.route('/Users/<user_id>', methods=['GET'])
def get_user(user_id):
    if user_id not in users:
        raise NotFound(f"User {user_id} not found")
    
    return jsonify(users[user_id])

@app.route('/Users/<user_id>', methods=['PUT'])
def update_user(user_id):
    if user_id not in users:
        raise NotFound(f"User {user_id} not found")
    
    if not request.is_json:
        raise BadRequest("Content-Type must be application/json")
    
    user_data = request.get_json()
    
    # Ensure ID cannot be changed
    user_data['id'] = user_id
    
    # Update metadata
    now = datetime.utcnow().isoformat() + "Z"
    user_data['meta'] = users[user_id].get('meta', {})
    user_data['meta']['lastModified'] = now
    
    # Store the updated user
    users[user_id] = user_data
    
    return jsonify(user_data)

@app.route('/Users/<user_id>', methods=['DELETE'])
def delete_user(user_id):
    if user_id not in users:
        raise NotFound(f"User {user_id} not found")
    
    del users[user_id]
    
    return '', 204

# Error handling
@app.errorhandler(BadRequest)
def handle_bad_request(error):
    response = jsonify({
        "schemas": ["urn:ietf:params:scim:api:messages:2.0:Error"],
        "status": "400",
        "scimType": "invalidValue",
        "detail": str(error)
    })
    response.status_code = 400
    return response

@app.errorhandler(NotFound)
def handle_not_found(error):
    response = jsonify({
        "schemas": ["urn:ietf:params:scim:api:messages:2.0:Error"],
        "status": "404",
        "detail": str(error)
    })
    response.status_code = 404
    return response

if __name__ == '__main__':
    app.run(debug=True)`

const userResourceHandlerCode = `class UserResourceHandler:
    """
    Handles SCIM User resource operations by mapping between
    SCIM attributes and system-specific attributes.
    """
    
    def __init__(self, system_client):
        """
        Initialize with a client for the target system.
        
        Args:
            system_client: Client for interacting with the target system's API
        """
        self.system_client = system_client
        
    def scim_to_system_user(self, scim_user):
        """
        Convert a SCIM user to the target system's user format.
        
        Args:
            scim_user: User in SCIM format
            
        Returns:
            User in target system format
        """
        # Extract primary email if available
        emails = scim_user.get('emails', [])
        primary_email = next((e['value'] for e in emails if e.get('primary')), 
                            next((e['value'] for e in emails), None))
        
        # Extract phone if available
        phones = scim_user.get('phoneNumbers', [])
        work_phone = next((p['value'] for p in phones if p.get('type') == 'work'), 
                         next((p['value'] for p in phones), None))
        
        # Map to system-specific format
        system_user = {
            'user_name': scim_user.get('userName'),
            'full_name': scim_user.get('displayName'),
            'email': primary_email,
            'is_active': scim_user.get('active', True),
            'phone': work_phone,
            # Map groups if available
            'user_groups': [g['value'] for g in scim_user.get('groups', [])] if 'groups' in scim_user else []
        }
        
        # Handle custom attributes if present
        if 'urn:ietf:params:scim:schemas:extension:enterprise:2.0:User' in scim_user:
            enterprise = scim_user['urn:ietf:params:scim:schemas:extension:enterprise:2.0:User']
            system_user['department'] = enterprise.get('department')
            system_user['employee_number'] = enterprise.get('employeeNumber')
            
        return system_user
    
    def system_to_scim_user(self, system_user, scim_id=None):
        """
        Convert a system user to SCIM format.
        
        Args:
            system_user: User in target system format
            scim_id: Optional SCIM ID to include
            
        Returns:
            User in SCIM format
        """
        # Create base SCIM user
        scim_user = {
            "schemas": ["urn:ietf:params:scim:schemas:core:2.0:User"],
            "userName": system_user.get('user_name'),
            "displayName": system_user.get('full_name'),
            "active": system_user.get('is_active', True)
        }
        
        # Add ID if provided
        if scim_id:
            scim_user['id'] = scim_id
            
        # Add email if available
        if system_user.get('email'):
            scim_user['emails'] = [
                {
                    "value": system_user['email'],
                    "type": "work",
                    "primary": True
                }
            ]
            
        # Add phone if available
        if system_user.get('phone'):
            scim_user['phoneNumbers'] = [
                {
                    "value": system_user['phone'],
                    "type": "work"
                }
            ]
            
        # Add groups if available
        if system_user.get('user_groups'):
            scim_user['groups'] = [
                {"value": group} for group in system_user['user_groups']
            ]
            
        # Add enterprise extension if needed
        enterprise_attrs = {}
        if system_user.get('department'):
            enterprise_attrs['department'] = system_user['department']
        if system_user.get('employee_number'):
            enterprise_attrs['employeeNumber'] = system_user['employee_number']
            
        if enterprise_attrs:
            scim_user["urn:ietf:params:scim:schemas:extension:enterprise:2.0:User"] = enterprise_attrs
            scim_user["schemas"].append("urn:ietf:params:scim:schemas:extension:enterprise:2.0:User")
            
        return scim_user
    
    async def create_user(self, scim_user):
        """
        Create a user in the target system from SCIM data.
        
        Args:
            scim_user: User in SCIM format
            
        Returns:
            Created user in SCIM format with ID
        """
        # Convert to system format
        system_user = self.scim_to_system_user(scim_user)
        
        # Create in target system
        created_user = await self.system_client.create_user(system_user)
        
        # Convert back to SCIM with the new ID
        return self.system_to_scim_user(created_user, created_user.get('id'))
    
    async def get_user(self, user_id):
        """
        Get a user from the target system by ID.
        
        Args:
            user_id: User ID in the target system
            
        Returns:
            User in SCIM format
        """
        # Get from target system
        system_user = await self.system_client.get_user(user_id)
        
        # Convert to SCIM
        return self.system_to_scim_user(system_user, user_id)
    
    async def update_user(self, user_id, scim_user):
        """
        Update a user in the target system.
        
        Args:
            user_id: User ID in the target system
            scim_user: Updated user in SCIM format
            
        Returns:
            Updated user in SCIM format
        """
        # Convert to system format
        system_user = self.scim_to_system_user(scim_user)
        
        # Update in target system
        updated_user = await self.system_client.update_user(user_id, system_user)
        
        # Convert back to SCIM
        return self.system_to_scim_user(updated_user, user_id)
    
    async def delete_user(self, user_id):
        """
        Delete a user from the target system.
        
        Args:
            user_id: User ID in the target system
        """
        await self.system_client.delete_user(user_id)
        
    async def list_users(self, start_index=1, count=100, filter_str=None):
        """
        List users from the target system with pagination and filtering.
        
        Args:
            start_index: Start index for pagination (1-based)
            count: Maximum number of results to return
            filter_str: SCIM filter string
            
        Returns:
            List of users in SCIM format and total count
        """
        # Convert SCIM filter to system-specific filter if needed
        system_filter = self._convert_filter(filter_str) if filter_str else None
        
        # Get users from target system
        system_users, total = await self.system_client.list_users(
            start_index - 1,  # Convert to 0-based for most APIs
            count,
            system_filter
        )
        
        # Convert to SCIM
        scim_users = [
            self.system_to_scim_user(user, user.get('id'))
            for user in system_users
        ]
        
        return scim_users, total
    
    def _convert_filter(self, scim_filter):
        """
        Convert SCIM filter to system-specific filter.
        This is a simplified example and would need to be expanded
        for production use.
        
        Args:
            scim_filter: SCIM filter string
            
        Returns:
            System-specific filter
        """
        # This is a very simplified example
        # In a real implementation, you would parse the SCIM filter
        # and convert it to the target system's query format
        
        if 'userName eq' in scim_filter:
            # Extract username from filter like 'userName eq "john"'
            import re
            match = re.search(r'userName eq "([^"]+)"', scim_filter)
            if match:
                return {'user_name': match.group(1)}
                
        if 'email eq' in scim_filter or 'emails.value eq' in scim_filter:
            # Extract email from filter
            import re
            match = re.search(r'emails?.value eq "([^"]+)"', scim_filter)
            if match:
                return {'email': match.group(1)}
                
        # Default: return None if we can't parse the filter
        return None`

const scimClientCode = `import aiohttp
import json
import logging
from typing import Dict, List, Tuple, Optional, Any

logger = logging.getLogger(__name__)

class SCIMClient:
    """
    SCIM Client for interacting with a SCIM 2.0 service provider.
    """
    
    def __init__(self, base_url: str, token: str = None, auth: Tuple[str, str] = None):
        """
        Initialize the SCIM client.
        
        Args:
            base_url: Base URL of the SCIM service
            token: OAuth bearer token (if using token auth)
            auth: Tuple of (username, password) for basic auth
        """
        self.base_url = base_url.rstrip('/')
        self.token = token
        self.auth = auth
        
    async def _request(self, method: str, path: str, data: Dict = None) -> Dict:
        """
        Make an HTTP request to the SCIM service.
        
        Args:
            method: HTTP method (GET, POST, PUT, DELETE)
            path: Path to append to base URL
            data: Optional data to send (for POST/PUT)
            
        Returns:
            Response data as dictionary
        """
        url = f"{self.base_url}/{path.lstrip('/')}"
        headers = {
            'Content-Type': 'application/scim+json',
            'Accept': 'application/scim+json'
        }
        
        if self.token:
            headers['Authorization'] = f"Bearer {self.token}"
            
        async with aiohttp.ClientSession() as session:
            kwargs = {
                'headers': headers
            }
            
            if self.auth:
                kwargs['auth'] = aiohttp.BasicAuth(self.auth[0], self.auth[1])
                
            if data:
                kwargs['json'] = data
                
            try:
                async with session.request(method, url, **kwargs) as response:
                    if response.status == 204:  # No content
                        return {}
                        
                    response_data = await response.json()
                    
                    if not response.ok:
                        error_msg = response_data.get('detail', 'Unknown error')
                        logger.error(f"SCIM error: {error_msg} (Status: {response.status})")
                        raise SCIMError(error_msg, response.status, response_data)
                        
                    return response_data
            except aiohttp.ClientError as e:
                logger.error(f"HTTP error: {str(e)}")
                raise SCIMError(f"Connection error: {str(e)}", 0)
    
    async def get_service_provider_config(self) -> Dict:
        """
        Get the Service Provider Configuration.
        
        Returns:
            Service Provider Configuration
        """
        return await self._request('GET', '/ServiceProviderConfig')
    
    async def create_user(self, user_data: Dict) -> Dict:
        """
        Create a new user.
        
        Args:
            user_data: User data in SCIM format
            
        Returns:
            Created user data
        """
        return await self._request('POST', '/Users', user_data)
    
    async def get_user(self, user_id: str) -> Dict:
        """
        Get a user by ID.
        
        Args:
            user_id: User ID
            
        Returns:
            User data
        """
        return await self._request('GET', f'/Users/{user_id}')
    
    async def update_user(self, user_id: str, user_data: Dict) -> Dict:
        """
        Update a user.
        
        Args:
            user_id: User ID
            user_data: Updated user data
            
        Returns:
            Updated user data
        """
        return await self._request('PUT', f'/Users/{user_id}', user_data)
    
    async def delete_user(self, user_id: str) -> None:
        """
        Delete a user.
        
        Args:
            user_id: User ID
        """
        await self._request('DELETE', f'/Users/{user_id}')
    
    async def list_users(self, start_index: int = 1, count: int = 100, 
                         filter_str: str = None) -> Tuple[List[Dict], int]:
        """
        List users with pagination and optional filtering.
        
        Args:
            start_index: Start index for pagination (1-based)
            count: Maximum number of results
            filter_str: Optional SCIM filter string
            
        Returns:
            Tuple of (list of users, total results count)
        """
        params = [
            f"startIndex={start_index}",
            f"count={count}"
        ]
        
        if filter_str:
            # URL encode the filter
            from urllib.parse import quote
            params.append(f"filter={quote(filter_str)}")
            
        query = '&'.join(params)
        response = await self._request('GET', f'/Users?{query}')
        
        resources = response.get('Resources', [])
        total = response.get('totalResults', len(resources))
        
        return resources, total
    
    async def create_group(self, group_data: Dict) -> Dict:
        """
        Create a new group.
        
        Args:
            group_data: Group data in SCIM format
            
        Returns:
            Created group data
        """
        return await self._request('POST', '/Groups', group_data)
    
    async def get_group(self, group_id: str) -> Dict:
        """
        Get a group by ID.
        
        Args:
            group_id: Group ID
            
        Returns:
            Group data
        """
        return await self._request('GET', f'/Groups/{group_id}')
    
    async def update_group(self, group_id: str, group_data: Dict) -> Dict:
        """
        Update a group.
        
        Args:
            group_id: Group ID
            group_data: Updated group data
            
        Returns:
            Updated group data
        """
        return await self._request('PUT', f'/Groups/{group_id}', group_data)
    
    async def delete_group(self, group_id: str) -> None:
        """
        Delete a group.
        
        Args:
            group_id: Group ID
        """
        await self._request('DELETE', f'/Groups/{group_id}')
    
    async def list_groups(self, start_index: int = 1, count: int = 100, 
                          filter_str: str = None) -> Tuple[List[Dict], int]:
        """
        List groups with pagination and optional filtering.
        
        Args:
            start_index: Start index for pagination (1-based)
            count: Maximum number of results
            filter_str: Optional SCIM filter string
            
        Returns:
            Tuple of (list of groups, total results count)
        """
        params = [
            f"startIndex={start_index}",
            f"count={count}"
        ]
        
        if filter_str:
            from urllib.parse import quote
            params.append(f"filter={quote(filter_str)}")
            
        query = '&'.join(params)
        response = await self._request('GET', f'/Groups?{query}')
        
        resources = response.get('Resources', [])
        total = response.get('totalResults', len(resources))
        
        return resources, total

class SCIMError(Exception):
    """
    Exception raised for SCIM errors.
    """
    
    def __init__(self, message: str, status_code: int, details: Dict = None):
        """
        Initialize the exception.
        
        Args:
            message: Error message
            status_code: HTTP status code
            details: Optional error details
        """
        self.message = message
        self.status_code = status_code
        self.details = details or {}
        super().__init__(self.message)

# Example usage
async def example_usage():
    # Initialize client with OAuth token
    client = SCIMClient(
        base_url="https://scim.example.com/v2",
        token="your_oauth_token"
    )
    
    # Create a new user
    new_user = {
        "schemas": ["urn:ietf:params:scim:schemas:core:2.0:User"],
        "userName": "jdoe",
        "displayName": "John Doe",
        "emails": [
            {
                "value": "jdoe@example.com",
                "type": "work",
                "primary": True
            }
        ],
        "active": True
    }
    
    try:
        created_user = await client.create_user(new_user)
        print(f"Created user with ID: {created_user['id']}")
        
        # Get the user
        user = await client.get_user(created_user['id'])
        print(f"Retrieved user: {user['displayName']}")
        
        # Update the user
        user['displayName'] = "Jonathan Doe"
        updated_user = await client.update_user(user['id'], user)
        print(f"Updated user: {updated_user['displayName']}")
        
        # List users
        users, total = await client.list_users(filter_str='userName eq "jdoe"')
        print(f"Found {total} users matching filter")
        
        # Delete the user
        await client.delete_user(user['id'])
        print(f"Deleted user with ID: {user['id']}")
        
    except SCIMError as e:
        print(f"SCIM error: {e.message} (Status: {e.status_code})")
        if e.details:
            print(f"Details: {json.dumps(e.details, indent=2)}")`

const errorHandlingCode = `import logging
import time
from typing import Callable, Any, Dict, Optional
import json

logger = logging.getLogger(__name__)

class SCIMErrorHandler:
    """
    Error handling utilities for SCIM operations.
    """
    
    def __init__(self, max_retries: int = 3, retry_delay: float = 1.0):
        """
        Initialize the error handler.
        
        Args:
            max_retries: Maximum number of retry attempts
            retry_delay: Base delay between retries (in seconds)
        """
        self.max_retries = max_retries
        self.retry_delay = retry_delay
        
    async def with_retry(self, operation: Callable, *args, **kwargs) -> Any:
        """
        Execute an operation with retry logic.
        
        Args:
            operation: Async function to execute
            *args: Arguments to pass to the operation
            **kwargs: Keyword arguments to pass to the operation
            
        Returns:
            Result of the operation
            
        Raises:
            SCIMError: If all retry attempts fail
        """
        last_error = None
        
        for attempt in range(1, self.max_retries + 1):
            try:
                return await operation(*args, **kwargs)
            except SCIMError as e:
                last_error = e
                
                # Don't retry for certain status codes
                if e.status_code in (400, 401, 403, 404, 409):
                    logger.warning(
                        f"Non-retriable error (status {e.status_code}): {e.message}"
                    )
                    raise
                
                # For other errors, retry with exponential backoff
                if attempt < self.max_retries:
                    delay = self.retry_delay * (2 ** (attempt - 1))
                    logger.warning(
                        f"Attempt {attempt} failed with error: {e.message}. "
                        f"Retrying in {delay:.2f} seconds..."
                    )
                    await asyncio.sleep(delay)
                else:
                    logger.error(
                        f"All {self.max_retries} retry attempts failed. "
                        f"Last error: {e.message}"
                    )
                    raise
        
        # This should never happen, but just in case
        raise last_error if last_error else RuntimeError("Retry logic failed")
    
    def log_error(self, error: Exception, context: Dict[str, Any] = None) -> None:
        """
        Log an error with context information.
        
        Args:
            error: The exception that occurred
            context: Additional context information
        """
        error_type = type(error).__name__
        error_msg = str(error)
        
        log_data = {
            "error_type": error_type,
            "error_message": error_msg,
            "timestamp": time.time()
        }
        
        if context:
            log_data["context"] = context
            
        if isinstance(error, SCIMError):
            log_data["status_code"] = error.status_code
            log_data["details"] = error.details
            
        logger.error(f"SCIM error: {json.dumps(log_data, indent=2)}")
        
    def format_error_response(self, error: SCIMError) -> Dict[str, Any]:
        """
        Format an error as a SCIM-compliant error response.
        
        Args:
            error: The SCIM error
            
        Returns:
            SCIM error response dictionary
        """
        response = {
            "schemas": ["urn:ietf:params:scim:api:messages:2.0:Error"],
            "status": str(error.status_code),
            "detail": error.message
        }
        
        # Add scimType for 400 errors if available
        if error.status_code == 400 and "scimType" in error.details:
            response["scimType"] = error.details["scimType"]
            
        return response
        
class SCIMError(Exception):
    """
    Exception raised for SCIM errors.
    """
    
    def __init__(self, message: str, status_code: int, details: Optional[Dict[str, Any]] = None):
        """
        Initialize the exception.
        
        Args:
            message: Error message
            status_code: HTTP status code
            details: Optional error details
        """
        self.message = message
        self.status_code = status_code
        self.details = details or {}
        super().__init__(self.message)
        
    @classmethod
    def invalid_value(cls, message: str, attribute: str = None) -> 'SCIMError':
        """
        Create an invalid value error.
        
        Args:
            message: Error message
            attribute: Optional attribute name
            
        Returns:
            SCIMError instance
        """
        details = {
            "scimType": "invalidValue"
        }
        
        if attribute:
            details["attribute"] = attribute
            
        return cls(message, 400, details)
        
    @classmethod
    def invalid_filter(cls, message: str) -> 'SCIMError':
        """
        Create an invalid filter error.
        
        Args:
            message: Error message
            
        Returns:
            SCIMError instance
        """
        return cls(message, 400, {"scimType": "invalidFilter"})
        
    @classmethod
    def resource_not_found(cls, resource_type: str, resource_id: str) -> 'SCIMError':
        """
        Create a resource not found error.
        
        Args:
            resource_type: Type of resource (User, Group, etc.)
            resource_id: ID of the resource
            
        Returns:
            SCIMError instance
        """
        message = f"{resource_type} with id {resource_id} not found"
        return cls(message, 404)
        
    @classmethod
    def conflict(cls, message: str) -> 'SCIMError':
        """
        Create a conflict error.
        
        Args:
            message: Error message
            
        Returns:
            SCIMError instance
        """
        return cls(message, 409)
        
# Example usage
import asyncio

async def example_usage():
    error_handler = SCIMErrorHandler(max_retries=3, retry_delay=1.0)
    
    async def create_user(client, user_data):
        # Example operation that might fail
        return await client.create_user(user_data)
    
    try:
        # Use with retry for operations that might fail temporarily
        client = SCIMClient("https://example.com/scim/v2", token="your_token")
        user_data = {
            "schemas": ["urn:ietf:params:scim:schemas:core:2.0:User"],
            "userName": "jdoe",
            "displayName": "John Doe"
        }
        
        result = await error_handler.with_retry(create_user, client, user_data)
        print(f"User created successfully: {result['id']}")
        
    except SCIMError as e:
        # Log the error with context
        error_handler.log_error(e, {
            "operation": "create_user",
            "user_data": user_data
        })
        
        # Format as SCIM error response
        error_response = error_handler.format_error_response(e)
        print(f"Error response: {json.dumps(error_response, indent=2)}")`
