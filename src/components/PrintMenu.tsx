import React from 'react'
import { 
  imprimirDocumento, 
  visualizarImpressao, 
  imprimirPDF, 
  copiarDocumento 
} from '../utils/printUtils'
import { PrintMenuProps } from '../types'

const PrintMenu: React.FC<PrintMenuProps> = ({ darkMode, onToggleDarkMode, onBackToSelection }) => {
  const handleCopiarDocumento = (): void => {
    copiarDocumento('.a4-container')
  }

  return (
    <div className="print-menu">
      <h4>🖨️ Menu de Impressão</h4>
      
      {onBackToSelection && (
        <button 
          className="print-button warning" 
          onClick={onBackToSelection}
        >
          ← Voltar aos Modelos
        </button>
      )}
      
      <button 
        className="print-button primary" 
        onClick={imprimirDocumento}
      >
        📄 Imprimir Documento
      </button>
      
      <button 
        className="print-button secondary" 
        onClick={visualizarImpressao}
      >
        👁️ Visualizar Impressão
      </button>
      
      <button 
        className="print-button secondary" 
        onClick={imprimirPDF}
      >
        📁 Salvar como PDF
      </button>
      
      <button 
        className="print-button success" 
        onClick={handleCopiarDocumento}
      >
        📋 Copiar Conteúdo
      </button>
      
      <button 
        className="print-button secondary" 
        onClick={onToggleDarkMode}
      >
        {darkMode ? '☀️' : '🌓'} {darkMode ? 'Modo Claro' : 'Modo Escuro'}
      </button>
    </div>
  )
}

export default PrintMenu