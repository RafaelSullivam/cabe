import React from 'react';
import { WaterContentModelProps } from '../../types/waterContentTypes';
import HeaderTable from '../HeaderTable/HeaderTable';
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
      <main style={{ marginTop: '45px' }}>
        <HeaderTable
          logo={logo}
          clienteNome="CLIENTE"
          relatorioTitulo="RELATÓRIO ENSAIO"
          relatorioSubtitulo="DETERMINAÇÃO DO TEOR DE UMIDADE DO SOLO"
          codSample={codSample}
          numberSample={numberSample}
        />

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

        {/* Tabela de dados das cápsulas */}
        <table className="tg-tabela-de-capsula" style={{ marginTop: '10px', width: '100%' }}>
          <thead>
            <tr>
              <th className="tg-tabela-de-capsula-0r18">CÁPSULA</th>
              <th className="tg-tabela-de-capsula-0r18">1</th>
              <th className="tg-tabela-de-capsula-0r18">2</th>
              <th className="tg-tabela-de-capsula-0r18">3</th>
              <th className="tg-tabela-de-capsula-0r18">4</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="tg-tabela-de-capsula-0r18">NÚMERO DA CÁPSULA</td>
              <td className="tg-tabela-de-capsula-0r10">{dataRehearsal.Capsula1}</td>
              <td className="tg-tabela-de-capsula-0r10">{dataRehearsal.Capsula2}</td>
              <td className="tg-tabela-de-capsula-0r10">{dataRehearsal.Capsula3}</td>
              <td className="tg-tabela-de-capsula-0r10">{dataRehearsal.Capsula4}</td>
            </tr>
            <tr>
              <td className="tg-tabela-de-capsula-0r18">MASSA ÚMIDA + CÁPSULA (g)</td>
              <td className="tg-tabela-de-capsula-0r10">{dataRehearsal.MassaUmida1}</td>
              <td className="tg-tabela-de-capsula-0r10">{dataRehearsal.MassaUmida2}</td>
              <td className="tg-tabela-de-capsula-0r10">{dataRehearsal.MassaUmida3}</td>
              <td className="tg-tabela-de-capsula-0r10">{dataRehearsal.MassaUmida4}</td>
            </tr>
            <tr>
              <td className="tg-tabela-de-capsula-0r18">MASSA SECA + CÁPSULA (g)</td>
              <td className="tg-tabela-de-capsula-0r10">{dataRehearsal.MassaSeca1}</td>
              <td className="tg-tabela-de-capsula-0r10">{dataRehearsal.MassaSeca2}</td>
              <td className="tg-tabela-de-capsula-0r10">{dataRehearsal.MassaSeca3}</td>
              <td className="tg-tabela-de-capsula-0r10">{dataRehearsal.MassaSeca4}</td>
            </tr>
            <tr>
              <td className="tg-tabela-de-capsula-0r18">MASSA DA CÁPSULA (g)</td>
              <td className="tg-tabela-de-capsula-0r10">{dataRehearsal.MassaCapsula1}</td>
              <td className="tg-tabela-de-capsula-0r10">{dataRehearsal.MassaCapsula2}</td>
              <td className="tg-tabela-de-capsula-0r10">{dataRehearsal.MassaCapsula3}</td>
              <td className="tg-tabela-de-capsula-0r10">{dataRehearsal.MassaCapsula4}</td>
            </tr>
            <tr>
              <td className="tg-tabela-de-capsula-0r18">MASSA DA ÁGUA (g)</td>
              <td className="tg-tabela-de-capsula-0r10">{dataRehearsal.MassaAgua1}</td>
              <td className="tg-tabela-de-capsula-0r10">{dataRehearsal.MassaAgua2}</td>
              <td className="tg-tabela-de-capsula-0r10">{dataRehearsal.MassaAgua3}</td>
              <td className="tg-tabela-de-capsula-0r10">{dataRehearsal.MassaAgua4}</td>
            </tr>
            <tr>
              <td className="tg-tabela-de-capsula-0r18">MASSA DO SOLO SECO (g)</td>
              <td className="tg-tabela-de-capsula-0r10">{dataRehearsal.MassaSoloSeco1}</td>
              <td className="tg-tabela-de-capsula-0r10">{dataRehearsal.MassaSoloSeco2}</td>
              <td className="tg-tabela-de-capsula-0r10">{dataRehearsal.MassaSoloSeco3}</td>
              <td className="tg-tabela-de-capsula-0r10">{dataRehearsal.MassaSoloSeco4}</td>
            </tr>
            <tr>
              <td className="tg-tabela-de-capsula-0r18">TEOR DE ÁGUA (%)</td>
              <td className="tg-tabela-de-capsula-0r10">{dataRehearsal.TeorAgua1}</td>
              <td className="tg-tabela-de-capsula-0r10">{dataRehearsal.TeorAgua2}</td>
              <td className="tg-tabela-de-capsula-0r10">{dataRehearsal.TeorAgua3}</td>
              <td className="tg-tabela-de-capsula-0r10">{dataRehearsal.TeorAgua4}</td>
            </tr>
          </tbody>
        </table>

        {/* Seção de resultados finais */}
        <table className="tg-tabela-de-capsula-2" style={{ marginTop: '15px' }}>
          <tbody>
            <tr>
              <td className="tg-tabela-de-capsula-0r18" style={{ width: '200px', backgroundColor: '#f0f0f0' }}>
                MÉDIA (%)
              </td>
              <td className="tg-tabela-de-capsula-0r10" style={{ fontWeight: 'bold' }}>
                {dataRehearsal.Media}
              </td>
            </tr>
            <tr>
              <td className="tg-tabela-de-capsula-0r18" style={{ backgroundColor: '#f0f0f0' }}>
                INCERTEZA EXPANDIDA (%)
              </td>
              <td className="tg-tabela-de-capsula-0r10">
                {dataRehearsal.Incerteza}
              </td>
            </tr>
            <tr>
              <td className="tg-tabela-de-capsula-0r18" style={{ backgroundColor: '#f0f0f0' }}>
                FATOR DE EXPANSÃO K
              </td>
              <td className="tg-tabela-de-capsula-0r10">
                {dataRehearsal.Expansao}
              </td>
            </tr>
          </tbody>
        </table>

        {/* Observações finais */}
        <div style={{ marginTop: '20px', fontSize: '11px' }}>
          <p><strong>Observações:</strong></p>
          <p>- Os resultados referem-se somente às amostras ensaiadas.</p>
          <p>- A incerteza expandida foi determinada multiplicando-se a incerteza padrão combinada pelo fator de expansão k=2, que para uma distribuição normal corresponde a uma probabilidade de abrangência de aproximadamente 95%.</p>
          <p>- Este relatório só pode ser reproduzido na sua totalidade.</p>
        </div>

        {/* Seção de assinaturas */}
        <div style={{ marginTop: '30px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              <tr>
                <td style={{ width: '33%', textAlign: 'center', padding: '20px 10px' }}>
                  {signatures?.verificador && (
                    <>
                      <img 
                        src={`data:image/jpeg;base64,${signatures.verificador.Assinatura}`}
                        alt="Assinatura Verificador"
                        style={{ maxWidth: '150px', maxHeight: '50px' }}
                      />
                      <div style={{ borderTop: '1px solid black', marginTop: '5px', paddingTop: '5px' }}>
                        {signatures.verificador.Nome}
                      </div>
                      <div style={{ fontSize: '10px', marginTop: '2px' }}>
                        VERIFICADO
                      </div>
                    </>
                  )}
                </td>
                <td style={{ width: '33%', textAlign: 'center', padding: '20px 10px' }}>
                  {signatures?.aprovador && (
                    <>
                      <img 
                        src={`data:image/jpeg;base64,${signatures.aprovador.Assinatura}`}
                        alt="Assinatura Aprovador"
                        style={{ maxWidth: '150px', maxHeight: '50px' }}
                      />
                      <div style={{ borderTop: '1px solid black', marginTop: '5px', paddingTop: '5px' }}>
                        {signatures.aprovador.Nome}
                      </div>
                      <div style={{ fontSize: '10px', marginTop: '2px' }}>
                        APROVADO
                      </div>
                    </>
                  )}
                </td>
                <td style={{ width: '33%', textAlign: 'center', padding: '20px 10px' }}>
                  {signatures?.marciel && (
                    <>
                      <img 
                        src={`data:image/jpeg;base64,${signatures.marciel.Assinatura}`}
                        alt="Assinatura Marciel"
                        style={{ maxWidth: '150px', maxHeight: '50px' }}
                      />
                      <div style={{ borderTop: '1px solid black', marginTop: '5px', paddingTop: '5px' }}>
                        {signatures.marciel.Nome}
                      </div>
                      <div style={{ fontSize: '10px', marginTop: '2px' }}>
                        EXECUTADO
                      </div>
                    </>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </main>

      {/* Footer da página */}
      <footer className="footer">
        <div style={{ fontSize: '10px', textAlign: 'center' }}>
          Data: {dataFormatada} | Página {pagina} de {totalPaginas}
        </div>
      </footer>
    </div>
  );
};

export default WaterContentModel;