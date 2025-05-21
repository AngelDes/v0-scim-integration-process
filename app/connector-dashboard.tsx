"use client"

import { Label } from "@/components/ui/label"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Settings, Users, RefreshCw, AlertTriangle } from "lucide-react"

export default function ConnectorDashboard() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">SCIM Connector Dashboard</h1>
            <p className="text-gray-500">Manage and monitor your active SCIM connector</p>
          </div>
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Users Synced</CardTitle>
              <CardDescription>Total users synchronized</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">247</div>
              <p className="text-sm text-green-600 flex items-center mt-1">
                <CheckCircle className="h-4 w-4 mr-1" /> All users in sync
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Groups Synced</CardTitle>
              <CardDescription>Total groups synchronized</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">18</div>
              <p className="text-sm text-green-600 flex items-center mt-1">
                <CheckCircle className="h-4 w-4 mr-1" /> All groups in sync
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Last Sync</CardTitle>
              <CardDescription>Most recent synchronization</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-xl font-medium">10 minutes ago</div>
              <Button variant="outline" size="sm" className="mt-2 flex items-center gap-1">
                <RefreshCw className="h-4 w-4" /> Sync Now
              </Button>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="groups">Groups</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>Connector Overview</CardTitle>
                <CardDescription>Okta SCIM Connector status and information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Connection Status</h3>
                    <div className="bg-green-50 border border-green-200 rounded-md p-4">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        </div>
                        <div className="ml-3">
                          <h3 className="text-sm font-medium text-green-800">Connected</h3>
                          <div className="mt-2 text-sm text-green-700">
                            <p>The connector is successfully connected to your identity provider.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">Recent Activity</h3>
                    <div className="space-y-3">
                      <div className="bg-gray-50 p-3 rounded-md">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <Users className="h-4 w-4 text-gray-500 mr-2" />
                            <span className="text-sm">User created: john.doe@example.com</span>
                          </div>
                          <span className="text-xs text-gray-500">5 minutes ago</span>
                        </div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-md">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <Users className="h-4 w-4 text-gray-500 mr-2" />
                            <span className="text-sm">User updated: sarah.smith@example.com</span>
                          </div>
                          <span className="text-xs text-gray-500">15 minutes ago</span>
                        </div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-md">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <Settings className="h-4 w-4 text-gray-500 mr-2" />
                            <span className="text-sm">Connector configuration updated</span>
                          </div>
                          <span className="text-xs text-gray-500">1 hour ago</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">Alerts</h3>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <AlertTriangle className="h-5 w-5 text-yellow-500" />
                        </div>
                        <div className="ml-3">
                          <h3 className="text-sm font-medium text-yellow-800">Token Expiration</h3>
                          <div className="mt-2 text-sm text-yellow-700">
                            <p>Your OAuth token will expire in 15 days. Please renew it before expiration.</p>
                          </div>
                          <div className="mt-4">
                            <Button size="sm" variant="outline">
                              Renew Token
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>Manage synchronized users</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Input placeholder="Search users..." className="w-[300px]" />
                        <Button variant="outline" size="sm">
                          Search
                        </Button>
                      </div>
                      <Button size="sm" style={{ backgroundColor: "#3ABCB8", borderColor: "#3ABCB8" }}>
                        Sync Users
                      </Button>
                    </div>
                  </div>
                  <div className="relative w-full overflow-auto">
                    <table className="w-full caption-bottom text-sm">
                      <thead className="bg-gray-50">
                        <tr className="border-b">
                          <th className="h-12 px-4 text-left align-middle font-medium">Name</th>
                          <th className="h-12 px-4 text-left align-middle font-medium">Email</th>
                          <th className="h-12 px-4 text-left align-middle font-medium">Status</th>
                          <th className="h-12 px-4 text-left align-middle font-medium">Last Updated</th>
                          <th className="h-12 px-4 text-left align-middle font-medium">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="p-4 align-middle">John Doe</td>
                          <td className="p-4 align-middle">john.doe@example.com</td>
                          <td className="p-4 align-middle">
                            <Badge className="bg-green-100 text-green-800">Active</Badge>
                          </td>
                          <td className="p-4 align-middle">5 minutes ago</td>
                          <td className="p-4 align-middle">
                            <Button variant="ghost" size="sm">
                              View
                            </Button>
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-4 align-middle">Sarah Smith</td>
                          <td className="p-4 align-middle">sarah.smith@example.com</td>
                          <td className="p-4 align-middle">
                            <Badge className="bg-green-100 text-green-800">Active</Badge>
                          </td>
                          <td className="p-4 align-middle">15 minutes ago</td>
                          <td className="p-4 align-middle">
                            <Button variant="ghost" size="sm">
                              View
                            </Button>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 align-middle">Michael Johnson</td>
                          <td className="p-4 align-middle">michael.johnson@example.com</td>
                          <td className="p-4 align-middle">
                            <Badge className="bg-gray-100 text-gray-800">Inactive</Badge>
                          </td>
                          <td className="p-4 align-middle">2 hours ago</td>
                          <td className="p-4 align-middle">
                            <Button variant="ghost" size="sm">
                              View
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="groups">
            <Card>
              <CardHeader>
                <CardTitle>Group Management</CardTitle>
                <CardDescription>Manage synchronized groups</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Input placeholder="Search groups..." className="w-[300px]" />
                        <Button variant="outline" size="sm">
                          Search
                        </Button>
                      </div>
                      <Button size="sm" style={{ backgroundColor: "#3ABCB8", borderColor: "#3ABCB8" }}>
                        Sync Groups
                      </Button>
                    </div>
                  </div>
                  <div className="relative w-full overflow-auto">
                    <table className="w-full caption-bottom text-sm">
                      <thead className="bg-gray-50">
                        <tr className="border-b">
                          <th className="h-12 px-4 text-left align-middle font-medium">Group Name</th>
                          <th className="h-12 px-4 text-left align-middle font-medium">Members</th>
                          <th className="h-12 px-4 text-left align-middle font-medium">Last Updated</th>
                          <th className="h-12 px-4 text-left align-middle font-medium">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="p-4 align-middle">Administrators</td>
                          <td className="p-4 align-middle">5</td>
                          <td className="p-4 align-middle">1 hour ago</td>
                          <td className="p-4 align-middle">
                            <Button variant="ghost" size="sm">
                              View
                            </Button>
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-4 align-middle">Marketing</td>
                          <td className="p-4 align-middle">12</td>
                          <td className="p-4 align-middle">3 hours ago</td>
                          <td className="p-4 align-middle">
                            <Button variant="ghost" size="sm">
                              View
                            </Button>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 align-middle">Engineering</td>
                          <td className="p-4 align-middle">28</td>
                          <td className="p-4 align-middle">1 day ago</td>
                          <td className="p-4 align-middle">
                            <Button variant="ghost" size="sm">
                              View
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Connector Settings</CardTitle>
                <CardDescription>Configure your SCIM connector</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-3">Authentication</h3>
                    <div className="space-y-3">
                      <div>
                        <Label htmlFor="auth-method">Authentication Method</Label>
                        <Select defaultValue="oauth2">
                          <SelectTrigger id="auth-method">
                            <SelectValue placeholder="Select authentication method" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="oauth2">OAuth 2.0</SelectItem>
                            <SelectItem value="basic">Basic Authentication</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="token-url">Token URL</Label>
                        <Input id="token-url" defaultValue="https://api.example.com/oauth/token" />
                      </div>
                      <div>
                        <Label htmlFor="client-id">Client ID</Label>
                        <Input id="client-id" defaultValue="your_client_id" type="password" />
                      </div>
                      <div>
                        <Label htmlFor="client-secret">Client Secret</Label>
                        <Input id="client-secret" defaultValue="your_client_secret" type="password" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3">Endpoint Configuration</h3>
                    <div className="space-y-3">
                      <div>
                        <Label htmlFor="base-url">Base URL</Label>
                        <Input id="base-url" defaultValue="https://api.example.com/scim/v2" />
                      </div>
                      <div>
                        <Label htmlFor="users-endpoint">Users Endpoint</Label>
                        <Input id="users-endpoint" defaultValue="/Users" />
                      </div>
                      <div>
                        <Label htmlFor="groups-endpoint">Groups Endpoint</Label>
                        <Input id="groups-endpoint" defaultValue="/Groups" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3">Synchronization Settings</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="auto-sync" defaultChecked />
                        <Label htmlFor="auto-sync">Enable automatic synchronization</Label>
                      </div>
                      <div>
                        <Label htmlFor="sync-interval">Synchronization Interval (minutes)</Label>
                        <Input id="sync-interval" type="number" defaultValue="60" />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end space-x-2">
                    <Button variant="outline">Cancel</Button>
                    <Button style={{ backgroundColor: "#3ABCB8", borderColor: "#3ABCB8" }}>Save Changes</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}

// Import missing components
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
