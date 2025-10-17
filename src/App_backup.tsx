import React, { useEffect } from 'react'
import PrintMenu from './components/PrintMenu'
import A4Container from './components/A4Container'
import WaterContentModel from './ModelosPDF/WaterContent/WaterContentModel'
import useDarkMode from './hooks/useDarkMode'
import { 
  setupKeyboardShortcuts, 
  imprimirDocumento, 
  visualizarImpressao 
} from './utils/printUtils'
import { exemploWaterContentProps } from './data/waterContentExamples'

const App: React.FC = () => {
  const [darkMode, toggleDarkMode] = useDarkMode()

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
    console.log('🌓 Ctrl+D: Alternar modo escuro/claro')

    // Cleanup quando o componente for desmontado
    return cleanup
  }, [toggleDarkMode])

  const alternarExemplo = (): void => {
    const novoIndice = (indiceExemplo + 1) % exemplosDados.length
    setIndiceExemplo(novoIndice)
    setDadosAtivos(exemplosDados[novoIndice])
  }

  const alternarVisualizacao = (): void => {
    setTipoVisualizacao(prev => prev === 'header' ? 'watercontent' : 'header')
  }

  return (
    <>
      <PrintMenu darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />
      <A4Container darkMode={darkMode}>
        <WaterContentModel {...exemploWaterContentProps} />
      </A4Container>
    </>
  )
}

export default App