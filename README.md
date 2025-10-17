# Projeto Cabeçalho React + TypeScript - Ambiente Docker com Hot Reload

Este projeto configura um ambiente de desenvolvimento com **React.js**, **TypeScript**, **Vite**, **Docker** e hot reload para desenvolvimento web moderno e type-safe.

## ⚛️ **Tecnologias Principais**

- **React 18**: Framework JavaScript moderno
- **TypeScript**: Tipagem estática para JavaScript
- **Vite**: Build tool rápido para desenvolvimento
- **Docker**: Containerização
- **Hot Reload**: Recarregamento automático

## 🚀 Como usar

### Opção 1: Script automatizado
```bash
./start-dev.sh
```

### Opção 2: Docker Compose manual
```bash
# Construir e iniciar o container
docker-compose up --build

# Para rodar em background
docker-compose up -d --build

# Para parar o container
docker-compose down
```

### Opção 3: Docker manual
```bash
# Construir a imagem
docker build -t cabecalho-app .

# Executar o container
docker run -p 8080:8080 -v $(pwd):/usr/share/nginx/html cabecalho-app
```

## 📁 Estrutura do projeto
```
.
├── src/
│   ├── components/         # Componentes React em TypeScript
│   │   ├── PrintMenu.tsx   # Menu de impressão
│   │   ├── HeaderTable.tsx # Tabela de cabeçalho
│   │   └── A4Container.tsx # Container A4
│   ├── hooks/              # Hooks personalizados
│   │   └── useDarkMode.ts  # Hook para modo escuro
│   ├── utils/              # Funções utilitárias
│   │   └── printUtils.ts   # Utilities de impressão
│   ├── types/              # Definições de tipos TypeScript
│   │   └── index.ts        # Tipos principais do projeto
│   ├── App.tsx             # Componente principal
│   ├── main.tsx            # Ponto de entrada
│   ├── index.css           # Estilos globais
│   └── vite-env.d.ts       # Declarações TypeScript para Vite
├── index.html              # HTML principal
├── package.json            # Dependências do projeto
├── tsconfig.json           # Configuração do TypeScript
├── tsconfig.node.json      # Configuração TS para Node.js
├── vite.config.ts          # Configuração do Vite
├── Dockerfile              # Configuração do Docker
├── docker-compose.yml      # Orquestração dos containers
├── start-dev.sh            # Script para iniciar o ambiente
└── stop-dev.sh             # Script para parar o ambiente
```

## 🔄 Hot Reload

O ambiente está configurado com **live-server** que monitora automaticamente as mudanças nos arquivos:

- ✅ Mudanças em HTML são recarregadas automaticamente
- ✅ Mudanças em CSS são recarregadas automaticamente
- ✅ Não é necessário reiniciar o container

## 🌐 Acesso

Após iniciar o ambiente, acesse:
- **URL**: http://localhost:3000
- **Porta**: 3000 (Vite dev server)

## 📝 Comandos úteis

```bash
# Ver logs do container
docker-compose logs -f

# Parar o ambiente
docker-compose down

# Reconstruir o container
docker-compose up --build

# Executar em background
docker-compose up -d
```

## ⚙️ Tecnologias utilizadas

- **Docker**: Containerização
- **Docker Compose**: Orquestração
- **Live Server**: Hot reload
- **Nginx Alpine**: Servidor web leve

## 🏗️ Arquitetura React + TypeScript

O projeto segue as melhores práticas do React moderno com TypeScript:

### ⚛️ **Componentes Tipados:**
- **`PrintMenu.tsx`**: Menu de impressão com tipos seguros
- **`HeaderTable.tsx`**: Tabela de cabeçalho com interfaces definidas
- **`A4Container.tsx`**: Container responsivo tipado

### 🔗 **Hooks Personalizados:**
- **`useDarkMode.ts`**: Hook tipado para tema escuro/claro
- **Keyboard Shortcuts**: Atalhos de teclado com callbacks tipados

### 📝 **Sistema de Tipos:**
- **`types/index.ts`**: Definições centralizadas de tipos
- **Interfaces**: Props, configurações e dados tipados
- **Type Safety**: Prevenção de erros em tempo de compilação

### 🛠️ **Utilities Tipadas:**
- **`printUtils.ts`**: Funções de impressão com tipos seguros
- **Configurações tipadas**: Mensagens e configurações

### ✅ **Vantagens do TypeScript:**
- **Type Safety**: Erros detectados em tempo de compilação
- **IntelliSense**: Autocompletar avançado no editor
- **Refactoring**: Mudanças seguras em toda a codebase
- **Documentação**: Código auto-documentado com tipos
- **Performance**: Otimizações do compilador