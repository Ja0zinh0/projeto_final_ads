"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts"
import { Download, TrendingUp } from "lucide-react"

const efficiencyData = [
  { month: "Jan", efficiency: 65, waste: 35 },
  { month: "Fev", efficiency: 72, waste: 28 },
  { month: "Mar", efficiency: 78, waste: 22 },
  { month: "Abr", efficiency: 85, waste: 15 },
]

const sustainabilityData = [
  { month: "Jan", recycled: 120, disposed: 80 },
  { month: "Fev", recycled: 150, disposed: 70 },
  { month: "Mar", recycled: 180, disposed: 60 },
  { month: "Abr", recycled: 200, disposed: 50 },
]

const costSavingsData = [
  { month: "Jan", savings: 1200 },
  { month: "Fev", savings: 1800 },
  { month: "Mar", savings: 2400 },
  { month: "Abr", savings: 3100 },
]

export default function Reports() {
  return (
    <div className="space-y-6">
      {/* Report Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Eficiência Operacional</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">85%</div>
            <p className="text-xs text-muted-foreground mt-1">+20% vs janeiro</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Economia Gerada</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-accent">R$ 8.500</div>
            <p className="text-xs text-muted-foreground mt-1">Acumulado 4 meses</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">CO₂ Evitado</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-secondary">2.4 ton</div>
            <p className="text-xs text-muted-foreground mt-1">Equivalente a 5 árvores</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Conformidade Legal</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">100%</div>
            <p className="text-xs text-muted-foreground mt-1">Todas as normas</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Eficiência Operacional</CardTitle>
            <CardDescription>Melhoria ao longo dos meses</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={efficiencyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="efficiency"
                  fill="var(--color-chart-1)"
                  stroke="var(--color-chart-1)"
                  name="Eficiência %"
                />
                <Area
                  type="monotone"
                  dataKey="waste"
                  fill="var(--color-chart-5)"
                  stroke="var(--color-chart-5)"
                  name="Desperdício %"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Impacto de Sustentabilidade</CardTitle>
            <CardDescription>Resíduos processados (kg)</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={sustainabilityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="recycled" fill="var(--color-chart-1)" name="Reciclado" />
                <Bar dataKey="disposed" fill="var(--color-chart-5)" name="Descartado" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Cost Savings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            Economia Financeira
          </CardTitle>
          <CardDescription>Redução de custos com reciclagem e eficiência</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={costSavingsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => `R$ ${value}`} />
              <Legend />
              <Line
                type="monotone"
                dataKey="savings"
                stroke="var(--color-chart-1)"
                strokeWidth={2}
                name="Economia (R$)"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Download Reports */}
      <Card>
        <CardHeader>
          <CardTitle>Relatórios Disponíveis</CardTitle>
          <CardDescription>Baixe relatórios detalhados em PDF</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Button variant="outline" className="gap-2 justify-start bg-transparent">
              <Download className="w-4 h-4" />
              Relatório Mensal - Abril 2024
            </Button>
            <Button variant="outline" className="gap-2 justify-start bg-transparent">
              <Download className="w-4 h-4" />
              Relatório de Sustentabilidade
            </Button>
            <Button variant="outline" className="gap-2 justify-start bg-transparent">
              <Download className="w-4 h-4" />
              Análise de Eficiência
            </Button>
            <Button variant="outline" className="gap-2 justify-start bg-transparent">
              <Download className="w-4 h-4" />
              Impacto Ambiental Acumulado
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
