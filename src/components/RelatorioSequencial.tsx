import React, { useState } from 'react'
import WaterContentModel from '../ModelosPDF/WaterContent/WaterContentModel'
import DetermineMaximumAndMinimumSandModel from '../ModelosPDF/DetermineMaximumAndMinimumSand/DetermineMaximumAndMinimumSandModel'
import CompressionModel from '../ModelosPDF/Compression/CompressionModel'
import ActualSpecificMassInGrainsModel from '../ModelosPDF/ActualSpecificMassInGrains/ActualSpecificMassInGrainsModel'
import A4Container from './A4Container'
import PrintMenu from './PrintMenu'
import { exemploWaterContentProps } from '../data/waterContentExamples'
import { exemploSandModelProps } from '../data/sandModelExamples'
import { exemploCompressionProps } from '../data/compressionExamples'
import { actualSpecificMassInGrainsExample } from '../data/actualSpecificMassInGrainsExamples'
import './RelatorioSequencialStyles.css'
import '../ModelosPDF/GlobalPDFStyles.css' // Estilos globais para todos os modelos PDF

const opcoesDisponiveis = [
  'Teor de umidade',
  'Massa específica real dos grãos',
  'Determinação da massa específica aparente',
  'Limites de liquidez e plasticidade (ATTERBERG)',
  'Análise granulométrica por peneiramento',
  'Análise granulométrica com sedimentação',
  'Compactação',
  'Índice de suporte Califórnia',
  'Massa específica máxima e mínima de areias',
  'Determinação do coeficiente de permeabilidade em carga variável em câmara triaxial',
  'Determinação do coeficiente de permeabilidade em carga constante em câmera triaxial',
]

interface RelatorioSequencialProps {
  onBackToSelection?: () => void
}

