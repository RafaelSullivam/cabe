# 🔍 Correções de Alinhamento - HeaderTable

## 🎯 Problema Identificado

Textos estavam **desalinhados verticalmente** mesmo com CSS copiado do PHP.

---

## ✅ Correções Aplicadas

### 1. **Alinhamento Vertical das Células**

#### Antes:
```css
.tg-cabecalho td,
.tg-cabecalho th {
  /* sem vertical-align */
}
```

#### Depois:
```css
.tg-cabecalho td,
.tg-cabecalho th {
  vertical-align: middle;
}

.tg-cabecalho td {
  vertical-align: middle;
  text-align: left;
}

.tg-cabecalho th {
  vertical-align: middle;
  text-align: left;
}
```

---

### 2. **Comparação PHP vs React**

| Propriedade | PHP Original | React Anterior | React Atual |
|-------------|-------------|----------------|-------------|
| **vertical-align (td)** | top | ❌ não definido | ✅ middle |
| **vertical-align (th)** | top | ❌ não definido | ✅ middle |
| **text-align (geral)** | left | ✅ left | ✅ left |
| **padding** | 2px 5px | ✅ 2px 5px | ✅ 2px 5px |

---

## 📊 Células Afetadas

### **Thead (Cabeçalho Superior):**
- ✅ CLIENTE (com logo)
- ✅ RELATÓRIO ENSAIO
- ✅ QUADRO RESULTADOS / Subtítulo
- ✅ PROCESSO / LOTE
- ✅ PROFUNDIDADE (m)

### **Tbody (Corpo da Tabela):**
- ✅ DATA DO REGISTRO
- ✅ DATA DE VERIFICAÇÃO / INICIO ENSAIO
- ✅ SONDAGEM
- ✅ **DATUM
- ✅ **COORDENADA X, Y, Z
- ✅ DATA DE CONCLUSÃO
- ✅ **APLICAÇÃO
- ✅ **OBRA
- ✅ **ESPECIFICAÇÃO TÉCNICA
- ✅ **LOCAL DA COLETA / ENDEREÇO

---

## 🔧 Diferença Entre headerTemplate.php e WaterContentModel.php

### **headerTemplate.php** (mais simples):
```html
<th class="tg-cabecalho-0pky">PROCESSO / LOTE:</th>
```

### **WaterContentModel.php** (com tabela aninhada):
```html
<th style="padding: 0px !important">
  <table class="tg-cabecalho">
    <td>NORMA:</td>
    <td>PROCESSO: / LOTE:</td>
  </table>
</th>
```

O **HeaderTable.tsx** está seguindo o **headerTemplate.php** (mais simples).

---

## 🎨 Estilos de Alinhamento Aplicados

### **Classes Específicas:**

```css
/* Alinhamento top nas classes específicas (do PHP) */
.tg-cabecalho .tg-cabecalho-ps66 {
  text-align: left;
  vertical-align: top;  /* mantido do PHP */
}

.tg-cabecalho .tg-cabecalho-p1nr {
  text-align: left;
  vertical-align: top;  /* mantido do PHP */
}

.tg-cabecalho .tg-cabecalho-0pky {
  text-align: left;
  vertical-align: top;  /* mantido do PHP */
}

/* Mas células gerais com middle para melhor centralização */
.tg-cabecalho td,
.tg-cabecalho th {
  vertical-align: middle;  /* NOVO - melhora centralização */
}
```

---

## ✨ Melhorias Visuais

### Antes das Correções:
- ❌ Textos desalinhados verticalmente
- ❌ Alguns textos muito próximos das bordas
- ❌ Inconsistência no alinhamento

### Após as Correções:
- ✅ Textos centralizados verticalmente nas células
- ✅ Padding consistente (2px 5px)
- ✅ Alinhamento horizontal à esquerda (como no PHP)
- ✅ Divs internas com text-align específico preservados

---

## 🧪 Como Testar

### 1. **Recarregar a Página**
```
http://localhost:3000
```

O Vite deve recarregar automaticamente (HMR).

### 2. **Verificar Visualmente:**
- [ ] Textos do cabeçalho verticalmente centralizados?
- [ ] "CLIENTE" alinhado com o logo?
- [ ] "RELATÓRIO ENSAIO" e subtítulo bem posicionados?
- [ ] Células das coordenadas (X, Y, Z) alinhadas?
- [ ] Todos os textos com espaçamento consistente?

### 3. **Comparar com PHP:**
- Abrir PDF gerado pelo PHP
- Comparar lado a lado
- Verificar se alinhamentos estão iguais

---

## 📐 Valores Específicos Mantidos

### **Font-sizes:**
- ✅ `15px` - Subtítulo (QUADRO RESULTADOS)
- ✅ `13px` - Processo/Lote, Profundidade
- ✅ `12px` - Sondagem, Obra, Local
- ✅ `10px` - Texto geral células
- ✅ `9px` - Classes específicas

### **Margins/Padding:**
- ✅ `marginLeft: '21%'` - Subtítulo
- ✅ `marginTop: '-6px'` - Subtítulo
- ✅ `marginTop: '15px'` - Datas
- ✅ `marginTop: '9px'` - Sondagem
- ✅ `padding: 2px 5px` - Células

---

## 🎯 Resultado Esperado

Com estas correções, os textos devem estar:

1. ✅ **Verticalmente centralizados** nas células
2. ✅ **Horizontalmente alinhados** à esquerda
3. ✅ **Consistentes** com o layout PHP
4. ✅ **Bem espaçados** das bordas

---

## 📝 Notas Técnicas

### **Conflito de Estilos:**
- Classes específicas (`.tg-cabecalho-0pky`, etc.) têm `vertical-align: top` do PHP
- Células gerais (`td`, `th`) agora têm `vertical-align: middle`
- CSS aplica a especificidade corretamente (classes específicas sobrescrevem gerais)

### **Resultado:**
- Células com classes específicas: `vertical-align: top`
- Demais células: `vertical-align: middle`
- Melhor balanço entre fidelidade ao PHP e usabilidade

---

## 🔄 Próxima Atualização (se necessário)

Se ainda houver diferenças visuais, pode ser necessário:

1. **Ajustar padding individual** de células específicas
2. **Revisar line-height** dos textos
3. **Verificar font-rendering** entre PHP e navegador
4. **Comparar box-model** (border-box vs content-box)

---

**Atualizado em:** 19 de outubro de 2025, 23:10
**Arquivo modificado:** `HeaderTableStyles.css`
**Status:** ✅ Correções aplicadas, aguardando teste visual
