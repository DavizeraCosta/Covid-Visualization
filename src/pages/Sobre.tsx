import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Github, Database, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Sobre() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Sobre o Projeto</h1>
          <p className="text-muted-foreground">
            Informações sobre o desenvolvimento e objetivos deste trabalho acadêmico
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              Contexto Acadêmico
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Disciplina:</strong> Visualização da Informação
              </p>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Autor:</strong> Davi Costa
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Ano:</strong> 2025
              </p>
            </div>
            <p className="text-sm">
              Este projeto foi desenvolvido como trabalho acadêmico para demonstrar a aplicação prática de diferentes 
              técnicas de visualização da informação em um contexto real: a pandemia de COVID-19 no Brasil.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Objetivos do Projeto</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-semibold">Objetivo Geral</h4>
              <p className="text-sm text-muted-foreground">
                Implementar e demonstrar quatro técnicas distintas de visualização da informação aplicadas a dados 
                epidemiológicos reais da pandemia de COVID-19 no Brasil.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Objetivos Específicos</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Aplicar estatística descritiva através de gráficos de barras</li>
                <li>• Visualizar informação temporal com séries temporais</li>
                <li>• Representar hierarquias usando treemaps</li>
                <li>• Explorar relacionamentos através de redes e grafos</li>
                <li>• Desenvolver interface web interativa para exploração dos dados</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5 text-primary" />
              Fonte dos Dados
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Os dados utilizados neste projeto são provenientes do repositório público mantido por Wesley Cota, 
              que consolida informações oficiais de casos e óbitos de COVID-19 em todos os estados brasileiros.
            </p>
            <div className="flex gap-2">
              <Button asChild variant="outline" className="gap-2">
                <a href="https://github.com/wcota/covid19br" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  Repositório do Dataset
                </a>
              </Button>
            </div>
            <div className="bg-muted p-4 rounded-lg text-sm space-y-2">
              <p><strong>Dataset:</strong> COVID-19 Brasil</p>
              <p><strong>Mantenedor:</strong> Wesley Cota</p>
              <p><strong>URL:</strong> https://github.com/wcota/covid19br</p>
              <p><strong>Atualização:</strong> Dados históricos consolidados</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5 text-primary" />
              Arquitetura do Sistema
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              O projeto foi desenvolvido em duas camadas complementares:
            </p>
            
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold mb-2">Backend Python</h4>
                <p className="text-sm text-muted-foreground">
                  Responsável pelo processamento dos dados, geração das visualizações usando bibliotecas científicas 
                  (Pandas, Matplotlib, Plotly, NetworkX) e exposição de endpoints para o frontend.
                </p>
              </div>
              
              <div className="border-l-4 border-secondary pl-4">
                <h4 className="font-semibold mb-2">Frontend React</h4>
                <p className="text-sm text-muted-foreground">
                  Interface web moderna e responsiva que permite explorar as visualizações de forma interativa, 
                  selecionar diferentes tipos de gráficos e fazer download dos resultados.
                </p>
              </div>
            </div>

          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Técnicas de Visualização</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-2 text-chart-1">Estatística Descritiva</h4>
                <p className="text-sm text-muted-foreground">
                  Gráfico de barras para comparação direta de valores absolutos entre estados
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-2 text-chart-2">Informação Temporal</h4>
                <p className="text-sm text-muted-foreground">
                  Série temporal mostrando evolução e tendências ao longo do tempo
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-2 text-chart-3">Informação Hierárquica</h4>
                <p className="text-sm text-muted-foreground">
                  Treemap revelando proporções e hierarquias entre regiões e estados
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-2 text-chart-4">Redes e Grafos</h4>
                <p className="text-sm text-muted-foreground">
                  Grafo identificando padrões de similaridade e conexões entre estados
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
