import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, PlayCircle } from "lucide-react";

type VisualizationType = "barras" | "linhas" | "treemap" | "grafo";

const visualizationInfo = {
  barras: {
    title: "Estatística Descritiva - Gráfico de Barras",
    description: "Comparação de casos totais entre os estados brasileiros (Top 15)",
    insights: [
      "SP e MG lideram em casos absolutos",
      "Clara diferenciação regional",
      "Sudeste concentra os maiores números"
    ]
  },
  linhas: {
    title: "Informação Temporal - Série Temporal",
    description: "Evolução de casos novos e acumulados por região (Média Móvel 7 dias)",
    insights: [
      "Múltiplas ondas identificadas ao longo do tempo",
      "Padrões regionais distintos",
      "Sudeste apresenta maior volume constante"
    ]
  },
  treemap: {
    title: "Informação Hierárquica - Treemap",
    description: "Distribuição proporcional Região → Estado",
    insights: [
      "Sudeste concentra maior proporção de casos",
      "Distribuição desigual entre regiões",
      "SP domina dentro do Sudeste"
    ]
  },
  grafo: {
    title: "Redes e Grafos - Grafo Node-Link",
    description: "Rede de similaridade entre estados baseada em padrões de casos",
    insights: [
      "Formação de clusters regionais",
      "Estados com padrões epidemiológicos similares conectados",
      "Identificação de hubs de transmissão"
    ]
  }
};

export default function Visualizacoes() {
  const [selectedViz, setSelectedViz] = useState<VisualizationType>("barras");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);

  const handleTabChange = (value: string) => {
    setSelectedViz(value as VisualizationType);
    setIsGenerated(false);
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setIsGenerated(true);
    }, 1500);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `/visualizations/${selectedViz}.png`;
    link.download = `covid19_${selectedViz}_visualization.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const info = visualizationInfo[selectedViz];

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Visualizações de Dados</h1>
          <p className="text-muted-foreground">
            Selecione um tipo de visualização para explorar os dados de COVID-19 no Brasil
          </p>
        </div>

        <Tabs value={selectedViz} onValueChange={handleTabChange} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="barras">Barras</TabsTrigger>
            <TabsTrigger value="linhas">Temporal</TabsTrigger>
            <TabsTrigger value="treemap">Treemap</TabsTrigger>
            <TabsTrigger value="grafo">Grafo</TabsTrigger>
          </TabsList>

          <TabsContent value={selectedViz} className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{info.title}</CardTitle>
                <CardDescription>{info.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                  {isGenerated ? (
                    <img 
                      src={`/visualizations/${selectedViz}.png`} 
                      alt={info.title}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="text-center space-y-4 p-8">
                      <div className="text-6xl">📊</div>
                      <div className="space-y-2">
                        <p className="text-sm text-muted-foreground">
                          Clique no botão abaixo para carregar a visualização
                        </p>
                        <Button 
                          onClick={handleGenerate} 
                          disabled={isGenerating}
                          className="gap-2"
                        >
                          <PlayCircle className="h-4 w-4" />
                          {isGenerating ? "Carregando..." : "Gerar Visualização"}
                        </Button>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex justify-end gap-2">
                  <Button 
                    variant="outline" 
                    onClick={handleDownload} 
                    className="gap-2"
                    disabled={!isGenerated}
                  >
                    <Download className="h-4 w-4" />
                    Baixar PNG
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Principais Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {info.insights.map((insight, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{insight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
