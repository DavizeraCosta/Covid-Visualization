import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { BarChart3, FileText, Info, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: ReactNode;
}

const navigation = [
  { name: "Início", href: "/", icon: Home },
  { name: "Visualizações", href: "/visualizacoes", icon: BarChart3 },
  { name: "Relatório", href: "/relatorio", icon: FileText },
  { name: "Sobre", href: "/sobre", icon: Info },
];

export const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center space-x-2">
            <BarChart3 className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              COVID-19 Brasil
            </span>
          </Link>
          
          <nav className="flex items-center space-x-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      <main className="container px-4 py-8">
        {children}
      </main>

      <footer className="mt-auto border-t border-border bg-card">
        <div className="container px-4 py-6 text-center text-sm text-muted-foreground">
          <p>Projeto Acadêmico - Visualização da Informação</p>
          <p className="mt-1">Davi Costa • 2025</p>
          <p className="mt-2 text-xs">
            Dataset:{" "}
            <a
              href="https://github.com/wcota/covid19br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              COVID-19 Brasil (Wesley Cota)
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};
