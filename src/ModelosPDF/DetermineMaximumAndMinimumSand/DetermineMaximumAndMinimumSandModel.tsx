import React from 'react';
import Footer from '../Footer/Footer';
import HeaderTable from '../HeaderTable/HeaderTable';
import { DetermineMaximumAndMinimumSandData } from '../../types/determineMaximumAndMinimumSandTypes';
import './DetermineMaximumAndMinimumSandStyles.css';

interface DetermineMaximumAndMinimumSandModelProps {
  data: DetermineMaximumAndMinimumSandData;
  pagina?: number;
  totalPaginas?: number;
}

const DetermineMaximumAndMinimumSandModel: React.FC<DetermineMaximumAndMinimumSandModelProps> = ({ data, pagina, totalPaginas }) => {
  return (
    <div className="determine-max-min-container">
      {/* Header usando HeaderTable */}
      <HeaderTable 
        clienteNome={data.cliente}
        relatorioTitulo="DETERMINAÇÃO DE MASSA ESPECÍFICA"
        relatorioSubtitulo="MÁXIMA E MÍNIMA DE AREIAS"
        codSample={data.numeroAmostra}
        numberSample={data.numeroAmostra}
      />

      {/* Main Content */}
      <main style={{ marginTop: '20px' }}>
        {/* Tabela de informações específicas do ensaio */}
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
              <td className="tg-0pky" colSpan={2}>Obra:</td>
              <td className="tg-0lax" colSpan={6}>{data.obra}</td>
              <td className="tg-0pky" colSpan={2}>Cliente:</td>
              <td className="tg-0lax" colSpan={5}>{data.cliente}</td>
            </tr>
            <tr>
              <td className="tg-0pky" colSpan={2}>Local:</td>
              <td className="tg-0lax" colSpan={6}>{data.local}</td>
              <td className="tg-0pky">Profundidade:</td>
              <td className="tg-0lax" colSpan={2}>{data.profundidade}</td>
              <td className="tg-0pky">Sondagem:</td>
              <td className="tg-0lax" colSpan={3}>{data.sondagem}</td>
            </tr>
            <tr>
              <td className="tg-0pky">Cota:</td>
              <td className="tg-0lax" colSpan={3}>{data.cota}</td>
              <td className="tg-0pky" colSpan={3}>Amostra recebida em:</td>
              <td className="tg-0lax" colSpan={2}>{data.amostraRecebidaEm}</td>
              <td className="tg-0pky" colSpan={2}>Início do ensaio em:</td>
              <td className="tg-0lax" colSpan={4}>{data.inicioDoEnsaioEm}</td>
            </tr>
            <tr>
              <td className="tg-0pky" colSpan={3}>Material ensaiado:</td>
              <td className="tg-0lax" colSpan={5}>{data.materialEnsaiado}</td>
              <td className="tg-0pky" colSpan={2}>Término do ensaio em:</td>
              <td className="tg-0lax" colSpan={5}>{data.terminoDoEnsaioEm}</td>
            </tr>
            <tr>
              <td className="tg-0pky" colSpan={2}>Procedência:</td>
              <td className="tg-0lax" colSpan={6}>{data.procedencia}</td>
              <td className="tg-0pky">NSR:</td>
              <td className="tg-0lax" colSpan={6}>{data.nsr}</td>
            </tr>
            <tr>
              <td className="tg-0pky" colSpan={5}>Dimensão máxima característica:</td>
              <td className="tg-0lax" colSpan={10}>{data.dimensaoMaximaCaracteristica}</td>
            </tr>
            <tr>
              <td className="tg-0pky" colSpan={2}>Aplicação:</td>
              <td className="tg-0lax" colSpan={6}>{data.aplicacao}</td>
              <td className="tg-0pky" colSpan={3}>Responsável pela coleta:</td>
              <td className="tg-0lax" colSpan={4}>{data.responsavelPelaColeta}</td>
            </tr>
            <tr>
              <td className="tg-0pky" colSpan={2}>Data de emissão:</td>
              <td className="tg-0lax" colSpan={13}>{data.dataEmissao}</td>
            </tr>
          </tbody>
        </table>

        {/* Main Content Cell */}
        <table className="tg">
          <tbody>
            <tr>
              <td className="tg-0pky" colSpan={15} style={{ borderLeft: 'none', borderRight: 'none', borderTopColor: '#fff', paddingLeft: '0px', paddingRight: '0px', height: '675px' }}>
                <br />
                <br />
                <br />
                <br />
                <br />

                {/* Minimum Specific Mass Table */}
                <table className="tg-minima" style={{ width: '100%' }}>
                  <colgroup>
                    <col style={{ width: '151px' }} />
                    <col style={{ width: '55px' }} />
                    <col style={{ width: '62px' }} />
                    <col style={{ width: '62px' }} />
                    <col style={{ width: '62px' }} />
                    <col style={{ width: '48px' }} />
                    <col style={{ width: '48px' }} />
                    <col style={{ width: '48px' }} />
                    <col style={{ width: '65px' }} />
                    <col style={{ width: '50px' }} />
                    <col style={{ width: '46px' }} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th className="tg-minima-c3ow" colSpan={11}>Massa específica mínima das areia</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="tg-minima-0pky" colSpan={3}>Molde</td>
                      <td className="tg-minima-c3ow" colSpan={2}>{data.minMolde}</td>
                      <td className="tg-minima-0pky" colSpan={3}>Volume do molde:</td>
                      <td className="tg-minima-c3ow">(g/cm³)</td>
                      <td className="tg-minima-c3ow" colSpan={2}>{data.minVolumeMolde}</td>
                    </tr>
                    <tr>
                      <td className="tg-minima-0pky" colSpan={2}>Peso do molde:</td>
                      <td className="tg-minima-c3ow">(g)</td>
                      <td className="tg-minima-c3ow" colSpan={2}>{data.minPesoMolde}</td>
                      <td className="tg-minima-0pky" colSpan={4} style={{ width: '40px' }}>Massa específica das partículas</td>
                      <td className="tg-minima-c3ow" colSpan={2}>{data.minMassaEspecificaDasParticulas}</td>
                    </tr>
                    <tr>
                      <td className="tg-minima-0pky" colSpan={2}>Corpo de prova</td>
                      <td className="tg-minima-c3ow" style={{ width: '40px' }}>1</td>
                      <td className="tg-minima-c3ow" style={{ width: '40px' }}>2</td>
                      <td className="tg-minima-c3ow" style={{ width: '40px' }}>3</td>
                      <td className="tg-minima-c3ow" style={{ width: '40px' }}>4</td>
                      <td className="tg-minima-c3ow" style={{ width: '40px' }}>5</td>
                      <td className="tg-minima-c3ow" style={{ width: '40px' }}>6</td>
                      <td className="tg-minima-c3ow" style={{ width: '40px' }}>7</td>
                      <td className="tg-minima-c3ow" style={{ width: '40px' }}>8</td>
                      <td className="tg-minima-c3ow" style={{ width: '40px' }}>9</td>
                    </tr>
                    <tr>
                      <td className="tg-minima-0pky">Peso do molde + areia</td>
                      <td className="tg-minima-c3ow">(g)</td>
                      <td className="tg-minima-c3ow">{data.minPesoMoldeAreia1}</td>
                      <td className="tg-minima-c3ow">{data.minPesoMoldeAreia2}</td>
                      <td className="tg-minima-c3ow">{data.minPesoMoldeAreia3}</td>
                      <td className="tg-minima-0pky"></td>
                      <td className="tg-minima-0pky"></td>
                      <td className="tg-minima-0pky"></td>
                      <td className="tg-minima-0pky"></td>
                      <td className="tg-minima-0pky"></td>
                      <td className="tg-minima-0pky"></td>
                    </tr>
                    <tr>
                      <td className="tg-minima-0pky">Peso da areia</td>
                      <td className="tg-minima-c3ow">(g)</td>
                      <td className="tg-minima-c3ow">{data.minPesoAreia1}</td>
                      <td className="tg-minima-c3ow">{data.minPesoAreia2}</td>
                      <td className="tg-minima-c3ow">{data.minPesoAreia3}</td>
                      <td className="tg-minima-0pky"></td>
                      <td className="tg-minima-0pky"></td>
                      <td className="tg-minima-0pky"></td>
                      <td className="tg-minima-0pky"></td>
                      <td className="tg-minima-0pky"></td>
                      <td className="tg-minima-0pky"></td>
                    </tr>
                    <tr>
                      <td className="tg-minima-0pky">Massa específica</td>
                      <td className="tg-minima-c3ow">(g/cm³)</td>
                      <td className="tg-minima-c3ow">{data.minMassaEspecifica1}</td>
                      <td className="tg-minima-c3ow">{data.minMassaEspecifica2}</td>
                      <td className="tg-minima-c3ow">{data.minMassaEspecifica3}</td>
                      <td className="tg-minima-0pky"></td>
                      <td className="tg-minima-0pky"></td>
                      <td className="tg-minima-0pky"></td>
                      <td className="tg-minima-0pky"></td>
                      <td className="tg-minima-0pky"></td>
                      <td className="tg-minima-0pky"></td>
                    </tr>
                    <tr>
                      <td className="tg-minima-0pky" colSpan={3}>Massa específica mínima média</td>
                      <td className="tg-minima-c3ow">rmin</td>
                      <td className="tg-minima-34fe">{data.minMassaEspecificaMinimaMedia}</td>
                      <td className="tg-minima-0pky" colSpan={5}>Índice de vazios máximos</td>
                      <td className="tg-minima-34fe">{data.minIndiceVaziosMaximos}</td>
                    </tr>
                  </tbody>
                </table>

                <br />
                <br />
                <br />
                <br />

                {/* Maximum Specific Mass Table */}
                <table className="tg-maxima" style={{ width: '100%' }}>
                  <colgroup>
                    <col style={{ width: '400px' }} />
                    <col style={{ width: '50px' }} />
                    <col style={{ width: '53px' }} />
                    <col style={{ width: '53px' }} />
                    <col style={{ width: '53px' }} />
                    <col style={{ width: '53px' }} />
                    <col style={{ width: '53px' }} />
                    <col style={{ width: '53px' }} />
                    <col style={{ width: '53px' }} />
                    <col style={{ width: '53px' }} />
                    <col style={{ width: '53px' }} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th className="tg-maxima-76qt" colSpan={11}>Massa específica máxima das areia</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="tg-maxima-387r" colSpan={2}>Molde</td>
                      <td className="tg-maxima-76qt">{data.maxMolde}</td>
                      <td className="tg-maxima-76qt" colSpan={2}>Volume do molde</td>
                      <td className="tg-maxima-76qt">(g/cm³)</td>
                      <td className="tg-maxima-76qt">{data.maxVolumeMolde}</td>
                      <td className="tg-maxima-76qt" colSpan={2}>Peso do molde:</td>
                      <td className="tg-maxima-76qt">(g)</td>
                      <td className="tg-maxima-76qt">{data.maxPesoMolde}</td>
                    </tr>
                    <tr>
                      <td className="tg-maxima-387r" colSpan={2}>Corpo de prova</td>
                      <td className="tg-maxima-76qt" style={{ width: '40px' }}>1</td>
                      <td className="tg-maxima-76qt" style={{ width: '40px' }}>2</td>
                      <td className="tg-maxima-76qt" style={{ width: '40px' }}>3</td>
                      <td className="tg-maxima-76qt" style={{ width: '40px' }}>4</td>
                      <td className="tg-maxima-76qt" style={{ width: '40px' }}>5</td>
                      <td className="tg-maxima-76qt" style={{ width: '40px' }}>6</td>
                      <td className="tg-maxima-76qt" style={{ width: '40px' }}>7</td>
                      <td className="tg-maxima-76qt" style={{ width: '40px' }}>8</td>
                      <td className="tg-maxima-76qt" style={{ width: '40px' }}>9</td>
                    </tr>
                    <tr>
                      <td className="tg-maxima-387r">Peso do molde + areia</td>
                      <td className="tg-maxima-76qt">(g)</td>
                      <td className="tg-maxima-76qt">{data.maxPesoMoldeAreia1}</td>
                      <td className="tg-maxima-76qt">{data.maxPesoMoldeAreia2}</td>
                      <td className="tg-maxima-76qt">{data.maxPesoMoldeAreia3}</td>
                      <td className="tg-maxima-76qt">{data.maxPesoMoldeAreia4}</td>
                      <td className="tg-maxima-76qt">{data.maxPesoMoldeAreia5}</td>
                      <td className="tg-maxima-76qt">{data.maxPesoMoldeAreia6}</td>
                      <td className="tg-maxima-387r">{data.maxPesoMoldeAreia7}</td>
                      <td className="tg-maxima-387r">{data.maxPesoMoldeAreia8}</td>
                      <td className="tg-maxima-387r">{data.maxPesoMoldeAreia9}</td>
                    </tr>
                    <tr>
                      <td className="tg-maxima-387r">Peso da areia</td>
                      <td className="tg-maxima-76qt">(g)</td>
                      <td className="tg-maxima-76qt">{data.maxPesoAreia1}</td>
                      <td className="tg-maxima-76qt">{data.maxPesoAreia2}</td>
                      <td className="tg-maxima-76qt">{data.maxPesoAreia3}</td>
                      <td className="tg-maxima-76qt">{data.maxPesoAreia4}</td>
                      <td className="tg-maxima-76qt">{data.maxPesoAreia5}</td>
                      <td className="tg-maxima-76qt">{data.maxPesoAreia6}</td>
                      <td className="tg-maxima-387r">{data.maxPesoAreia7}</td>
                      <td className="tg-maxima-387r">{data.maxPesoAreia8}</td>
                      <td className="tg-maxima-387r">{data.maxPesoAreia9}</td>
                    </tr>
                    <tr>
                      <td className="tg-maxima-387r">Massa específica úmida</td>
                      <td className="tg-maxima-76qt">(g/cm³)</td>
                      <td className="tg-maxima-76qt">{data.maxMassaEspecificaUmida1}</td>
                      <td className="tg-maxima-76qt">{data.maxMassaEspecificaUmida2}</td>
                      <td className="tg-maxima-76qt">{data.maxMassaEspecificaUmida3}</td>
                      <td className="tg-maxima-76qt">{data.maxMassaEspecificaUmida4}</td>
                      <td className="tg-maxima-76qt">{data.maxMassaEspecificaUmida5}</td>
                      <td className="tg-maxima-76qt">{data.maxMassaEspecificaUmida6}</td>
                      <td className="tg-maxima-387r">{data.maxMassaEspecificaUmida7}</td>
                      <td className="tg-maxima-387r">{data.maxMassaEspecificaUmida8}</td>
                      <td className="tg-maxima-387r">{data.maxMassaEspecificaUmida9}</td>
                    </tr>
                    <tr>
                      <td className="tg-maxima-387r">Solo + água + cápsula</td>
                      <td className="tg-maxima-76qt">(g)</td>
                      <td className="tg-maxima-76qt">{data.maxSoloAguaCapsula1}</td>
                      <td className="tg-maxima-76qt">{data.maxSoloAguaCapsula2}</td>
                      <td className="tg-maxima-76qt">{data.maxSoloAguaCapsula3}</td>
                      <td className="tg-maxima-76qt">{data.maxSoloAguaCapsula4}</td>
                      <td className="tg-maxima-76qt">{data.maxSoloAguaCapsula5}</td>
                      <td className="tg-maxima-76qt">{data.maxSoloAguaCapsula6}</td>
                      <td className="tg-maxima-387r">{data.maxSoloAguaCapsula7}</td>
                      <td className="tg-maxima-387r">{data.maxSoloAguaCapsula8}</td>
                      <td className="tg-maxima-387r">{data.maxSoloAguaCapsula9}</td>
                    </tr>
                    <tr>
                      <td className="tg-maxima-387r">Solo seco + cápsula</td>
                      <td className="tg-maxima-76qt">(g)</td>
                      <td className="tg-maxima-76qt">{data.maxSoloSecoCapsula1}</td>
                      <td className="tg-maxima-76qt">{data.maxSoloSecoCapsula2}</td>
                      <td className="tg-maxima-76qt">{data.maxSoloSecoCapsula3}</td>
                      <td className="tg-maxima-76qt">{data.maxSoloSecoCapsula4}</td>
                      <td className="tg-maxima-76qt">{data.maxSoloSecoCapsula5}</td>
                      <td className="tg-maxima-76qt">{data.maxSoloSecoCapsula6}</td>
                      <td className="tg-maxima-387r">{data.maxSoloSecoCapsula7}</td>
                      <td className="tg-maxima-387r">{data.maxSoloSecoCapsula8}</td>
                      <td className="tg-maxima-387r">{data.maxSoloSecoCapsula9}</td>
                    </tr>
                    <tr>
                      <td className="tg-maxima-387r">Cápsula</td>
                      <td className="tg-maxima-76qt">(g)</td>
                      <td className="tg-maxima-76qt">{data.maxCapsula1}</td>
                      <td className="tg-maxima-76qt">{data.maxCapsula2}</td>
                      <td className="tg-maxima-76qt">{data.maxCapsula3}</td>
                      <td className="tg-maxima-76qt">{data.maxCapsula4}</td>
                      <td className="tg-maxima-76qt">{data.maxCapsula5}</td>
                      <td className="tg-maxima-76qt">{data.maxCapsula6}</td>
                      <td className="tg-maxima-387r">{data.maxCapsula7}</td>
                      <td className="tg-maxima-387r">{data.maxCapsula8}</td>
                      <td className="tg-maxima-387r">{data.maxCapsula9}</td>
                    </tr>
                    <tr>
                      <td className="tg-maxima-387r">Massa de água</td>
                      <td className="tg-maxima-76qt">(g)</td>
                      <td className="tg-maxima-76qt">{data.maxMassaAgua1}</td>
                      <td className="tg-maxima-76qt">{data.maxMassaAgua2}</td>
                      <td className="tg-maxima-76qt">{data.maxMassaAgua3}</td>
                      <td className="tg-maxima-76qt">{data.maxMassaAgua4}</td>
                      <td className="tg-maxima-76qt">{data.maxMassaAgua5}</td>
                      <td className="tg-maxima-76qt">{data.maxMassaAgua6}</td>
                      <td className="tg-maxima-387r">{data.maxMassaAgua7}</td>
                      <td className="tg-maxima-387r">{data.maxMassaAgua8}</td>
                      <td className="tg-maxima-387r">{data.maxMassaAgua9}</td>
                    </tr>
                    <tr>
                      <td className="tg-maxima-387r">Teor de umidade</td>
                      <td className="tg-maxima-76qt">%</td>
                      <td className="tg-maxima-76qt">{data.maxTeorUmidade1}</td>
                      <td className="tg-maxima-76qt">{data.maxTeorUmidade2}</td>
                      <td className="tg-maxima-76qt">{data.maxTeorUmidade3}</td>
                      <td className="tg-maxima-76qt">{data.maxTeorUmidade4}</td>
                      <td className="tg-maxima-76qt">{data.maxTeorUmidade5}</td>
                      <td className="tg-maxima-76qt">{data.maxTeorUmidade6}</td>
                      <td className="tg-maxima-387r">{data.maxTeorUmidade7}</td>
                      <td className="tg-maxima-387r">{data.maxTeorUmidade8}</td>
                      <td className="tg-maxima-387r">{data.maxTeorUmidade9}</td>
                    </tr>
                    <tr>
                      <td className="tg-maxima-387r">Teor de umidade médio</td>
                      <td className="tg-maxima-76qt">%</td>
                      <td className="tg-maxima-76qt" colSpan={9} style={{ backgroundColor: '#c0c0c0', fontWeight: 'bold' }}>{data.maxTeorUmidadeMedio}</td>
                    </tr>
                    <tr>
                      <td className="tg-maxima-387r">Massa específica seca</td>
                      <td className="tg-maxima-76qt">(g/cm³)</td>
                      <td className="tg-maxima-76qt">{data.maxMassaEspecificaSeca1}</td>
                      <td className="tg-maxima-76qt">{data.maxMassaEspecificaSeca2}</td>
                      <td className="tg-maxima-76qt">{data.maxMassaEspecificaSeca3}</td>
                      <td className="tg-maxima-76qt">{data.maxMassaEspecificaSeca4}</td>
                      <td className="tg-maxima-76qt">{data.maxMassaEspecificaSeca5}</td>
                      <td className="tg-maxima-76qt">{data.maxMassaEspecificaSeca6}</td>
                      <td className="tg-maxima-387r">{data.maxMassaEspecificaSeca7}</td>
                      <td className="tg-maxima-387r">{data.maxMassaEspecificaSeca8}</td>
                      <td className="tg-maxima-387r">{data.maxMassaEspecificaSeca9}</td>
                    </tr>
                    <tr>
                      <td className="tg-maxima-387r">Massa específica máxima média</td>
                      <td className="tg-maxima-76qt">(g/cm³)</td>
                      <td className="tg-maxima-76qt" colSpan={4} style={{ backgroundColor: '#c0c0c0', fontWeight: 'bold' }}>{data.maxMassaEspecificaMaximaMedia}</td>
                      <td className="tg-maxima-387r" colSpan={4}>Índice de vazios mínimos</td>
                      <td className="tg-maxima-76qt" colSpan={2}>{data.maxIndiceVaziosMinimos}</td>
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
        pagina={pagina}
        totalPaginas={totalPaginas}
        dataEmissao={data.dataEmissao || new Date().toLocaleDateString('pt-BR')}
        signatures={{
          verificador: data.verificado ? {
            Assinatura: data.verificado,
            Nome: data.verificadoData
          } : undefined,
          aprovador: data.aprovado ? {
            Assinatura: data.aprovado,
            Nome: data.aprovadoData
          } : undefined,
        }}
      />
    </div>
  );
};

export default DetermineMaximumAndMinimumSandModel;
