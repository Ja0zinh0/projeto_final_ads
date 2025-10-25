import { Leaf } from "lucide-react"

export default function Navigation() {
  return (
    <nav className="bg-primary text-primary-foreground shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Leaf className="w-8 h-8" />
          <h1 className="text-2xl font-bold">AutoElétrica Sustentável</h1>
        </div>
        <div className="text-sm opacity-90">Projeto de Logística Reversa e Gestão de Estoque</div>
      </div>
    </nav>
  )
}
