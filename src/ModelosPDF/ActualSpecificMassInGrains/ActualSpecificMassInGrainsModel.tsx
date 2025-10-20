import React from 'react';
import Footer from '../Footer/Footer';
import './ActualSpecificMassInGrainsStyles.css';
import { ActualSpecificMassInGrainsData } from '../../types/actualSpecificMassInGrainsTypes';

interface ActualSpecificMassInGrainsProps {
  logo: string;
  clienteNome: string;
  codSample: string;
  numberSample: string;
  normaRealGraos: string;
  dataHeaderAndFooter: {
    Processo: string;
    Lote: string;
    Profundidade_Inicial: string;
    Profundidade_Final: string;
    Data_Registro: string;
    Sondagem: string;
    Datum: string;
    Coordenada_X: string;
    Coordenada_Y: string;
    Coordenada_Z: string;
    Aplicacao: string;
    Obra: string;
    Especificacao_tecnica: string;
    Localizacao?: string;
  };
  dataRehearsal: ActualSpecificMassInGrainsData;
  observation: string;
  pagina: number;
  totalPaginas: number;
  dataFormatada: string;
  signatures?: {
    verificador?: { Assinatura: string; Nome: string };
    aprovador?: { Assinatura: string; Nome: string };
    marciel?: { Assinatura: string; Nome: string };
  };
}

