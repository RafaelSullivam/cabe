import React from 'react';
import { PDLGraphData } from '../../types/pdlGraphTypes';
import './PDLGraphStyles.css';

interface PDLGraphModelProps {
  data: PDLGraphData;
}

const PDLGraphModel: React.FC<PDLGraphModelProps> = ({ data }) => {
  const aprovadoStyle = data.aprovado ? { backgroundColor: '#c0c0c0', border: '1px solid #000', padding: '4px' } : { border: '1px solid #000', padding: '4px' };
  const reprovadoStyle = !data.aprovado ? { backgroundColor: '#c0c0c0', border: '1px solid #000', padding: '4px' } : { border: '1px solid #000', padding: '4px' };

  return (
    <div className="pdl-graph-container">
      {/* Header */}
      <header className="pdl-graph-header">
        <div className="logo-section">
          <img src="/images/logo.png" alt="Logo Geocontrole" className="logo-image" />
        </div>
        <div className="amostra-box">
          <p>AMOSTRA Nº</p>
          <p className="amostra-number">{data.numeroAmostra}</p>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ marginTop: '45px' }}>
        {/* Cabeçalho Table */}
        <table className="tg-cabecalho">
          <thead>
            <tr>
              <th style={{ width: '31%' }} className="tg-cabecalho-xhtu">
                ENSAIO DE PROCTOR
                <div style={{ fontSize: '18px', marginTop: '4px', marginBottom: '5px' }}>
                  <b>DETERMINAÇÃO DE RESISTÊNCIA À PENETRAÇÃO DINÂMICA LEVE (PDL)</b>
                </div>
              </th>
              <th style={{ width: '21%', whiteSpace: 'nowrap', borderRight: '1px solid #000', verticalAlign: 'top' }} className="tg-cabecalho-0pky">
                NORMA:
                <div style={{ fontSize: '12px', marginLeft: '10px', marginTop: '6px', marginBottom: '5px' }} className="cabecalho-resultado-font">
                  {data.norma}
                </div>
              </th>
              <th style={{ width: '21%', verticalAlign: 'top' }} className="tg-cabecalho-0pky">
                PROCESSO: / LOTE:
                <div style={{ fontSize: '12px', marginTop: '6px', marginLeft: '25px', marginBottom: '5px' }} className="cabecalho-resultado-font">
                  {data.processo}
                </div>
              </th>
              <th style={{ width: '27%', verticalAlign: 'top' }} className="tg-cabecalho-p1nr">
                IDENTIFICAÇÃO:
                <div style={{ textAlign: 'center', fontSize: '12px', marginTop: '7px', marginBottom: '4px' }} className="cabecalho-resultado-font">
                  {data.identificacao}
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ width: '15%' }} colSpan={1} rowSpan={4} className="tg-cabecalho-0pky col-2">
                DATA:
                <div style={{ marginTop: '15px' }}>
                  <span className="cabecalho-resultado-font">{data.data}</span>
                </div>
              </td>
              <td style={{ width: '16%' }} colSpan={1} rowSpan={4} className="tg-cabecalho-0pky col-2">
                ESTACA/POSIÇÃO:
                <div style={{ textAlign: 'center', fontSize: '12px', marginTop: '10px' }}>
                  <span className="cabecalho-resultado-font">{data.estacaPosicao}</span>
                </div>
              </td>
              <td className="tg-cabecalho-0pky col-3" colSpan={2} rowSpan={4}>
                OBRA: <br />
                <div style={{ textAlign: 'center', fontSize: '12px', marginTop: '9px' }}>
                  <b><span className="cabecalho-resultado-font">{data.obra}</span></b>
                </div>
              </td>
              <td className="tg-cabecalho-p1nr">**DATUM: <span className="cabecalho-resultado-font">{data.datum}</span></td>
            </tr>
            <tr>
              <td className="tg-cabecalho-p1nr">**COORDENADA X: <span className="cabecalho-resultado-font">{data.coordenadaX}</span></td>
            </tr>
            <tr>
              <td className="tg-cabecalho-p1nr">**COORDENADA Y: <span className="cabecalho-resultado-font">{data.coordenadaY}</span></td>
            </tr>
            <tr>
              <td className="tg-cabecalho-ps66">**COORDENADA Z: <span className="cabecalho-resultado-font">{data.coordenadaZ}</span></td>
            </tr>
            <tr>
              <td className="tg-cabecalho-0pky" rowSpan={2}>
                CAMADA:
                <div style={{ marginTop: '15px' }}>
                  <div style={{ textAlign: 'center', fontSize: '12px', marginTop: '9px' }}>
                    <span className="cabecalho-resultado-font">{data.camada}</span>
                  </div>
                  <br />
                </div>
              </td>
              <td className="tg-cabecalho-0pky" rowSpan={2}>
                RESPONSÁVEL:
                <div style={{ marginTop: '15px' }}>
                  <div style={{ textAlign: 'center', fontSize: '12px', marginTop: '9px' }}>
                    <span className="cabecalho-resultado-font">{data.responsavel}</span>
                  </div>
                </div>
              </td>
              <td className="tg-cabecalho-0pky col-3" colSpan={2}>
                LOCAL/ÁREA: <br />
                <div style={{ textAlign: 'center', fontSize: '12px', marginTop: '0px' }}>
                  <b><span className="cabecalho-resultado-font">{data.localArea}</span></b>
                </div>
              </td>
              <td className="tg-cabecalho-p1nr" rowSpan={2}>
                **ESPECIFICAÇÃO TÉCNICA:
                <div style={{ textAlign: 'center', fontSize: '12px', marginTop: '10px' }}>
                  <b><span className="cabecalho-resultado-font">{data.especificacaoTecnica}</span></b>
                </div>
              </td>
            </tr>
            <tr>
              <td className="tg-cabecalho-0pky" colSpan={2}>
                MATERIAL: <br />
                <div style={{ textAlign: 'center', fontSize: '12px' }}>
                  <b><span className="cabecalho-resultado-font">{data.material}</span></b>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Graph Section */}
        <table style={{ marginTop: '90px' }}>
          <tbody>
            <tr>
              <td className="tg-0pky" colSpan={15} style={{ borderLeft: 'none', borderRight: 'none', borderTopColor: '#fff', paddingLeft: '0px', paddingRight: '0px', height: '10px' }}>
                <div style={{ border: '1px solid #000', margin: '30px 0px 0px 0px', padding: '5px 5px 0px 5px' }}>
                  <div style={{ width: '50%', marginLeft: '42%', fontFamily: 'Arial, sans-serif', position: 'absolute', zIndex: 1, top: '385px', height: '30px', fontSize: '15px', backgroundColor: '#fff' }}>
                    GRÁFICO PDL
                  </div>
                  <img 
                    src={`data:image/jpeg;base64,${data.graphImage}`} 
                    alt="Gráfico PDL" 
                    width="700px" 
                    height="440px" 
                    style={{ visibility: 'hidden' }} 
                  />
                  <img 
                    src={`data:image/jpeg;base64,${data.graphImage}`} 
                    alt="Gráfico PDL" 
                    width="575px" 
                    height="355px" 
                    style={{ marginTop: '70px' }} 
                    id="imagem-sobrepostaComp" 
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Footer */}
        <footer style={{ bottom: 0, width: '100%', marginTop: '80px', fontFamily: 'Arial, sans-serif', fontSize: '10px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #000', fontFamily: 'inherit', fontSize: 'inherit' }}>
            <tbody>
              <tr>
                <td rowSpan={2} style={{ width: '12%', border: '1px solid #000', padding: '4px', verticalAlign: 'top', textAlign: 'left', height: '16px', paddingTop: '2px' }}>
                  <strong>Status do Ensaio:</strong>
                  <div style={{ textAlign: 'center', fontSize: '10px', marginTop: '9px' }}>
                    <b><span className="cabecalho-resultado-font">{data.statusEnsaio}</span></b>
                  </div>
                </td>
                <td style={aprovadoStyle}>Aprovado</td>
                <td rowSpan={2} style={{ width: '54%', border: '1px solid #000', padding: '4px', verticalAlign: 'top', textAlign: 'left', height: '16px' }}>
                  <strong>Observação:</strong>
                  <div style={{ textAlign: 'center', fontSize: '10px', marginTop: '9px' }}>
                    <b><span className="cabecalho-resultado-font">{data.observacao}</span></b>
                  </div>
                </td>
              </tr>
              <tr>
                <td style={reprovadoStyle}>Reprovado</td>
              </tr>
              <tr>
                <td colSpan={3} style={{ borderLeft: '1px solid #000', borderRight: '1px solid #000', borderBottom: '1px solid #000', borderTop: 'none', padding: 0 }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', border: 'none', margin: 0 }}>
                    <tbody>
                      <tr>
                        <td style={{ width: '33.33%', borderRight: '1px solid #000', borderLeft: 'none', borderTop: 'none', borderBottom: 'none', padding: '4px', paddingTop: '0px', textAlign: 'left', height: '38px', verticalAlign: 'top' }}>
                          <strong>Execução:</strong>
                          <div style={{ textAlign: 'center', fontSize: '10px', marginTop: '9px' }}>
                            <b><span className="cabecalho-resultado-font">{data.executado}</span></b>
                          </div>
                        </td>
                        <td style={{ width: '33.33%', borderRight: '1px solid #000', borderLeft: 'none', borderTop: 'none', borderBottom: 'none', padding: '4px', paddingTop: '0px', textAlign: 'left', height: '38px', verticalAlign: 'top' }}>
                          <strong>Aprovação:</strong>
                        </td>
                        <td style={{ width: '33.33%', border: 'none', padding: '4px', paddingTop: '0px', textAlign: 'left', height: '38px', verticalAlign: 'top' }}>
                          <strong>Fiscalização:</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td style={{ borderTop: '1px solid #000', borderLeft: '1px solid #000', borderRight: 'none', borderBottom: 'none', padding: '2px 4px', textAlign: 'left' }}>
                  <strong>Código laboratório: {data.codigoLaboratorio}</strong>
                </td>
                <td style={{ borderTop: '1px solid #000', borderLeft: 'none', borderRight: 'none', padding: '2px 4px', textAlign: 'center' }}>
                  <strong>DATA EMISSÃO: {data.dataEmissao}</strong>
                </td>
                <td style={{ borderTop: '1px solid #000', borderRight: '1px solid #000', borderLeft: 'none', borderBottom: 'none', padding: '2px 4px', textAlign: 'right' }}>
                  <strong>Pág: {data.pagina}/{data.totalPaginas}</strong>
                </td>
              </tr>
            </tbody>
          </table>

          <div style={{ textAlign: 'center', marginTop: '1px' }}>
            <p style={{ fontSize: '10px', fontWeight: 'bold', margin: 0, fontFamily: 'Arial, sans-serif', lineHeight: 1.2 }}>
              Este relatório de ensaio só pode ser copiado integralmente ou parcialmente com autorização da Geocontrole
            </p>
            <p style={{ fontSize: '10px', fontWeight: 'bold', margin: 0, fontFamily: 'Arial, sans-serif', lineHeight: 1.2 }}>
              Av.Canadá,Nº 159 - Jardim Canadá Nova Lima - Minas Gerais - Brasil - CEP: 34007-654 Tel.: +55 31 3517-9011
            </p>
            <p style={{ fontSize: '10px', fontWeight: 'bold', margin: 0, fontFamily: 'Arial, sans-serif', lineHeight: 1.2 }}>
              **Informações fornecidas pelo Técnico ou Cliente
            </p>
            <div style={{ width: '100%', backgroundColor: '#008000', color: '#fff', fontFamily: 'Arial, sans-serif', padding: '3px 0', fontSize: '11px', fontWeight: 'bold' }}>
              www.geocontrole.com - e-mail: mail.br@geocontrole.com
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default PDLGraphModel;
