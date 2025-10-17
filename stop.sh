#!/bin/bash

echo "🛑 Parando o ambiente de desenvolvimento..."

# Parar containers
docker-compose down

echo "🧹 Removendo containers e imagens não utilizadas..."
docker system prune -f

echo "✅ Ambiente parado e limpo!"