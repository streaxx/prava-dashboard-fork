"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"

export function ApiKeyManagement({ walletId }: { walletId: string }) {
  const [apiKey, setApiKey] = useState<string | null>(null)

  const generateApiKey = () => {
    // In a real application, this would be an API call
    const newKey = `prava_${Math.random().toString(36).substr(2, 9)}`
    setApiKey(newKey)
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <Card className="metallic card-hover">
      <CardHeader>
        <CardTitle>API Key Management</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {apiKey ? (
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Input value={apiKey} readOnly />
              <Button onClick={() => copyToClipboard(apiKey)}>Copy</Button>
            </div>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">Regenerate Key</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action will invalidate your current API key. Any applications using this key will need to be updated.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={generateApiKey}>Regenerate</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        ) : (
          <Button onClick={generateApiKey}>Generate API Key</Button>
        )}
      </CardContent>
    </Card>
  )
}

