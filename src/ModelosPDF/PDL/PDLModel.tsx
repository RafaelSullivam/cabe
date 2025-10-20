import React from 'react';
import './PDLStyles.css';
import { PDLData } from '../../types/pdlTypes';

interface PDLModelProps {
  logo: string;
  codSample: string;
  numberSample: string;
  dataCadastroAmostra: PDLData;
  pagina: number;
  totalPaginas: number;
}

const PDLModel: React.FC<PDLModelProps> = ({
  logo,
  codSample,
  numberSample,
  dataCadastroAmostra,
  pagina,
  totalPaginas
}) => {
  const status = dataCadastroAmostra.Cond_Ensaio || '';
  const isAprovado = status.toLowerCase() === 'aprovado';
  const isReprovado = status.toLowerCase() === 'reprovado';

  const baseStyle = 'width: 15%; border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; height: 21px; vertical-align: middle;';
  const aprovadoStyle = isAprovado ? `${baseStyle} background-color: #f44336; color: #fff;` : baseStyle;
  const reprovadoStyle = isReprovado ? `${baseStyle} background-color: #f44336; color: #fff;` : baseStyle;

  // Generate 15 depth rows
  const renderDepthRows = () => {
    const rows = [];
    for (let i = 1; i <= 15; i++) {
      rows.push(
        <tr key={i}>
          <td style={{ border: '1px solid #000', padding: '5px', height: '20px', width: '30%', textAlign: 'center' }}>
            {(dataCadastroAmostra as any)[`ProfundidadeDe${i}_1`]}
          </td>
          <td style={{ border: '1px solid #000', padding: '5px', height: '20px', width: '30%', textAlign: 'center' }}>
            {(dataCadastroAmostra as any)[`ProfundidadeDe${i}_1`]}
          </td>
          <td style={{ border: '1px solid #000', padding: '5px', height: '20px', width: '20%', textAlign: 'center' }}>
            {(dataCadastroAmostra as any)[`N_Golpe${i}_1`]}
          </td>
          <td style={{ border: '1px solid #000', padding: '5px', backgroundColor: '#f0f0f0', height: '20px', width: '20%', textAlign: 'center', fontWeight: 'bold', fontSize: '14px' }}>
            {(dataCadastroAmostra as any)[`TX_Adm${i}_1`]}
          </td>
        </tr>
      );
    }
    return rows;
  };

  return (
    <div>
      <header>
        <div style={{ display: 'inline-block', width: '539px', paddingTop: '20px' }}>
          <img src="images/geocontrole.png" width="195px" alt="Geocontrole" />
        </div>
        <div style={{ width: '212px', backgroundColor: 'green', color: '#fff', display: 'inline-block', fontFamily: 'Arial, sans-serif', fontSize: '13px', padding: '2px', textAlign: 'center' }}>
          REGISTRO Nº: {numberSample}
        </div>
      </header>

      <table className="tg-cabecalho" style={{ width: '100%', marginBottom: '20px' }}>
        <thead>
          <tr>
            <th className="tg-cabecalho-0pky col-1" colSpan={1} rowSpan={2}>CLIENTE: <br /></th>
            <th className="tg-cabecalho-0pky col-2" colSpan={1} rowSpan={2}>
              CERTIFICAÇÃO: <br />
              <div style={{ marginLeft: '10%', marginTop: '5px', fontSize: '12px' }}>
                <img style={{ marginLeft: '30%' }} src="images/ABNT.png" width="60px" height="40px" alt="ABNT" />
              </div>
              <img style={{ marginLeft: '30%' }} src={`data:image/jpeg;base64,${logo}`} width="60px" height="40px" alt="Logo" />
            </th>
            <th className="tg-cabecalho-0pky col-3" colSpan={3}>
              RELATÓRIO ENSAIO: 
              <div style={{ marginLeft: '40%', fontSize: '15px', marginTop: '-5px' }}>PDL</div>
            </th>
          </tr>
          <tr>
            <th className="tg-cabecalho-0pky" style={{ width: '21%', whiteSpace: 'nowrap', borderRight: '1px solid #000', verticalAlign: 'top' }}>
              NORMA:
              <div style={{ fontSize: '12px', marginLeft: '10px', marginTop: '6px', marginBottom: '5px' }} className="cabecalho-resultado-font">
                EN ISO 22476-2
              </div>
            </th>
            <th className="tg-cabecalho-0pky" style={{ width: '21%', verticalAlign: 'top' }}>
              PROCESSO: / LOTE:
              <div style={{ fontSize: '12px', marginTop: '6px', marginLeft: '25px', marginBottom: '5px' }} className="cabecalho-resultado-font">
                {codSample}
              </div>
            </th>
            <th className="tg-cabecalho-p1nr" style={{ width: '27%', verticalAlign: 'top' }}>
              IDENTIFICAÇÃO:
              <div style={{ textAlign: 'center', fontSize: '12px', marginTop: '7px', marginBottom: '4px' }} className="cabecalho-resultado-font">
                {dataCadastroAmostra.Identificacao}
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={1} rowSpan={4} className="tg-cabecalho-0pky col-2" style={{ width: '15%' }}>
              DATA: 
              <div style={{ marginTop: '15px' }}>
                <span className="cabecalho-resultado-font">{dataCadastroAmostra.Data}</span>
              </div>
            </td>
            <td colSpan={1} rowSpan={4} className="tg-cabecalho-0pky col-2" style={{ width: '16%' }}>
              ESTACA/POSIÇÃO: 
              <div style={{ textAlign: 'center', fontSize: '12px', marginTop: '10px' }}>
                <span className="cabecalho-resultado-font">{dataCadastroAmostra.Estaca_Posicao}</span>
              </div>
            </td>
            <td className="tg-cabecalho-0pky col-3" colSpan={2} rowSpan={4}>
              OBRA: <br />
              <div style={{ textAlign: 'center', fontSize: '12px', marginTop: '9px' }}>
                <b><span className="cabecalho-resultado-font">{dataCadastroAmostra.Obra}</span></b>
              </div>
            </td>
            <td className="tg-cabecalho-p1nr">**DATUM:</td>
          </tr>
          <tr>
            <td className="tg-cabecalho-p1nr">**COORDENADA X: <span className="cabecalho-resultado-font"></span></td>
          </tr>
          <tr>
            <td className="tg-cabecalho-p1nr">**COORDENADA Y: <span className="cabecalho-resultado-font"></span></td>
          </tr>
          <tr>
            <td className="tg-cabecalho-ps66">**COORDENADA Z: <span className="cabecalho-resultado-font"></span></td>
          </tr>
          <tr>
            <td className="tg-cabecalho-0pky" rowSpan={2}>
              CAMADA: 
              <div style={{ marginTop: '15px' }}>
                <div style={{ textAlign: 'center', fontSize: '12px', marginTop: '9px' }}>
                  <span className="cabecalho-resultado-font">{dataCadastroAmostra.Camada}</span>
                </div>
              </div>
              <br />
            </td>
            <td className="tg-cabecalho-0pky" rowSpan={2}>
              RESPONSÁVEL: 
              <div style={{ marginTop: '15px' }}>
                <div style={{ textAlign: 'center', fontSize: '12px', marginTop: '9px' }}>
                  <span className="cabecalho-resultado-font">{dataCadastroAmostra.Responsavel}</span>
                </div>
              </div>
            </td>
            <td className="tg-cabecalho-0pky col-3" colSpan={2}>
              LOCAL/ÁREA: <br />
              <div style={{ textAlign: 'center', fontSize: '12px', marginTop: '0px' }}>
                <b><span className="cabecalho-resultado-font">{dataCadastroAmostra.Local_Area}</span></b>
              </div>
            </td>
            <td className="tg-cabecalho-p1nr" rowSpan={2}>
              **ESPECIFICAÇÃO TÉCNICA:
              <div style={{ textAlign: 'center', fontSize: '12px', marginTop: '10px' }}>
                <b><span className="cabecalho-resultado-font">{dataCadastroAmostra.Especificacao_Tec}</span></b>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Equipment Control Table */}
      <table className="equipments-table">
        <tbody>
          <tr>
            <td rowSpan={4} style={{ width: '15%', verticalAlign: 'middle', textAlign: 'center', fontWeight: 'bold', border: '1px solid #000', padding: '3px' }}>
              Controle de Equipamentos
            </td>
            <td style={{ width: '20%', border: '1px solid #000', padding: '3px', fontWeight: 'bold', textAlign: 'center' }}>Equipamento</td>
            <td style={{ width: '18%', border: '1px solid #000', padding: '3px', fontWeight: 'bold', textAlign: 'center' }}>Modelo</td>
            <td style={{ width: '17%', border: '1px solid #000', padding: '3px', fontWeight: 'bold', textAlign: 'center' }}>TAG / Nº Série</td>
            <td style={{ width: '15%', border: '1px solid #000', padding: '3px', fontWeight: 'bold', textAlign: 'center' }}>Tipo de Solo</td>
            <td style={{ width: '15%', border: '1px solid #000', padding: '3px', fontWeight: 'bold', textAlign: 'center' }}>Marcação da Leitura</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #000', padding: '5px', height: '20px' }}>{dataCadastroAmostra.Equipamento_pdl}</td>
            <td style={{ border: '1px solid #000', padding: '5px', height: '20px' }}></td>
            <td style={{ border: '1px solid #000', padding: '5px', height: '20px' }}></td>
            <td rowSpan={3} style={{ border: '1px solid #000', padding: '5px', textAlign: 'center', fontSize: '12px' }}>
              {dataCadastroAmostra.TipoSolo_1}
            </td>
            <td rowSpan={3} style={{ border: '1px solid #000', padding: '5px', textAlign: 'center', fontSize: '12px' }}>
              {dataCadastroAmostra.MarcacaoLeitura_1}
            </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #000', padding: '5px', height: '20px' }}></td>
            <td style={{ border: '1px solid #000', padding: '5px', height: '20px' }}></td>
            <td style={{ border: '1px solid #000', padding: '5px', height: '20px' }}></td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #000', padding: '5px', height: '20px' }}></td>
            <td style={{ border: '1px solid #000', padding: '5px', height: '20px' }}></td>
            <td style={{ border: '1px solid #000', padding: '5px', height: '20px' }}></td>
          </tr>
        </tbody>
      </table>

      {/* Depth Table */}
      <table className="furo-table">
        <thead>
          <tr>
            <th className="text-center" style={{ width: '30%', border: '1px solid #000', padding: '5px', fontWeight: 'bold', whiteSpace: 'nowrap', height: '40px' }}>
              PROFUNDIDADE INÍCIO
            </th>
            <th className="text-center" style={{ width: '30%', border: '1px solid #000', padding: '5px', fontWeight: 'bold', whiteSpace: 'nowrap' }}>
              PROFUNDIDADE FIM
            </th>
            <th className="text-center" style={{ width: '20%', border: '1px solid #000', padding: '5px', fontWeight: 'bold', whiteSpace: 'nowrap' }}>
              N° GOLPES
            </th>
            <th className="text-center" style={{ width: '20%', border: '1px solid #000', padding: '5px', backgroundColor: '#f0f0f0', fontWeight: 'bold', whiteSpace: 'nowrap' }}>
              qd (MegaPascal)
            </th>
          </tr>
        </thead>
        <tbody>
          {renderDepthRows()}
        </tbody>
      </table>

      {/* Footer */}
      <footer style={{ bottom: 0, width: '100%', fontFamily: 'Arial, sans-serif', fontSize: '10px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #000', fontFamily: 'inherit', fontSize: 'inherit' }}>
          <tbody>
            <tr>
              <td rowSpan={2} style={{ width: '12%', border: '1px solid #000', padding: '4px', verticalAlign: 'top', textAlign: 'left', height: '16px', paddingTop: '2px' }}>
                <strong>Status do Ensaio:</strong>
                <div style={{ textAlign: 'center', fontSize: '10px', marginTop: '9px' }}>
                  <b><span className="cabecalho-resultado-font">{dataCadastroAmostra.StatusEnsaio}</span></b>
                </div>
              </td>
              <td style={aprovadoStyle as any}>Aprovado</td>
              <td rowSpan={2} style={{ width: '54%', border: '1px solid #000', padding: '4px', verticalAlign: 'top', textAlign: 'left', height: '16px' }}>
                <strong>Observação:</strong>
                <div style={{ textAlign: 'center', fontSize: '10px', marginTop: '9px' }}>
                  <b><span className="cabecalho-resultado-font">{dataCadastroAmostra.Observacao}</span></b>
                </div>
              </td>
            </tr>
            <tr>
              <td style={reprovadoStyle as any}>Reprovado</td>
            </tr>
            <tr>
              <td colSpan={3} style={{ borderLeft: '1px solid #000', borderRight: '1px solid #000', borderBottom: '1px solid #000', borderTop: 'none', padding: 0 }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', border: 'none', margin: 0 }}>
                  <tbody>
                    <tr>
                      <td style={{ width: '33.33%', borderRight: '1px solid #000', borderLeft: 'none', borderTop: 'none', borderBottom: 'none', padding: '4px', paddingTop: '0px', textAlign: 'left', height: '38px', verticalAlign: 'top' }}>
                        <strong>Execução:</strong>
                        <div style={{ textAlign: 'center', fontSize: '10px', marginTop: '9px' }}>
                          <b><span className="cabecalho-resultado-font">{dataCadastroAmostra.Executado}</span></b>
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
                <strong>Código laboratório:</strong>
              </td>
              <td style={{ borderTop: '1px solid #000', borderLeft: 'none', borderRight: 'none', padding: '2px 4px', textAlign: 'center' }}>
                <strong>DATA EMISSÃO:</strong>
              </td>
              <td style={{ borderTop: '1px solid #000', borderRight: '1px solid #000', borderLeft: 'none', borderBottom: 'none', padding: '2px 4px', textAlign: 'right' }}>
                <strong>Pág: {pagina}/{totalPaginas}</strong>
              </td>
            </tr>
          </tbody>
        </table>
        <div style={{ textAlign: 'center', marginTop: '-1' }}>
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
    </div>
  );
};

export default PDLModel;
