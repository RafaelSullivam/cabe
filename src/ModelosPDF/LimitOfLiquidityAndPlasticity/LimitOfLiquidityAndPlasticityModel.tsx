import React from 'react';
import './LimitOfLiquidityAndPlasticityStyles.css';
import Footer from '../Footer/Footer';
import { LimitOfLiquidityAndPlasticityProps } from '../../types/limitOfLiquidityAndPlasticityTypes';

const LimitOfLiquidityAndPlasticityModel: React.FC<LimitOfLiquidityAndPlasticityProps> = ({ data }) => {
  const {
    // Cabeçalho
    logo,
    norma: normaEnsaio,
    processo,
    lote,
    profundidadeInicial,
    profundidadeFinal,
    dataRegistro,
    dataInicio,
    sondagem,
    datum,
    coordenadaX,
    coordenadaY,
    coordenadaZ,
    dataFinal,
    aplicacao,
    obra,
    especificacaoTecnica,
    localizacao,
    
    // Liquidez - 5 pontos
    numGolpes1, capsula1, massaSoloUmdCaps1, massaSoloSecCaps1, massaDaCapsula1,
    massaAgua1, massaSoloSeco1, teorUmidade1,
    
    numGolpes2, capsula2, massaSoloUmdCaps2, massaSoloSecCaps2, massaDaCapsula2,
    massaAgua2, massaSoloSeco2, teorUmidade2,
    
    numGolpes3, capsula3, massaSoloUmdCaps3, massaSoloSecCaps3, massaDaCapsula3,
    massaAgua3, massaSoloSeco3, teorUmidade3,
    
    numGolpes4, capsula4, massaSoloUmdCaps4, massaSoloSecCaps4, massaDaCapsula4,
    massaAgua4, massaSoloSeco4, teorUmidade4,
    
    numGolpes5, capsula5, massaSoloUmdCaps5, massaSoloSecCaps5, massaDaCapsula5,
    massaAgua5, massaSoloSeco5, teorUmidade5,
    
    // Plasticidade - 3 pontos
    capsula6, massaSoloUmdCaps6, massaSoloSecCaps6, massaDaCapsula6,
    massaAgua6, massaSoloSeco6, teorUmidade6,
    
    capsula7, massaSoloUmdCaps7, massaSoloSecCaps7, massaDaCapsula7,
    massaAgua7, massaSoloSeco7, teorUmidade7,
    
    capsula8, massaSoloUmdCaps8, massaSoloSecCaps8, massaDaCapsula8,
    massaAgua8, massaSoloSeco8, teorUmidade8,
    
    // Resultados
    ll,
    lp,
    np,
    ip,
    
    // Footer
    executado,
    verificado,
    aprovado,
    assinaturaVerificado,
    assinaturaAprovado,
  } = data;

  const isNP = np === 'NP';

  return (
    <div className="limit-atterberg-container">
      <header>
        <div className="header-logo">
          <img src={logo} alt="Logo Geocontrole" style={{ width: '60px', height: '40px' }} />
        </div>
        <div className="header-amostra">
          <div className="amostra-box">AMOSTRA Nº</div>
        </div>
      </header>

      <main style={{ marginTop: '45px' }}>
        {/* Tabela Cabeçalho */}
        <table className="tg-cabecalho" style={{ width: '100%', marginBottom: '10px' }}>
          <thead>
            <tr>
              <th className="tg-cabecalho-0pky col-1" colSpan={2} rowSpan={2}>
                CLIENTE: <br />
                <img
                  style={{ marginLeft: '30%' }}
                  src={logo}
                  alt="Logo"
                  width="60px"
                  height="40px"
                />
              </th>
              <th className="tg-cabecalho-0pky col-3" colSpan={2}>
                RELATÓRIO ENSAIO:{' '}
                <div style={{ marginLeft: '21%', fontSize: '15px', marginTop: '-6px' }}>
                  LIMITE DE LIQUIDEZ E PLASTICIDADE
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
                          borderLeftColor: '#fff',
                        }}
                      >
                        NORMA:
                        <div
                          style={{
                            fontSize: '10px',
                            marginLeft: '10px',
                            marginTop: '6px',
                            marginBottom: '5px',
                          }}
                          className="cabecalho-resultado-font"
                        >
                          {normaEnsaio}
                        </div>
                      </td>
                      <td
                        className="tg-cabecalho-0pky"
                        style={{
                          paddingBottom: '0px',
                          borderTopColor: '#fff',
                          borderBottomColor: '#fff',
                          borderRightColor: '#fff',
                        }}
                      >
                        PROCESSO: / LOTE:
                        <div
                          style={{
                            fontSize: '12px',
                            marginTop: '6px',
                            marginLeft: '25px',
                            marginBottom: '5px',
                          }}
                          className="cabecalho-resultado-font"
                        >
                          {processo} / {lote}
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
                    marginBottom: '4px',
                  }}
                  className="cabecalho-resultado-font"
                >
                  {profundidadeInicial} -- {profundidadeFinal}
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="tg-cabecalho-0pky col-2" colSpan={1} rowSpan={4}>
                DATA DO REGISTRO:{' '}
                <div style={{ marginTop: '15px' }}>
                  <span className="cabecalho-resultado-font">{dataRegistro}</span>
                </div>
              </td>
              <td className="tg-cabecalho-0pky col-2" colSpan={1} rowSpan={4}>
                DATA DE INICIO ENSAIO:{' '}
                <div style={{ marginTop: '2px' }}>
                  <span className="cabecalho-resultado-font">{dataInicio}</span>
                </div>
              </td>
              <td className="tg-cabecalho-0pky col-3" rowSpan={4}>
                SONDAGEM: <br />
                <div style={{ textAlign: 'center', fontSize: '12px', marginTop: '9px' }}>
                  <b>
                    <span className="cabecalho-resultado-font">{sondagem}</span>
                  </b>
                </div>
              </td>
              <td className="tg-cabecalho-p1nr">**DATUM: {datum}</td>
            </tr>
            <tr>
              <td className="tg-cabecalho-p1nr">
                **COORDENADA X:{' '}
                <span className="cabecalho-resultado-font">{coordenadaX}</span>
              </td>
            </tr>
            <tr>
              <td className="tg-cabecalho-p1nr">
                **COORDENADA Y:{' '}
                <span className="cabecalho-resultado-font">{coordenadaY}</span>
              </td>
            </tr>
            <tr>
              <td className="tg-cabecalho-ps66">
                **COORDENADA Z:{' '}
                <span className="cabecalho-resultado-font">{coordenadaZ}</span>
              </td>
            </tr>
            <tr>
              <td className="tg-cabecalho-0pky" rowSpan={2}>
                DATA DE CONCLUSÃO:{' '}
                <div style={{ marginTop: '15px' }}>
                  <span className="cabecalho-resultado-font">{dataFinal}</span>
                </div>
                <br />
              </td>
              <td className="tg-cabecalho-0pky" rowSpan={2}>
                **APLICAÇÃO:{' '}
                <div style={{ marginTop: '15px' }}>
                  <span className="cabecalho-resultado-font">{aplicacao}</span>
                </div>
              </td>
              <td className="tg-cabecalho-0pky col-3">
                **OBRA: <br />
                <div style={{ textAlign: 'center', fontSize: '12px', marginTop: '0px' }}>
                  <b>
                    <span className="cabecalho-resultado-font">{obra}</span>
                  </b>
                </div>
              </td>
              <td className="tg-cabecalho-p1nr" rowSpan={2}>
                **ESPECIFICAÇÃO TÉCNICA:{' '}
                <span className="cabecalho-resultado-font">{especificacaoTecnica}</span>
              </td>
            </tr>
            <tr>
              <td className="tg-cabecalho-0pky">
                **LOCAL DA COLETA / ENDEREÇO: <br />
                <div style={{ textAlign: 'center', fontSize: '12px' }}>
                  <span className="cabecalho-resultado-font">
                    {localizacao || '---'}
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Tabela Principal - Limite de Liquidez */}
        <div className="tg-main-table-2-wrap" style={{ overflow: 'auto' }}>
          <table className="tg-main-table-2" style={{ tableLayout: 'fixed', width: '758px' }}>
            <colgroup>
              <col style={{ width: '120px' }} />
              <col style={{ width: '80px' }} />
              <col style={{ width: '80px' }} />
              <col style={{ width: '80px' }} />
              <col style={{ width: '80px' }} />
              <col style={{ width: '80px' }} />
            </colgroup>
            <thead>
              <tr>
                <th className="tg-main-table-2-uxaa" colSpan={6} style={{ padding: '8px' }}>
                  <b>LIMITE DE LIQUIDEZ</b>
                </th>
              </tr>
              <tr>
                <th className="tg-main-table-2-doeh">Nº de golpes</th>
                <th className="tg-main-table-2-doeh">{numGolpes1}</th>
                <th className="tg-main-table-2-doeh">{numGolpes2}</th>
                <th className="tg-main-table-2-doeh">{numGolpes3}</th>
                <th className="tg-main-table-2-doeh">{numGolpes4}</th>
                <th className="tg-main-table-2-doeh">{numGolpes5}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="tg-main-table-2-doeh">Cápsula nº</td>
                <td className="tg-main-table-2-91w8">{capsula1}</td>
                <td className="tg-main-table-2-91w8">{capsula2}</td>
                <td className="tg-main-table-2-91w8">{capsula3}</td>
                <td className="tg-main-table-2-91w8">{capsula4}</td>
                <td className="tg-main-table-2-91w8">{capsula5}</td>
              </tr>
              <tr>
                <td className="tg-main-table-2-doeh">Amostra úmida + cápsula (g)</td>
                <td className="tg-main-table-2-91w8">{massaSoloUmdCaps1}</td>
                <td className="tg-main-table-2-91w8">{massaSoloUmdCaps2}</td>
                <td className="tg-main-table-2-91w8">{massaSoloUmdCaps3}</td>
                <td className="tg-main-table-2-91w8">{massaSoloUmdCaps4}</td>
                <td className="tg-main-table-2-91w8">{massaSoloUmdCaps5}</td>
              </tr>
              <tr>
                <td className="tg-main-table-2-doeh">Amostra seca + cápsula (g)</td>
                <td className="tg-main-table-2-91w8">{massaSoloSecCaps1}</td>
                <td className="tg-main-table-2-91w8">{massaSoloSecCaps2}</td>
                <td className="tg-main-table-2-91w8">{massaSoloSecCaps3}</td>
                <td className="tg-main-table-2-91w8">{massaSoloSecCaps4}</td>
                <td className="tg-main-table-2-91w8">{massaSoloSecCaps5}</td>
              </tr>
              <tr>
                <td className="tg-main-table-2-doeh">Cápsula (g)</td>
                <td className="tg-main-table-2-91w8">{massaDaCapsula1}</td>
                <td className="tg-main-table-2-91w8">{massaDaCapsula2}</td>
                <td className="tg-main-table-2-91w8">{massaDaCapsula3}</td>
                <td className="tg-main-table-2-91w8">{massaDaCapsula4}</td>
                <td className="tg-main-table-2-91w8">{massaDaCapsula5}</td>
              </tr>
              <tr>
                <td className="tg-main-table-2-doeh">Água (g)</td>
                <td className="tg-main-table-2-91w8">{massaAgua1}</td>
                <td className="tg-main-table-2-91w8">{massaAgua2}</td>
                <td className="tg-main-table-2-91w8">{massaAgua3}</td>
                <td className="tg-main-table-2-91w8">{massaAgua4}</td>
                <td className="tg-main-table-2-91w8">{massaAgua5}</td>
              </tr>
              <tr>
                <td className="tg-main-table-2-doeh">Solo seco (g)</td>
                <td className="tg-main-table-2-91w8">{massaSoloSeco1}</td>
                <td className="tg-main-table-2-91w8">{massaSoloSeco2}</td>
                <td className="tg-main-table-2-91w8">{massaSoloSeco3}</td>
                <td className="tg-main-table-2-91w8">{massaSoloSeco4}</td>
                <td className="tg-main-table-2-91w8">{massaSoloSeco5}</td>
              </tr>
              <tr>
                <td className="tg-main-table-2-doeh">Teor de umidade (%)</td>
                <td className="tg-main-table-2-uxaa">{teorUmidade1}</td>
                <td className="tg-main-table-2-uxaa">{teorUmidade2}</td>
                <td className="tg-main-table-2-uxaa">{teorUmidade3}</td>
                <td className="tg-main-table-2-uxaa">{teorUmidade4}</td>
                <td className="tg-main-table-2-uxaa">{teorUmidade5}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <br />

        {/* Tabela Limite de Plasticidade */}
        <div className="tg-main-table-2-wrap" style={{ overflow: 'auto' }}>
          <table className="tg-main-table-2" style={{ tableLayout: 'fixed', width: '758px' }}>
            <colgroup>
              <col style={{ width: '200px' }} />
              <col style={{ width: '120px' }} />
              <col style={{ width: '120px' }} />
              <col style={{ width: '120px' }} />
            </colgroup>
            <thead>
              <tr>
                <th className="tg-main-table-2-uxaa" colSpan={4} style={{ padding: '8px' }}>
                  <b>LIMITE DE PLASTICIDADE</b>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="tg-main-table-2-doeh">Cápsula nº</td>
                <td className="tg-main-table-2-91w8">{capsula6}</td>
                <td className="tg-main-table-2-91w8">{capsula7}</td>
                <td className="tg-main-table-2-91w8">{capsula8}</td>
              </tr>
              <tr>
                <td className="tg-main-table-2-doeh">Amostra úmida + cápsula (g)</td>
                <td className="tg-main-table-2-91w8">{massaSoloUmdCaps6}</td>
                <td className="tg-main-table-2-91w8">{massaSoloUmdCaps7}</td>
                <td className="tg-main-table-2-91w8">{massaSoloUmdCaps8}</td>
              </tr>
              <tr>
                <td className="tg-main-table-2-doeh">Amostra seca + cápsula (g)</td>
                <td className="tg-main-table-2-91w8">{massaSoloSecCaps6}</td>
                <td className="tg-main-table-2-91w8">{massaSoloSecCaps7}</td>
                <td className="tg-main-table-2-91w8">{massaSoloSecCaps8}</td>
              </tr>
              <tr>
                <td className="tg-main-table-2-doeh">Cápsula (g)</td>
                <td className="tg-main-table-2-91w8">{massaDaCapsula6}</td>
                <td className="tg-main-table-2-91w8">{massaDaCapsula7}</td>
                <td className="tg-main-table-2-91w8">{massaDaCapsula8}</td>
              </tr>
              <tr>
                <td className="tg-main-table-2-doeh">Água (g)</td>
                <td className="tg-main-table-2-91w8">{massaAgua6}</td>
                <td className="tg-main-table-2-91w8">{massaAgua7}</td>
                <td className="tg-main-table-2-91w8">{massaAgua8}</td>
              </tr>
              <tr>
                <td className="tg-main-table-2-doeh">Solo seco (g)</td>
                <td className="tg-main-table-2-91w8">{massaSoloSeco6}</td>
                <td className="tg-main-table-2-91w8">{massaSoloSeco7}</td>
                <td className="tg-main-table-2-91w8">{massaSoloSeco8}</td>
              </tr>
              <tr>
                <td className="tg-main-table-2-doeh">Teor de umidade (%)</td>
                <td className="tg-main-table-2-uxaa">{teorUmidade6}</td>
                <td className="tg-main-table-2-uxaa">{teorUmidade7}</td>
                <td className="tg-main-table-2-uxaa">{teorUmidade8}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Resultados Finais */}
        <div style={{ marginTop: '20px', fontSize: '12px', paddingLeft: '10px' }}>
          <p><b>LL (Limite de Liquidez):</b> {ll}%</p>
          <p><b>LP (Limite de Plasticidade):</b> {isNP ? 'NP' : `${lp}%`}</p>
          <p><b>IP (Índice de Plasticidade):</b> {isNP ? 'NP' : ip}</p>
        </div>
      </main>

      <Footer
        executado={executado}
        signatures={{
          verificador: assinaturaVerificado ? {
            Nome: verificado,
            Assinatura: assinaturaVerificado,
          } : undefined,
          aprovador: assinaturaAprovado ? {
            Nome: aprovado,
            Assinatura: assinaturaAprovado,
          } : undefined,
        }}
      />
    </div>
  );
};

export default LimitOfLiquidityAndPlasticityModel;
