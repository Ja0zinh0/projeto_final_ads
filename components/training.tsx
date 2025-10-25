"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, Users, BookOpen } from "lucide-react"

interface TrainingModule {
  id: string
  title: string
  description: string
  duration: string
  participants: number
  status: "completed" | "in-progress" | "scheduled"
  topics: string[]
}

const trainingModules: TrainingModule[] = [
  {
    id: "1",
    title: "Gestão Básica de Estoque",
    description: "Fundamentos de organização e controle de materiais",
    duration: "4 horas",
    participants: 12,
    status: "completed",
    topics: ["Classificação de itens", "Contagem de estoque", "Planilhas de controle", "Organização de prateleiras"],
  },
  {
    id: "2",
    title: "Descarte Correto de Componentes",
    description: "Procedimentos seguros para descarte de baterias, lâmpadas e fios",
    duration: "3 horas",
    participants: 16,
    status: "in-progress",
    topics: ["Baterias automotivas", "Lâmpadas e LEDs", "Fios elétricos", "Segurança e EPI"],
  },
  {
    id: "3",
    title: "Logística Reversa e Sustentabilidade",
    description: "Conceitos de economia circular e impacto ambiental",
    duration: "5 horas",
    participants: 8,
    status: "scheduled",
    topics: ["Economia circular", "Impacto ambiental", "Legislação ambiental", "Certificações"],
  },
  {
    id: "4",
    title: "Capacitação para Aprendizes",
    description: "Programa especial para jovens aprendizes",
    duration: "8 horas",
    participants: 8,
    status: "scheduled",
    topics: [
      "Segurança no trabalho",
      "Procedimentos básicos",
      "Responsabilidade ambiental",
      "Desenvolvimento profissional",
    ],
  },
]

export default function Training() {
  const [selectedModule, setSelectedModule] = useState<TrainingModule | null>(null)

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return { label: "Concluído", color: "bg-primary/10 text-primary" }
      case "in-progress":
        return { label: "Em Andamento", color: "bg-accent/10 text-accent" }
      case "scheduled":
        return { label: "Agendado", color: "bg-secondary/10 text-secondary" }
      default:
        return { label: "Desconhecido", color: "bg-muted/10 text-muted-foreground" }
    }
  }

  return (
    <div className="space-y-6">
      {/* Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Módulos Concluídos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">1</div>
            <p className="text-xs text-muted-foreground mt-1">25% do programa</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Funcionários Treinados</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-accent">24</div>
            <p className="text-xs text-muted-foreground mt-1">+8 aprendizes</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Horas de Capacitação</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-secondary">20</div>
            <p className="text-xs text-muted-foreground mt-1">Realizadas este mês</p>
          </CardContent>
        </Card>
      </div>

      {/* Training Modules */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-foreground">Módulos de Capacitação</h2>
          {trainingModules.map((module) => {
            const badge = getStatusBadge(module.status)
            return (
              <Card
                key={module.id}
                className="cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => setSelectedModule(module)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-base">{module.title}</CardTitle>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${badge.color}`}>{badge.label}</span>
                  </div>
                  <CardDescription>{module.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {module.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {module.participants} participantes
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Module Details */}
        <div>
          {selectedModule ? (
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>{selectedModule.title}</CardTitle>
                <CardDescription>{selectedModule.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm mb-2 text-foreground">Tópicos Abordados:</h4>
                  <ul className="space-y-1">
                    {selectedModule.topics.map((topic, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-border space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Duração:</span>
                    <span className="font-semibold">{selectedModule.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Participantes:</span>
                    <span className="font-semibold">{selectedModule.participants}</span>
                  </div>
                </div>

                <Button className="w-full mt-4">
                  {selectedModule.status === "completed" ? "Certificado Disponível" : "Inscrever-se"}
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card className="sticky top-4 flex items-center justify-center h-96">
              <div className="text-center">
                <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-3 opacity-50" />
                <p className="text-muted-foreground">Selecione um módulo para ver detalhes</p>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
