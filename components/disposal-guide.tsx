import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, CheckCircle, Droplet, Zap, Wind } from "lucide-react"

const disposalItems = [
  {
    name: "Baterias Automotivas",
    icon: Zap,
    description: "Contêm ácido sulfúrico e chumbo",
    disposal: [
      "Armazenar em local seco e ventilado",
      "Separar por tipo (chumbo, níquel-cádmio)",
      "Encaminhar para centro de reciclagem certificado",
      "Nunca descartar em lixo comum",
    ],
    impact: "Reciclagem recupera 99% do chumbo e 95% do plástico",
  },
  {
    name: "Lâmpadas e LEDs",
    icon: Droplet,
    description: "Contêm mercúrio e vidro",
    disposal: [
      "Armazenar em caixas separadas",
      "Proteger de quebras com papel",
      "Encaminhar para recicladora especializada",
      "Usar EPIs ao manusear",
    ],
    impact: "Vidro e metais são recuperados para novos produtos",
  },
  {
    name: "Fios e Cabos Elétricos",
    icon: Wind,
    description: "Contêm cobre e isolamento plástico",
    disposal: [
      "Separar por tipo de isolamento",
      "Remover isolamento quando possível",
      "Armazenar em local coberto",
      "Encaminhar para recicladora de metais",
    ],
    impact: "Cobre recuperado reduz necessidade de mineração",
  },
]

export default function DisposalGuide() {
  return (
    <div className="space-y-6">
      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-primary" />
            Guia de Descarte Correto
          </CardTitle>
          <CardDescription>
            Procedimentos para descarte seguro e ambientalmente responsável de componentes automotivos
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Disposal Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {disposalItems.map((item) => {
          const Icon = item.icon
          return (
            <Card key={item.name} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                </div>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm mb-2 text-foreground">Procedimento de Descarte:</h4>
                  <ul className="space-y-1">
                    {item.disposal.map((step, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary font-bold">{idx + 1}.</span>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-3 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    <span className="font-semibold text-primary">Impacto:</span> {item.impact}
                  </p>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Safety Tips */}
      <Card className="border-destructive/50 bg-destructive/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-destructive">
            <AlertCircle className="w-5 h-5" />
            Equipamentos de Proteção Individual (EPI)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Obrigatório:</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>✓ Luvas de nitrilo ou couro</li>
                <li>✓ Óculos de proteção</li>
                <li>✓ Avental ou uniforme</li>
                <li>✓ Sapatos fechados</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Recomendado:</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>✓ Máscara respiratória</li>
                <li>✓ Protetor auricular</li>
                <li>✓ Luvas de proteção térmica</li>
                <li>✓ Cinto de segurança</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
