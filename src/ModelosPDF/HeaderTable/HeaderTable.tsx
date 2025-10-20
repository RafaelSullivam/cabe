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
  relatorioSubtitulo = "QUADRO RESULTADOS",
  codSample = "",
  numberSample = ""
}) => {
  // Logo do cliente (simula a lógica PHP)
  const logoElement = logo ? (
    <img
      src={`data:image/png;base64,${logo}`}
      width="60px"
      height="40px"
      alt="Logo do cliente"
    />
  ) : null

  return (
    <>      
      <table className="tg-cabecalho">
        <thead>
          {/* Header com logo e amostra */}
          <tr>
            <th colSpan={4} style={{ border: 'none', padding: '10px 0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <img src="images/geocontrole.png" width="195px" alt="Geocontrole" />
                </div>
                <div className="header-amostra">
                  AMOSTRA Nº: {codSample} / {numberSample}
                </div>
              </div>
            </th>
          </tr>
          
          {/* Linha original da tabela */}
          <tr>
            <th className="tg-cabecalho-0pky col-1" colSpan={2} rowSpan={2}>
              CLIENTE:
              <br />
              {logoElement}
            </th>
            <th className="tg-cabecalho-0pky col-3" colSpan={2}>
              {relatorioTitulo}:
              <div style={{ marginLeft: '21%', fontSize: '15px', marginTop: '-6px' }}>
                {relatorioSubtitulo}
              </div>
            </th>
          </tr>
          <tr>
            <th className="tg-cabecalho-0pky col-2" colSpan={1}>
              PROCESSO / LOTE:<br />
              <div style={{ textAlign: 'center', fontSize: '13px', marginTop: '4px' }} className="cabecalho-resultado-font"></div>
            </th>
            <th className="tg-cabecalho-p1nr">
              PROFUNDIDADE (m):<br />
              <div style={{ textAlign: 'center', fontSize: '13px', marginTop: '4px' }} className="cabecalho-resultado-font"></div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="tg-cabecalho-0pky col-2" colSpan={1} rowSpan={4}>
              DATA DO REGISTRO:
              <div style={{ marginTop: '15px' }}>
                <span className="cabecalho-resultado-font"></span>
              </div>
            </td>
            <td className="tg-cabecalho-0pky col-2" colSpan={1} rowSpan={4}>
              DATA DE VERIFICAÇÃO:
              <div style={{ marginTop: '15px' }}>
                <span className="cabecalho-resultado-font"></span>
              </div>
            </td>
            <td className="tg-cabecalho-0pky col-3" rowSpan={4}>
              SONDAGEM:<br />
              <div style={{ textAlign: 'center', fontSize: '12px', marginTop: '9px' }}>
                <b><span className="cabecalho-resultado-font"></span></b>
              </div>
            </td>
            <td className="tg-cabecalho-p1nr">**DATUM:</td>
          </tr>
          <tr>
            <td className="tg-cabecalho-p1nr">
              **COORDENADA X: <span className="cabecalho-resultado-font"></span>
            </td>
          </tr>
          <tr>
            <td className="tg-cabecalho-p1nr">
              **COORDENADA Y: <span className="cabecalho-resultado-font"></span>
            </td>
          </tr>
          <tr>
            <td className="tg-cabecalho-ps66">
              **COORDENADA Z: <span className="cabecalho-resultado-font"></span>
            </td>
          </tr>
          <tr>
            <td className="tg-cabecalho-0pky" rowSpan={2}>
              DATA DE CONCLUSÃO:
              <div style={{ marginTop: '15px' }}>
                <span className="cabecalho-resultado-font"></span>
              </div>
              <br />
            </td>
            <td className="tg-cabecalho-0pky" rowSpan={2}>
              **APLICAÇÃO:
              <div style={{ marginTop: '15px' }}>
                <span className="cabecalho-resultado-font"></span>
              </div>
            </td>
            <td className="tg-cabecalho-0pky col-3">
              **OBRA: <br />
              <div style={{ textAlign: 'center', fontSize: '12px', marginTop: '0px' }}>
                <b><span className="cabecalho-resultado-font"></span></b>
              </div>
            </td>
            <td className="tg-cabecalho-p1nr" rowSpan={2}>
              **ESPECIFICAÇÃO TÉCNICA: <span className="cabecalho-resultado-font"></span>
            </td>
          </tr>
          <tr>
            <td className="tg-cabecalho-0pky">
              **LOCAL DA COLETA / ENDEREÇO: <br />
              <div style={{ textAlign: 'center', fontSize: '12px' }}>
                <span className="cabecalho-resultado-font"></span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default HeaderTable