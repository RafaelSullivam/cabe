/* 
 * Configurações gerais do projeto
 * Arquivo para centralizar configurações e constantes
 */

// Configurações do menu
const CONFIG_MENU = {
  position: 'top-right',
  animation: true,
  showOnPrint: false
};

// Configurações de impressão
const CONFIG_PRINT = {
  pageSize: 'A4',
  margins: '20mm',
  orientation: 'portrait'
};

// Configurações de tema
const CONFIG_THEME = {
  darkMode: {
    background: '#2c2c2c',
    containerBg: '#3c3c3c',
    textColor: '#ffffff'
  },
  lightMode: {
    background: '#e5e5e5',
    containerBg: 'white',
    textColor: 'black'
  }
};

// Mensagens do sistema
const MESSAGES = {
  pdfInstructions: '💡 Dica: Para salvar como PDF:\n\n1. Clique em "Imprimir Documento"\n2. Na janela de impressão, escolha "Salvar como PDF"\n3. Escolha o local para salvar',
  copySuccess: '✅ Conteúdo copiado para a área de transferência!',
  copyError: '❌ Erro ao copiar. Tente selecionar o texto manualmente.',
  menuLoadError: 'Erro ao carregar o menu:'
};

// Exportar configurações (se usando módulos)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    CONFIG_MENU,
    CONFIG_PRINT,
    CONFIG_THEME,
    MESSAGES
  };
}