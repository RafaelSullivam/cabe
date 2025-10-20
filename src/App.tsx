import React, { useEffect, useState } from 'react'
import PrintMenu from './components/PrintMenu'
import A4Container from './components/A4Container'
import ModelSelector from './components/ModelSelector'
import WaterContentModel from './ModelosPDF/WaterContent/WaterContentModel'
import HeaderOnlyModel from './ModelosPDF/HeaderOnly/HeaderOnlyModel'
// import GranulometryModel from './ModelosPDF/Granulometry/GranulometryModel'
import RelatorioSequencial from './components/RelatorioSequencial'
import useDarkMode from './hooks/useDarkMode'
import { 
  setupKeyboardShortcuts, 
  imprimirDocumento, 
  visualizarImpressao 
} from './utils/printUtils'
import { exemploWaterContentProps } from './data/waterContentExamples'

const App: React.FC = () => {
  const [darkMode, toggleDarkMode] = useDarkMode()
  const [selectedModel, setSelectedModel] = useState<string | null>(null)

  useEffect(() => {
    // Configurar atalhos de teclado
    const cleanup = setupKeyboardShortcuts({
      onPrint: imprimirDocumento,
      onPreview: visualizarImpressao,
      onToggleDarkMode: toggleDarkMode,
    })

    // Mostrar atalhos no console
    console.log('🎯 Atalhos disponíveis:')
    console.log('📄 Ctrl+P: Imprimir')
    console.log('👁️ Ctrl+Shift+P: Visualizar impressão')
    console.log('🌙 Ctrl+D: Alternar tema escuro')
    
    return cleanup
  }, [toggleDarkMode])

  const handleModelSelect = (modelId: string) => {
    setSelectedModel(modelId)
  }

  const handleBackToSelection = () => {
    setSelectedModel(null)
  }

  const renderSelectedModel = () => {
    switch (selectedModel) {
      case 'water-content':
        return <WaterContentModel {...exemploWaterContentProps} />
      case 'header-only':
        return <HeaderOnlyModel />
      // case 'granulometry':
      //   return <GranulometryModel />
      case 'relatorio-sequencial':
        return <RelatorioSequencial onBackToSelection={handleBackToSelection} />
      default:
        return null
    }
  }

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      {/* Seletor de modelo ou modelo selecionado */}
      {!selectedModel ? (
        <ModelSelector onModelSelect={handleModelSelect} />
      ) : selectedModel === 'relatorio-sequencial' ? (
        <RelatorioSequencial onBackToSelection={handleBackToSelection} />
      ) : (
        <>
          <PrintMenu 
            darkMode={darkMode} 
            onToggleDarkMode={toggleDarkMode}
            onBackToSelection={handleBackToSelection}
          />
          <A4Container darkMode={darkMode}>
            {renderSelectedModel()}
          </A4Container>
        </>
      )}
    </div>
  )
}

export default App