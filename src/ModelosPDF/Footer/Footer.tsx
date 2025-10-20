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
}

const Footer: React.FC<FooterProps> = ({ className = '', signatures, executado, pagina, totalPaginas }) => {
  return (
    <footer className={`footer-geocontrole ${className}`}>
      {/* Seção de Assinaturas */}
      {signatures && (
        <table style={{ width: '100%', marginBottom: '10px', borderCollapse: 'collapse' }}>
          <tbody>
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
          </tbody>
        </table>
      )}

      {/* Informações da empresa */}
      <div style={{ textAlign: 'center' }}>
        {/* Paginação - se fornecida */}
        {pagina && totalPaginas && (
          <div style={{ textAlign: 'right', marginBottom: '5px' }}>
            <span style={{ 
              fontSize: '10px', 
              fontWeight: 'bold', 
              fontFamily: 'Arial, sans-serif' 
            }}>
              Pág: {pagina}/{totalPaginas}
            </span>
          </div>
        )}
        
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
        <div style={{ 
          width: '100%', 
          backgroundColor: 'green', 
          color: '#fff', 
          fontFamily: 'Arial, sans-serif' 
        }}>
          www.geocontrole.com - e-mail: mail.br@geocontrole.com
        </div>
      </div>
    </footer>
  );
};

export default Footer;
