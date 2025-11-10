import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Database, TrendingUp, Activity } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Relatorio() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Relatório de Análise</h1>
          <p className="text-muted-foreground">
            Visualização de Dados COVID-19 Brasil
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Informações do Projeto
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              <div>
                <p className="text-sm text-muted-foreground">Autor</p>
                <p className="font-medium">Davi Costa</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Dataset</p>
                <p className="font-medium">COVID-19 Brasil (Wesley Cota)</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Período Analisado</p>
                <p className="font-medium">25/02/2020 - 18/03/2023</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5 text-primary" />
              Resumo dos Dados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="space-y-1">
                <p className="text-2xl font-bold text-primary">27</p>
                <p className="text-sm text-muted-foreground">Estados Analisados</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-primary">29,724</p>
                <p className="text-sm text-muted-foreground">Registros Totais</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-primary">37.1M</p>
                <p className="text-sm text-muted-foreground">Casos Totais</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-primary">699K</p>
                <p className="text-sm text-muted-foreground">Óbitos Totais</p>
              </div>
            </div>
            <Separator className="my-4" />
            <div className="flex items-center gap-2">
              <Activity className="h-4 w-4 text-destructive" />
              <p className="text-sm">
                <span className="font-medium">Taxa de Letalidade:</span>{" "}
                <span className="text-destructive">1.89%</span>
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Técnicas de Visualização Implementadas
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">1. Estatística Descritiva - Gráfico de Barras</h3>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Objetivo:</strong> Comparar casos totais entre os estados brasileiros
              </p>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Técnica:</strong> Gráfico de barras com codificação por cores regionais
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Insights:</strong> SP e MG lideram em casos absolutos; clara diferenciação regional
              </p>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold mb-2">2. Informação Temporal - Gráfico de Linhas</h3>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Objetivo:</strong> Visualizar evolução dos casos ao longo do tempo
              </p>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Técnica:</strong> Série temporal com média móvel de 7 dias
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Insights:</strong> Múltiplas ondas identificadas; padrões regionais distintos
              </p>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold mb-2">3. Informação Hierárquica - Treemap</h3>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Objetivo:</strong> Mostrar proporções hierárquicas região → estado
              </p>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Técnica:</strong> Treemap com codificação por área e cor
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Insights:</strong> Sudeste concentra maior proporção; distribuição desigual
              </p>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold mb-2">4. Redes e Grafos - Grafo Node-Link</h3>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Objetivo:</strong> Identificar padrões de similaridade entre estados
              </p>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Técnica:</strong> Grafo baseado em proximidade de valores de casos
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Insights:</strong> Clusters regionais; estados com padrões epidemiológicos similares
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Metodologia</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p>
              Este projeto implementa quatro técnicas distintas de visualização da informação aplicadas aos dados 
              oficiais de COVID-19 do Brasil. Cada técnica foi escolhida para revelar aspectos específicos dos dados, 
              proporcionando uma análise multidimensional completa.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tecnologias Utilizadas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Backend (Python)</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Python 3.8+</li>
                  <li>• Pandas - Análise de dados</li>
                  <li>• Matplotlib/Seaborn - Gráficos</li>
                  <li>• Plotly - Visualizações interativas</li>
                  <li>• NetworkX - Grafos</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Frontend (Web)</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• React + TypeScript</li>
                  <li>• Vite - Build tool</li>
                  <li>• Tailwind CSS - Estilos</li>
                  <li>• Shadcn/ui - Componentes</li>
                  <li>• React Router - Navegação</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Conclusões</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p><strong>1. Distribuição Regional:</strong> Sudeste concentra a maior parte dos casos</p>
            <p><strong>2. Evolução Temporal:</strong> Múltiplas ondas com padrões regionais distintos</p>
            <p><strong>3. Hierarquia:</strong> Clara diferenciação entre regiões e estados</p>
            <p><strong>4. Similaridade:</strong> Estados com características epidemiológicas similares formam clusters</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