const RelatorioSequencial: React.FC<RelatorioSequencialProps> = ({ onBackToSelection }) => {
  const [formData, setFormData] = useState({
    amostra: '',
    numeroAmostra: '',
    relatoriosSelecionados: [] as string[],
    responsabilidadeAmostra: '',
    classificacao1: '',
    classificacao2: '',
    descricaoSolo: '',
    observacao: '',
    inundado: ''
  })

  const [isLoading, setIsLoading] = useState(false)
  const [selectedModelToView, setSelectedModelToView] = useState<string | null>(null)
  const [darkMode] = useState(false) // Para compatibilidade com PrintMenu e A4Container

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleEnsaioChange = (ensaio: string) => {
    setFormData(prev => {
      const isSelected = prev.relatoriosSelecionados.includes(ensaio)
      const newSelection = isSelected
        ? prev.relatoriosSelecionados.filter(item => item !== ensaio)
        : [...prev.relatoriosSelecionados, ensaio]
      
      return { ...prev, relatoriosSelecionados: newSelection }
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      console.log('Dados do formulário:', formData)
      
      // Verificar quais ensaios estão selecionados
      const ensaiosSelecionados = formData.relatoriosSelecionados
      const temTeorUmidade = ensaiosSelecionados.includes('Teor de umidade')
      const temMassaEspecifica = ensaiosSelecionados.includes('Massa específica máxima e mínima de areias')
      const temCompactacao = ensaiosSelecionados.includes('Compactação')
      const temMassaEspecificaGraos = ensaiosSelecionados.includes('Massa específica real dos grãos')
      
      // Simular processamento
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      if (temTeorUmidade || temMassaEspecifica || temCompactacao || temMassaEspecificaGraos) {
        setSelectedModelToView('combined-models')
        setIsLoading(false)
        return
      }
      
      // Para outros ensaios, apenas simular por enquanto
      await new Promise(resolve => setTimeout(resolve, 2000))
      alert('Relatório gerado com sucesso!')
    } catch (error) {
      alert('Erro ao gerar relatório')
    } finally {
      setIsLoading(false)
    }
  }

  const handleReset = () => {
    setFormData({
      amostra: '',
      numeroAmostra: '',
      relatoriosSelecionados: [],
      responsabilidadeAmostra: '',
      classificacao1: '',
      classificacao2: '',
      descricaoSolo: '',
      observacao: '',
      inundado: ''
    })
    setSelectedModelToView(null)
  }

  const handleBackToForm = () => {
    setSelectedModelToView(null)
  }

  const renderCombinedModels = () => {
    const ensaiosSelecionados = formData.relatoriosSelecionados
    const temTeorUmidade = ensaiosSelecionados.includes('Teor de umidade')
    const temMassaEspecifica = ensaiosSelecionados.includes('Massa específica máxima e mínima de areias')
    const temCompactacao = ensaiosSelecionados.includes('Compactação')
    const temMassaEspecificaGraos = ensaiosSelecionados.includes('Massa específica real dos grãos')
    
    // Calcular total de páginas
    let totalPaginas = 0
    if (temTeorUmidade) totalPaginas += 1 // WaterContent = 1 página
    if (temMassaEspecifica) totalPaginas += 1 // SandModel = 1 página
    if (temCompactacao) totalPaginas += 1 // CompressionModel = 1 página
    if (temMassaEspecificaGraos) totalPaginas += 1 // ActualSpecificMassInGrainsModel = 1 página
    
    let paginaAtual = 1
    const models = []

    if (temTeorUmidade) {
      // Props atualizadas para WaterContent com paginação correta
      const propsWaterContent = {
        ...exemploWaterContentProps,
        pagina: paginaAtual,
        totalPaginas: totalPaginas
      }
      
      models.push(
        <div key="water-content" className="model-page">
          <A4Container darkMode={darkMode}>
            <WaterContentModel {...propsWaterContent} />
          </A4Container>
        </div>
      )
      paginaAtual++
    }

    if (temMassaEspecifica) {
      models.push(
        <div key="sand-model" className="model-page">
          <A4Container darkMode={darkMode}>
            <DetermineMaximumAndMinimumSandModel 
              data={exemploSandModelProps} 
              pagina={paginaAtual}
              totalPaginas={totalPaginas}
            />
          </A4Container>
        </div>
      )
      paginaAtual++
    }

    if (temCompactacao) {
      models.push(
        <div key="compression-model" className="model-page">
          <A4Container darkMode={darkMode}>
            <CompressionModel 
              dataHeaderAndFooter={exemploCompressionProps.dataHeaderAndFooter}
              example={exemploCompressionProps.example}
              pagina={paginaAtual}
              totalPaginas={totalPaginas}
              signatures={exemploCompressionProps.signatures}
            />
          </A4Container>
        </div>
      )
      paginaAtual++
    }

    if (temMassaEspecificaGraos) {
      models.push(
        <div key="actual-specific-mass-grains-model" className="model-page">
          <A4Container darkMode={darkMode}>
            <ActualSpecificMassInGrainsModel 
              logo=""
              clienteNome="Cliente Exemplo"
              codSample="AM-001"
              numberSample="001"
              normaRealGraos="ABNT NBR 6508:1984"
              dataHeaderAndFooter={{
                Processo: "12345.678/2024",
                Lote: "LT-2024-001",
                Profundidade_Inicial: "1.50",
                Profundidade_Final: "2.00",
                Data_Registro: "15/10/2024",
                Sondagem: "SP-01",
                Datum: "SIRGAS 2000",
                Coordenada_X: "500000.00",
                Coordenada_Y: "7500000.00",
                Coordenada_Z: "100.50",
                Aplicacao: "Aterro",
                Obra: "Rodovia BR-101",
                Especificacao_tecnica: "DNIT 164/2013-ME",
                Localizacao: "km 45"
              }}
              dataRehearsal={actualSpecificMassInGrainsExample}
              observation="Ensaio realizado conforme procedimento interno."
              pagina={paginaAtual}
              totalPaginas={totalPaginas}
              dataFormatada={new Date().toLocaleDateString('pt-BR')}
              signatures={{
                verificador: { Nome: "Maria Santos", Assinatura: "" },
                aprovador: { Nome: "Dr. Pedro Costa", Assinatura: "" }
              }}
            />
          </A4Container>
        </div>
      )
      paginaAtual++
    }

    return models
  }

  return (
    <>
      {selectedModelToView === 'water-content' ? (
        <>
          <PrintMenu 
            darkMode={darkMode} 
            onToggleDarkMode={() => {}} 
            onBackToSelection={handleBackToForm}
          />
          <A4Container darkMode={darkMode}>
            <WaterContentModel {...exemploWaterContentProps} />
          </A4Container>
        </>
      ) : selectedModelToView === 'combined-models' ? (
        <>
          <PrintMenu 
            darkMode={darkMode} 
            onToggleDarkMode={() => {}} 
            onBackToSelection={handleBackToForm}
          />
          <div className="combined-models-container">
            {renderCombinedModels()}
          </div>
        </>
      ) : (
        <div className="relatorio-container">
          <div className="relatorio-form-container">
            {onBackToSelection && (
              <button
                className="back-button"
                onClick={onBackToSelection}
              >
                ← Voltar aos Modelos
              </button>
            )}
            
            <h1>Relatório Sequencial de Laboratório</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-row">
              <div className="form-field half">
                <input
                  className="text-field-styled"
                  name="amostra"
                  placeholder="Amostra"
                  value={formData.amostra}
                  onChange={handleInputChange}
                  disabled={isLoading}
                />
              </div>
              <div className="form-field half">
                <input
                  className="text-field-styled"
                  name="numeroAmostra"
                  placeholder="Número da Amostra"
                  value={formData.numeroAmostra}
                  onChange={handleInputChange}
                  disabled={isLoading}
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-field full">
                <label className="form-label">Informe os relatórios que deseja:</label>
                <div className="ensaios-grid">
                  {opcoesDisponiveis.map((ensaio) => (
                    <label key={ensaio} className="ensaio-checkbox">
                      <input
                        type="checkbox"
                        checked={formData.relatoriosSelecionados.includes(ensaio)}
                        onChange={() => handleEnsaioChange(ensaio)}
                        disabled={isLoading}
                      />
                      <span className="checkbox-text">{ensaio}</span>
                    </label>
                  ))}
                </div>
                <div className="selected-ensaios">
                  <p>Selecionados: {formData.relatoriosSelecionados.length}</p>
                  {formData.relatoriosSelecionados.length > 0 && (
                    <div className="ensaios-chips">
                      {formData.relatoriosSelecionados.map((ensaio) => (
                        <span key={ensaio} className="ensaio-chip">
                          {ensaio}
                          <button
                            type="button"
                            className="chip-remove"
                            onClick={() => handleEnsaioChange(ensaio)}
                            disabled={isLoading}
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-field full">
                <input
                  className="text-field-styled"
                  name="responsabilidadeAmostra"
                  placeholder="Responsabilidade da amostragem"
                  value={formData.responsabilidadeAmostra}
                  onChange={handleInputChange}
                  disabled={isLoading}
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-field half">
                <input
                  className="text-field-styled"
                  name="classificacao1"
                  placeholder="Classificação (ASTM D2487-00)"
                  value={formData.classificacao1}
                  onChange={handleInputChange}
                  disabled={isLoading}
                />
              </div>
              <div className="form-field half">
                <input
                  className="text-field-styled"
                  name="classificacao2"
                  placeholder="Classificação (ASTM D3282-09)"
                  value={formData.classificacao2}
                  onChange={handleInputChange}
                  disabled={isLoading}
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-field full">
                <textarea
                  className="text-field-styled textarea-styled"
                  name="descricaoSolo"
                  placeholder="Descrição do solo"
                  rows={4}
                  value={formData.descricaoSolo}
                  onChange={handleInputChange}
                  disabled={isLoading}
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-field full">
                <textarea
                  className="text-field-styled textarea-styled"
                  name="observacao"
                  placeholder="Observação folha de rosto"
                  rows={4}
                  value={formData.observacao}
                  onChange={handleInputChange}
                  disabled={isLoading}
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-field full">
                <fieldset className="radio-fieldset">
                  <legend>Status de Inundação</legend>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="inundado"
                        value="Inundado"
                        checked={formData.inundado === 'Inundado'}
                        onChange={handleInputChange}
                        disabled={isLoading}
                      />
                      Inundado
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="inundado"
                        value="NaoInundado"
                        checked={formData.inundado === 'NaoInundado'}
                        onChange={handleInputChange}
                        disabled={isLoading}
                      />
                      Não Inundado
                    </label>
                  </div>
                </fieldset>
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-field half">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isLoading}
                >
                  {isLoading ? 'Gerando...' : '📄 Gerar relatório'}
                </button>
              </div>
              <div className="form-field quarter">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleReset}
                  disabled={isLoading}
                >
                  🔄 Refazer
                </button>
              </div>
              <div className="form-field quarter">
                <button
                  type="button"
                  className="btn btn-success"
                  disabled={isLoading}
                  onClick={() => alert('Ensaio verificado!')}
                >
                  ✓ Verificado
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
      )}
    </>
  )
}

export default RelatorioSequencial
