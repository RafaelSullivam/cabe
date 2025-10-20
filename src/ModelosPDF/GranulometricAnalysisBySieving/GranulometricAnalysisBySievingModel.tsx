import React from 'react';
import Footer from '../Footer/Footer';
import { GranulometricAnalysisBySievingData } from '../../types/granulometricAnalysisBySievingTypes';
import './GranulometricAnalysisBySievingStyles.css';

interface GranulometricAnalysisBySievingModelProps {
  data: GranulometricAnalysisBySievingData;
}

const GranulometricAnalysisBySievingModel: React.FC<GranulometricAnalysisBySievingModelProps> = ({ data }) => {
  return (
    <div className="granulometric-sieving-container">
      {/* Header */}
      <header className="granulometric-header">
        <div className="logo-section">
          <img src="/images/logo.png" alt="Logo Geocontrole" className="logo-image" />
        </div>
        <div className="amostra-box">
          <p>AMOSTRA Nº</p>
          <p className="amostra-number">{data.numeroAmostra}</p>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ marginTop: '45px' }}>
        {/* Cabeçalho Table */}
        <table className="tg-cabecalho">
          <colgroup>
            <col style={{ width: '4%' }} />
            <col style={{ width: '3%' }} />
            <col style={{ width: '3%' }} />
            <col style={{ width: '3%' }} />
            <col style={{ width: '3%' }} />
            <col style={{ width: '3%' }} />
            <col style={{ width: '3%' }} />
            <col style={{ width: '3%' }} />
            <col style={{ width: '3%' }} />
            <col style={{ width: '3%' }} />
            <col style={{ width: '3%' }} />
            <col style={{ width: '3%' }} />
            <col style={{ width: '3%' }} />
            <col style={{ width: '3%' }} />
            <col style={{ width: '3%' }} />
          </colgroup>
          <tbody>
            <tr>
              <td className="tg-0pky" colSpan={15}>ANÁLISE GRANULOMÉTRICA POR PENEIRAMENTO</td>
            </tr>
            <tr>
              <td className="tg-0pky" colSpan={2}>Obra:</td>
              <td className="tg-0lax" colSpan={5}>{data.obra}</td>
              <td className="tg-0pky" colSpan={2}>Localização:</td>
              <td className="tg-0lax" colSpan={6}>{data.localizacao}</td>
            </tr>
            <tr>
              <td className="tg-0pky" colSpan={2}>Processo:</td>
              <td className="tg-0lax" colSpan={3}>{data.processo}</td>
              <td className="tg-0pky">Lote:</td>
              <td className="tg-0lax" colSpan={2}>{data.lote}</td>
              <td className="tg-0pky">Sondagem:</td>
              <td className="tg-0lax" colSpan={6}>{data.sondagem}</td>
            </tr>
            <tr>
              <td className="tg-0pky" colSpan={2}>Profundidade Inicial:</td>
              <td className="tg-0lax" colSpan={3}>{data.profundidadeInicial}</td>
              <td className="tg-0pky" colSpan={2}>Profundidade Final:</td>
              <td className="tg-0lax" colSpan={3}>{data.profundidadeFinal}</td>
              <td className="tg-0pky" colSpan={2}>Data Registro:</td>
              <td className="tg-0lax" colSpan={3}>{data.dataRegistro}</td>
            </tr>
            <tr>
              <td className="tg-0pky" colSpan={2}>Aplicação:</td>
              <td className="tg-0lax" colSpan={13}>{data.aplicacao}</td>
            </tr>
            <tr>
              <td className="tg-0pky">**Datum:</td>
              <td className="tg-0lax" colSpan={2}>{data.datum}</td>
              <td className="tg-0pky" colSpan={2}>**Coordenada X:</td>
              <td className="tg-0lax" colSpan={3}>{data.coordenadaX}</td>
              <td className="tg-0pky" colSpan={2}>**Coordenada Y:</td>
              <td className="tg-0lax" colSpan={5}>{data.coordenadaY}</td>
            </tr>
            <tr>
              <td className="tg-0pky" colSpan={2}>**Coordenada Z:</td>
              <td className="tg-0lax" colSpan={3}>{data.coordenadaZ}</td>
              <td className="tg-0pky" colSpan={3}>**Especificação técnica:</td>
              <td className="tg-0lax" colSpan={7}>{data.especificacaoTecnica}</td>
            </tr>
            <tr>
              <td className="tg-0pky" colSpan={2}>Código laboratório:</td>
              <td className="tg-0lax" colSpan={13}>{data.codigoLaboratorio}</td>
            </tr>
          </tbody>
        </table>

        {/* Main Content Cell */}
        <table className="tg">
          <tbody>
            <tr>
              <td className="tg-0pky" colSpan={15} style={{ borderLeft: 'none', borderRight: 'none', borderTopColor: '#fff', paddingLeft: '0px', paddingRight: '0px' }}>
                
                {/* Info Row */}
                <table className="tg-info-table" style={{ width: '100%', margin: '20px 0px 5px 0px' }}>
                  <tbody>
                    <tr>
                      <td className="tg-0pky">Norma:</td>
                      <td className="tg-0lax">{data.norma}</td>
                      <td className="tg-0pky">Data Início:</td>
                      <td className="tg-0lax">{data.dataInicio}</td>
                      <td className="tg-0pky">Data Final:</td>
                      <td className="tg-0lax">{data.dataFinal}</td>
                    </tr>
                  </tbody>
                </table>

                {/* Massa Total */}
                <table className="tg-main-secund-element" style={{ width: '393px', margin: '40px 0px 5px 0px' }}>
                  <colgroup>
                    <col style={{ width: '431.2px' }} />
                    <col style={{ width: '58.2px' }} />
                  </colgroup>
                  <thead>
                    <tr>
                      <td className="tg-main-secund-element-doh2" style={{ width: '315px', fontSize: '13px' }}>
                        Massa total da amostra seca
                      </td>
                      <th className="tg-main-secund-element-pryc" style={{ fontSize: '13px' }}>
                        <b>{data.massaProvote} (g)</b>
                      </th>
                    </tr>
                  </thead>
                </table>

                {/* First 8 Sieves Table */}
                <div className="tg-main-secund-element-wrap">
                  <table className="tg-main-secund-element" style={{ width: '100%', marginBottom: '20px' }}>
                    <colgroup>
                      <col style={{ width: '100.2px' }} />
                      <col style={{ width: '90.2px' }} />
                      <col style={{ width: '90.2px' }} />
                      <col style={{ width: '90.2px' }} />
                      <col style={{ width: '90.2px' }} />
                      <col style={{ width: '90.2px' }} />
                      <col style={{ width: '90.2px' }} />
                      <col style={{ width: '90.2px' }} />
                      <col style={{ width: '90.2px' }} />
                    </colgroup>
                    <thead>
                      <tr>
                        <td className="tg-main-secund-element-doh2" style={{ width: '180px' }}>
                          Designação da peneira (Malha mm)
                        </td>
                        <th className="tg-main-secund-element-pryc">{data.dimensao1}</th>
                        <th className="tg-main-secund-element-pryc">{data.dimensao2}</th>
                        <th className="tg-main-secund-element-pryc">{data.dimensao3}</th>
                        <th className="tg-main-secund-element-pryc">{data.dimensao4}</th>
                        <th className="tg-main-secund-element-pryc">{data.dimensao5}</th>
                        <th className="tg-main-secund-element-pryc">{data.dimensao6}</th>
                        <th className="tg-main-secund-element-pryc">{data.dimensao7}</th>
                        <th className="tg-main-secund-element-pryc">{data.dimensao8}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="tg-main-secund-element-doh2">Massa retida acumulada (g)</td>
                        <td className="tg-main-secund-element-pryc">{data.retidos1}</td>
                        <td className="tg-main-secund-element-pryc">{data.retidos2}</td>
                        <td className="tg-main-secund-element-pryc">{data.retidos3}</td>
                        <td className="tg-main-secund-element-pryc">{data.retidos4}</td>
                        <td className="tg-main-secund-element-pryc">{data.retidos5}</td>
                        <td className="tg-main-secund-element-pryc">{data.retidos6}</td>
                        <td className="tg-main-secund-element-pryc">{data.retidos7}</td>
                        <td className="tg-main-secund-element-pryc">{data.retidos8}</td>
                      </tr>
                      <tr>
                        <td className="tg-main-secund-element-doh2">% Acumulada</td>
                        <td className="tg-main-secund-element-gbl5"><b>{data.acumulados1}</b></td>
                        <td className="tg-main-secund-element-gbl5"><b>{data.acumulados2}</b></td>
                        <td className="tg-main-secund-element-gbl5"><b>{data.acumulados3}</b></td>
                        <td className="tg-main-secund-element-gbl5"><b>{data.acumulados4}</b></td>
                        <td className="tg-main-secund-element-gbl5"><b>{data.acumulados5}</b></td>
                        <td className="tg-main-secund-element-gbl5"><b>{data.acumulados6}</b></td>
                        <td className="tg-main-secund-element-gbl5"><b>{data.acumulados7}</b></td>
                        <td className="tg-main-secund-element-gbl5"><b>{data.acumulados8}</b></td>
                      </tr>
                      <tr>
                        <td className="tg-main-secund-element-doh2">% Passada</td>
                        <td className="tg-main-secund-element-gbl5"><b>{data.passados1}</b></td>
                        <td className="tg-main-secund-element-gbl5"><b>{data.passados2}</b></td>
                        <td className="tg-main-secund-element-gbl5"><b>{data.passados3}</b></td>
                        <td className="tg-main-secund-element-gbl5"><b>{data.passados4}</b></td>
                        <td className="tg-main-secund-element-gbl5"><b>{data.passados5}</b></td>
                        <td className="tg-main-secund-element-gbl5"><b>{data.passados6}</b></td>
                        <td className="tg-main-secund-element-gbl5"><b>{data.passados7}</b></td>
                        <td className="tg-main-secund-element-gbl5"><b>{data.passados8}</b></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Last 8 Sieves Table */}
                <div className="tg-main-secund-element-wrap">
                  <table className="tg-main-secund-element" style={{ width: '100%', marginBottom: '0px' }}>
                    <colgroup>
                      <col style={{ width: '257.2px' }} />
                      <col style={{ width: '58.2px' }} />
                      <col style={{ width: '58.2px' }} />
                      <col style={{ width: '58.2px' }} />
                      <col style={{ width: '58.2px' }} />
                      <col style={{ width: '58.2px' }} />
                      <col style={{ width: '58.2px' }} />
                      <col style={{ width: '58.2px' }} />
                      <col style={{ width: '58.2px' }} />
                    </colgroup>
                    <thead>
                      <tr>
                        <td className="tg-main-secund-element-doh2" style={{ width: '180px' }}>
                          Designação da peneira (Malha mm)
                        </td>
                        <th className="tg-main-secund-element-pryc">{data.dimensao9}</th>
                        <th className="tg-main-secund-element-pryc">{data.dimensao10}</th>
                        <th className="tg-main-secund-element-pryc">{data.dimensao11}</th>
                        <th className="tg-main-secund-element-pryc">{data.dimensao12}</th>
                        <th className="tg-main-secund-element-pryc">{data.dimensao13}</th>
                        <th className="tg-main-secund-element-pryc">{data.dimensao14}</th>
                        <th className="tg-main-secund-element-pryc">{data.dimensao15}</th>
                        <th className="tg-main-secund-element-pryc">{data.dimensao16}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="tg-main-secund-element-doh2">Massa retida acumulada (g)</td>
                        <td className="tg-main-secund-element-pryc">{data.retidos9}</td>
                        <td className="tg-main-secund-element-pryc">{data.retidos10}</td>
                        <td className="tg-main-secund-element-pryc">{data.retidos11}</td>
                        <td className="tg-main-secund-element-pryc">{data.retidos12}</td>
                        <td className="tg-main-secund-element-pryc">{data.retidos13}</td>
                        <td className="tg-main-secund-element-pryc">{data.retidos14}</td>
                        <td className="tg-main-secund-element-pryc">{data.retidos15}</td>
                        <td className="tg-main-secund-element-pryc">{data.retidos16}</td>
                      </tr>
                      <tr>
                        <td className="tg-main-secund-element-doh2">% Acumulada</td>
                        <td className="tg-main-secund-element-gbl5"><b>{data.acumulados9}</b></td>
                        <td className="tg-main-secund-element-gbl5"><b>{data.acumulados10}</b></td>
                        <td className="tg-main-secund-element-gbl5"><b>{data.acumulados11}</b></td>
                        <td className="tg-main-secund-element-gbl5"><b>{data.acumulados12}</b></td>
                        <td className="tg-main-secund-element-gbl5"><b>{data.acumulados13}</b></td>
                        <td className="tg-main-secund-element-gbl5"><b>{data.acumulados14}</b></td>
                        <td className="tg-main-secund-element-gbl5"><b>{data.acumulados15}</b></td>
                        <td className="tg-main-secund-element-gbl5"><b>{data.acumulados16}</b></td>
                      </tr>
                      <tr>
                        <td className="tg-main-secund-element-doh2">% Passada</td>
                        <td className="tg-main-secund-element-gbl5"><b>{data.passados9}</b></td>
                        <td className="tg-main-secund-element-gbl5"><b>{data.passados10}</b></td>
                        <td className="tg-main-secund-element-gbl5"><b>{data.passados11}</b></td>
                        <td className="tg-main-secund-element-gbl5"><b>{data.passados12}</b></td>
                        <td className="tg-main-secund-element-gbl5"><b>{data.passados13}</b></td>
                        <td className="tg-main-secund-element-gbl5"><b>{data.passados14}</b></td>
                        <td className="tg-main-secund-element-gbl5"><b>{data.passados15}</b></td>
                        <td className="tg-main-secund-element-gbl5"><b>{data.passados16}</b></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Observations */}
                <table className="tg-observations" style={{ width: '100%', marginTop: '20px' }}>
                  <tbody>
                    <tr>
                      <td className="tg-0pky"><strong>Observações:</strong></td>
                    </tr>
                    <tr>
                      <td className="tg-0lax" style={{ minHeight: '60px', verticalAlign: 'top', padding: '10px' }}>
                        {data.observacoes}
                      </td>
                    </tr>
                  </tbody>
                </table>

              </td>
            </tr>
          </tbody>
        </table>
      </main>

      {/* Footer */}
      <Footer
        executado={data.executado}
        signatures={{
          verificador: data.verificado ? {
            Assinatura: data.verificado,
            Nome: ''
          } : undefined,
          aprovador: data.aprovado ? {
            Assinatura: data.aprovado,
            Nome: ''
          } : undefined,
        }}
      />
    </div>
  );
};

export default GranulometricAnalysisBySievingModel;
