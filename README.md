# Projeto Cabeçalho - Ambiente Docker com Hot Reload

Este projeto configura um ambiente de desenvolvimento com Docker e hot reload para desenvolvimento web.

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
├── Cabecalho.html      # Arquivo HTML principal
├── style.css           # Estilos CSS
├── Dockerfile          # Configuração do Docker
├── docker-compose.yml  # Orquestração dos containers
└── start-dev.sh        # Script para iniciar o ambiente
```

## 🔄 Hot Reload

O ambiente está configurado com **live-server** que monitora automaticamente as mudanças nos arquivos:

- ✅ Mudanças em HTML são recarregadas automaticamente
- ✅ Mudanças em CSS são recarregadas automaticamente
- ✅ Não é necessário reiniciar o container

## 🌐 Acesso

Após iniciar o ambiente, acesse:
- **URL**: http://localhost:8080
- **Porta**: 8080

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