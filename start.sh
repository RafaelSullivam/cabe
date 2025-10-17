#!/bin/bash

echo "⚛️ Iniciando o ambiente React com Docker..."

# Verificar se o Docker está rodando
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker não está rodando. Por favor, inicie o Docker primeiro."
    exit 1
fi

# Construir e iniciar o container
echo "📦 Construindo e iniciando o container React..."
docker-compose up --build

echo "✅ Ambiente React iniciado! Acesse http://localhost:3000 no seu navegador"
echo "🔄 O hot reload está ativo - suas mudanças serão refletidas automaticamente"
echo "⚛️ React + Vite para desenvolvimento rápido"