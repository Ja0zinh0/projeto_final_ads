"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AlertCircle, Plus, Trash2 } from "lucide-react"

interface StockItem {
  id: string
  name: string
  quantity: number
  maxLimit: number
  category: string
  lastUpdate: string
}

const initialStock: StockItem[] = [
  { id: "1", name: "Baterias Automotivas", quantity: 45, maxLimit: 50, category: "Baterias", lastUpdate: "2024-10-20" },
  { id: "2", name: "Lâmpadas LED H7", quantity: 120, maxLimit: 100, category: "Lâmpadas", lastUpdate: "2024-10-19" },
  { id: "3", name: "Fios de Cobre", quantity: 200, maxLimit: 250, category: "Fios", lastUpdate: "2024-10-18" },
  { id: "4", name: "Alternadores", quantity: 15, maxLimit: 20, category: "Componentes", lastUpdate: "2024-10-20" },
  {
    id: "5",
    name: "Relés Automotivos",
    quantity: 85,
    maxLimit: 100,
    category: "Componentes",
    lastUpdate: "2024-10-17",
  },
]

export default function StockManagement() {
  const [stock, setStock] = useState<StockItem[]>(initialStock)
  const [newItem, setNewItem] = useState({ name: "", quantity: "", maxLimit: "" })

  const addItem = () => {
    if (newItem.name && newItem.quantity && newItem.maxLimit) {
      setStock([
        ...stock,
        {
          id: Date.now().toString(),
          name: newItem.name,
          quantity: Number.parseInt(newItem.quantity),
          maxLimit: Number.parseInt(newItem.maxLimit),
          category: "Novo",
          lastUpdate: new Date().toISOString().split("T")[0],
        },
      ])
      setNewItem({ name: "", quantity: "", maxLimit: "" })
    }
  }

  const removeItem = (id: string) => {
    setStock(stock.filter((item) => item.id !== id))
  }

  const getStockStatus = (quantity: number, maxLimit: number) => {
    const percentage = (quantity / maxLimit) * 100
    if (percentage > 100) return { status: "Excesso", color: "text-destructive", bgColor: "bg-destructive/10" }
    if (percentage > 80) return { status: "Alto", color: "text-accent", bgColor: "bg-accent/10" }
    if (percentage > 50) return { status: "Normal", color: "text-primary", bgColor: "bg-primary/10" }
    return { status: "Baixo", color: "text-secondary", bgColor: "bg-secondary/10" }
  }

  return (
    <div className="space-y-6">
      {/* Add New Item */}
      <Card>
        <CardHeader>
          <CardTitle>Adicionar Novo Item</CardTitle>
          <CardDescription>Registre novos componentes no estoque</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-3">
            <Input
              placeholder="Nome do item"
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
              className="flex-1"
            />
            <Input
              placeholder="Quantidade"
              type="number"
              value={newItem.quantity}
              onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
              className="w-32"
            />
            <Input
              placeholder="Limite máximo"
              type="number"
              value={newItem.maxLimit}
              onChange={(e) => setNewItem({ ...newItem, maxLimit: e.target.value })}
              className="w-32"
            />
            <Button onClick={addItem} className="gap-2">
              <Plus className="w-4 h-4" />
              Adicionar
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Stock List */}
      <Card>
        <CardHeader>
          <CardTitle>Itens em Estoque</CardTitle>
          <CardDescription>Gestão de componentes automotivos</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {stock.map((item) => {
              const status = getStockStatus(item.quantity, item.maxLimit)
              const percentage = (item.quantity / item.maxLimit) * 100
              return (
                <div key={item.id} className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {item.category} • Atualizado em {item.lastUpdate}
                      </p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${status.color} ${status.bgColor}`}>
                      {status.status}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">
                        Quantidade: {item.quantity} / {item.maxLimit}
                      </span>
                      <span className="font-semibold text-foreground">{percentage.toFixed(0)}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-primary transition-all"
                        style={{ width: `${Math.min(percentage, 100)}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex justify-end mt-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeItem(item.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Alerts */}
      <Card className="border-destructive/50 bg-destructive/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-destructive">
            <AlertCircle className="w-5 h-5" />
            Alertas de Estoque
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-destructive rounded-full" />
              Lâmpadas LED H7: Quantidade acima do limite máximo
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-secondary rounded-full" />
              Alternadores: Nível baixo - considere reposição
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
