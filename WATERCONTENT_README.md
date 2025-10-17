# WaterContentModel - Documentação

## 📋 Visão Geral

O `WaterContentModel` é uma conversão completa do código PHP `WaterContentModel.php` para React TypeScript. Este componente gera relatórios de **Determinação do Teor de Umidade do Solo** seguindo a norma ABNT NBR 6457/2016.

## 🏗️ Arquitetura

### Tipos TypeScript (`waterContentTypes.ts`)
- `WaterContentData`: Dados do ensaio (cápsulas, massas, temperaturas)
- `HeaderAndFooterData`: Informações do projeto (coordenadas, obra, sondagem)
- `SignatureData`: Dados das assinaturas digitais
- `WaterContentModelProps`: Props do componente principal

### Componente Principal (`WaterContentModel.tsx`)
- Renderização completa do relatório
- Tabelas de dados formatadas
- Seções de assinaturas
- Footer com informações da empresa

### Dados de Exemplo (`waterContentExamples.ts`)
- Exemplos pré-configurados para teste
- Função utilitária para cálculos automáticos
- Dados realistas para demonstração

## 🔧 Funcionalidades

### ✅ Migradas do PHP
1. **Estrutura HTML completa** - Layout idêntico ao original
2. **Tabelas de dados** - Cápsulas, massas, teores de umidade
3. **Cálculos automáticos** - Massa da água, solo seco, teores
4. **Seções de assinatura** - Executador, verificador, aprovador
5. **Footer corporativo** - Informações da Geocontrole
6. **Checkboxes de temperatura** - 60º/65º e 105º/110º
7. **Tabela de incertezas** - Resultados estatísticos

### 🚀 Melhorias Implementadas
1. **TypeScript** - Tipagem forte e segurança
2. **Componente React** - Reutilização e manutenibilidade
3. **Props configuráveis** - Dados dinâmicos
4. **Cálculos automáticos** - Função utilitária
5. **Responsividade** - Adaptação a diferentes telas

## 📊 Uso

### Básico
```tsx
import WaterContentModel from './components/WaterContentModel';
import { exemploWaterContentProps } from './data/waterContentExamples';

<WaterContentModel {...exemploWaterContentProps} />
```

### Personalizado
```tsx
const meusDados: WaterContentModelProps = {
  dataRehearsal: {
    Executado: "João Silva",
    NormaEnsaio: "ABNT NBR 6457/2016",
    Capsula1: "C-001",
    MassaUmida1: "45.67",
    // ... outros dados
  },
  dataHeaderAndFooter: {
    Processo: "PR-2025-001",
    Obra: "Minha Obra",
    // ... outros dados
  },
  observation: "Observações do ensaio",
  pagina: 1,
  totalPaginas: 1,
  dataFormatada: "17/10/2025"
};

<WaterContentModel {...meusDados} />
```

## 🧮 Cálculos Automáticos

A função `calcularDadosWaterContent()` calcula automaticamente:

1. **Massa da Água** = Massa Úmida - Massa Seca
2. **Massa do Solo Seco** = Massa Seca - Massa Cápsula  
3. **Teor de Umidade** = (Massa Água / Massa Solo Seco) × 100
4. **Média dos Teores** = Soma dos teores ÷ 4

## 🎨 Integração na Aplicação

No `App.tsx`, implementamos:
- **Botão toggle** para alternar entre Header e WaterContent
- **Visualização condicional** baseada no estado
- **Dados de exemplo** pré-carregados
- **Interface responsiva** com controles intuitivos

## 🔄 Comparação PHP → TypeScript

| Funcionalidade | PHP Original | TypeScript React |
|---|---|---|
| Geração HTML | String concatenation | JSX Components |
| Dados | Arrays PHP | TypeScript Interfaces |
| Estilos | Inline CSS | CSS-in-JS + Classes |
| Assinaturas | Base64 direto | Props tipadas |
| Cálculos | Inline no template | Função utilitária |
| Reutilização | Classe única | Componente React |

## 📱 Interface do Usuário

1. **Botão "Mostrar Water Content"** - Alterna para o relatório
2. **Botão "Mostrar Header"** - Volta ao cabeçalho original  
3. **Dados dinâmicos** - Informações contextuais
4. **Layout A4** - Formatação para impressão
5. **Hot reload** - Desenvolvimento em tempo real

## 🎯 Próximos Passos

1. **Integração com API** - Conectar com dados reais
2. **Validação de dados** - Validação de entrada
3. **Exportação PDF** - Geração de relatórios
4. **Múltiplas páginas** - Relatórios extensos
5. **Assinaturas digitais** - Integração com certificados

## ✅ Status da Migração

- ✅ **Estrutura HTML** - 100% migrada
- ✅ **Dados dinâmicos** - Implementado
- ✅ **Cálculos** - Função utilitária criada  
- ✅ **Estilos CSS** - Convertidos para React
- ✅ **TypeScript** - Tipagem completa
- ✅ **Componente funcional** - Pronto para uso
- ✅ **Integração App** - Interface implementada

A conversão PHP → TypeScript foi **100% concluída** com sucesso! 🎉