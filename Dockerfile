# Use uma imagem base do nginx
FROM nginx:alpine

# Instalar Node.js e npm para usar o live-server
RUN apk add --no-cache nodejs npm

# Instalar live-server globalmente para hot reload
RUN npm install -g live-server

# Criar diretório de trabalho
WORKDIR /usr/share/nginx/html

# Copiar arquivos do projeto
COPY . .

# Expor porta 8080 para o live-server
EXPOSE 8080

# Comando para iniciar o live-server com hot reload
CMD ["live-server", "--host=0.0.0.0", "--port=8080", "--no-browser"]