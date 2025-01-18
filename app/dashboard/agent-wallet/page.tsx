"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ApiKeyManagement } from "@/components/api-key-management"
import { ApiKeyDetails } from "@/components/api-key-details"
import { ApiUsageExamples } from "@/components/api-usage-examples"
import { NotificationArea } from "@/components/notification-area"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Plus } from 'lucide-react'
import { Label } from "@/components/ui/label"

export default function AgentWalletPage() {
  const [selectedWallet, setSelectedWallet] = useState<string | null>(null)
  const [isNewUser, setIsNewUser] = useState(true)
  const [setupStep, setSetupStep] = useState(0)
  const [wallets, setWallets] = useState<{ id: string; name: string }[]>([
    { id: 'wallet1', name: 'Default Wallet' }
  ])

  // State for the create-new-wallet dialog
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [newWalletName, setNewWalletName] = useState('')

  useEffect(() => {
    const newUser = localStorage.getItem('newUser')
    setIsNewUser(newUser === 'true')
  }, [])

  const handleSetupComplete = () => {
    localStorage.setItem('newUser', 'false')
    setIsNewUser(false)
  }

  const createWallet = (name: string) => {
    const newWallet = { id: `wallet${wallets.length + 1}`, name }
    setWallets([...wallets, newWallet])
    setSelectedWallet(newWallet.id)
    setNewWalletName('')
    setIsCreateDialogOpen(false) // close modal
  }

  const renameWallet = (id: string, newName: string) => {
    setWallets(wallets.map(wallet =>
      wallet.id === id ? { ...wallet, name: newName } : wallet
    ))
  }

  if (isNewUser) {
    return (
      <div className="space-y-6 p-6">
        <h2 className="text-3xl font-bold tracking-tight">Set Up Your Agent Wallet</h2>

        <Card className="card-hover metallic-card">
          <CardHeader>
            <CardTitle>Step {setupStep + 1}: {setupStep === 0 ? 'Create API Key' : 'Connect Wallet'}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {setupStep === 0 ? (
              <>
                <p>First, let's create your API key. This key will allow your agents to interact with the Prava platform securely.</p>
                <ApiKeyManagement walletId="new-user" />
                <Button onClick={() => setSetupStep(1)} className="w-full">Next: Connect Wallet</Button>
              </>
            ) : (
              <>
                <p>Great! Now let's connect your wallet to start managing your agents.</p>
                <Button onClick={handleSetupComplete} className="w-full">Connect Wallet</Button>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-6 p-6">
      <h2 className="text-3xl font-bold tracking-tight">Agent Wallet</h2>

      <Card className="card-hover metallic-card">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Select Wallet</CardTitle>
          <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">
                <Plus className="mr-2 h-4 w-4" />
                New Wallet
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Wallet</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value={newWalletName}
                    onChange={(e) => setNewWalletName(e.target.value)}
                    className="col-span-3"
                  />
                </div>
              </div>
              <Button onClick={() => {
                if (newWalletName) {
                  createWallet(newWalletName)
                }
              }}>
                Create Wallet
              </Button>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogContent>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="newName" className="text-right">
                    New Name
                  </Label>
                  <Input
                    id="newName"
                    value={newWalletName}
                    onChange={(e) => setNewWalletName(e.target.value)}
                    className="col-span-3"
                  />
                </div>
              </div>
              <Button onClick={() => {
                if (newWalletName && selectedWallet) {
                  renameWallet(selectedWallet, newWalletName)
                  setNewWalletName('')
                }
              }}>
                Rename Wallet
              </Button>
            </DialogContent>
          </Dialog>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            {wallets.map((wallet) => (
              <Button
                key={wallet.id}
                variant={selectedWallet === wallet.id ? 'default' : 'outline'}
                onClick={() => setSelectedWallet(wallet.id)}
              >
                {wallet.name}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {selectedWallet && (
        <>
          <ApiKeyManagement walletId={selectedWallet} />
          <ApiKeyDetails walletId={selectedWallet} />
          <ApiUsageExamples walletId={selectedWallet} />
          <NotificationArea walletId={selectedWallet} />
        </>
      )}
    </div>
  )
}

