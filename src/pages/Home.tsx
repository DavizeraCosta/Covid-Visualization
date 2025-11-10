import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, LineChart, Network, TreePine, ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  const visualizations = [
    {
      title: "Estatística Descritiva",
      description: "Gráfico de barras comparando casos totais entre estados",
      icon: BarChart3,
      color: "text-chart-1",
    },
    {
      title: "Informação Temporal",
      description: "Evolução de casos ao longo do tempo por região",
      icon: LineChart,
      color: "text-chart-2",
    },
    {
      title: "Informação Hierárquica",
      description: "Treemap mostrando distribuição região → estado",
      icon: TreePine,
      color: "text-chart-3",
    },
    {
      title: "Redes e Grafos",
      description: "Grafo de similaridade entre estados",
      icon: Network,
      color: "text-chart-4",
    },
  ];

  return (
    <Layout>
      <div className="space-y-12">
        {/* Hero Section */}
        <section className="text-center space-y-6 py-12">
          <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
            <BarChart3 className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Visualização de Dados
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              COVID-19 Brasil
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Análise interativa de dados epidemiológicos com quatro técnicas de visualização da informação
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg" className="gap-2">
              <Link to="/visualizacoes">
                Explorar Visualizações <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link to="/relatorio">
                Ver Relatório
              </Link>
            </Button>
          </div>
        </section>

        {/* Stats Section */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Estados Analisados</CardDescription>
              <CardTitle className="text-3xl">27</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Período</CardDescription>
              <CardTitle className="text-2xl">2020-2023</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Casos Totais</CardDescription>
              <CardTitle className="text-2xl">37M+</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Visualizações</CardDescription>
              <CardTitle className="text-3xl">4</CardTitle>
            </CardHeader>
          </Card>
        </section>

        {/* Visualizations Overview */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">Técnicas Implementadas</h2>
            <p className="text-muted-foreground">
              Cada visualização revela aspectos únicos dos dados epidemiológicos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visualizations.map((viz, index) => {
              const Icon = viz.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className={`h-6 w-6 ${viz.color}`} />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{viz.title}</CardTitle>
                        <CardDescription className="mt-1">
                          {viz.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="rounded-lg bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 p-8 text-center space-y-4">
          <h2 className="text-2xl font-bold">Pronto para Explorar?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Navegue pelas visualizações interativas e descubra padrões nos dados da pandemia no Brasil
          </p>
          <Button asChild size="lg" className="gap-2">
            <Link to="/visualizacoes">
              Começar Análise <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </section>
      </div>
    </Layout>
  );
}
