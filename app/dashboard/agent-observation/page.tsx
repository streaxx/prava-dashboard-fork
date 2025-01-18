"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Jan', earnings: 4000 },
  { name: 'Feb', earnings: 3000 },
  { name: 'Mar', earnings: 5000 },
  { name: 'Apr', earnings: 2780 },
  { name: 'May', earnings: 1890 },
  { name: 'Jun', earnings: 2390 },
  { name: 'Jul', earnings: 3490 },
]

const agentData = [
  { id: 1, name: 'prava-shopping-agent', earnings: 20 },
  // { id: 2, name: 'Agent 2', earnings: 2980 },
  // { id: 3, name: 'Agent 3', earnings: 3500 },
  // { id: 4, name: 'Agent 4', earnings: 2050 },
]

export default function AgentObservationPage() {
  const [isNewUser, setIsNewUser] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const newUser = localStorage.getItem('newUser')
    setIsNewUser(newUser === 'true')
  }, [])

  const handleSetupWallet = () => {
    router.push('/dashboard/agent-wallet')
  }

  if (isNewUser) {
    return (
      <div className="space-y-6 p-6">
        <h2 className="text-3xl font-bold tracking-tight">Agent Observation Deck</h2>
        <Card className="card-hover metallic-card bg-gradient-to-br from-primary/10 to-secondary/10">
          <CardHeader>
            <CardTitle>Set Up Your Agent Wallet First</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Before you can start observing your agents, you need to set up your agent wallet and create an API key.</p>
            <Button onClick={handleSetupWallet} className="w-full">
              Set Up Agent Wallet
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-6 p-6">
      <h2 className="text-3xl font-bold tracking-tight">Agent Observation Deck</h2>
      <Card className="card-hover metallic-card">
        <CardHeader>
          <CardTitle>Agent Earnings Overview</CardTitle>
        </CardHeader>
        <CardContent>
          {data && data.length > 0 ? (
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="earnings" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <p>No data available</p>
          )}
        </CardContent>
      </Card>
      {agentData && agentData.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2">
          {agentData.map((agent) => (
            <Card key={agent.id} className="card-hover metallic-card">
              <CardHeader>
                <CardTitle>{agent.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">Total Earnings: ${agent.earnings}</p>
                <Button variant="outline" asChild>
                  <a href={`/dashboard/agent-observation/${agent.id}`}>View Details</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <p>No agent data available</p>
      )}
    </div>
  )
}

