import React from 'react';
import { WaterContentModelProps } from '../../types/waterContentTypes';
import HeaderTable from '../HeaderTable/HeaderTable';
import './WaterContentStyles.css';

const WaterContentModel: React.FC<WaterContentModelProps> = ({
  dataRehearsal,
  dataHeaderAndFooter,
  observation,
  pagina,
  totalPaginas,
  logo,
  dataFormatada,
  signatures
}) => {
  // Elemento da imagem ABNT (placeholder por enquanto)
  const abntImageElement = (
    <img 
      style={{ marginLeft: '30%' }} 
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==" 
      width="60px" 
      height="40px" 
      alt="ABNT" 
    />
  );

  // Elemento do logo do cliente
  const logoElement = logo ? (
    <img 
      style={{ marginLeft: '30%' }} 
      src={`data:image/png;base64,${logo}`} 
      width="60px" 
      height="40px" 
      alt="Logo do cliente"
    />
  ) : (
    <div style={{ width: '60px', height: '40px', backgroundColor: '#ccc', display: 'inline-block' }} />
  );

  return (
    <div className="water-content-model">
      {/* Cabeçalho principal */}
      <main style={{ marginTop: '45px' }}>
        {/* Cabeçalho usando componente HeaderTable */}
        <HeaderTable
          logo={logo}
          clienteNome="CLIENTE"
          relatorioTitulo="RELATÓRIO ENSAIO"
          relatorioSubtitulo="DETERMINAÇÃO DO TEOR DE UMIDADE DO SOLO"
        />

        {/* Seção de temperatura de secagem */}
        <div style={{ marginTop: '4%', height: '40px', textAlign: 'left' }}>
          <div style={{ display: 'inline-block', paddingRight: '2px' }}>
            <p style={{ fontSize: '13px' }}>Temperatura de secagem:</p>
          </div>
              <th className="tg-cabecalho-0pky col-2" colSpan={1} rowSpan={2}>
                CLIENTE: <br />
                {logoElement}
              </th>
              <th className="tg-cabecalho-0pky col-3" colSpan={2}>
                RELATÓRIO ENSAIO:
                <div style={{ marginLeft: '21%', fontSize: '15px', marginTop: '-6px' }}>
                  DETERMINAÇÃO DO TEOR DE UMIDADE DO SOLO
                </div>
              </th>
            </tr>
            <tr>
              <th className="tg-cabecalho-0pky" colSpan={1} style={{ padding: '0px !important' }}>
                <table className="tg-cabecalho" style={{ width: '100%' }}>
                  <thead>
                    <tr>
                      <td className="tg-cabecalho-0pky" style={{ 
                        width: '160px !important', 
                        paddingBottom: '0px', 
                        borderTopColor: '#fff', 
                        borderBottomColor: '#fff',
                        whiteSpace: 'nowrap', 
                        borderLeftColor: '#fff' 
                      }}>
                        NORMA:
                        <div style={{ fontSize: '12px', marginLeft: '10px', marginTop: '6px', marginBottom: '5px' }} className="cabecalho-resultado-font">
                          {dataRehearsal.NormaEnsaio}
                        </div>
                      </td>
                      <td className="tg-cabecalho-0pky" style={{ 
                        paddingBottom: '0px', 
                        borderTopColor: '#fff', 
                        borderBottomColor: '#fff', 
                        borderRightColor: '#fff' 
                      }}>
                        PROCESSO: / LOTE:
                        <div style={{ fontSize: '12px', marginTop: '6px', marginLeft: '25px', marginBottom: '5px' }} className="cabecalho-resultado-font">
                          {dataHeaderAndFooter.Processo} / {dataHeaderAndFooter.Lote}
                        </div>
                      </td>
                    </tr>
                  </thead>
                </table>
              </th>
              <th className="tg-cabecalho-p1nr">
                PROFUNDIDADE (m):
                <div style={{ textAlign: 'center', fontSize: '12px', marginTop: '7px !important', marginBottom: '4px !important' }} className="cabecalho-resultado-font">
                  {dataHeaderAndFooter.Profundidade_Inicial} -- {dataHeaderAndFooter.Profundidade_Final}
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Linhas do cabeçalho com informações detalhadas */}
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
                  <b><span className="cabecalho-resultado-font">{dataHeaderAndFooter.Sondagem}</span></b>
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
                  <b><span className="cabecalho-resultado-font">{dataHeaderAndFooter.Obra}</span></b>
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
                  <span className="cabecalho-resultado-font">{dataHeaderAndFooter.Localizacao || '---'}</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Seção de temperatura de secagem */}
        <div style={{ marginTop: '4%', height: '40px', textAlign: 'left' }}>
          <div style={{ display: 'inline-block', paddingRight: '2px' }}>
            <p style={{ fontSize: '13px' }}>Temperatura de secagem:</p>
          </div>
          <div style={{ 
            display: 'inline-block', 
            fontSize: '13px', 
            marginTop: '1px', 
            borderLeft: '2px solid #000', 
            paddingLeft: '8px', 
            paddingTop: '1px' 
          }}>
            <input
              type="checkbox"
              checked={dataRehearsal.Temp_CheckBox1 === "P1"}
              readOnly
            />
            <label style={{ fontSize: '10px', verticalAlign: 'middle' }}>
              Intervalo 60º/65º
            </label>
            <br />
            <input
              type="checkbox"
              checked={dataRehearsal.Temp_CheckBox2 === "P2"}
              readOnly
            />
            <label style={{ fontSize: '10px', verticalAlign: 'middle' }}>
              Intervalo 105º/110º
            </label>
          </div>
        </div>

        {/* Tabela principal de dados */}
        <table className="tg" style={{ paddingRight: '10px !important' }}>
          <tr>
            <td className="tg-0pky" colSpan={15} style={{ 
              borderLeft: 'none !important', 
              borderRight: 'none !important', 
              borderTopColor: '#fff', 
              paddingLeft: '0px !important', 
              paddingRight: '0px', 
              height: '605px' 
            }}>
              <table className="tg-tabela-de-capsula" style={{ width: '100%', marginTop: '0px' }}>
                <colgroup>
                  <col style={{ width: '252.2px' }} />
                  <col style={{ width: '42.2px' }} />
                  <col style={{ width: '54.2px' }} />
                  <col style={{ width: '54.2px' }} />
                  <col style={{ width: '54.2px' }} />
                  <col style={{ width: '54.2px' }} />
                </colgroup>
                <tr>
                  <td className="tg-tabela-de-capsula-0r18" style={{ textAlign: 'left' }}>Cápsula</td>
                  <td className="tg-tabela-de-capsula-0r18">Nº</td>
                  <td className="tg-tabela-de-capsula-0r18" style={{ width: '50px' }}>{dataRehearsal.Capsula1}</td>
                  <td className="tg-tabela-de-capsula-0r18" style={{ width: '50px' }}>{dataRehearsal.Capsula2}</td>
                  <td className="tg-tabela-de-capsula-0r18" style={{ width: '50px' }}>{dataRehearsal.Capsula3}</td>
                  <td className="tg-tabela-de-capsula-0r18" style={{ width: '50px' }}>{dataRehearsal.Capsula4}</td>
                </tr>
                <tbody>
                  <tr>
                    <td className="tg-tabela-de-capsula-0r18" style={{ textAlign: 'left' }}>Massa de amostra úmida + cápsula</td>
                    <td className="tg-tabela-de-capsula-0r18">g</td>
                    <td className="tg-tabela-de-capsula-0r18">{dataRehearsal.MassaUmida1}</td>
                    <td className="tg-tabela-de-capsula-0r18">{dataRehearsal.MassaUmida2}</td>
                    <td className="tg-tabela-de-capsula-0r18">{dataRehearsal.MassaUmida3}</td>
                    <td className="tg-tabela-de-capsula-0r18">{dataRehearsal.MassaUmida4}</td>
                  </tr>
                  <tr>
                    <td className="tg-tabela-de-capsula-0r18" style={{ textAlign: 'left' }}>Massa da amostra seca + cápsula</td>
                    <td className="tg-tabela-de-capsula-0r18">g</td>
                    <td className="tg-tabela-de-capsula-0r18">{dataRehearsal.MassaSeca1}</td>
                    <td className="tg-tabela-de-capsula-0r18">{dataRehearsal.MassaSeca2}</td>
                    <td className="tg-tabela-de-capsula-0r18">{dataRehearsal.MassaSeca3}</td>
                    <td className="tg-tabela-de-capsula-0r18">{dataRehearsal.MassaSeca4}</td>
                  </tr>
                  <tr>
                    <td className="tg-tabela-de-capsula-0r18" style={{ textAlign: 'left' }}>Massa da cápsula</td>
                    <td className="tg-tabela-de-capsula-0r18">g</td>
                    <td className="tg-tabela-de-capsula-0r18">{dataRehearsal.MassaCapsula1}</td>
                    <td className="tg-tabela-de-capsula-0r18">{dataRehearsal.MassaCapsula2}</td>
                    <td className="tg-tabela-de-capsula-0r18">{dataRehearsal.MassaCapsula3}</td>
                    <td className="tg-tabela-de-capsula-0r18">{dataRehearsal.MassaCapsula4}</td>
                  </tr>
                  <tr>
                    <td className="tg-tabela-de-capsula-0r18" style={{ textAlign: 'left' }}>Massa da água</td>
                    <td className="tg-tabela-de-capsula-0r18">g</td>
                    <td className="tg-tabela-de-capsula-0r18">{dataRehearsal.MassaAgua1}</td>
                    <td className="tg-tabela-de-capsula-0r18">{dataRehearsal.MassaAgua2}</td>
                    <td className="tg-tabela-de-capsula-0r18">{dataRehearsal.MassaAgua3}</td>
                    <td className="tg-tabela-de-capsula-0r18">{dataRehearsal.MassaAgua4}</td>
                  </tr>
                  <tr>
                    <td className="tg-tabela-de-capsula-0r18" style={{ textAlign: 'left' }}>Massa do solo seco</td>
                    <td className="tg-tabela-de-capsula-0r18">g</td>
                    <td className="tg-tabela-de-capsula-0r18">{dataRehearsal.MassaSoloSeco1}</td>
                    <td className="tg-tabela-de-capsula-0r18">{dataRehearsal.MassaSoloSeco2}</td>
                    <td className="tg-tabela-de-capsula-0r18">{dataRehearsal.MassaSoloSeco3}</td>
                    <td className="tg-tabela-de-capsula-0r18">{dataRehearsal.MassaSoloSeco4}</td>
                  </tr>
                  <tr>
                    <td className="tg-tabela-de-capsula-0r18" style={{ textAlign: 'left' }}>Teor de umidade</td>
                    <td className="tg-tabela-de-capsula-0r18">%</td>
                    <td className="tg-tabela-de-capsula-0r18">{dataRehearsal.TeorAgua1}</td>
                    <td className="tg-tabela-de-capsula-0r18">{dataRehearsal.TeorAgua2}</td>
                    <td className="tg-tabela-de-capsula-0r18">{dataRehearsal.TeorAgua3}</td>
                    <td className="tg-tabela-de-capsula-0r18">{dataRehearsal.TeorAgua4}</td>
                  </tr>
                  <tr>
                    <td className="tg-tabela-de-capsula-0r18" style={{ textAlign: 'left' }}>Teor de umidade médio</td>
                    <td className="tg-tabela-de-capsula-0r18">%</td>
                    <td className="tg-tabela-de-capsula-0r18" style={{ backgroundColor: '#c8c8c8', fontWeight: 'bold' }} colSpan={4}>
                      {dataRehearsal.Media}
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* Tabela de incertezas */}
              <div style={{ marginTop: '15px', textAlign: 'left', fontSize: '12px', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
                Tabela de Incertezas do resultado do ensaio
              </div>
              <table className="tg-tabela-de-capsula-2" style={{ width: '100%', marginTop: '5px' }}>
                <tr style={{ marginTop: '5px', height: '4px' }}>
                  <td className="tg-tabela-de-capsula-0r18" style={{ textAlign: 'left', width: '442.2px !important' }}>Incerteza Expandida</td>
                  <td className="tg-tabela-de-capsula-0r10">%</td>
                  <td className="tg-tabela-de-capsula-0r18" colSpan={4}>{dataRehearsal.Incerteza}</td>
                </tr>
                <tr style={{ marginTop: '5px', height: '5px' }}>
                  <td className="tg-tabela-de-capsula-0r18" style={{ textAlign: 'left' }}>Fator de Expansão</td>
                  <td className="tg-tabela-de-capsula-0r10">k</td>
                  <td className="tg-tabela-de-capsula-0r18" colSpan={4}>{dataRehearsal.Expansao}</td>
                </tr>
              </table>
            </td>
          </tr>

          {/* Seção de observações */}
          <tr>
            <td className="tg-0pky" colSpan={15} style={{ paddingRight: '10px !important', marginTop: '0px' }}>
              <p className="title">Observação:</p>
              <div style={{ height: '15px' }} className="response">{observation}</div>
            </td>
          </tr>

          {/* Seção de assinaturas */}
          <tr>
            <td className="tg-0pky" colSpan={5}>
              <p className="title" style={{ top: '0 !important' }}>Execução: </p>
              <p className="title response">{dataRehearsal.Executado}</p>
            </td>
            <td className="tg-0pky" colSpan={5}>
              <p className="title" style={{ top: '0 !important' }}>Verificação: </p>
              {signatures?.verificador ? (
                <>
                  <img 
                    style={{ margin: '1px 0px 0px 50px' }} 
                    src={`data:image/jpeg;base64,${signatures.verificador.Assinatura}`} 
                    alt="Assinatura Verificador" 
                    height="20px" 
                    width="80px" 
                  />
                  <hr className="hr-ass" style={{ margin: '1px 0px 0px 50px' }} />
                  <p className="title response" style={{ margin: '1px 0px 0px 30px !important' }}>
                    {signatures.verificador.Nome}
                  </p>
                </>
              ) : (
                <>
                  <br />
                  <div style={{ height: '10px' }}></div>
                </>
              )}
            </td>
            <td className="tg-0pky" colSpan={5} style={{ overflow: 'hidden' }}>
              <p className="title" style={{ top: '0 !important' }}>Aprovação:</p>
              {signatures?.aprovador ? (
                <table style={{ width: '100%', borderCollapse: 'collapse', border: 'none' }}>
                  <tbody>
                    <tr style={{ border: 'none' }}>
                      <td style={{ textAlign: 'center', border: 'none' }}>
                        <img 
                          src={`data:image/jpeg;base64,${signatures.aprovador.Assinatura}`} 
                          alt="Assinatura Aprovador" 
                          height="20px" 
                          width="80px" 
                        />
                        <hr className="hr-ass" />
                        <p className="title response" style={{ margin: '0' }}>{signatures.aprovador.Nome}</p>
                      </td>
                      {signatures?.marciel && (
                        <td style={{ textAlign: 'center', border: 'none' }}>
                          <img 
                            src={`data:image/jpeg;base64,${signatures.marciel.Assinatura}`} 
                            alt="Assinatura Marciel" 
                            height="20px" 
                            width="80px" 
                          />
                          <hr className="hr-ass" />
                          <p className="title response" style={{ margin: '0' }}>Marciel Artur</p>
                        </td>
                      )}
                    </tr>
                  </tbody>
                </table>
              ) : (
                <>
                  <br />
                  <div style={{ height: '10px' }}></div>
                </>
              )}
            </td>
          </tr>

          {/* Footer */}
          <tr>
            <td className="tg-0pky" colSpan={15} style={{ padding: '4px 0px 0px 5px' }}>
              <div style={{ width: '245px', display: 'inline-block' }}>
                <p className="title">Código laboratório: PP-LB-008-02</p>
              </div>
              <div style={{ width: '447px', display: 'inline-block' }}>
                <p className="title">DATA EMISSÃO: {dataFormatada}</p>
              </div>
              <div style={{ display: 'inline-block' }}>
                <p className="title">Pág: {pagina}/{totalPaginas}</p>
              </div>
            </td>
          </tr>
        </table>
      </main>

      {/* Footer da página */}
      <footer>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '10px', fontWeight: 'bold', margin: '0', fontFamily: 'Arial, sans-serif' }}>
            Este relatório de ensaio só pode ser copiado integralmente ou parcialmente com autorização da Geocontrole
          </p>
          <p style={{ fontSize: '10px', fontWeight: 'bold', margin: '0', fontFamily: 'Arial, sans-serif' }}>
            Av.Canadá,Nº 159 - Jardim Canadá Nova Lima - Minas Gerais - Brasil - CEP: 34007-654 Tel.: +55 31 3517-9011
          </p>
          <div style={{ width: '100%', backgroundColor: 'green', color: '#fff', fontFamily: 'Arial, sans-serif' }}>
            www.geocontrole.com - e-mail: mail.br@geocontrole.com
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WaterContentModel;