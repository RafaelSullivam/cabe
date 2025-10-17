import React from 'react'
import './HeaderTableStyles.css'

interface HeaderTableProps {
  logo?: string;
  abntImage?: string;
  clienteNome?: string;
  relatorioTitulo?: string;
  relatorioSubtitulo?: string;
  codSample?: string;
  numberSample?: string;
}

const HeaderTable: React.FC<HeaderTableProps> = ({ 
  logo, 
  abntImage,
  clienteNome = "CLIENTE",
  relatorioTitulo = "RELATÓRIO ENSAIO",
  relatorioSubtitulo = "DETERMINAÇÃO DO TEOR DE UMIDADE DO SOLO",
  codSample = "",
  numberSample = ""
}) => {
  // Simula a lógica PHP do HTML original
  const logoElement = logo ? (
    <img
      style={{ marginLeft: '30%' }}
      src={`data:image/png;base64,${logo}`}
      width="60px"
      height="40px"
      alt="Logo do cliente"
    />
  ) : (
    <div
      style={{
        width: '60px',
        height: '80px',
        backgroundColor: '#ccc',
        display: 'inline-block'
      }}
    />
  )

  // Elemento ABNT (simula $abntImageHtml)
  const abntElement = abntImage ? (
    <img 
      src={abntImage} 
      alt="ABNT" 
      style={{ maxWidth: '50px' }} 
    />
  ) : null

  return (
  <>
        
    <main >
      
    <div className="header-table-model">
    <header>
      <div className="header-logo" style={{ display: 'inline-block', width: '539px', paddingTop: '20px' }}>
        <img src="images/geocontrole.png" width="195px" />
      </div>
      <div className="header-amostra" style={{ width: '212px', backgroundColor: 'green', color: '#fff', display: 'inline-block', fontFamily: 'Arial, sans-serif', fontSize: '13px', padding: '2px', textAlign: 'center' }}>
        AMOSTRA Nº: {codSample} / {numberSample}
      </div>
    </header>
    
  
      <table className="tg-cabecalho">
      <thead>
        <tr>
          <th className="cliente-logo" colSpan={1} rowSpan={2}>
            CLIENTE: <br />
            {logoElement}
          </th>
        </tr>
        <tr>
          <th className="tg-cabecalho-0pky col-2 cliente-texto" colSpan={1} rowSpan={2}>
            CLIENTE: <br />
            {clienteNome}
          </th>

          <th className="tg-cabecalho-0pky col-3 relatorio-texto" colSpan={2}>
            {relatorioTitulo}:
            <div className="relatorio-subtitulo">
              {relatorioSubtitulo}
            </div>
            <div className="abnt-container">
              ABNT NBR 6457/2016 <br />
              {abntElement}
            </div>
          </th>
        </tr>
      </thead>
    </table>
    </div>
    </main>
    
   </>
  )
}

export default HeaderTable