import { KeyboardCallbacks, SystemMessages } from '../types'

// Configurações e mensagens
export const MESSAGES: SystemMessages = {
  pdfInstructions: '💡 Dica: Para salvar como PDF:\n\n1. Clique em "Imprimir Documento"\n2. Na janela de impressão, escolha "Salvar como PDF"\n3. Escolha o local para salvar',
  copySuccess: '✅ Conteúdo copiado para a área de transferência!',
  copyError: '❌ Erro ao copiar. Tente selecionar o texto manualmente.',
}

// Função para imprimir o documento
export const imprimirDocumento = (): void => {
  window.print()
}

// Função para visualizar impressão
export const visualizarImpressao = (): void => {
  window.print()
}

// Função para salvar como PDF
export const imprimirPDF = (): void => {
  alert(MESSAGES.pdfInstructions)
  window.print()
}

// Função para copiar conteúdo
export const copiarDocumento = async (selector: string): Promise<void> => {
  try {
    const elemento = document.querySelector(selector)
    if (!elemento) {
      throw new Error('Elemento não encontrado')
    }

    const conteudo = elemento.textContent || ''
    await navigator.clipboard.writeText(conteudo)
    alert(MESSAGES.copySuccess)
  } catch (error) {
    console.error('Erro ao copiar:', error)
    alert(MESSAGES.copyError)
  }
}

// Adicionar atalhos de teclado
export const setupKeyboardShortcuts = (callbacks: KeyboardCallbacks): (() => void) => {
  const handleKeyDown = (e: KeyboardEvent): void => {
    // Ctrl+P para imprimir
    if (e.ctrlKey && e.key === 'p') {
      e.preventDefault()
      callbacks.onPrint()
    }
    
    // Ctrl+Shift+P para visualizar
    if (e.ctrlKey && e.shiftKey && e.key === 'P') {
      e.preventDefault()
      callbacks.onPreview()
    }
    
    // Ctrl+D para modo escuro
    if (e.ctrlKey && e.key === 'd') {
      e.preventDefault()
      callbacks.onToggleDarkMode()
    }
  }

  document.addEventListener('keydown', handleKeyDown)
  
  // Retorna função de cleanup
  return (): void => {
    document.removeEventListener('keydown', handleKeyDown)
  }
}