const ActualSpecificMassInGrainsModel: React.FC<ActualSpecificMassInGrainsProps> = ({
  logo,
  codSample,
  numberSample,
  normaRealGraos,
  dataHeaderAndFooter,
  dataRehearsal,
  observation,
  pagina,
  totalPaginas,
  dataFormatada,
  signatures
}) => {
  return (
    <div>
      <header>
        <div style={{ display: 'inline-block', width: '539px', paddingTop: '10px' }}>
          <img src="images/geocontrole.png" width="195px" alt="Geocontrole" />
        </div>
        <div className="header-amostra">
          AMOSTRA Nº: {codSample} / {numberSample}
        </div>
      </header>

      <main style={{ marginTop: '45px' }}>
        {/* Cabeçalho completo */}
        <table className="tg-cabecalho" style={{ width: '100%', marginBottom: '13px' }}>
          <thead>
            <tr>
              <th className="tg-cabecalho-0pky col-1" colSpan={2} rowSpan={2}>
                CLIENTE: <br />
                <img 
                  style={{ marginLeft: '30%' }} 
                  src={`data:image/jpeg;base64,${logo}`} 
                  width="60px" 
                  height="40px"
                  alt="Logo cliente"
                />
              </th>
              <th className="tg-cabecalho-0pky col-3" colSpan={2}>
                RELATÓRIO ENSAIO: 
                <div style={{ marginLeft: '21%', fontSize: '15px', marginTop: '-6px' }}>
                  MASSA ESPECÍFICA REAL DOS GRÃOS
                </div>
              </th>
            </tr>
            <tr>
              <th className="tg-cabecalho-0pky" colSpan={1} style={{ padding: '0px' }}>
                <table className="tg-cabecalho" style={{ width: '100%' }}>
                  <thead>
                    <tr>
                      <td 
                        className="tg-cabecalho-0pky" 
                        style={{
                          width: '160px',
                          paddingBottom: '0px',
                          borderTopColor: '#fff',
                          borderBottomColor: '#fff',
                          whiteSpace: 'nowrap',
                          borderLeftColor: '#fff'
                        }}
                      >
                        NORMA:
                        <div 
                          style={{ 
                            fontSize: '10px', 
                            marginLeft: '10px', 
                            marginTop: '6px', 
                            marginBottom: '5px' 
                          }} 
                          className="cabecalho-resultado-font"
                        >
                          {normaRealGraos}
                        </div>
                      </td>
                      <td 
                        className="tg-cabecalho-0pky" 
                        style={{
                          paddingBottom: '0px',
                          borderTopColor: '#fff',
                          borderBottomColor: '#fff',
                          borderRightColor: '#fff'
                        }}
                      >
                        PROCESSO: / LOTE:
                        <div 
                          style={{ 
                            fontSize: '12px', 
                            marginTop: '6px', 
                            marginLeft: '25px', 
                            marginBottom: '5px' 
                          }} 
                          className="cabecalho-resultado-font"
                        >
                          {dataHeaderAndFooter.Processo} / {dataHeaderAndFooter.Lote}
                        </div>
                      </td>
                    </tr>
                  </thead>
                </table>
              </th>
              <th className="tg-cabecalho-p1nr">
                PROFUNDIDADE (m):
                <div 
                  style={{ 
                    textAlign: 'center', 
                    fontSize: '12px', 
                    marginTop: '7px', 
                    marginBottom: '4px' 
                  }} 
                  className="cabecalho-resultado-font"
                >
                  {dataHeaderAndFooter.Profundidade_Inicial} -- {dataHeaderAndFooter.Profundidade_Final}
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="tg-cabecalho-0pky col-2" colSpan={1} rowSpan={4}>
                DATA DO REGISTRO: 
                <div style={{ marginTop: '15px' }}>
                  <span className="cabecalho-resultado-font">{dataHeaderAndFooter.Data_Registro}</span>
                </div>
              </td>
              <td className="tg-cabecalho-0pky col-2" colSpan={1} rowSpan={4}>
                DATA DE INICIO ENSAIO: 
                <div style={{ marginTop: '2px' }}>
                  <span className="cabecalho-resultado-font">{dataRehearsal.DataInicio}</span>
                </div>
              </td>
              <td className="tg-cabecalho-0pky col-3" rowSpan={4}>
                SONDAGEM: <br />
                <div style={{ textAlign: 'center', fontSize: '12px', marginTop: '9px' }}>
                  <b>
                    <span className="cabecalho-resultado-font">{dataHeaderAndFooter.Sondagem}</span>
                  </b>
                </div>
              </td>
              <td className="tg-cabecalho-p1nr">
                **DATUM: {dataHeaderAndFooter.Datum}
              </td>
            </tr>
            <tr>
              <td className="tg-cabecalho-p1nr">
                **COORDENADA X: <span className="cabecalho-resultado-font">{dataHeaderAndFooter.Coordenada_X}</span>
              </td>
            </tr>
            <tr>
              <td className="tg-cabecalho-p1nr">
                **COORDENADA Y: <span className="cabecalho-resultado-font">{dataHeaderAndFooter.Coordenada_Y}</span>
              </td>
            </tr>
            <tr>
              <td className="tg-cabecalho-ps66">
                **COORDENADA Z: <span className="cabecalho-resultado-font">{dataHeaderAndFooter.Coordenada_Z}</span>
              </td>
            </tr>
            <tr>
              <td className="tg-cabecalho-0pky" rowSpan={2}>
                DATA DE CONCLUSÃO: 
                <div style={{ marginTop: '15px' }}>
                  <span className="cabecalho-resultado-font">{dataRehearsal.DataFinal}</span>
                </div>
                <br />
              </td>
              <td className="tg-cabecalho-0pky" rowSpan={2}>
                **APLICAÇÃO: 
                <div style={{ marginTop: '15px' }}>
                  <span className="cabecalho-resultado-font">{dataHeaderAndFooter.Aplicacao}</span>
                </div>
              </td>
              <td className="tg-cabecalho-0pky col-3">
                **OBRA: <br />
                <div style={{ textAlign: 'center', fontSize: '12px', marginTop: '0px' }}>
                  <b>
                    <span className="cabecalho-resultado-font">{dataHeaderAndFooter.Obra}</span>
                  </b>
                </div>
              </td>
              <td className="tg-cabecalho-p1nr" rowSpan={2}>
                **ESPECIFICAÇÃO TÉCNICA: <span className="cabecalho-resultado-font">{dataHeaderAndFooter.Especificacao_tecnica}</span>
              </td>
            </tr>
            <tr>
              <td className="tg-cabecalho-0pky">
                **LOCAL DA COLETA / ENDEREÇO: <br />
                <div style={{ textAlign: 'center', fontSize: '12px' }}>
                  <span className="cabecalho-resultado-font">
                    {dataHeaderAndFooter.Localizacao || '---'}
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        {/* Tipo de Secagem */}
        <div className="tipo-secagem-container">
          <div className="tipo-secagem-label">
            <p style={{ fontSize: '13px', margin: 0 }}>Tipo de Secagem:</p>
          </div>
          <div className="tipo-secagem-checkboxes">
            <input
              type="checkbox"
              id="checkbox1"
              name="checkboxes"
              value="checkbox1"
              checked={dataRehearsal.Temp_CheckBox1 === 'COM'}
              readOnly
            />
            <label htmlFor="checkbox1">
              Com secagem prévia ao ar
            </label>
            <br />
            <input
              type="checkbox"
              id="checkbox2"
              name="checkboxes"
              value="checkbox2"
              checked={dataRehearsal.Temp_CheckBox2 === 'SEM'}
              readOnly
            />
            <label htmlFor="checkbox2">
              Sem secagem prévia ao ar
            </label>
          </div>
        </div>

        {/* Tabela principal */}
        <table className="tg" style={{ marginTop: '0px', paddingRight: '0px', width: '760px' }}>
          <tbody>
            <tr>
              <td
                colSpan={15}
                style={{
                  borderLeft: 'none',
                  borderRight: 'none',
                  borderTopColor: '#fff',
                  paddingLeft: '0px',
                  paddingRight: '0px',
                  height: '635px',
                  width: '760px'
                }}
              >
                <br />

                <div className="tg-main-table-wrap">
                  <table className="tg-main-table" style={{ width: '760px' }}>
                    <colgroup>
                      <col style={{ width: '350px' }} />
                      <col style={{ width: '50px' }} />
                      <col style={{ width: '50px' }} />
                      <col style={{ width: '50px' }} />
                      <col style={{ width: '50px' }} />
                      <col style={{ width: '50px' }} />
                      <col style={{ width: '50px' }} />
                      <col style={{ width: '50px' }} />
                      <col style={{ width: '50px' }} />
                    </colgroup>

                    <tbody>
                      <tr>
                        <td className="tg-main-table-fymr">Corpo de prova</td>
                        <td className="tg-main-table-c3ow">N°</td>
                        <td className="tg-main-table-c1ow"></td>
                        <td className="tg-main-table-c3ow" colSpan={3}>I</td>
                        <td className="tg-main-table-c3ow" colSpan={3}>II</td>
                      </tr>
                      <tr>
                        <td className="tg-main-table-fymr">Picnômetro</td>
                        <td className="tg-main-table-c3ow">N°</td>
                        <td className="tg-main-table-c1ow"></td>
                        <td className="tg-main-table-c3ow" colSpan={3}>{dataRehearsal.PICNOMETRO1}</td>
                        <td className="tg-main-table-c3ow" colSpan={3}>{dataRehearsal.PICNOMETRO2}</td>
                      </tr>
                      <tr>
                        <td className="tg-main-table-fymr">Massa úmida do corpo de prova</td>
                        <td className="tg-main-table-c3ow">M<span style={{ fontSize: '0.7em', verticalAlign: 'sub' }}>1</span></td>
                        <td className="tg-main-table-c1ow"></td>
                        <td className="tg-main-table-c3ow" colSpan={3}>{dataRehearsal.massaUmidaDoCorpoDeProva1}</td>
                        <td className="tg-main-table-c3ow" colSpan={3}>{dataRehearsal.massaUmidaDoCorpoDeProva2}</td>
                      </tr>
                      <tr>
                        <td className="tg-main-table-fymr">Cápsula</td>
                        <td className="tg-main-table-c3ow">N°</td>
                        <td className="tg-main-table-c1ow"></td>
                        <td className="tg-main-table-c3ow">{dataRehearsal.Capsula1}</td>
                        <td className="tg-main-table-c3ow">{dataRehearsal.Capsula2}</td>
                        <td className="tg-main-table-c3ow">{dataRehearsal.Capsula3}</td>
                        <td className="tg-main-table-c3ow">{dataRehearsal.Capsula4}</td>
                        <td className="tg-main-table-c3ow">{dataRehearsal.Capsula5}</td>
                        <td className="tg-main-table-c3ow">{dataRehearsal.Capsula6}</td>
                      </tr>
                      <tr>
                        <td className="tg-main-table-fymr">Massa do solo úmido + cápsula</td>
                        <td className="tg-main-table-c3ow">Mu</td>
                        <td className="tg-main-table-c1ow">g</td>
                        <td className="tg-main-table-c3ow">{dataRehearsal.massaDoSoloUmdCaps1}</td>
                        <td className="tg-main-table-c3ow">{dataRehearsal.massaDoSoloUmdCaps2}</td>
                        <td className="tg-main-table-c3ow">{dataRehearsal.massaDoSoloUmdCaps3}</td>
                        <td className="tg-main-table-c3ow">{dataRehearsal.massaDoSoloUmdCaps4}</td>
                        <td className="tg-main-table-c3ow">{dataRehearsal.massaDoSoloUmdCaps5}</td>
                        <td className="tg-main-table-c3ow">{dataRehearsal.massaDoSoloUmdCaps6}</td>
                      </tr>
                      <tr>
                        <td className="tg-main-table-fymr">Massa do solo seco + cápsula</td>
                        <td className="tg-main-table-c3ow">Ms</td>
                        <td className="tg-main-table-c1ow">g</td>
                        <td className="tg-main-table-c3ow">{dataRehearsal.massaDoSoloSecCaps1}</td>
                        <td className="tg-main-table-c3ow">{dataRehearsal.massaDoSoloSecCaps2}</td>
                        <td className="tg-main-table-c3ow">{dataRehearsal.massaDoSoloSecCaps3}</td>
                        <td className="tg-main-table-c3ow">{dataRehearsal.massaDoSoloSecCaps4}</td>
                        <td className="tg-main-table-c3ow">{dataRehearsal.massaDoSoloSecCaps5}</td>
                        <td className="tg-main-table-c3ow">{dataRehearsal.massaDoSoloSecCaps6}</td>
                      </tr>
                      <tr>
                        <td className="tg-main-table-fymr">Massa da cápsula</td>
                        <td className="tg-main-table-c3ow">Mc</td>
                        <td className="tg-main-table-c1ow">g</td>
                        <td className="tg-main-table-c3ow">{dataRehearsal.MassaCaps1}</td>
                        <td className="tg-main-table-c3ow">{dataRehearsal.MassaCaps2}</td>
                        <td className="tg-main-table-c3ow">{dataRehearsal.MassaCaps3}</td>
                        <td className="tg-main-table-c3ow">{dataRehearsal.MassaCaps4}</td>
                        <td className="tg-main-table-c3ow">{dataRehearsal.MassaCaps5}</td>
                        <td className="tg-main-table-c3ow">{dataRehearsal.MassaCaps6}</td>
                      </tr>
                      <tr>
                        <td className="tg-main-table-fymr">Teor de umidade</td>
                        <td className="tg-main-table-c3ow">w</td>
                        <td className="tg-main-table-c1ow">%</td>
                        <td className="tg-main-table-c3ow">{dataRehearsal.teorDeUmd1}</td>
                        <td className="tg-main-table-c3ow">{dataRehearsal.teorDeUmd2}</td>
                        <td className="tg-main-table-c3ow">{dataRehearsal.teorDeUmd3}</td>
                        <td className="tg-main-table-c3ow">{dataRehearsal.teorDeUmd4}</td>
                        <td className="tg-main-table-c3ow">{dataRehearsal.teorDeUmd5}</td>
                        <td className="tg-main-table-c3ow">{dataRehearsal.teorDeUmd6}</td>
                      </tr>
                      <tr>
                        <td className="tg-main-table-fymr">Teor de umidade médio</td>
                        <td className="tg-main-table-c3ow">w</td>
                        <td className="tg-main-table-c1ow">%</td>
                        <td className="tg-main-table-c3ow" colSpan={3}>{dataRehearsal.teorDeUmdMEDIO1}</td>
                        <td className="tg-main-table-c3ow" colSpan={3}>{dataRehearsal.teorDeUmdMEDIO2}</td>
                      </tr>
                      <tr>
                        <td className="tg-main-table-fymr">Massa do picnômetro + água destilada</td>
                        <td className="tg-main-table-c3ow">M<span style={{ fontSize: '0.7em', verticalAlign: 'sub' }}>3</span></td>
                        <td className="tg-main-table-c1ow">g</td>
                        <td className="tg-main-table-c3ow" colSpan={3}>{dataRehearsal.massaPicAgDestilada1}</td>
                        <td className="tg-main-table-c3ow" colSpan={3}>{dataRehearsal.massaPicAgDestilada2}</td>
                      </tr>
                      <tr>
                        <td className="tg-main-table-fymr">Massa do picnômetro + corpo de prova + água</td>
                        <td className="tg-main-table-c3ow">M<span style={{ fontSize: '0.7em', verticalAlign: 'sub' }}>2</span></td>
                        <td className="tg-main-table-c1ow">g</td>
                        <td className="tg-main-table-c3ow" colSpan={3}>{dataRehearsal.massaPicCorpoProva1}</td>
                        <td className="tg-main-table-c3ow" colSpan={3}>{dataRehearsal.massaPicCorpoProva2}</td>
                      </tr>
                      <tr>
                        <td className="tg-main-table-fymr">Temperatura do ensaio</td>
                        <td className="tg-main-table-c3ow">T</td>
                        <td className="tg-main-table-c1ow">°C</td>
                        <td className="tg-main-table-c3ow" colSpan={3}>{dataRehearsal.temperaturaDoEnsaio1}</td>
                        <td className="tg-main-table-c3ow" colSpan={3}>{dataRehearsal.temperaturaDoEnsaio2}</td>
                      </tr>
                      <tr>
                        <td className="tg-main-table-fymr">Massa específica da água à temperatura T do ensaio</td>
                        <td className="tg-main-table-c3ow">
                          ρ<span style={{ fontSize: '0.7em', verticalAlign: 'sub' }}>w(T)</span>
                        </td>
                        <td className="tg-main-table-c1ow">g/cm³</td>
                        <td className="tg-main-table-c3ow" colSpan={3}>{dataRehearsal.massaEspDaAguaATempT1}</td>
                        <td className="tg-main-table-c3ow" colSpan={3}>{dataRehearsal.massaEspDaAguaATempT2}</td>
                      </tr>
                      <tr>
                        <td className="tg-main-table-fymr">Massa específica do corpo de prova</td>
                        <td className="tg-main-table-c3ow">ρ<span style={{ fontSize: '0.7em', verticalAlign: 'sub' }}>s</span></td>
                        <td className="tg-main-table-c1ow">g/cm³</td>
                        <td className="tg-main-table-c3ow" colSpan={3}>{dataRehearsal.massaEspCorpoProva1}</td>
                        <td className="tg-main-table-c3ow" colSpan={3}>{dataRehearsal.massaEspCorpoProva2}</td>
                      </tr>
                      <tr>
                        <td className="tg-main-table-fymr">Massa específica média</td>
                        <td className="tg-main-table-c1ow">ρ<span style={{ fontSize: '0.7em', verticalAlign: 'sub' }}>s</span></td>
                        <td className="tg-main-table-c3ow">g/cm³</td>
                        <td className="tg-main-table-lqf5" colSpan={6} style={{ fontSize: '12px' }}>
                          <b>{dataRehearsal.massaEspMEDIA}</b>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  {/* Tabela de Incertezas */}
                  <div className="incertezas-title">
                    Tabela de Incertezas do resultado do ensaio
                  </div>
                  <table className="tg-main-table" style={{ width: '760px', marginTop: '5px' }}>
                    <colgroup>
                      <col style={{ width: '362px' }} />
                      <col style={{ width: '48px' }} />
                      <col style={{ width: '60px' }} />
                    </colgroup>
                    <tbody>
                      <tr style={{ marginTop: '5px', height: '4px' }}>
                        <td className="tg-main-table-fymr" style={{ textAlign: 'left' }}>Incerteza Expandida</td>
                        <td className="tg-main-table-c1ow">g/cm³</td>
                        <td className="tg-main-table-c3ow" colSpan={6}>{dataRehearsal.incertezaexpandida}</td>
                      </tr>
                      <tr style={{ marginTop: '5px', height: '5px' }}>
                        <td className="tg-main-table-fymr" style={{ textAlign: 'left' }}>Fator de Expansão</td>
                        <td className="tg-main-table-c1ow">k</td>
                        <td className="tg-main-table-c3ow" colSpan={6}>{dataRehearsal.k}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </td>
            </tr>

            {/* Observação */}
            <tr>
              <td className="tg-0pky" colSpan={15}>
                <p className="title">Observação:</p>
                <div style={{ height: '15px' }}>{observation}</div>
              </td>
            </tr>

            {/* Código laboratório, data e página */}
            <tr>
              <td className="tg-0pky" colSpan={15} style={{ padding: '4px 0px 0px 5px' }}>
                <div style={{ width: '245px', display: 'inline-block' }}>
                  <p className="title">Código laboratório: PP-LB-010-02</p>
                </div>
                <div style={{ width: '447px', display: 'inline-block' }}>
                  <p className="title">DATA EMISSÃO: {dataFormatada}</p>
                </div>
                <div style={{ display: 'inline-block' }}>
                  <p className="title">Pág: {pagina}/{totalPaginas}</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </main>

      <Footer 
        signatures={signatures}
        executado={dataRehearsal.Executado}
      />
    </div>
  );
};

export default ActualSpecificMassInGrainsModel;
