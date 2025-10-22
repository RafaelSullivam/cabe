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

      <main className="water-content-main">

        {/* Seção de temperatura de secagem */}
        <div className="temperature-section">
          <div className="temperature-label">
            <p>Temperatura de secagem:</p>
          </div>
          <div className="temperature-options">
            <div className="temperature-option">
              <input 
                type="checkbox" 
                className="checkbox temperature-checkbox"
                checked={dataRehearsal.Temp_CheckBox1 === "P1"}
                readOnly
              />
              <span>105ºC ± 5ºC</span>
            </div>
            <div className="temperature-option">
              <input 
                type="checkbox" 
                className="checkbox temperature-checkbox"
                checked={dataRehearsal.Temp_CheckBox2 === "P2"}
                readOnly
              />
              <span>60ºC ± 5ºC</span>
            </div>
          </div>
        </div>

        {/* Tabela principal .tg - estrutura igual ao PHP */}
        <table className="water-table">
      
            {/* Linha 1: Contém todas as tabelas de dados (cápsulas + incertezas) */}
          
              <td 
                className="tg-0pky main-content-cell" 
                colSpan={15}
              >
                {/* Tabela de dados das cápsulas */}
                <table className="tg-tabela-de-capsula water-table-inner">
                  <colgroup>
                    <col className="col-capsula" />
                    <col className="col-num1" />
                    <col className="col-num2" />
                    <col className="col-num3" />
                    <col className="col-num4" />
                    <col className="col-num5" />
                  </colgroup>
                  <thead>
                    <tr>
                      <td className="tg-tabela-de-capsula-0r18 cell-left">Cápsula</td>
                      <td className="tg-tabela-de-capsula-0r18">Nº</td>
                      <td className="tg-tabela-de-capsula-0r18 cell-50px">{dataRehearsal.Capsula1}</td>
                      <td className="tg-tabela-de-capsula-0r18 cell-50px">{dataRehearsal.Capsula2}</td>
                      <td className="tg-tabela-de-capsula-0r18 cell-50px">{dataRehearsal.Capsula3}</td>
                      <td className="tg-tabela-de-capsula-0r18 cell-50px">{dataRehearsal.Capsula4}</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="tg-tabela-de-capsula-0r18 cell-left">Massa de amostra úmida + cápsula</td>
                      <td className="tg-tabela-de-capsula-0r18">g</td>
                      <td className="tg-tabela-de-capsula-0r18">{dataRehearsal.MassaUmida1}</td>
                      <td className="tg-tabela-de-capsula-0r18">{dataRehearsal.MassaUmida2}</td>
                      <td className="tg-tabela-de-capsula-0r18">{dataRehearsal.MassaUmida3}</td>
                      <td className="tg-tabela-de-capsula-0r18">{dataRehearsal.MassaUmida4}</td>
                    </tr>
                    <tr>
                      <td className="tg-tabela-de-capsula-0r18 cell-left">Massa da amostra seca + cápsula</td>
                      <td className="tg-tabela-de-capsula-0r18">g</td>
                      <td className="tg-tabela-de-capsula-0r18">{dataRehearsal.MassaSeca1}</td>
                      <td className="tg-tabela-de-capsula-0r18">{dataRehearsal.MassaSeca2}</td>
                      <td className="tg-tabela-de-capsula-0r18">{dataRehearsal.MassaSeca3}</td>
                      <td className="tg-tabela-de-capsula-0r18">{dataRehearsal.MassaSeca4}</td>
                    </tr>
                    <tr>
                      <td className="tg-tabela-de-capsula-0r18 cell-left">Massa da cápsula</td>
                      <td className="tg-tabela-de-capsula-0r18">g</td>
                      <td className="tg-tabela-de-capsula-0r18">{dataRehearsal.MassaCapsula1}</td>
                      <td className="tg-tabela-de-capsula-0r18">{dataRehearsal.MassaCapsula2}</td>
                      <td className="tg-tabela-de-capsula-0r18">{dataRehearsal.MassaCapsula3}</td>
                      <td className="tg-tabela-de-capsula-0r18">{dataRehearsal.MassaCapsula4}</td>
                    </tr>
                    <tr>
                      <td className="tg-tabela-de-capsula-0r18 cell-left">Massa da água</td>
                      <td className="tg-tabela-de-capsula-0r18">g</td>
                      <td className="tg-tabela-de-capsula-0r18">{dataRehearsal.MassaAgua1}</td>
                      <td className="tg-tabela-de-capsula-0r18">{dataRehearsal.MassaAgua2}</td>
                      <td className="tg-tabela-de-capsula-0r18">{dataRehearsal.MassaAgua3}</td>
                      <td className="tg-tabela-de-capsula-0r18">{dataRehearsal.MassaAgua4}</td>
                    </tr>
                    <tr>
                      <td className="tg-tabela-de-capsula-0r18 cell-left">Massa do solo seco</td>
                      <td className="tg-tabela-de-capsula-0r18">g</td>
                      <td className="tg-tabela-de-capsula-0r18">{dataRehearsal.MassaSoloSeco1}</td>
                      <td className="tg-tabela-de-capsula-0r18">{dataRehearsal.MassaSoloSeco2}</td>
                      <td className="tg-tabela-de-capsula-0r18">{dataRehearsal.MassaSoloSeco3}</td>
                      <td className="tg-tabela-de-capsula-0r18">{dataRehearsal.MassaSoloSeco4}</td>
                    </tr>
                    <tr>
                      <td className="tg-tabela-de-capsula-0r18 cell-left">Teor de umidade</td>
                      <td className="tg-tabela-de-capsula-0r18">%</td>
                      <td className="tg-tabela-de-capsula-0r18">{dataRehearsal.TeorAgua1}</td>
                      <td className="tg-tabela-de-capsula-0r18">{dataRehearsal.TeorAgua2}</td>
                      <td className="tg-tabela-de-capsula-0r18">{dataRehearsal.TeorAgua3}</td>
                      <td className="tg-tabela-de-capsula-0r18">{dataRehearsal.TeorAgua4}</td>
                    </tr>
                    <tr>
                      <td className="tg-tabela-de-capsula-0r18 cell-left">Teor de umidade médio</td>
                      <td className="tg-tabela-de-capsula-0r18">%</td>
                      <td 
                        className="tg-tabela-de-capsula-0r18 cell-highlighted" 
                        colSpan={4}
                      >
                        {dataRehearsal.Media}
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* Título da tabela de incertezas */}
                <div className="incerteza-title">
                  Tabela de Incertezas do resultado do ensaio
                </div>

                {/* Tabela de incertezas */}
                <table className="tg-tabela-de-capsula-2">
                  <tbody>
                    <tr className="table-row-spaced-4">
                      <td className="tg-tabela-de-capsula-0r18 cell-wide">
                        Incerteza Expandida
                      </td>
                      <td className="tg-tabela-de-capsula-0r10">%</td>
                      <td className="tg-tabela-de-capsula-0r18" colSpan={4}>{dataRehearsal.Incerteza}</td>
                    </tr>
                    <tr className="table-row-spaced">
                      <td className="tg-tabela-de-capsula-0r18 cell-left">
                        Fator de Expansão
                      </td>
                      <td className="tg-tabela-de-capsula-0r10">k</td>
                      <td className="tg-tabela-de-capsula-0r18" colSpan={4}>{dataRehearsal.Expansao}</td>
                    </tr>
                  </tbody>
                </table>
              </td>
           
            {/* Linha de Observações */}
          
      
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