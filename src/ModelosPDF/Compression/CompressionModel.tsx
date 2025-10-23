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
  if (!dataHeaderAndFooter || !example) {
    return (
      <div style={{ padding: '20px', textAlign: 'center', color: 'red' }}>
        <h3>Erro: Dados insuficientes</h3>
        <p>dataHeaderAndFooter e example são obrigatórios</p>
      </div>
    );
  }

  const formatNumber = (value: any, decimals: number = 3): string => {
    if (!value) return '';
    const num = typeof value === 'string' ? parseFloat(value) : value;
    return isNaN(num) ? '' : num.toFixed(decimals);
  };

  return (
    <div className="compression-container">
      <HeaderTable
        clienteNome="CLIENTE"
        relatorioTitulo="RELATÓRIO ENSAIO"
        relatorioSubtitulo="SOLO-ENSAIO DE COMPACTAÇÃO"
        codSample={example?.codSample || ''}
        numberSample={example?.numberSample || ''}
        logo={dataHeaderAndFooter.logo}
      />
      
      <main className='compression-main' style={{ marginTop: '38px' }}>
        <div style={{ 
          borderLeft: 'none', 
          borderRight: 'none', 
          borderTopColor: '#fff', 
          paddingLeft: '0px', 
          paddingRight: '0px', 
          height: '675px' 
        }}>
          
          {/* Seção de Checkboxes - Compactação (Proctor) */}
          <p style={{
            display: 'inline-block',
            fontSize: '10px',
            marginBottom: '15px'
          }}>
            Compactação (Proctor):
          </p>

          <div style={{ marginBottom: '20px' }}>
            {[
              { label: 'Normal', value: 'Normal' },
              { label: 'Internormal', value: 'Intenormal' },
              { label: 'Intermediária', value: 'Intermediaria' },
              { label: 'Intermodificada', value: 'Intermodificada' },
              { label: 'Modificada', value: 'Modificada' },
              { label: 'Outro', value: 'Outro' }
            ].map((item, index) => (
              <div key={index} className="checkbox" style={{
                marginLeft: index > 0 ? '18px' : '0px',
                display: 'inline-block'
              }}>
                <input
                  type="checkbox"
                  id={`checkbox${index + 1}`}
                  name="checkboxes"
                  value={item.value}
                  checked={example?.energiaCompactacao === item.value}
                  readOnly
                />
                <label
                  htmlFor={`checkbox${index + 1}`}
                  style={{ fontSize: '10px', verticalAlign: 'middle' }}
                >
                  {item.label}
                </label>
              </div>
            ))}
          </div>

          {/* Tabela Principal de Dados */}
          <div className="tg-compression-wrap">
            <table 
              className="tg-compression" 
              style={{ 
                tableLayout: 'fixed', 
                width: '758px' 
              }}
            >
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
                {/* Linha: Molde de compactação */}
                <tr>
                  <td className="tg-compression-7wru" colSpan={3}>Molde de compactação</td>
                  <td className="tg-compression-6rs4">nº</td>
                  <td className="tg-compression-gzo9" colSpan={3}>{example?.moldeP1 || ''}</td>
                  <td className="tg-compression-gzo9" colSpan={3}>{example?.moldeP2 || ''}</td>
                  <td className="tg-compression-gzo9" colSpan={3}>{example?.moldeP3 || ''}</td>
                  <td className="tg-compression-gzo9" colSpan={3}>{example?.moldeP4 || ''}</td>
                  <td className="tg-compression-gzo9" colSpan={3}>{example?.moldeP5 || ''}</td>
                  <td className="tg-compression-gzo9" colSpan={3}>{example?.moldeP6 || ''}</td>
                </tr>

                {/* Linha: Massa do solo úmido + massa do molde */}
                <tr>
                  <td className="tg-compression-7wru" colSpan={3}>Massa do solo úmido + massa do molde</td>
                  <td className="tg-compression-6rs4">g</td>
                  <td className="tg-compression-gzo9" colSpan={3}>{example?.massaSoloUmiMassaMolP1 || ''}</td>
                  <td className="tg-compression-gzo9" colSpan={3}>{example?.massaSoloUmiMassaMolP2 || ''}</td>
                  <td className="tg-compression-gzo9" colSpan={3}>{example?.massaSoloUmiMassaMolP3 || ''}</td>
                  <td className="tg-compression-gzo9" colSpan={3}>{example?.massaSoloUmiMassaMolP4 || ''}</td>
                  <td className="tg-compression-gzo9" colSpan={3}>{example?.massaSoloUmiMassaMolP5 || ''}</td>
                  <td className="tg-compression-gzo9" colSpan={3}>{example?.massaSoloUmiMassaMolP6 || ''}</td>
                </tr>

                {/* Linha: Massa do solo úmido */}
                <tr>
                  <td className="tg-compression-7wru" colSpan={2}>Massa do solo úmido</td>
                  <td className="tg-compression-6rs4">Mh</td>
                  <td className="tg-compression-6rs4">g</td>
                  <td className="tg-compression-gzo9" colSpan={3}>{example?.massaSoloUmidaP1 || ''}</td>
                  <td className="tg-compression-gzo9" colSpan={3}>{example?.massaSoloUmidaP2 || ''}</td>
                  <td className="tg-compression-gzo9" colSpan={3}>{example?.massaSoloUmidaP3 || ''}</td>
                  <td className="tg-compression-gzo9" colSpan={3}>{example?.massaSoloUmidaP4 || ''}</td>
                  <td className="tg-compression-gzo9" colSpan={3}>{example?.massaSoloUmidaP5 || ''}</td>
                  <td className="tg-compression-gzo9" colSpan={3}>{example?.massaSoloUmidaP6 || ''}</td>
                </tr>

                {/* Linha: Volume do molde */}
                <tr>
                  <td className="tg-compression-7wru" colSpan={2}>Volume do molde</td>
                  <td className="tg-compression-6rs4">V</td>
                  <td className="tg-compression-6rs4">cm³</td>
                  <td className="tg-compression-gzo9" colSpan={3}>{example?.volumeMolde1 || ''}</td>
                  <td className="tg-compression-gzo9" colSpan={3}>{example?.volumeMolde2 || ''}</td>
                  <td className="tg-compression-gzo9" colSpan={3}>{example?.volumeMolde3 || ''}</td>
                  <td className="tg-compression-gzo9" colSpan={3}>{example?.volumeMolde4 || ''}</td>
                  <td className="tg-compression-gzo9" colSpan={3}>{example?.volumeMolde5 || ''}</td>
                  <td className="tg-compression-gzo9" colSpan={3}>{example?.volumeMolde6 || ''}</td>
                </tr>

                {/* Linha: Massa especifica úmida */}
                <tr>
                  <td className="tg-compression-7wru" colSpan={2}>Massa especifica úmida</td>
                  <td className="tg-compression-6rs4" style={{ fontFamily: 'DejaVu Sans' }}>ρu</td>
                  <td className="tg-compression-6rs4">g</td>
                  <td className="tg-compression-gzo9" colSpan={3}>{example?.massaAgua1 || ''}</td>
                  <td className="tg-compression-gzo9" colSpan={3}>{example?.massaAgua2 || ''}</td>
                  <td className="tg-compression-gzo9" colSpan={3}>{example?.massaAgua3 || ''}</td>
                  <td className="tg-compression-gzo9" colSpan={3}>{example?.massaAgua4 || ''}</td>
                  <td className="tg-compression-gzo9" colSpan={3}>{example?.massaAgua5 || ''}</td>
                  <td className="tg-compression-gzo9" colSpan={3}>{example?.massaAgua6 || ''}</td>
                </tr>

                {/* Linha: Cápsula */}
                <tr>
                  <td className="tg-compression-7wru" colSpan={3}>Cápsula</td>
                  <td className="tg-compression-6rs4">nº</td>
                  <td className="tg-compression-78ff">{example?.capsulaP11 || ''}</td>
                  <td className="tg-compression-78ff">{example?.capsulaP12 || ''}</td>
                  <td className="tg-compression-78ff">{example?.capsulaP13 || ''}</td>
                  <td className="tg-compression-78ff">{example?.capsulaP21 || ''}</td>
                  <td className="tg-compression-78ff">{example?.capsulaP22 || ''}</td>
                  <td className="tg-compression-78ff">{example?.capsulaP23 || ''}</td>
                  <td className="tg-compression-78ff">{example?.capsulaP31 || ''}</td>
                  <td className="tg-compression-78ff">{example?.capsulaP32 || ''}</td>
                  <td className="tg-compression-78ff">{example?.capsulaP33 || ''}</td>
                  <td className="tg-compression-78ff">{example?.capsulaP41 || ''}</td>
                  <td className="tg-compression-78ff">{example?.capsulaP42 || ''}</td>
                  <td className="tg-compression-78ff">{example?.capsulaP43 || ''}</td>
                  <td className="tg-compression-78ff">{example?.capsulaP51 || ''}</td>
                  <td className="tg-compression-78ff">{example?.capsulaP52 || ''}</td>
                  <td className="tg-compression-78ff">{example?.capsulaP53 || ''}</td>
                  <td className="tg-compression-gzo9">{example?.capsulaP61 || ''}</td>
                  <td className="tg-compression-p1nr">{example?.capsulaP62 || ''}</td>
                  <td className="tg-compression-p1nr">{example?.capsulaP63 || ''}</td>
                </tr>

                {/* Linha: Amostra úmida + cápsula */}
                <tr>
                  <td className="tg-compression-7wru" colSpan={3}>Amostra úmida + cápsula</td>
                  <td className="tg-compression-6rs4">g</td>
                  <td className="tg-compression-78ff">{example?.umidaCapsulaP11 || ''}</td>
                  <td className="tg-compression-78ff">{example?.umidaCapsulaP12 || ''}</td>
                  <td className="tg-compression-78ff">{example?.umidaCapsulaP13 || ''}</td>
                  <td className="tg-compression-78ff">{example?.umidaCapsulaP21 || ''}</td>
                  <td className="tg-compression-78ff">{example?.umidaCapsulaP22 || ''}</td>
                  <td className="tg-compression-78ff">{example?.umidaCapsulaP23 || ''}</td>
                  <td className="tg-compression-78ff">{example?.umidaCapsulaP31 || ''}</td>
                  <td className="tg-compression-78ff">{example?.umidaCapsulaP32 || ''}</td>
                  <td className="tg-compression-78ff">{example?.umidaCapsulaP33 || ''}</td>
                  <td className="tg-compression-78ff">{example?.umidaCapsulaP41 || ''}</td>
                  <td className="tg-compression-78ff">{example?.umidaCapsulaP42 || ''}</td>
                  <td className="tg-compression-78ff">{example?.umidaCapsulaP43 || ''}</td>
                  <td className="tg-compression-78ff">{example?.umidaCapsulaP51 || ''}</td>
                  <td className="tg-compression-78ff">{example?.umidaCapsulaP52 || ''}</td>
                  <td className="tg-compression-78ff">{example?.umidaCapsulaP53 || ''}</td>
                  <td className="tg-compression-gzo9">{example?.umidaCapsulaP61 || ''}</td>
                  <td className="tg-compression-p1nr">{example?.umidaCapsulaP62 || ''}</td>
                  <td className="tg-compression-p1nr">{example?.umidaCapsulaP63 || ''}</td>
                </tr>

                {/* Linha: Amostra seca + cápsula */}
                <tr>
                  <td className="tg-compression-7wru" colSpan={3}>Amostra seca + cápsula</td>
                  <td className="tg-compression-6rs4">g</td>
                  <td className="tg-compression-78ff">{example?.secaCapsulaP11 || ''}</td>
                  <td className="tg-compression-78ff">{example?.secaCapsulaP12 || ''}</td>
                  <td className="tg-compression-78ff">{example?.secaCapsulaP13 || ''}</td>
                  <td className="tg-compression-78ff">{example?.secaCapsulaP21 || ''}</td>
                  <td className="tg-compression-78ff">{example?.secaCapsulaP22 || ''}</td>
                  <td className="tg-compression-78ff">{example?.secaCapsulaP23 || ''}</td>
                  <td className="tg-compression-78ff">{example?.secaCapsulaP31 || ''}</td>
                  <td className="tg-compression-78ff">{example?.secaCapsulaP32 || ''}</td>
                  <td className="tg-compression-78ff">{example?.secaCapsulaP33 || ''}</td>
                  <td className="tg-compression-78ff">{example?.secaCapsulaP41 || ''}</td>
                  <td className="tg-compression-78ff">{example?.secaCapsulaP42 || ''}</td>
                  <td className="tg-compression-78ff">{example?.secaCapsulaP43 || ''}</td>
                  <td className="tg-compression-78ff">{example?.secaCapsulaP51 || ''}</td>
                  <td className="tg-compression-78ff">{example?.secaCapsulaP52 || ''}</td>
                  <td className="tg-compression-78ff">{example?.secaCapsulaP53 || ''}</td>
                  <td className="tg-compression-gzo9"></td>
                  <td className="tg-compression-p1nr"></td>
                  <td className="tg-compression-p1nr"></td>
                </tr>

                {/* Linha: Massa da cápsula */}
                <tr>
                  <td className="tg-compression-7wru" colSpan={3}>Massa da cápsula</td>
                  <td className="tg-compression-6rs4">g</td>
                  <td className="tg-compression-78ff">{example?.massaCapsulaP11 || ''}</td>
                  <td className="tg-compression-78ff">{example?.massaCapsulaP12 || ''}</td>
                  <td className="tg-compression-78ff">{example?.massaCapsulaP13 || ''}</td>
                  <td className="tg-compression-78ff">{example?.massaCapsulaP21 || ''}</td>
                  <td className="tg-compression-78ff">{example?.massaCapsulaP22 || ''}</td>
                  <td className="tg-compression-78ff">{example?.massaCapsulaP23 || ''}</td>
                  <td className="tg-compression-78ff">{example?.massaCapsulaP31 || ''}</td>
                  <td className="tg-compression-78ff">{example?.massaCapsulaP32 || ''}</td>
                  <td className="tg-compression-78ff">{example?.massaCapsulaP33 || ''}</td>
                  <td className="tg-compression-78ff">{example?.massaCapsulaP41 || ''}</td>
                  <td className="tg-compression-78ff">{example?.massaCapsulaP42 || ''}</td>
                  <td className="tg-compression-78ff">{example?.massaCapsulaP43 || ''}</td>
                  <td className="tg-compression-78ff">{example?.massaCapsulaP51 || ''}</td>
                  <td className="tg-compression-78ff">{example?.massaCapsulaP52 || ''}</td>
                  <td className="tg-compression-78ff">{example?.massaCapsulaP53 || ''}</td>
                  <td className="tg-compression-gzo9"></td>
                  <td className="tg-compression-p1nr"></td>
                  <td className="tg-compression-p1nr"></td>
                </tr>

                {/* Linha: Massa de água */}
                <tr>
                  <td className="tg-compression-7wru" colSpan={3}>Massa de água</td>
                  <td className="tg-compression-6rs4">g</td>
                  <td className="tg-compression-78ff">{example?.massaAguaP11 || ''}</td>
                  <td className="tg-compression-78ff">{example?.massaAguaP12 || ''}</td>
                  <td className="tg-compression-78ff">{example?.massaAguaP13 || ''}</td>
                  <td className="tg-compression-78ff">{example?.massaAguaP21 || ''}</td>
                  <td className="tg-compression-78ff">{example?.massaAguaP22 || ''}</td>
                  <td className="tg-compression-78ff">{example?.massaAguaP23 || ''}</td>
                  <td className="tg-compression-78ff">{example?.massaAguaP31 || ''}</td>
                  <td className="tg-compression-78ff">{example?.massaAguaP32 || ''}</td>
                  <td className="tg-compression-78ff">{example?.massaAguaP33 || ''}</td>
                  <td className="tg-compression-78ff">{example?.massaAguaP41 || ''}</td>
                  <td className="tg-compression-78ff">{example?.massaAguaP42 || ''}</td>
                  <td className="tg-compression-78ff">{example?.massaAguaP43 || ''}</td>
                  <td className="tg-compression-78ff">{example?.massaAguaP51 || ''}</td>
                  <td className="tg-compression-78ff">{example?.massaAguaP52 || ''}</td>
                  <td className="tg-compression-78ff">{example?.massaAguaP53 || ''}</td>
                  <td className="tg-compression-gzo9"></td>
                  <td className="tg-compression-p1nr"></td>
                  <td className="tg-compression-p1nr"></td>
                </tr>

                {/* Linha: Massa de solo seco */}
                <tr>
                  <td className="tg-compression-7wru" colSpan={3}>Massa de solo seco</td>
                  <td className="tg-compression-6rs4">g</td>
                  <td className="tg-compression-78ff">{example?.massaSoloSecoP11 || ''}</td>
                  <td className="tg-compression-78ff">{example?.massaSoloSecoP12 || ''}</td>
                  <td className="tg-compression-78ff">{example?.massaSoloSecoP13 || ''}</td>
                  <td className="tg-compression-78ff">{example?.massaSoloSecoP21 || ''}</td>
                  <td className="tg-compression-78ff">{example?.massaSoloSecoP22 || ''}</td>
                  <td className="tg-compression-78ff">{example?.massaSoloSecoP23 || ''}</td>
                  <td className="tg-compression-78ff">{example?.massaSoloSecoP31 || ''}</td>
                  <td className="tg-compression-78ff">{example?.massaSoloSecoP32 || ''}</td>
                  <td className="tg-compression-78ff">{example?.massaSoloSecoP33 || ''}</td>
                  <td className="tg-compression-78ff">{example?.massaSoloSecoP41 || ''}</td>
                  <td className="tg-compression-78ff">{example?.massaSoloSecoP42 || ''}</td>
                  <td className="tg-compression-78ff">{example?.massaSoloSecoP43 || ''}</td>
                  <td className="tg-compression-78ff">{example?.massaSoloSecoP51 || ''}</td>
                  <td className="tg-compression-78ff">{example?.massaSoloSecoP52 || ''}</td>
                  <td className="tg-compression-78ff">{example?.massaSoloSecoP53 || ''}</td>
                  <td className="tg-compression-gzo9"></td>
                  <td className="tg-compression-p1nr"></td>
                  <td className="tg-compression-p1nr"></td>
                </tr>

                {/* Linha: Teor de umidade */}
                <tr>
                  <td className="tg-compression-7wru" colSpan={3}>Teor de umidade</td>
                  <td className="tg-compression-6rs4">%</td>
                  <td className="tg-compression-78ff">{example?.teorUmidadeP11 || ''}</td>
                  <td className="tg-compression-78ff">{example?.teorUmidadeP12 || ''}</td>
                  <td className="tg-compression-78ff">{example?.teorUmidadeP13 || ''}</td>
                  <td className="tg-compression-78ff">{example?.teorUmidadeP21 || ''}</td>
                  <td className="tg-compression-78ff">{example?.teorUmidadeP22 || ''}</td>
                  <td className="tg-compression-78ff">{example?.teorUmidadeP23 || ''}</td>
                  <td className="tg-compression-78ff">{example?.teorUmidadeP31 || ''}</td>
                  <td className="tg-compression-78ff">{example?.teorUmidadeP32 || ''}</td>
                  <td className="tg-compression-78ff">{example?.teorUmidadeP33 || ''}</td>
                  <td className="tg-compression-78ff">{example?.teorUmidadeP41 || ''}</td>
                  <td className="tg-compression-78ff">{example?.teorUmidadeP42 || ''}</td>
                  <td className="tg-compression-78ff">{example?.teorUmidadeP43 || ''}</td>
                  <td className="tg-compression-78ff">{example?.teorUmidadeP51 || ''}</td>
                  <td className="tg-compression-78ff">{example?.teorUmidadeP52 || ''}</td>
                  <td className="tg-compression-78ff">{example?.teorUmidadeP53 || ''}</td>
                  <td className="tg-compression-gzo9">{example?.teorUmidadeP62 || ''}</td>
                  <td className="tg-compression-p1nr">{example?.teorUmidadeP63 || ''}</td>
                  <td className="tg-compression-p1nr"></td>
                </tr>

                {/* Linha: Teor de umidade médio */}
                <tr>
                  <td className="tg-compression-7wru" colSpan={2}>Teor de umidade<br />médio</td>
                  <td className="tg-compression-7wru" style={{ textAlign: 'center' }}>w</td>
                  <td className="tg-compression-6rs4">%</td>
                  <td className="tg-compression-4nn5" colSpan={3} style={{ fontSize: '12px' }}>
                    {example?.umidadeMediaP1 || ''}
                  </td>
                  <td className="tg-compression-4nn5" colSpan={3} style={{ fontSize: '12px' }}>
                    {example?.umidadeMediaP2 || ''}
                  </td>
                  <td className="tg-compression-4nn5" colSpan={3} style={{ fontSize: '12px' }}>
                    {example?.umidadeMediaP3 || ''}
                  </td>
                  <td className="tg-compression-4nn5" colSpan={3} style={{ fontSize: '12px' }}>
                    {example?.umidadeMediaP4 || ''}
                  </td>
                  <td className="tg-compression-4nn5" colSpan={3} style={{ fontSize: '12px' }}>
                    {example?.umidadeMediaP5 || ''}
                  </td>
                  <td className="tg-compression-fmch" colSpan={3}></td>
                </tr>

                {/* Linha: Massa especifica seca */}
                <tr>
                  <td className="tg-compression-7wru" colSpan={2}>Massa especifica seca</td>
                  <td className="tg-compression-7wru" style={{ textAlign: 'center' }}>
                    <span style={{ fontFamily: 'DejaVu Sans' }}>ρ</span>
                    <sub style={{ fontSize: '0.7em' }}>d</sub>
                  </td>
                  <td className="tg-compression-6rs4">g/cm³</td>
                  <td className="tg-compression-4nn5" colSpan={3} style={{ fontSize: '12px' }}>
                    {formatNumber(example?.massaEspSecaP1)}
                  </td>
                  <td className="tg-compression-4nn5" colSpan={3} style={{ fontSize: '12px' }}>
                    {formatNumber(example?.massaEspSecaP2)}
                  </td>
                  <td className="tg-compression-4nn5" colSpan={3} style={{ fontSize: '12px' }}>
                    {formatNumber(example?.massaEspSecaP3)}
                  </td>
                  <td className="tg-compression-4nn5" colSpan={3} style={{ fontSize: '12px' }}>
                    {formatNumber(example?.massaEspSecaP4)}
                  </td>
                  <td className="tg-compression-4nn5" colSpan={3} style={{ fontSize: '12px' }}>
                    {formatNumber(example?.massaEspSecaP5)}
                  </td>
                  <td className="tg-compression-fmch" colSpan={3} style={{ fontSize: '12px' }}></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Seção de Observação */}
          <div style={{ marginTop: '20px' }}>
            <p style={{ fontSize: '10px', fontWeight: 'bold', margin: '5px 0' }}>
              Observação:
            </p>
            <div style={{ minHeight: '20px', fontSize: '10px' }}>
              {example?.observacao || ''}
            </div>
          </div>
        </div>
      </main>
      
      <Footer
        executado={example?.executado || ''}
        signatures={signatures}
        pagina={pagina}
        totalPaginas={totalPaginas}
        observation={example?.observacao || ''}
        dataEmissao={new Date().toLocaleDateString('pt-BR')}
      />
    </div>
  );
};

export default CompressionModel;
