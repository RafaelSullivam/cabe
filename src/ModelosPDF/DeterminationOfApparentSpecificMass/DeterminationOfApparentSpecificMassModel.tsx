import React from 'react';
import Footer from '../Footer/Footer';
import './DeterminationOfApparentSpecificMassStyles.css';
import { DeterminationOfApparentSpecificMassData } from '../../types/determinationOfApparentSpecificMassTypes';

interface DeterminationOfApparentSpecificMassProps {
  logo: string;
  codSample: string;
  numberSample: string;
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
  dataRehearsal: DeterminationOfApparentSpecificMassData;
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

const DeterminationOfApparentSpecificMassModel: React.FC<DeterminationOfApparentSpecificMassProps> = ({
  logo,
  codSample,
  numberSample,
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
        {/* Cabeçalho */}
        <table className="tg-cabecalho" style={{ width: '100%', marginBottom: '5px' }}>
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
              <th className="tg-cabecalho-0pky col-3" colSpan={2}>
                RELATÓRIO ENSAIO: 
                <div style={{ marginLeft: '21%', fontSize: '15px', marginTop: '-6px' }}>
                  DETERMINAÇÃO DA MASSA ESPECÍFICA APARENTE
                </div>
              </th>
            </tr>
            <tr>
              <th className="tg-cabecalho-0pky" colSpan={1} style={{ padding: '0px' }}>
                <table className="tg-cabecalho" style={{ width: '100%' }}>
                  <thead>
                    <tr>
                      <td className="tg-cabecalho-0pky" style={{ width: '160px', paddingBottom: '0px', borderTopColor: '#fff', borderBottomColor: '#fff', whiteSpace: 'nowrap', borderLeftColor: '#fff' }}>
                        NORMA:
                        <div style={{ fontSize: '10px', marginLeft: '10px', marginTop: '6px', marginBottom: '5px' }} className="cabecalho-resultado-font">
                          {dataRehearsal.NormaEnsaio}
                        </div>
                      </td>
                      <td className="tg-cabecalho-0pky" style={{ paddingBottom: '0px', borderTopColor: '#fff', borderBottomColor: '#fff', borderRightColor: '#fff' }}>
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
                <div style={{ textAlign: 'center', fontSize: '12px', marginTop: '7px', marginBottom: '4px' }} className="cabecalho-resultado-font">
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
                  <b><span className="cabecalho-resultado-font">{dataHeaderAndFooter.Sondagem}</span></b>
                </div>
              </td>
              <td className="tg-cabecalho-p1nr">**DATUM: {dataHeaderAndFooter.Datum}</td>
            </tr>
            <tr>
              <td className="tg-cabecalho-p1nr">**COORDENADA X: <span className="cabecalho-resultado-font">{dataHeaderAndFooter.Coordenada_X}</span></td>
            </tr>
            <tr>
              <td className="tg-cabecalho-p1nr">**COORDENADA Y: <span className="cabecalho-resultado-font">{dataHeaderAndFooter.Coordenada_Y}</span></td>
            </tr>
            <tr>
              <td className="tg-cabecalho-ps66">**COORDENADA Z: <span className="cabecalho-resultado-font">{dataHeaderAndFooter.Coordenada_Z}</span></td>
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
                  <b><span className="cabecalho-resultado-font">{dataHeaderAndFooter.Localizacao || '---'}</span></b>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Tabela principal */}
        <table className="tg">
          <tbody>
            <tr>
              <td className="tg-0pky" colSpan={15} style={{ borderLeft: 'none', borderRight: 'none', borderTopColor: '#fff', paddingLeft: '0px', paddingRight: '0px', height: '675px' }}>
                <br />
                <table className="tg-determinacao" style={{ width: '100%' }}>
                  <colgroup>
                    <col style={{ width: '300px' }} />
                    <col style={{ width: '20px' }} />
                    <col style={{ width: '20px' }} />
                    <col style={{ width: '20px' }} />
                    <col style={{ width: '20px' }} />
                  </colgroup>
                  <tbody>
                    <tr>
                      <td className="tg-determinacao-0pky" style={{ width: '300px' }}>Corpo de prova</td>
                      <td className="tg-main-table-c3ow"></td>
                      <td className="tg-main-table-c1ow"></td>
                      <td className="tg-determinacao-c3ow">I</td>
                      <td className="tg-determinacao-c3ow">II</td>
                      <td className="tg-determinacao-c3ow">III</td>
                    </tr>
                    <tr>
                      <td className="tg-determinacao-0pky">Massa úmida do corpo de prova</td>
                      <td className="tg-main-table-c3ow">(M<span style={{ fontSize: '0.7em', verticalAlign: 'sub' }}>u</span>)</td>
                      <td className="tg-main-table-c1ow">g</td>
                      <td className="tg-determinacao-c3ow">{dataRehearsal.MassaHumidaP1}</td>
                      <td className="tg-determinacao-c3ow">{dataRehearsal.MassaHumidaP2}</td>
                      <td className="tg-determinacao-c3ow">{dataRehearsal.MassaHumidaP3}</td>
                    </tr>
                    <tr>
                      <td className="tg-determinacao-0pky">Massa do corpo de prova parafinado</td>
                      <td className="tg-main-table-c3ow">(M<span style={{ fontSize: '0.7em', verticalAlign: 'sub' }}>p</span>)</td>
                      <td className="tg-main-table-c1ow">g</td>
                      <td className="tg-determinacao-c3ow">{dataRehearsal.MassaCorpoParafinadoP1}</td>
                      <td className="tg-determinacao-c3ow">{dataRehearsal.MassaCorpoParafinadoP2}</td>
                      <td className="tg-determinacao-c3ow">{dataRehearsal.MassaCorpoParafinadoP3}</td>
                    </tr>
                    <tr>
                      <td className="tg-determinacao-0pky">Massa do corpo de prova imerso</td>
                      <td className="tg-main-table-c3ow">(M<span style={{ fontSize: '0.7em', verticalAlign: 'sub' }}>p(i)</span>)</td>
                      <td className="tg-main-table-c1ow">g</td>
                      <td className="tg-determinacao-c3ow">{dataRehearsal.MassaCorpoSubmersoP1}</td>
                      <td className="tg-determinacao-c3ow">{dataRehearsal.MassaCorpoSubmersoP2}</td>
                      <td className="tg-determinacao-c3ow">{dataRehearsal.MassaCorpoSubmersoP3}</td>
                    </tr>
                    <tr>
                      <td className="tg-determinacao-0pky">Massa da parafina</td>
                      <td className="tg-main-table-c3ow">(M<span style={{ fontSize: '0.7em', verticalAlign: 'sub' }}>paraf</span>)</td>
                      <td className="tg-main-table-c1ow">g</td>
                      <td className="tg-determinacao-c3ow">{dataRehearsal.MassaParafinaP1}</td>
                      <td className="tg-determinacao-c3ow">{dataRehearsal.MassaParafinaP2}</td>
                      <td className="tg-determinacao-c3ow">{dataRehearsal.MassaParafinaP3}</td>
                    </tr>
                    <tr>
                      <td className="tg-determinacao-0pky">Cápsula</td>
                      <td className="tg-main-table-c3ow"></td>
                      <td className="tg-main-table-c1ow">n°</td>
                      <td className="tg-determinacao-c3ow">{dataRehearsal.CapsulaP1}</td>
                      <td className="tg-determinacao-c3ow">{dataRehearsal.CapsulaP2}</td>
                      <td className="tg-determinacao-c3ow">{dataRehearsal.CapsulaP3}</td>
                    </tr>
                    <tr>
                      <td className="tg-determinacao-0pky">Amostra úmida + cápsula</td>
                      <td className="tg-main-table-c3ow"></td>
                      <td className="tg-main-table-c1ow">g</td>
                      <td className="tg-determinacao-c3ow">{dataRehearsal.AmostraUmidaP1}</td>
                      <td className="tg-determinacao-c3ow">{dataRehearsal.AmostraUmidaP2}</td>
                      <td className="tg-determinacao-c3ow">{dataRehearsal.AmostraUmidaP3}</td>
                    </tr>
                    <tr>
                      <td className="tg-determinacao-0pky">Amostra seca + cápsula</td>
                      <td className="tg-main-table-c3ow"></td>
                      <td className="tg-main-table-c1ow">g</td>
                      <td className="tg-determinacao-c3ow">{dataRehearsal.AmostraSecaP1}</td>
                      <td className="tg-determinacao-c3ow">{dataRehearsal.AmostraSecaP2}</td>
                      <td className="tg-determinacao-c3ow">{dataRehearsal.AmostraSecaP3}</td>
                    </tr>
                    <tr>
                      <td className="tg-determinacao-0pky">Massa da cápsula</td>
                      <td className="tg-main-table-c3ow"></td>
                      <td className="tg-main-table-c1ow">g</td>
                      <td className="tg-determinacao-c3ow">{dataRehearsal.MassaCapsulaP1}</td>
                      <td className="tg-determinacao-c3ow">{dataRehearsal.MassaCapsulaP2}</td>
                      <td className="tg-determinacao-c3ow">{dataRehearsal.MassaCapsulaP3}</td>
                    </tr>
                    <tr>
                      <td className="tg-determinacao-0pky">Massa de água</td>
                      <td className="tg-main-table-c3ow"></td>
                      <td className="tg-main-table-c1ow">g</td>
                      <td className="tg-determinacao-c3ow">{dataRehearsal.MassaAguaP1}</td>
                      <td className="tg-determinacao-c3ow">{dataRehearsal.MassaAguaP2}</td>
                      <td className="tg-determinacao-c3ow">{dataRehearsal.MassaAguaP3}</td>
                    </tr>
                    <tr>
                      <td className="tg-determinacao-0pky">Massa de solo seco</td>
                      <td className="tg-main-table-c3ow"></td>
                      <td className="tg-main-table-c1ow">g</td>
                      <td className="tg-determinacao-c3ow">{dataRehearsal.MassaSoloSecoP1}</td>
                      <td className="tg-determinacao-c3ow">{dataRehearsal.MassaSoloSecoP2}</td>
                      <td className="tg-determinacao-c3ow">{dataRehearsal.MassaSoloSecoP3}</td>
                    </tr>
                    <tr>
                      <td className="tg-determinacao-0pky">Teor de umidade</td>
                      <td className="tg-main-table-c3ow"></td>
                      <td className="tg-main-table-c1ow">%</td>
                      <td className="tg-determinacao-c3ow">{dataRehearsal.TeorUmidadeP1}</td>
                      <td className="tg-determinacao-c3ow">{dataRehearsal.TeorUmidadeP2}</td>
                      <td className="tg-determinacao-c3ow">{dataRehearsal.TeorUmidadeP3}</td>
                    </tr>
                    <tr>
                      <td className="tg-determinacao-0pky">Média do teor de umidade</td>
                      <td className="tg-main-table-c3ow"></td>
                      <td className="tg-determinacao-c3ow">%</td>
                      <td className="tg-determinacao-34fe" colSpan={3}>{dataRehearsal.MediaTeorUmidade}</td>
                    </tr>
                    <tr>
                      <td className="tg-determinacao-0pky">Volume do corpo de prova</td>
                      <td className="tg-main-table-c3ow">(V<span style={{ fontSize: '0.7em', verticalAlign: 'sub' }}>cp</span>)</td>
                      <td className="tg-main-table-c1ow">cm³</td>
                      <td className="tg-determinacao-c3ow">{dataRehearsal.VolumeCorpoP1}</td>
                      <td className="tg-determinacao-c3ow">{dataRehearsal.VolumeCorpoP2}</td>
                      <td className="tg-determinacao-c3ow">{dataRehearsal.VolumeCorpoP3}</td>
                    </tr>
                    <tr>
                      <td className="tg-determinacao-0pky">Massa específica aparente natural</td>
                      <td className="tg-main-table-c3ow">(ρ<span style={{ fontSize: '0.7em', verticalAlign: 'sub' }}>nat</span>)</td>
                      <td className="tg-main-table-c1ow">g/cm³</td>
                      <td className="tg-determinacao-c3ow">{dataRehearsal.MassaEspUmidaP1}</td>
                      <td className="tg-determinacao-c3ow">{dataRehearsal.MassaEspUmidaP2}</td>
                      <td className="tg-determinacao-c3ow">{dataRehearsal.MassaEspUmidaP3}</td>
                    </tr>
                    <tr>
                      <td className="tg-determinacao-0pky">Massa específica aparente seca</td>
                      <td className="tg-main-table-c3ow">(ρ<span style={{ fontSize: '0.7em', verticalAlign: 'sub' }}>d</span>)</td>
                      <td className="tg-main-table-c1ow">g/cm³</td>
                      <td className="tg-determinacao-34fe">{dataRehearsal.MassaEspSecaP1}</td>
                      <td className="tg-determinacao-34fe">{dataRehearsal.MassaEspSecaP2}</td>
                      <td className="tg-determinacao-34fe">{dataRehearsal.MassaEspSecaP3}</td>
                    </tr>
                    <tr>
                      <td className="tg-determinacao-0pky">Média da massa específica aparente seca</td>
                      <td className="tg-main-table-c3ow">(ρ<span style={{ fontSize: '0.7em', verticalAlign: 'sub' }}>d</span>)</td>
                      <td className="tg-main-table-c1ow">g/cm³</td>
                      <td className="tg-determinacao-34fe" colSpan={3}>{dataRehearsal.MediaMassaEspSeca}</td>
                    </tr>
                  </tbody>
                </table>

                {/* Tabela de Incertezas */}
                <div style={{ marginTop: '10px', textAlign: 'left', fontSize: '12px', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
                  Tabela de Incertezas do resultado do ensaio
                </div>
                <table className="tg-determinacao" style={{ width: '100%', marginTop: '5px' }}>
                  <tbody>
                    <tr style={{ marginTop: '5px', height: '4px' }}>
                      <td className="tg-determinacao-0pky" style={{ textAlign: 'left', width: '388px' }}>Incerteza Expandida</td>
                      <td className="tg-main-table-c1ow" style={{ width: '48px' }}>g/cm³</td>
                      <td className="tg-main-table-c3ow" style={{ width: '300px' }} colSpan={3}>{dataRehearsal.incertezaexpandida}</td>
                    </tr>
                    <tr style={{ marginTop: '5px', height: '5px' }}>
                      <td className="tg-determinacao-0pky" style={{ textAlign: 'left', width: '388px' }}>Fator de Expansão</td>
                      <td className="tg-main-table-c1ow">k</td>
                      <td className="tg-main-table-c3ow" style={{ width: '300px' }} colSpan={3}>{dataRehearsal.k}</td>
                    </tr>
                  </tbody>
                </table>
                <br />
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

export default DeterminationOfApparentSpecificMassModel;
