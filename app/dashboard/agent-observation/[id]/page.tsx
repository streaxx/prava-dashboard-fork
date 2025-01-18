"use client"

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const agentData = {
  1: { name: 'Agent 1', earnings: 3200, tasksCompleted: 1820 },
  2: { name: 'Agent 2', earnings: 2980, tasksCompleted: 1650 },
  3: { name: 'Agent 3', earnings: 3500, tasksCompleted: 1930 },
  4: { name: 'Agent 4', earnings: 2050, tasksCompleted: 1623 },
}

const dailyEarningsData = [
  { date: '2023-06-01', earnings: 50 },
  { date: '2023-06-02', earnings: 75 },
  { date: '2023-06-03', earnings: 60 },
  { date: '2023-06-04', earnings: 90 },
  { date: '2023-06-05', earnings: 80 },
  { date: '2023-06-06', earnings: 100 },
  { date: '2023-06-07', earnings: 85 },
]

export default function AgentDetailPage() {
  const [isNewUser, setIsNewUser] = useState(true)
  const params = useParams()
  const router = useRouter()
  const agentId = params?.id as string | undefined
  const agent = agentId ? agentData[agentId as keyof typeof agentData] : undefined

  useEffect(() => {
    const newUser = localStorage.getItem('newUser')
    setIsNewUser(newUser === 'true')
  }, [])

  const handleSetupWallet = () => {
    router.push('/dashboard/agent-wallet')
  }

  if (isNewUser) {
    return (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Agent Details</h1>
        <Card className="card-hover metallic-card bg-gradient-to-br from-primary/10 to-secondary/10">
          <CardHeader>
            <CardTitle>Set Up Your Agent Wallet First</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Before you can view agent details, you need to set up your agent wallet and create an API key.</p>
            <Button onClick={handleSetupWallet} className="w-full">
              Set Up Agent Wallet
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (!agent) {
    return (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Agent Not Found</h1>
        <Card className="card-hover metallic-card">
          <CardHeader>
            <CardTitle>Error</CardTitle>
          </CardHeader>
          <CardContent>
            <p>The requested agent could not be found. Please check the agent ID and try again.</p>
            <Button onClick={() => router.push('/dashboard/agent-observation')} className="mt-4">
              Return to Agent Observation
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-3xl font-bold">{agent.name} Details</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="card-hover metallic-card">
          <CardHeader>
            <CardTitle>Agent Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Total Earnings: ${agent.earnings}</p>
            <p>Tasks Completed: {agent.tasksCompleted}</p>
          </CardContent>
        </Card>
        <Card className="card-hover metallic-card">
          <CardHeader>
            <CardTitle>Daily Earnings</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                earnings: {
                  label: "Daily Earnings",
                  color: "hsl(var(--chart-1))",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={dailyEarningsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Line type="monotone" dataKey="earnings" stroke="var(--color-earnings)" name="Daily Earnings" />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

