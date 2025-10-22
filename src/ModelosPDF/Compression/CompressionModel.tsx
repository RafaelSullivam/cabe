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


      <Footer
        executado={example?.executado || ''}  // usando example
        signatures={signatures}
        pagina={pagina}
        totalPaginas={totalPaginas}
        observation={''}
        dataEmissao={new Date().toLocaleDateString('pt-BR')}
      />
    </div>
  );
};

export default CompressionModel;
