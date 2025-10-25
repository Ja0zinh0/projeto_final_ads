"use client"

import { useState } from "react"
import { Leaf, Package, Recycle, Users, BarChart3, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import Dashboard from "@/components/dashboard"
import StockManagement from "@/components/stock-management"
import DisposalGuide from "@/components/disposal-guide"
import Training from "@/components/training"
import Reports from "@/components/reports"
import Navigation from "@/components/navigation"

export default function Home() {
  const [activeTab, setActiveTab] = useState("dashboard")

  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: BarChart3 },
    { id: "stock", label: "Estoque", icon: Package },
    { id: "disposal", label: "Descarte", icon: Recycle },
    { id: "training", label: "Capacitação", icon: Users },
    { id: "reports", label: "Relatórios", icon: BookOpen },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Leaf className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">Logística Sustentável</h1>
          </div>
          <p className="text-muted-foreground text-lg">Autoelétrica - Gestão de Estoque e Logística Reversa</p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-border pb-4">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <Button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                variant={activeTab === tab.id ? "default" : "outline"}
                className="gap-2"
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </Button>
            )
          })}
        </div>

        {/* Content */}
        <div className="animate-in fade-in duration-300">
          {activeTab === "dashboard" && <Dashboard />}
          {activeTab === "stock" && <StockManagement />}
          {activeTab === "disposal" && <DisposalGuide />}
          {activeTab === "training" && <Training />}
          {activeTab === "reports" && <Reports />}
        </div>
      </main>
    </div>
  )
}
