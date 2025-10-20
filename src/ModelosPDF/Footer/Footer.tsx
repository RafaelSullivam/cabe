import React from 'react';
import './FooterStyles.css';

interface FooterProps {
  className?: string;
  signatures?: {
    verificador?: { Assinatura: string; Nome: string };
    aprovador?: { Assinatura: string; Nome: string };
    marciel?: { Assinatura: string; Nome: string };
  };
  executado?: string;
  pagina?: number;
  totalPaginas?: number;
  observation?: string;
  dataEmissao?: string;
}

const Footer: React.FC<FooterProps> = ({ 
  className = '', 
  signatures, 
  executado, 
   observation,
  pagina, 
  totalPaginas, 
  dataEmissao 
}) => {
  return (
    <footer className={`footer-geocontrole ${className}`}>
      {/* Seção de Assinaturas - sempre renderizada */}
      <table className="tg tg-cabecalho" style={{ width: '100%', marginBottom: '10px', borderCollapse: 'collapse' }}>
        <tbody>
          {/* Linha de Observação */}
          <tr>
            <td className="tg-0pky" colSpan={15} style={{ paddingRight: '10px', marginTop: '0px' }}>
              <p className="title">Observação:</p>
              <div style={{ height: '15px' }}>
                {observation || ''}
              </div>
            </td>
          </tr>
          
          {/* Linha de Assinaturas */}
          <tr>
            <td className="tg-0pky" colSpan={5}>
              <p className="title" style={{ top: 0 }}>Execução:</p>
              <p className="title">{executado}</p>
            </td>
            <td className="tg-0pky" colSpan={5}>
              <p className="title" style={{ top: 0 }}>Verificação:</p>
              {signatures?.verificador ? (
                <>
                  <img 
                    style={{ margin: '1px 0px 0px 50px' }}
                    src={`data:image/jpeg;base64,${signatures.verificador.Assinatura}`}
                    alt="Assinatura Verificador"
                    height="20px"
                    width="80px"
                  />
                  <hr className="hr-ass" style={{ margin: '1px 0px 0px 50px' }} />
                  <p className="title" style={{ margin: '1px 0px 0px 30px' }}>
                    {signatures.verificador.Nome}
                  </p>
                </>
              ) : (
                <>
                  <br />
                  <div style={{ height: '10px' }}></div>
                </>
              )}
            </td>
            <td className="tg-0pky" colSpan={5} style={{ overflow: 'hidden' }}>
              <p className="title" style={{ top: 0 }}>Aprovação:</p>
              {signatures?.aprovador && signatures?.marciel ? (
                <table style={{ width: '100%', borderCollapse: 'collapse', border: 'none' }}>
                  <tbody>
                    <tr style={{ border: 'none' }}>
                      <td style={{ textAlign: 'center', border: 'none' }}>
                        <img 
                          src={`data:image/jpeg;base64,${signatures.aprovador.Assinatura}`}
                          alt="Assinatura Aprovador"
                          height="20px"
                          width="80px"
                        />
                        <hr className="hr-ass" />
                        <p className="title" style={{ margin: 0 }}>
                          {signatures.aprovador.Nome}
                        </p>
                      </td>
                      <td style={{ textAlign: 'center', border: 'none' }}>
                        <img 
                          src={`data:image/jpeg;base64,${signatures.marciel.Assinatura}`}
                          alt="Assinatura Marciel"
                          height="20px"
                          width="80px"
                        />
                        <hr className="hr-ass" />
                        <p className="title" style={{ margin: 0 }}>Marciel Artur</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              ) : (
                <>
                  <br />
                  <div style={{ height: '10px' }}></div>
                </>
              )}
            </td>
          </tr>
          
          {/* Linha com Código laboratório, Data emissão e Paginação */}
          <tr>
            <td className="tg-0pky" colSpan={15} style={{ padding: '4px 0px 0px 5px' }}>
              <div style={{ width: '245px', display: 'inline-block' }}>
                <p className="title">Código laboratório: PP-LB-008-02</p>
              </div>
              <div style={{ width: '447px', display: 'inline-block' }}>
                <p className="title">DATA EMISSÃO: {dataEmissao || new Date().toLocaleDateString('pt-BR')}</p>
              </div>
              <div style={{ display: 'inline-block' }}>
                <p className="title">Pág: {pagina || 1}/{totalPaginas || 1}</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Informações da empresa */}
      <div style={{ textAlign: 'center' }}>
        <p style={{ 
          fontSize: '10px', 
          fontWeight: 'bold', 
          margin: 0, 
          fontFamily: 'Arial, sans-serif' 
        }}>
          Este relatório de ensaio só pode ser copiado integralmente ou parcialmente com autorização da Geocontrole
        </p>
        <p style={{ 
          fontSize: '10px', 
          fontWeight: 'bold', 
          margin: 0, 
          fontFamily: 'Arial, sans-serif' 
        }}>
          Av.Canadá, Nº 159 - Jardim Canadá Nova Lima - Minas Gerais - Brasil - CEP: 34007-654 Tel.: +55 31 3517-9011
        </p>
        
        {/* Linha verde com site/email */}
        <div style={{ 
          width: '100%', 
          backgroundColor: 'green', 
          color: '#fff', 
          fontFamily: 'Arial, sans-serif',
          padding: '2px 10px',
          textAlign: 'center'
        }}>
          www.geocontrole.com - e-mail: mail.br@geocontrole.com
        </div>
      </div>
    </footer>
  );
};

export default Footer;
