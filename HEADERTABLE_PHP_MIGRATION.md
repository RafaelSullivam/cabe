# 🔄 Migração HeaderTable: PHP → React TypeScript

## 📋 Resumo das Alterações

O componente `HeaderTable` foi **completamente reescrito** para corresponder exatamente ao código PHP original (`headerTemplate.php` e `headerStyles.css.php`).

---

## ✅ Alterações Implementadas

### 1. **Estrutura HTML → JSX**

#### **Antes (React customizado):**
```tsx
<div className="header-table-model">
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <div className="header-logo">
      <img src="images/geocontrole.png" width="195px" />
    </div>
    <div className="header-amostra">
      AMOSTRA Nº: {codSample} / {numberSample}
    </div>
  </div>
  <table className="tg-cabecalho">
    {/* Estrutura simplificada */}
  </table>
</div>
```

#### **Depois (Idêntico ao PHP):**
```tsx
<header>
  <div style={{ display: 'inline-block', width: '539px', paddingTop: '10px' }}>
    <img src="images/geocontrole.png" width="195px" />
  </div>
  <div className="header-amostra">
    AMOSTRA Nº: {codSample} / {numberSample}
  </div>
</header>

<main className="main-content">
  <table className="tg-cabecalho">
    {/* Estrutura completa igual ao PHP */}
  </table>
</main>
```

---

### 2. **CSS Atualizado**

#### **Adicionado do PHP:**

```css
body {
  margin-top: 1.2cm;
}

@page {
  margin-left: 0.6cm;
  margin-right: 0.3cm;
  margin-top: 0.1cm;
  margin-bottom: 0.1cm;
}

header {
  position: fixed;
  top: 0cm;
  left: 0cm;
  right: 0cm;
  height: 3cm;
}
```

#### **Removido (prefixos desnecessários):**
- `.header-table-model` - Todas as classes agora são globais como no PHP
- `.cliente-logo`, `.cliente-texto`, `.relatorio-texto` - Não existiam no PHP

---

### 3. **Tabela de Cabeçalho Completa**

A tabela agora possui **TODOS os campos** do PHP original:

| Campo | Status |
|-------|--------|
| CLIENTE (com logo) | ✅ Implementado |
| RELATÓRIO ENSAIO | ✅ Implementado |
| QUADRO RESULTADOS | ✅ Implementado |
| PROCESSO / LOTE | ✅ Implementado |
| PROFUNDIDADE (m) | ✅ Implementado |
| DATA DO REGISTRO | ✅ Implementado |
| DATA DE VERIFICAÇÃO | ✅ Implementado |
| SONDAGEM | ✅ Implementado |
| DATUM | ✅ Implementado |
| COORDENADA X | ✅ Implementado |
| COORDENADA Y | ✅ Implementado |
| COORDENADA Z | ✅ Implementado |
| DATA DE CONCLUSÃO | ✅ Implementado |
| APLICAÇÃO | ✅ Implementado |
| OBRA | ✅ Implementado |
| ESPECIFICAÇÃO TÉCNICA | ✅ Implementado |
| LOCAL DA COLETA / ENDEREÇO | ✅ Implementado |

---

### 4. **Classes CSS Aplicadas Corretamente**

#### **Classes do PHP implementadas:**
- `.tg-cabecalho` - Tabela principal
- `.tg-cabecalho-0pky` - Células padrão
- `.tg-cabecalho-p1nr` - Células secundárias
- `.tg-cabecalho-ps66` - Célula específica (Coordenada Z)
- `.cabecalho-resultado-font` - Textos em negrito
- `.header-amostra` - Caixa verde da amostra

---

### 5. **Estilos da Caixa de Amostra**

#### **Antes:**
```css
.header-amostra {
  background-color: #068000;
  padding: 8px 15px;
  border-radius: 4px;
  font-weight: bold;
}
```

#### **Depois (Igual ao PHP):**
```css
.header-amostra {
  width: 212px;
  background-color: green;
  color: #fff;
  display: inline-block;
  font-family: Arial, sans-serif;
  font-size: 13px;
  padding: 2px;
  text-align: center;
}
```

---

## 🎯 Diferenças entre PHP e React

| Aspecto | PHP Original | React TypeScript |
|---------|-------------|------------------|
| **Estrutura** | HTML inline | JSX componente |
| **Dados dinâmicos** | `<?php echo $var ?>` | `{variable}` |
| **Classes CSS** | Globais | Globais (idêntico) |
| **Estilos inline** | `style="..."` | `style={{...}}` |
| **Imagens** | Base64 inline | Props React |
| **Condicionais** | `<?php if (...) ?>` | `{condition ? ... : ...}` |

---

## 📐 Medidas e Espaçamentos (Idênticos ao PHP)

### **Margens da Página:**
- `margin-left`: 0.6cm
- `margin-right`: 0.3cm
- `margin-top`: 0.1cm
- `margin-bottom`: 0.1cm

### **Header Fixo:**
- `position`: fixed
- `height`: 3cm
- `top`: 0cm

### **Main Content:**
- `margin-top`: 10px (igual ao PHP)

### **Tabela:**
- `width`: 100%
- `margin-bottom`: 13px
- `border-collapse`: collapse

---

## 🔧 Props Disponíveis

```typescript
interface HeaderTableProps {
  logo?: string;           // Logo do cliente (base64)
  abntImage?: string;      // Imagem ABNT
  clienteNome?: string;    // Nome do cliente
  relatorioTitulo?: string;    // Título do relatório
  relatorioSubtitulo?: string; // Subtítulo (QUADRO RESULTADOS)
  codSample?: string;      // Código da amostra
  numberSample?: string;   // Número da amostra
}
```

---

## ✨ Melhorias em Relação à Versão Anterior

1. ✅ **Estrutura idêntica** ao PHP original
2. ✅ **Header fixo** para impressão
3. ✅ **Margens corretas** (@page)
4. ✅ **Todos os campos** da tabela implementados
5. ✅ **Classes CSS exatas** do PHP
6. ✅ **Estilos inline** preservados onde necessário
7. ✅ **Background verde** sem border-radius
8. ✅ **Font-sizes precisos** (9px, 10px, 12px, 13px, 15px)
9. ✅ **Padding reduzido** (2px vs 8px)
10. ✅ **Width fixo** na caixa de amostra (212px)

---

## 🚀 Como Usar

```tsx
import HeaderTable from './components/HeaderTable';

function App() {
  return (
    <HeaderTable
      logo={clienteLogoBase64}
      abntImage="/path/to/abnt.png"
      codSample="ABC-123"
      numberSample="001"
    />
  );
}
```

---

## 📊 Resultado Final

A migração foi **100% concluída** com sucesso! 🎉

O componente `HeaderTable.tsx` agora é uma **réplica exata** do código PHP original, mantendo:
- ✅ Estrutura HTML
- ✅ Classes CSS
- ✅ Estilos inline
- ✅ Margens e espaçamentos
- ✅ Formatação para impressão
- ✅ Todos os campos da tabela

**Fonte:** `/home/rafael/git/reportsDocker/PdfModels/`
- `headerTemplate.php`
- `headerStyles.css.php`
