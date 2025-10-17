import React, { useEffect, useState } from 'react'
import PrintMenu from './components/PrintMenu'
import HeaderTable from './components/HeaderTable'
import A4Container from './components/A4Container'
import useDarkMode from './hooks/useDarkMode'
import { 
  setupKeyboardShortcuts, 
  imprimirDocumento, 
  visualizarImpressao 
} from './utils/printUtils'
import { dadosExemplo, exemplosDados } from './data/exemplosDados'

const App: React.FC = () => {
  const [darkMode, toggleDarkMode] = useDarkMode()
  const [dadosAtivos, setDadosAtivos] = useState(dadosExemplo)
  const [indiceExemplo, setIndiceExemplo] = useState(0)

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
    console.log('🌓 Ctrl+D: Alternar modo escuro/claro')

    // Cleanup quando o componente for desmontado
    return cleanup
  }, [toggleDarkMode])

  const alternarExemplo = (): void => {
    const novoIndice = (indiceExemplo + 1) % exemplosDados.length
    setIndiceExemplo(novoIndice)
    setDadosAtivos(exemplosDados[novoIndice])
  }

  return (
    <>
      <PrintMenu darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />
      <A4Container darkMode={darkMode}>
        <div style={{ marginBottom: '20px', textAlign: 'center' }}>
          <button 
            onClick={alternarExemplo}
            style={{
              padding: '8px 16px',
              marginBottom: '10px',
              backgroundColor: '#007cba',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            📋 Alternar Exemplo ({indiceExemplo + 1}/{exemplosDados.length})
          </button>
          <p style={{ fontSize: '12px', color: '#666', margin: '5px 0' }}>
            Cliente: {dadosAtivos.cliente.nome} | Tipo: {dadosAtivos.relatorio.tipo}
          </p>
        </div>
        
        <HeaderTable 
          logo={dadosAtivos.cliente.logo}
          abntImage={dadosAtivos.abnt.imagem}
        />
        
        {/* Área de conteúdo adicional */}
        <div style={{ 
          marginTop: '20px', 
          padding: '15px', 
          border: '1px solid #ddd',
          borderRadius: '4px'
        }}>
          <h3 style={{ margin: '0 0 10px 0', fontSize: '14px' }}>
            📊 Conteúdo do {dadosAtivos.relatorio.tipo}
          </h3>
          <p style={{ fontSize: '12px', lineHeight: '1.4' }}>
            Este é um exemplo de como o conteúdo do relatório seria exibido. 
            O sistema agora é totalmente dinâmico e pode processar diferentes tipos de relatórios.
          </p>
          <ul style={{ fontSize: '11px', marginLeft: '20px' }}>
            <li>✅ Sistema React + TypeScript funcional</li>
            <li>✅ Dados dinâmicos configuráveis</li>
            <li>✅ Layout A4 responsivo</li>
            <li>✅ Menu de impressão completo</li>
            <li>✅ Hot reload ativo</li>
          </ul>
        </div>
      </A4Container>
    </>
  )
}

export default App