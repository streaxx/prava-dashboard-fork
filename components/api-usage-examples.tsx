"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const examples = [
  {
    title: "Check Balance",
    code: `
curl -X GET "https://api.prava.com/v1/balance" \\
  -H "Authorization: Bearer YOUR_API_KEY"
`
  },
  {
    title: "Make Payment",
    code: `
curl -X POST "https://api.prava.com/v1/payment" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 100,
    "currency": "USD",
    "recipient": "recipient@example.com"
  }'
`
  }
]

export function ApiUsageExamples({ walletId }: { walletId: string }) {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <Card className="metallic card-hover">
      <CardHeader>
        <CardTitle>API Usage Examples</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {examples.map((example, index) => (
          <div key={index} className="space-y-2">
            <h3 className="font-semibold">{example.title}</h3>
            <pre className="bg-muted p-2 rounded-md overflow-x-auto">
              <code>{example.code}</code>
            </pre>
            <Button onClick={() => copyToClipboard(example.code)}>Copy to Clipboard</Button>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

