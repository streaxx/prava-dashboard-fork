"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SignupPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the signup process
    // For now, we'll just redirect to the dashboard
    localStorage.setItem('newUser', 'true')
    router.push('/dashboard')
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-background to-secondary">
      <Card className="w-[350px] card-hover">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Sign Up for Prava</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignup} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">Sign Up</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

