"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

const stockData = [
  { name: "Baterias", quantidade: 45, limite: 50 },
  { name: "Lâmpadas", quantidade: 120, limite: 100 },
  { name: "Fios", quantidade: 200, limite: 250 },
  { name: "Alternadores", quantidade: 15, limite: 20 },
]

const wasteData = [
  { name: "Jan", reciclado: 120, descartado: 30 },
  { name: "Fev", reciclado: 150, descartado: 25 },
  { name: "Mar", reciclado: 180, descartado: 20 },
  { name: "Abr", reciclado: 200, descartado: 15 },
]

const impactData = [
  { name: "Reciclado", value: 650, color: "var(--color-chart-1)" },
  { name: "Descartado", value: 90, color: "var(--color-chart-5)" },
]

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Itens em Estoque</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">380</div>
            <p className="text-xs text-muted-foreground mt-1">+12% vs mês anterior</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Taxa de Reciclagem</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-accent">87.8%</div>
            <p className="text-xs text-muted-foreground mt-1">Meta: 85%</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Resíduos Processados</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-secondary">740 kg</div>
            <p className="text-xs text-muted-foreground mt-1">Este mês</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Funcionários Capacitados</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">24</div>
            <p className="text-xs text-muted-foreground mt-1">+8 aprendizes</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Nível de Estoque por Categoria</CardTitle>
            <CardDescription>Comparação com limite máximo</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={stockData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="quantidade" fill="var(--color-chart-1)" name="Quantidade Atual" />
                <Bar dataKey="limite" fill="var(--color-chart-2)" name="Limite Máximo" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tendência de Reciclagem</CardTitle>
            <CardDescription>Últimos 4 meses</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={wasteData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="reciclado"
                  stroke="var(--color-chart-1)"
                  strokeWidth={2}
                  name="Reciclado (kg)"
                />
                <Line
                  type="monotone"
                  dataKey="descartado"
                  stroke="var(--color-chart-5)"
                  strokeWidth={2}
                  name="Descartado (kg)"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Impact Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Impacto Ambiental Acumulado</CardTitle>
          <CardDescription>Total de resíduos processados</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={impactData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}kg`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {impactData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-col justify-center space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Resíduos Reciclados</p>
                <p className="text-2xl font-bold text-primary">650 kg</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Resíduos Descartados Corretamente</p>
                <p className="text-2xl font-bold text-secondary">90 kg</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Taxa de Sucesso</p>
                <p className="text-2xl font-bold text-accent">87.8%</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
