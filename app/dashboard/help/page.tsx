import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqData = [
  {
    question: "How do I enable the smart wallet for my AI agents?",
    answer: "You can enable the smart wallet for your AI agents in the Agent Wallet section. Simply toggle the switch to activate the feature."
  },
  {
    question: "What is the Agent Observation Deck?",
    answer: "The Agent Observation Deck is a feature that allows you to track the earnings and performance of multiple deployed agents. You can view detailed statistics and graphs for each agent."
  },
  {
    question: "How can I delete my account?",
    answer: "You can delete your account in the Settings page. Please note that this action is irreversible and will permanently remove all your data from our servers."
  },
  {
    question: "How do I recharge an agent's wallet?",
    answer: "To recharge an agent's wallet, go to the Agent Wallet page and click on the 'Recharge Wallet' button. Follow the prompts to add funds to the wallet."
  }
]

export default function HelpPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Help Center</h2>
      <Card className="card-hover">
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
      <Card className="card-hover">
        <CardHeader>
          <CardTitle>Need More Help?</CardTitle>
        </CardHeader>
        <CardContent>
          <p>If you can't find the answer to your question, please contact our support team at support@prava.com</p>
        </CardContent>
      </Card>
    </div>
  )
}

