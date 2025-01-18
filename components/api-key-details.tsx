"use client"

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ApiKeyDetails {
  creationDate: string
  lastUsed: string
  usageLimit: number
  currentUsage: number
  status: 'active' | 'inactive'
}

export function ApiKeyDetails({ walletId }: { walletId: string }) {
  const [details, setDetails] = useState<ApiKeyDetails | null>(null)

  useEffect(() => {
    // In a real application, this would be an API call
    setDetails({
      creationDate: new Date().toISOString(),
      lastUsed: new Date().toISOString(),
      usageLimit: 1000,
      currentUsage: 50,
      status: 'active'
    })
  }, [walletId])

  if (!details) {
    return (
      <Card className="metallic card-hover">
        <CardHeader>
          <CardTitle>API Key Details</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Loading API key details...</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="metallic card-hover">
      <CardHeader>
        <CardTitle>API Key Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <p>Creation Date: {new Date(details.creationDate).toLocaleString()}</p>
        <p>Last Used: {new Date(details.lastUsed).toLocaleString()}</p>
        <p>Usage: {details.currentUsage} / {details.usageLimit}</p>
        <div>
          Status: 
          <Badge variant={details.status === 'active' ? 'default' : 'secondary'} className="ml-2">
            {details.status}
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}

