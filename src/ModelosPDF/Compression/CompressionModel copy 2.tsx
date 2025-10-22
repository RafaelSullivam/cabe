import React from 'react';
import './CompressionStyles.css';
import Footer from '../Footer/Footer';
import HeaderTable from '../HeaderTable/HeaderTable';
import { CompressionProps } from '../../types/compressionTypes';

const CompressionModel: React.FC<CompressionProps> = ({ 
  dataHeaderAndFooter,
  example,
  signatures,
  pagina,
  totalPaginas
}) => {
  // Verificar se as props necessárias existem
  if (!dataHeaderAndFooter || !example) {
    return (
      <div style={{ padding: '20px', textAlign: 'center', color: 'red' }}>
        <h3>Erro: Dados insuficientes</h3>
        <p>dataHeaderAndFooter e example são obrigatórios</p>
      </div>
    );
  }

  const {
    // Cabeçalho - usando dataHeaderAndFooter
    logo,
  } = dataHeaderAndFooter;

  const {
    // Dados específicos da compactação - usando example
    energiaCompactacao,
    
    // 6 Pontos de Compactação (P1 a P6)
    moldeP1, moldeP2, moldeP3, moldeP4, moldeP5, moldeP6,
    massaSoloUmiMassaMolP1, massaSoloUmiMassaMolP2, massaSoloUmiMassaMolP3,
    massaSoloUmiMassaMolP4, massaSoloUmiMassaMolP5, massaSoloUmiMassaMolP6,
    massaSoloUmidaP1, massaSoloUmidaP2, massaSoloUmidaP3,
    massaSoloUmidaP4, massaSoloUmidaP5, massaSoloUmidaP6,
    volumeMolde1, volumeMolde2, volumeMolde3, volumeMolde4, volumeMolde5, volumeMolde6,
    massaAgua1, massaAgua2, massaAgua3, massaAgua4, massaAgua5, massaAgua6,
    
    // 3 Determinações de Umidade para cada ponto (P11-P13, P21-P23, ..., P61-P63)
    capsulaP11, capsulaP12, capsulaP13,
    capsulaP21, capsulaP22, capsulaP23,
    capsulaP31, capsulaP32, capsulaP33,
    capsulaP41, capsulaP42, capsulaP43,
    capsulaP51, capsulaP52, capsulaP53,
    capsulaP61, capsulaP62, capsulaP63,
    
    umidaCapsulaP11, umidaCapsulaP12, umidaCapsulaP13,
    umidaCapsulaP21, umidaCapsulaP22, umidaCapsulaP23,
    umidaCapsulaP31, umidaCapsulaP32, umidaCapsulaP33,
    umidaCapsulaP41, umidaCapsulaP42, umidaCapsulaP43,
    umidaCapsulaP51, umidaCapsulaP52, umidaCapsulaP53,
    umidaCapsulaP61, umidaCapsulaP62, umidaCapsulaP63,
    
    secaCapsulaP11, secaCapsulaP12, secaCapsulaP13,
    secaCapsulaP21, secaCapsulaP22, secaCapsulaP23,
    secaCapsulaP31, secaCapsulaP32, secaCapsulaP33,
    secaCapsulaP41, secaCapsulaP42, secaCapsulaP43,
    secaCapsulaP51, secaCapsulaP52, secaCapsulaP53,
    secaCapsulaP61, secaCapsulaP62, secaCapsulaP63,
    
    massaCapsulaP11, massaCapsulaP12, massaCapsulaP13,
    massaCapsulaP21, massaCapsulaP22, massaCapsulaP23,
    massaCapsulaP31, massaCapsulaP32, massaCapsulaP33,
    massaCapsulaP41, massaCapsulaP42, massaCapsulaP43,
    massaCapsulaP51, massaCapsulaP52, massaCapsulaP53,
    massaCapsulaP61, massaCapsulaP62, massaCapsulaP63,
    
    massaAguaP11, massaAguaP12, massaAguaP13,
    massaAguaP21, massaAguaP22, massaAguaP23,
    massaAguaP31, massaAguaP32, massaAguaP33,
    massaAguaP41, massaAguaP42, massaAguaP43,
    massaAguaP51, massaAguaP52, massaAguaP53,
    massaAguaP61, massaAguaP62, massaAguaP63,
    
    teorUmidadeP11, teorUmidadeP12, teorUmidadeP13,
    teorUmidadeP21, teorUmidadeP22, teorUmidadeP23,
    teorUmidadeP31, teorUmidadeP32, teorUmidadeP33,
    teorUmidadeP41, teorUmidadeP42, teorUmidadeP43,
    teorUmidadeP51, teorUmidadeP52, teorUmidadeP53,
    teorUmidadeP61, teorUmidadeP62, teorUmidadeP63,
    
    teorUmidadeMediaP1, teorUmidadeMediaP2, teorUmidadeMediaP3,
    teorUmidadeMediaP4, teorUmidadeMediaP5, teorUmidadeMediaP6,
    
    massaEspecificaSeca1, massaEspecificaSeca2, massaEspecificaSeca3,
    massaEspecificaSeca4, massaEspecificaSeca5, massaEspecificaSeca6,
    
    // Resultados finais
    umidadeOtima,
    massaEspecificaAparenteMaxima,
    grauSaturacao,
    observacao,
  } = example;

  return (
    <div className="compression-container">
      {/* HeaderTable Component */}
            <HeaderTable
        clienteNome="CLIENTE"
        relatorioTitulo="RELATÓRIO ENSAIO"
        relatorioSubtitulo="DETERMINAÇÃO DE MASSA ESPECÍFICA APARENTE - ENSAIO DE COMPACTAÇÃO"
        codSample={example?.codSample || ''}
        numberSample={example?.numberSample || ''}
        logo={logo}
      />

      {/* Conteúdo Principal da Compactação */}
      <main className="compression-container" style={{ padding: '10px', fontSize: '8px' }}>
        <p style={{ fontSize: '9px', marginBottom: '10px' }}>
          Compactação (Proctor):
        </p>
        
        {/* Checkboxes de Energia de Compactação */}
        <div style={{ display: 'flex', gap: '18px', marginBottom: '20px' }}>
          <div className="checkbox">
            <input
              type="checkbox"
              id="checkbox1"
              name="checkboxes"
              checked={energiaCompactacao === 'Normal'}
              readOnly
            />
            <label htmlFor="checkbox1" style={{ fontSize: '8px', verticalAlign: 'middle' }}>
              Normal
            </label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              id="checkbox2"
              name="checkboxes"
              checked={energiaCompactacao === 'Modificada'}
              readOnly
            />
            <label htmlFor="checkbox2" style={{ fontSize: '8px', verticalAlign: 'middle' }}>
              Modificada
            </label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              id="checkbox3"
              name="checkboxes"
              checked={energiaCompactacao === 'Outro'}
              readOnly
            />
            <label htmlFor="checkbox3" style={{ fontSize: '8px', verticalAlign: 'middle' }}>
              Outro
            </label>
          </div>
        </div>

        {/* Tabela de Dados de Compactação */}
        <div className="tg-compression-wrap">
          <table className="tg-compression" style={{ tableLayout: 'fixed', width: '758px', fontSize: '8px' }}>
            <colgroup>
              <col style={{ width: '34.2px' }} />
              <col style={{ width: '21.2px' }} />
              <col style={{ width: '21.2px' }} />
              <col style={{ width: '21.2px' }} />
              <col style={{ width: '39.2px' }} />
              <col style={{ width: '39.2px' }} />
              <col style={{ width: '37.2px' }} />
              <col style={{ width: '39.2px' }} />
              <col style={{ width: '39.2px' }} />
              <col style={{ width: '39.2px' }} />
              <col style={{ width: '39.2px' }} />
              <col style={{ width: '39.2px' }} />
              <col style={{ width: '39.2px' }} />
              <col style={{ width: '39.2px' }} />
              <col style={{ width: '39.2px' }} />
              <col style={{ width: '39.2px' }} />
              <col style={{ width: '39.2px' }} />
              <col style={{ width: '39.2px' }} />
              <col style={{ width: '39.2px' }} />
              <col style={{ width: '25.2px' }} />
              <col style={{ width: '25.2px' }} />
              <col style={{ width: '25.2px' }} />
            </colgroup>
            <thead>
              <tr>
                <th className="tg-compression-7wru" colSpan={2}>Moldagem</th>
                <th className="tg-compression-7wru" colSpan={2}>Corpo de prova</th>
                <th className="tg-compression-25da" colSpan={3}><b>P1</b></th>
                <th className="tg-compression-25da" colSpan={3}><b>P2</b></th>
                <th className="tg-compression-25da" colSpan={3}><b>P3</b></th>
                <th className="tg-compression-25da" colSpan={3}><b>P4</b></th>
                <th className="tg-compression-25da" colSpan={3}><b>P5</b></th>
                <th className="tg-compression-25da" colSpan={3}><b>P6</b></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="tg-compression-7wru" colSpan={3}>Molde de compactação</td>
                <td className="tg-compression-6rs4">nº</td>
                <td className="tg-compression-gzo9" colSpan={3}>{moldeP1}</td>
                <td className="tg-compression-gzo9" colSpan={3}>{moldeP2}</td>
                <td className="tg-compression-gzo9" colSpan={3}>{moldeP3}</td>
                <td className="tg-compression-gzo9" colSpan={3}>{moldeP4}</td>
                <td className="tg-compression-gzo9" colSpan={3}>{moldeP5}</td>
                <td className="tg-compression-gzo9" colSpan={3}>{moldeP6}</td>
              </tr>
              <tr>
                <td className="tg-compression-7wru" colSpan={3}>
                  Massa do solo úmido + massa do molde
                </td>
                <td className="tg-compression-6rs4">g</td>
                <td className="tg-compression-gzo9" colSpan={3}>{massaSoloUmiMassaMolP1}</td>
                <td className="tg-compression-gzo9" colSpan={3}>{massaSoloUmiMassaMolP2}</td>
                <td className="tg-compression-gzo9" colSpan={3}>{massaSoloUmiMassaMolP3}</td>
                <td className="tg-compression-gzo9" colSpan={3}>{massaSoloUmiMassaMolP4}</td>
                <td className="tg-compression-gzo9" colSpan={3}>{massaSoloUmiMassaMolP5}</td>
                <td className="tg-compression-gzo9" colSpan={3}>{massaSoloUmiMassaMolP6}</td>
              </tr>
              <tr>
                <td className="tg-compression-7wru" colSpan={2}>Massa do solo úmido</td>
                <td className="tg-compression-6rs4">Mh</td>
                <td className="tg-compression-6rs4">g</td>
                <td className="tg-compression-gzo9" colSpan={3}>{massaSoloUmidaP1}</td>
                <td className="tg-compression-gzo9" colSpan={3}>{massaSoloUmidaP2}</td>
                <td className="tg-compression-gzo9" colSpan={3}>{massaSoloUmidaP3}</td>
                <td className="tg-compression-gzo9" colSpan={3}>{massaSoloUmidaP4}</td>
                <td className="tg-compression-gzo9" colSpan={3}>{massaSoloUmidaP5}</td>
                <td className="tg-compression-gzo9" colSpan={3}>{massaSoloUmidaP6}</td>
              </tr>
              <tr>
                <td className="tg-compression-7wru" colSpan={2}>Volume do molde</td>
                <td className="tg-compression-6rs4">V</td>
                <td className="tg-compression-6rs4">cm³</td>
                <td className="tg-compression-gzo9" colSpan={3}>{volumeMolde1}</td>
                <td className="tg-compression-gzo9" colSpan={3}>{volumeMolde2}</td>
                <td className="tg-compression-gzo9" colSpan={3}>{volumeMolde3}</td>
                <td className="tg-compression-gzo9" colSpan={3}>{volumeMolde4}</td>
                <td className="tg-compression-gzo9" colSpan={3}>{volumeMolde5}</td>
                <td className="tg-compression-gzo9" colSpan={3}>{volumeMolde6}</td>
              </tr>
              <tr>
                <td className="tg-compression-7wru" colSpan={2}>Massa específica úmida</td>
                <td className="tg-compression-6rs4">
                  <p style={{ fontFamily: 'DejaVu Sans' }}>&#929;u</p>
                </td>
                <td className="tg-compression-6rs4">g</td>
                <td className="tg-compression-gzo9" colSpan={3}>{massaAgua1}</td>
                <td className="tg-compression-gzo9" colSpan={3}>{massaAgua2}</td>
                <td className="tg-compression-gzo9" colSpan={3}>{massaAgua3}</td>
                <td className="tg-compression-gzo9" colSpan={3}>{massaAgua4}</td>
                <td className="tg-compression-gzo9" colSpan={3}>{massaAgua5}</td>
                <td className="tg-compression-gzo9" colSpan={3}>{massaAgua6}</td>
              </tr>

              {/* Determinações de Umidade - 3 por ponto */}
              <tr>
                <td className="tg-compression-7wru" colSpan={3}>Cápsula</td>
                <td className="tg-compression-6rs4">nº</td>
                <td className="tg-compression-78ff">{capsulaP11}</td>
                <td className="tg-compression-78ff">{capsulaP12}</td>
                <td className="tg-compression-78ff">{capsulaP13}</td>
                <td className="tg-compression-78ff">{capsulaP21}</td>
                <td className="tg-compression-78ff">{capsulaP22}</td>
                <td className="tg-compression-78ff">{capsulaP23}</td>
                <td className="tg-compression-78ff">{capsulaP31}</td>
                <td className="tg-compression-78ff">{capsulaP32}</td>
                <td className="tg-compression-78ff">{capsulaP33}</td>
                <td className="tg-compression-78ff">{capsulaP41}</td>
                <td className="tg-compression-78ff">{capsulaP42}</td>
                <td className="tg-compression-78ff">{capsulaP43}</td>
                <td className="tg-compression-78ff">{capsulaP51}</td>
                <td className="tg-compression-78ff">{capsulaP52}</td>
                <td className="tg-compression-78ff">{capsulaP53}</td>
                <td className="tg-compression-gzo9">{capsulaP61}</td>
                <td className="tg-compression-p1nr">{capsulaP62}</td>
                <td className="tg-compression-p1nr">{capsulaP63}</td>
              </tr>
              <tr>
                <td className="tg-compression-7wru" colSpan={3}>Amostra úmida + cápsula</td>
                <td className="tg-compression-6rs4">g</td>
                <td className="tg-compression-78ff">{umidaCapsulaP11}</td>
                <td className="tg-compression-78ff">{umidaCapsulaP12}</td>
                <td className="tg-compression-78ff">{umidaCapsulaP13}</td>
                <td className="tg-compression-78ff">{umidaCapsulaP21}</td>
                <td className="tg-compression-78ff">{umidaCapsulaP22}</td>
                <td className="tg-compression-78ff">{umidaCapsulaP23}</td>
                <td className="tg-compression-78ff">{umidaCapsulaP31}</td>
                <td className="tg-compression-78ff">{umidaCapsulaP32}</td>
                <td className="tg-compression-78ff">{umidaCapsulaP33}</td>
                <td className="tg-compression-78ff">{umidaCapsulaP41}</td>
                <td className="tg-compression-78ff">{umidaCapsulaP42}</td>
                <td className="tg-compression-78ff">{umidaCapsulaP43}</td>
                <td className="tg-compression-78ff">{umidaCapsulaP51}</td>
                <td className="tg-compression-78ff">{umidaCapsulaP52}</td>
                <td className="tg-compression-78ff">{umidaCapsulaP53}</td>
                <td className="tg-compression-gzo9">{umidaCapsulaP61}</td>
                <td className="tg-compression-p1nr">{umidaCapsulaP62}</td>
                <td className="tg-compression-p1nr">{umidaCapsulaP63}</td>
              </tr>
              <tr>
                <td className="tg-compression-7wru" colSpan={3}>Amostra seca + cápsula</td>
                <td className="tg-compression-6rs4">g</td>
                <td className="tg-compression-78ff">{secaCapsulaP11}</td>
                <td className="tg-compression-78ff">{secaCapsulaP12}</td>
                <td className="tg-compression-78ff">{secaCapsulaP13}</td>
                <td className="tg-compression-78ff">{secaCapsulaP21}</td>
                <td className="tg-compression-78ff">{secaCapsulaP22}</td>
                <td className="tg-compression-78ff">{secaCapsulaP23}</td>
                <td className="tg-compression-78ff">{secaCapsulaP31}</td>
                <td className="tg-compression-78ff">{secaCapsulaP32}</td>
                <td className="tg-compression-78ff">{secaCapsulaP33}</td>
                <td className="tg-compression-78ff">{secaCapsulaP41}</td>
                <td className="tg-compression-78ff">{secaCapsulaP42}</td>
                <td className="tg-compression-78ff">{secaCapsulaP43}</td>
                <td className="tg-compression-78ff">{secaCapsulaP51}</td>
                <td className="tg-compression-78ff">{secaCapsulaP52}</td>
                <td className="tg-compression-78ff">{secaCapsulaP53}</td>
                <td className="tg-compression-gzo9">{secaCapsulaP61}</td>
                <td className="tg-compression-p1nr">{secaCapsulaP62}</td>
                <td className="tg-compression-p1nr">{secaCapsulaP63}</td>
              </tr>
              <tr>
                <td className="tg-compression-7wru" colSpan={3}>Massa da cápsula</td>
                <td className="tg-compression-6rs4">g</td>
                <td className="tg-compression-78ff">{massaCapsulaP11}</td>
                <td className="tg-compression-78ff">{massaCapsulaP12}</td>
                <td className="tg-compression-78ff">{massaCapsulaP13}</td>
                <td className="tg-compression-78ff">{massaCapsulaP21}</td>
                <td className="tg-compression-78ff">{massaCapsulaP22}</td>
                <td className="tg-compression-78ff">{massaCapsulaP23}</td>
                <td className="tg-compression-78ff">{massaCapsulaP31}</td>
                <td className="tg-compression-78ff">{massaCapsulaP32}</td>
                <td className="tg-compression-78ff">{massaCapsulaP33}</td>
                <td className="tg-compression-78ff">{massaCapsulaP41}</td>
                <td className="tg-compression-78ff">{massaCapsulaP42}</td>
                <td className="tg-compression-78ff">{massaCapsulaP43}</td>
                <td className="tg-compression-78ff">{massaCapsulaP51}</td>
                <td className="tg-compression-78ff">{massaCapsulaP52}</td>
                <td className="tg-compression-78ff">{massaCapsulaP53}</td>
                <td className="tg-compression-gzo9">{massaCapsulaP61}</td>
                <td className="tg-compression-p1nr">{massaCapsulaP62}</td>
                <td className="tg-compression-p1nr">{massaCapsulaP63}</td>
              </tr>
              <tr>
                <td className="tg-compression-7wru" colSpan={3}>Massa da água</td>
                <td className="tg-compression-6rs4">g</td>
                <td className="tg-compression-78ff">{massaAguaP11}</td>
                <td className="tg-compression-78ff">{massaAguaP12}</td>
                <td className="tg-compression-78ff">{massaAguaP13}</td>
                <td className="tg-compression-78ff">{massaAguaP21}</td>
                <td className="tg-compression-78ff">{massaAguaP22}</td>
                <td className="tg-compression-78ff">{massaAguaP23}</td>
                <td className="tg-compression-78ff">{massaAguaP31}</td>
                <td className="tg-compression-78ff">{massaAguaP32}</td>
                <td className="tg-compression-78ff">{massaAguaP33}</td>
                <td className="tg-compression-78ff">{massaAguaP41}</td>
                <td className="tg-compression-78ff">{massaAguaP42}</td>
                <td className="tg-compression-78ff">{massaAguaP43}</td>
                <td className="tg-compression-78ff">{massaAguaP51}</td>
                <td className="tg-compression-78ff">{massaAguaP52}</td>
                <td className="tg-compression-78ff">{massaAguaP53}</td>
                <td className="tg-compression-gzo9">{massaAguaP61}</td>
                <td className="tg-compression-p1nr">{massaAguaP62}</td>
                <td className="tg-compression-p1nr">{massaAguaP63}</td>
              </tr>
              <tr>
                <td className="tg-compression-7wru" colSpan={3}>Teor de umidade</td>
                <td className="tg-compression-6rs4">%</td>
                <td className="tg-compression-78ff">{teorUmidadeP11}</td>
                <td className="tg-compression-78ff">{teorUmidadeP12}</td>
                <td className="tg-compression-78ff">{teorUmidadeP13}</td>
                <td className="tg-compression-78ff">{teorUmidadeP21}</td>
                <td className="tg-compression-78ff">{teorUmidadeP22}</td>
                <td className="tg-compression-78ff">{teorUmidadeP23}</td>
                <td className="tg-compression-78ff">{teorUmidadeP31}</td>
                <td className="tg-compression-78ff">{teorUmidadeP32}</td>
                <td className="tg-compression-78ff">{teorUmidadeP33}</td>
                <td className="tg-compression-78ff">{teorUmidadeP41}</td>
                <td className="tg-compression-78ff">{teorUmidadeP42}</td>
                <td className="tg-compression-78ff">{teorUmidadeP43}</td>
                <td className="tg-compression-78ff">{teorUmidadeP51}</td>
                <td className="tg-compression-78ff">{teorUmidadeP52}</td>
                <td className="tg-compression-78ff">{teorUmidadeP53}</td>
                <td className="tg-compression-gzo9">{teorUmidadeP61}</td>
                <td className="tg-compression-p1nr">{teorUmidadeP62}</td>
                <td className="tg-compression-p1nr">{teorUmidadeP63}</td>
              </tr>
              <tr>
                <td className="tg-compression-7wru" colSpan={3}>Teor de umidade médio</td>
                <td className="tg-compression-6rs4">%</td>
                <td className="tg-compression-fmch" colSpan={3}>{teorUmidadeMediaP1}</td>
                <td className="tg-compression-fmch" colSpan={3}>{teorUmidadeMediaP2}</td>
                <td className="tg-compression-fmch" colSpan={3}>{teorUmidadeMediaP3}</td>
                <td className="tg-compression-fmch" colSpan={3}>{teorUmidadeMediaP4}</td>
                <td className="tg-compression-fmch" colSpan={3}>{teorUmidadeMediaP5}</td>
                <td className="tg-compression-fmch" colSpan={3}>{teorUmidadeMediaP6}</td>
              </tr>
              <tr>
                <td className="tg-compression-7wru" colSpan={3}>Massa específica seca</td>
                <td className="tg-compression-6rs4">g/cm³</td>
                <td className="tg-compression-fmch" colSpan={3}>{massaEspecificaSeca1}</td>
                <td className="tg-compression-fmch" colSpan={3}>{massaEspecificaSeca2}</td>
                <td className="tg-compression-fmch" colSpan={3}>{massaEspecificaSeca3}</td>
                <td className="tg-compression-fmch" colSpan={3}>{massaEspecificaSeca4}</td>
                <td className="tg-compression-fmch" colSpan={3}>{massaEspecificaSeca5}</td>
                <td className="tg-compression-fmch" colSpan={3}>{massaEspecificaSeca6}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Resultados Finais */}
        <div style={{ marginTop: '20px', fontSize: '9px' }}>
          <p><b>Umidade ótima:</b> {umidadeOtima}%</p>
          <p><b>Massa específica aparente máxima:</b> {massaEspecificaAparenteMaxima} g/cm³</p>
          <p><b>Grau de saturação:</b> {grauSaturacao}%</p>
          {observacao && <p><b>Observação:</b> {observacao}</p>}
        </div>
      </main>

      <Footer
        executado={example?.executado || ''}  // usando example
        signatures={signatures}
        pagina={pagina}
        totalPaginas={totalPaginas}
        observation={observacao}
        dataEmissao={new Date().toLocaleDateString('pt-BR')}
      />
    </div>
  );
};

export default CompressionModel;
