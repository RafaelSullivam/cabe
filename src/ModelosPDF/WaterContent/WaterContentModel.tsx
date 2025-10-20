import React from 'react';
import { WaterContentModelProps } from '../../types/waterContentTypes';
import HeaderTable from '../HeaderTable/HeaderTable';
import Footer from '../Footer/Footer';
import './WaterContentStyles.css';

const WaterContentModel: React.FC<WaterContentModelProps> = ({
  dataRehearsal,
  codSample,
  numberSample,
  observation,
  pagina,
  totalPaginas,
  logo,
  dataFormatada,
  signatures
}) => {

  return (
    <div className="water-content-model">
      {/* Cabeçalho usando componente HeaderTable */}
      <HeaderTable
        logo={logo}
        clienteNome="CLIENTE"
        relatorioTitulo="RELATÓRIO ENSAIO"
        relatorioSubtitulo="DETERMINAÇÃO DO TEOR DE UMIDADE DO SOLO"
        codSample={codSample}
        numberSample={numberSample}
      />

      <main style={{ marginTop: '45px' }}>

        {/* Seção de temperatura de secagem */}
        <div style={{ marginTop: '4%', height: '40px', textAlign: 'left' }}>
          <div style={{ display: 'inline-block', paddingRight: '2px' }}>
            <p style={{ fontSize: '13px' }}>Temperatura de secagem:</p>
          </div>
          <div style={{ 
            display: 'inline-block', 
            fontSize: '13px', 
            marginLeft: '10px',
            marginRight: '5px' 
          }}>
            <input 
              type="checkbox" 
              className="checkbox"
              checked={dataRehearsal.Temp_CheckBox1 === "P1"}
              readOnly
            />
            <span>105ºC ± 5ºC (P1)</span>
          </div>
          <div style={{ 
            display: 'inline-block', 
            fontSize: '13px', 
            marginLeft: '10px' 
          }}>
            <input 
              type="checkbox" 
              className="checkbox"
              checked={dataRehearsal.Temp_CheckBox2 === "P2"}
              readOnly
            />
            <span>60ºC ± 5ºC (P2)</span>
          </div>
        </div>

        {/* Tabela principal .tg - estrutura igual ao PHP */}
        <table className="tg" style={{ paddingRight: '10px' }}>
          <tbody>
            {/* Linha 1: Contém todas as tabelas de dados (cápsulas + incertezas) */}
            <tr>
              <td 
                className="tg-0pky" 
                colSpan={15} 
                style={{ 
                  borderLeft: 'none', 
                  borderRight: 'none', 
                  borderTopColor: '#fff',
                  paddingLeft: '0px',
                  paddingRight: '0px',
                  height: '605px'
                }}
              >
                {/* Tabela de dados das cápsulas */}
                <table className="tg-tabela-de-capsula" style={{ marginTop: '0px', width: '100%' }}>
                  <colgroup>
                    <col style={{ width: '252.2px' }} />
                    <col style={{ width: '42.2px' }} />
                    <col style={{ width: '54.2px' }} />
                    <col style={{ width: '54.2px' }} />
                    <col style={{ width: '54.2px' }} />
                    <col style={{ width: '54.2px' }} />
                  </colgroup>
                  <thead>
                    <tr>
                      <td className="tg-tabela-de-capsula-0r18" style={{ textAlign: 'left' }}>Cápsula</td>
                      <td className="tg-tabela-de-capsula-0r18">Nº</td>
                      <td className="tg-tabela-de-capsula-0r18" style={{ width: '50px' }}>{dataRehearsal.Capsula1}</td>
                      <td className="tg-tabela-de-capsula-0r18" style={{ width: '50px' }}>{dataRehearsal.Capsula2}</td>
                      <td className="tg-tabela-de-capsula-0r18" style={{ width: '50px' }}>{dataRehearsal.Capsula3}</td>
                      <td className="tg-tabela-de-capsula-0r18" style={{ width: '50px' }}>{dataRehearsal.Capsula4}</td>
                    </tr>
                  </thead>
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
                      <td 
                        className="tg-tabela-de-capsula-0r18" 
                        style={{ backgroundColor: '#c8c8c8', fontWeight: 'bold' }}
                        colSpan={4}
                      >
                        {dataRehearsal.Media}
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* Título da tabela de incertezas */}
                <div style={{ 
                  marginTop: '15px', 
                  textAlign: 'left', 
                  fontSize: '12px', 
                  fontFamily: 'Arial, sans-serif',
                  fontWeight: 'bold'
                }}>
                  Tabela de Incertezas do resultado do ensaio
                </div>

                {/* Tabela de incertezas */}
                <table className="tg-tabela-de-capsula-2" style={{ width: '100%', marginTop: '5px' }}>
                  <tbody>
                    <tr style={{ marginTop: '5px', height: '4px' }}>
                      <td className="tg-tabela-de-capsula-0r18" style={{ textAlign: 'left', width: '442.2px' }}>
                        Incerteza Expandida
                      </td>
                      <td className="tg-tabela-de-capsula-0r10">%</td>
                      <td className="tg-tabela-de-capsula-0r18" colSpan={4}>{dataRehearsal.Incerteza}</td>
                    </tr>
                    <tr style={{ marginTop: '5px', height: '5px' }}>
                      <td className="tg-tabela-de-capsula-0r18" style={{ textAlign: 'left' }}>
                        Fator de Expansão
                      </td>
                      <td className="tg-tabela-de-capsula-0r10">k</td>
                      <td className="tg-tabela-de-capsula-0r18" colSpan={4}>{dataRehearsal.Expansao}</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            {/* Linha de Observações */}
          
          </tbody>
        </table>

      </main>

      {/* Footer da página - Componente reutilizável com assinaturas */}
      <Footer 
        signatures={signatures}
        executado={dataRehearsal.Executado}
        pagina={pagina}
        totalPaginas={totalPaginas}
        dataEmissao={new Date().toLocaleDateString('pt-BR')}

      />
    </div>
  );
};

export default WaterContentModel;