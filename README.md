# COVID-19 Brasil - Visualização de Dados

## 📊 Sobre o Projeto

Projeto acadêmico de Visualização da Informação desenvolvido por Davi Costa.

Este projeto implementa quatro técnicas distintas de visualização aplicadas aos dados oficiais de COVID-19 do Brasil:
- **Estatística Descritiva** - Gráfico de barras
- **Informação Temporal** - Série temporal
- **Informação Hierárquica** - Treemap
- **Redes e Grafos** - Grafo node-link

## 🏗️ Arquitetura

O projeto é dividido em duas partes:

### Frontend (React + TypeScript)
- Interface web moderna e responsiva
- Navegação entre diferentes visualizações
- Visualização de relatórios
- Download de gráficos

### Backend (Python)
- Processamento de dados com Pandas
- Geração de visualizações com Matplotlib, Seaborn e Plotly
- Análise de redes com NetworkX
- API REST para comunicação com o frontend

## 🚀 Como Executar

### Pré-requisitos
- Node.js 16+ e npm
- Python 3.8+
- pip

### 1. Configurar e Executar o Frontend

```bash
# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm run dev

# O frontend estará disponível em http://localhost:8080
```

## 📁 Estrutura do Projeto

```
covid19-brasil-viz/
├── src/                      # Código fonte React
│   ├── components/          # Componentes reutilizáveis
│   │   ├── Layout.tsx      # Layout principal com navegação
│   │   └── ui/             # Componentes UI (shadcn)
│   ├── pages/              # Páginas da aplicação
│   │   ├── Home.tsx        # Página inicial
│   │   ├── Visualizacoes.tsx  # Dashboard de visualizações
│   │   ├── Relatorio.tsx   # Relatório completo
│   │   └── Sobre.tsx       # Sobre o projeto
│   └── index.css           # Estilos globais e design system
├── main.py                  # Script Python principal
├── data/                    # Dados baixados (gerado automaticamente)
└── outputs/                 # Visualizações geradas (gerado automaticamente)
```

## 🎨 Design System

O projeto utiliza um design system profissional focado em visualização de dados:
- **Cores primárias**: Azuis profundos para profissionalismo
- **Cores secundárias**: Teal/ciano para modernidade
- **Cores regionais**: Mapeadas de acordo com as regiões brasileiras
  - Norte: Verde
  - Nordeste: Laranja/Vermelho
  - Centro-Oeste: Amarelo
  - Sudeste: Roxo
  - Sul: Azul

## 📊 Fonte dos Dados

Dataset: COVID-19 Brasil por Wesley Cota
URL: https://github.com/wcota/covid19br

Os dados são baixados automaticamente pelo script Python e incluem:
- Casos confirmados por estado
- Óbitos por estado
- Período: Fevereiro 2020 - Março 2023
- Atualização: Dados históricos consolidados

## 🛠️ Tecnologias Utilizadas

### Frontend
- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- React Router
- Lucide Icons

### Backend
- Python 3.8+
- Pandas - Análise de dados
- Matplotlib - Gráficos estáticos
- Seaborn - Visualizações estatísticas
- Plotly - Gráficos interativos
- NetworkX - Análise de redes
- Flask - API REST (opcional)

## 📖 Funcionalidades

### Interface Web
- ✅ Navegação intuitiva entre seções
- ✅ Seleção de tipo de visualização
- ✅ Visualização de relatório completo
- ✅ Design responsivo
- ✅ Modo de demonstração (funciona sem backend)
- ⏳ Download de gráficos (requer backend)
- ⏳ Geração dinâmica de visualizações (requer backend)

### Visualizações Disponíveis
1. **Gráfico de Barras**: Casos totais por estado (Top 15)
2. **Série Temporal**: Evolução de casos por região
3. **Treemap**: Distribuição hierárquica região → estado
4. **Grafo**: Rede de similaridade entre estados

## 📝 Licença

Projeto Acadêmico - 2025
Desenvolvido por Davi Costa para a disciplina de Visualização da Informação
