"use client"

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, CheckCircle } from 'lucide-react'

interface Notification {
  id: number
  type: 'success' | 'error'
  message: string
}

export function NotificationArea({ walletId }: { walletId: string }) {
  const [notifications, setNotifications] = useState<Notification[]>([])

  useEffect(() => {
    // Simulated notifications
    const simulatedNotifications: Notification[] = [
      { id: 1, type: 'success', message: 'API key generated successfully' },
      { id: 2, type: 'error', message: 'Failed API call: Invalid parameters' }
    ]
    setNotifications(simulatedNotifications)
  }, [walletId])

  return (
    <Card className="metallic card-hover">
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {notifications.map((notification) => (
          <Alert key={notification.id} variant={notification.type === 'success' ? 'default' : 'destructive'}>
            {notification.type === 'success' ? <CheckCircle className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
            <AlertTitle>{notification.type === 'success' ? 'Success' : 'Error'}</AlertTitle>
            <AlertDescription>{notification.message}</AlertDescription>
          </Alert>
        ))}
      </CardContent>
    </Card>
  )
}

