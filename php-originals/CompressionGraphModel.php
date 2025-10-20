<?php
require_once 'mainSheet.php';
include_once('configureteConnection.php');
class CompressionGraphModel
{
  private $data;
  public function __construct($data)
  {
    $this->data = $data;
  }

  public function generateModel($dataHeaderAndFooter, $dataEnsaioCompactacao, $codSample, $numberSample, $observation, $pagina, $totalPaginas, $logo, $dataFormatada)
  {
    $conexao = new ConfigureteConnection();
    $conexao->connect();

    $pdo = $conexao->getConnection();

    if ($pdo === null) {
      return null;
    } 
    $query = "SELECT * FROM ImagemGrafico WHERE Amostra = :codSample AND N_Ensaio = :numberSample";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(':codSample', $codSample, PDO::PARAM_INT);
    $stmt->bindParam(':numberSample', $numberSample, PDO::PARAM_INT);
    $stmt->execute();

    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $graph = $data[0]['Image_WEB'];

    $executador = $dataEnsaioCompactacao['Executado'];
    $aprovador = $dataEnsaioCompactacao['Aprovado'];
    $verificador = $dataEnsaioCompactacao['Verificado'];

    $query = "SELECT * FROM Login WHERE Nome = :executador OR usuario = :executador";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(':executador', $executador, PDO::PARAM_STR);
    $stmt->execute();
    $assinaturaExecutador = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $query = "SELECT * FROM Login WHERE Nome = :aprovador OR usuario = :aprovador";
        $stmt = $pdo->prepare($query);
        $stmt->bindParam(':aprovador', $aprovador, PDO::PARAM_STR);
        $stmt->execute();
        $assinaturaAprovador = $stmt->fetchAll(PDO::FETCH_ASSOC);

        $Marciel = 'marciel.artur';
         $query = "SELECT * FROM Login WHERE Nome = :aprovador OR usuario = :aprovador";
        $stmt = $pdo->prepare($query);
        $stmt->bindParam(':aprovador', $Marciel, PDO::PARAM_STR);
        $stmt->execute();
        $assinaturaMarciel = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $query = "SELECT * FROM Login WHERE Nome = :verificador OR usuario = :verificador";
        $stmt = $pdo->prepare($query);
        $stmt->bindParam(':verificador', $verificador, PDO::PARAM_STR);
        $stmt->execute();
        $assinaturaVerificador = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $html = '<html>
        <head>
          <style type="text/css">
            .tg-tabela-graficoComp  {border-collapse:collapse;border-spacing:0}
            .tg-tabela-graficoComp td{
              border: 1px solid black;
        font-family: Arial, sans-serif;
        font-size: 10px;
        overflow: hidden;
        padding: 3px 5px;
        word-break: normal;
            }
            .tg-tabela-graficoComp th{
             border: 1px solid black;
        font-family: Arial, sans-serif;
        font-size: 10px;
        overflow: hidden;
        padding: 3px 5px;
        word-break: normal;
            }
            .tg-tabela-graficoComp .tg-tabela-grafico-0lax{   vertical-align: middle;
        padding: 2px 3px;
        font-family: Arial Unicode MS, DejaVu Sans, Arial, sans-serif;}
               #imagem-sobrepostaComp {
                    position: absolute;
                    top: 260; /* Ajuste a posição vertical conforme necessário */
                    left: 65; /* Ajuste a posição horizontal conforme necessário */
                    
                  }
                    .tg-comp-wrap {
                      display: flex;
        gap: 20px; 
        justify-content: flex-start;
        align-items: flex-start;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
                }
          </style>
        </head>
        <body>
        <header>
          
          </header>
          <main style="margin-top: 38px">
          <table class="tg-cabecalho" style="width: 100%;margin-bottom: 10px">
                  <thead>
                      <tr>
                          <th class="tg-cabecalho-0pky col-1" colspan="1" rowspan="2"> CLIENTE: <br>
                        </th>
                        <th class="tg-cabecalho-0pky col-2" colspan="1" rowspan="2"> CERTIFICAÇÃO: <br>
                            <div style="margin-left: 10%; margin-top: 5px; font-size: 12px;">
                                <img style="margin-left: 30%" src="images/ABNT.png" width="60px" height="40px">
                            </div>
                              <img style="margin-left: 30%" src="data:image/jpeg;base64,' . base64_encode($logo) . '"  width="60px";height="40px"">
                          </th>
                          <th class="tg-cabecalho-0pky col-3" colspan="2">RELATÓRIO ENSAIO: <div style="margin-left: 21%; font-size: 15px; margin-top: -6px">
                                  SOLO-ENSAIO DE COMPACTAÇÃO<div>
                          </th>
                      </tr>
                      <tr>
                          <th class="tg-cabecalho-0pky" colspan="1" style="padding: 0px !important">
                              <table class="tg-cabecalho" style="width: 100%">
                                  <thead>
                                      <tr>
                                        <td class="tg-cabecalho-0pky" style="width: 160px !important;padding-bottom: 0px; border-top-color:#fff; border-bottom-color:#fff;white-space: nowrap; border-left-color:#fff"> 
                                              NORMA:
                                            <div style="font-size: 102x; margin-left: 10px; margin-top: 6px; margin-bottom: 5px" class="cabecalho-resultado-font">' . $dataEnsaioCompactacao['NormaEnsaio'] . '</div>
                                        </td>
                                        <td class="tg-cabecalho-0pky" style="padding-bottom: 0px; border-top-color:#fff; border-bottom-color:#fff; border-right-color:#fff"> 
                                              PROCESSO: / LOTE:
                                              <div style="font-size: 12px; margin-top: 6px; margin-left: 25px; margin-bottom: 5px" class="cabecalho-resultado-font"> ' . $dataHeaderAndFooter['Processo'] . ' / ' . $dataHeaderAndFooter['Lote'] . '</div>
                                        </td>
                                    </tr>
                                  </thead>
                              </table>
                          </th>
                          <th class="tg-cabecalho-p1nr"">PROFUNDIDADE (m):
                              <div style="text-align: center; font-size: 12px; margin-top: 7px !important; margin-bottom: 4px !important" class="cabecalho-resultado-font">' . $dataHeaderAndFooter['Profundidade_Inicial'] . ' -- ' . $dataHeaderAndFooter['Profundidade_Final'] . ' </div>
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td class="tg-cabecalho-0pky col-2" colspan="1" rowspan="4">DATA DO REGISTRO: <div style="margin-top: 15px">
                                  <span class="cabecalho-resultado-font">' . $dataHeaderAndFooter['Data_Registro'] . '</span>
                              </div>
                          </td>
                          <td class="tg-cabecalho-0pky col-2" colspan="1" rowspan="4">DATA DE INICIO ENSAIO: <div style="margin-top: 2px">
                                  <span class="cabecalho-resultado-font">' . $dataEnsaioCompactacao['DataInicio'] . '</span>
                              </div>
                          </td>
                          <td class="tg-cabecalho-0pky col-3" rowspan="4">SONDAGEM: <br>
                              <div style="text-align: center; font-size: 12px; margin-top: 9px;">
                                  <b>
                                      <span class="cabecalho-resultado-font">' . $dataHeaderAndFooter['Sondagem'] . '</span>
                              </div>
                          </td>
                          <td class="tg-cabecalho-p1nr">**DATUM: ' . $dataHeaderAndFooter['Datum'] . '</td>
                      </tr>
                      <tr>
                          <td class="tg-cabecalho-p1nr">**COORDENADA X: <span class="cabecalho-resultado-font">' . $dataHeaderAndFooter['Coordenada_X'] . '</span>
                          </td>
                      </tr>
                      <tr>
                          <td class="tg-cabecalho-p1nr">**COORDENADA Y: <span class="cabecalho-resultado-font">' . $dataHeaderAndFooter['Coordenada_Y'] . '</span>
                          </td>
                      </tr>
                      <tr>
                          <td class="tg-cabecalho-ps66">**COORDENADA Z: <span class="cabecalho-resultado-font">' . $dataHeaderAndFooter['Coordenada_Z'] . '</span>
                          </td>
                      </tr>
                      <tr>
                          <td class="tg-cabecalho-0pky" rowspan="2">DATA DE CONCLUSÃO: <div style="margin-top: 15px">
                                  <span class="cabecalho-resultado-font">' . $dataEnsaioCompactacao['DataFinal'] . '</span>
                              </div>
                              <br>
                          </td>
                          <td class="tg-cabecalho-0pky" rowspan="2">**APLICAÇÃO: <div style="margin-top: 15px">
                                  <span class="cabecalho-resultado-font">' . $dataHeaderAndFooter['Aplicacao'] . '</span>
                              </div>
                          </td>
                          <td class="tg-cabecalho-0pky col-3">**OBRA: <br>
                              <div style="text-align: center; font-size: 12px; margin-top: 0px;">
                                  <b>
                                      <span class="cabecalho-resultado-font">' . $dataHeaderAndFooter['Obra'] . '</span>
                              </div>
                          </td>
                          <td class="tg-cabecalho-p1nr" rowspan="2">**ESPECIFICAÇÃO TÉCNICA: <span class="cabecalho-resultado-font">' . $dataHeaderAndFooter['Especificacao_tecnica'] . '</span>
                          </td>
                      </tr>
                      <tr>
                          <td class="tg-cabecalho-0pky">**LOCAL DA COLETA / ENDEREÇO: <br>
                              <div style="text-align: center; font-size: 12px">
                                   <span class="cabecalho-resultado-font">
        ' . (!empty($dataHeaderAndFooter['Localizacao']) ? $dataHeaderAndFooter['Localizacao'] : '---') . '
    </span>
                              </div>
                          </td>
                      </tr>
                  </tbody>
              </table>
            <table class="tg">
                <tr>
                  <td class="tg-0pky" colspan="15" style="border-left: none !important; border-right: none !important; border-top-color: #fff; padding-left: 0px !important; padding-right: 0px !important; height: 675px;">
                    <div style="border: 1px solid #000; margin: 20px 0px 0px 0px; padding: 5px 5px 0px 5px">
                      <div style="width: 50%; margin-left: 32%; position: absolute; z-index: 1; top: 310px; height: 40px; font-size: 15px; background-color: #fff;">GRAFICO DE COMPACTAÇÃO</div>
                        <img src="data:image/jpeg;base64,' . base64_encode($graph) . '" alt="Imagem" width="700px" height="440px" style="visibility: hidden;">
                       <img src="data:image/jpeg;base64,' . base64_encode($graph) . '" alt="Imagem" width="575px" height="355px" id="imagem-sobrepostaComp">
                        
                    
                     </div>  
                  <table class="tg-tabela-graficoComp" style="width: 280; margin-left: 0px; margin-top: 15px ">
                  
                    <tbody>
                        <tr>
                            <td class="tg-tabela-grafico-0lax"  style="width: 160px; height: 35px;border-bottom: 0px solid #fff;">Teor de umidade ótimo</td>
                            <td class="tg-tabela-grafico-0lax" style="border-right: 0px solid #fff;" >
                                                w<w style="font-size: 0.7em; vertical-align: sub;">otm</w>=
                            </td>
                            <td class="tg-tabela-grafico-0lax" style="text-align: center;border-right: 0px solid #fff;border-left: 0px solid #fff;">' . $dataEnsaioCompactacao['Twopt'] . '</td>
                            <td class="tg-tabela-grafico-0lax"  style="text-align: center;border-left: 0px solid #fff;">%</td>
                        </tr>
                        
                        <tr>
                            <td class="tg-tabela-grafico-0lax" style=" height: 36.5px">Massa específica seca máxima</td>
                            <td class="tg-tabela-grafico-0lax" style="border-bottom: 1px solid #000; border-right: 0px solid #fff;" >
                                                ρ<w style="font-size: 0.7em; vertical-align: sub;">dmáx</w>=
                            </td>
                            <td class="tg-tabela-grafico-0lax" style="text-align: center; width: 30px; border-bottom: 1px solid #000;border-right: 0px solid #fff;border-left: 0px solid #fff; ">' . $dataEnsaioCompactacao['Ydmax'] . '</td>
                            <td class="tg-tabela-grafico-0lax" style="text-align: center;width: 30px; border-bottom: 1px solid #000;border-left: 0px solid #fff;">g/cm³</td>
                        </tr>
                       
                    </tbody>
                </table>

                <table class="tg-tabela-graficoComp" style="width: 280; margin-left: 385px; margin-top: -85px;">
                  
                    <tbody>
                        <tr>
                            <td class="tg-tabela-grafico-0lax" rowspan="2" style="width: 160px">Teor de umidade ótimo</td>
                             <td class="tg-tabela-grafico-0lax" style="border-right: 0px solid #fff;">
                                                Incerteza Expandida
                            </td>
                            <td class="tg-tabela-grafico-0lax" style="text-align: center; border-left: 0px solid #fff;">%</td>
                            <td class="tg-tabela-grafico-0lax" style="text-align: center">0,17</td>
                            
                        </tr>
                        <tr>
                             <td class="tg-tabela-grafico-0lax" style="border-right: 0px solid #fff;">
                                               Fator de Expansão
                            </td>
                            <td class="tg-tabela-grafico-0lax" style="text-align: center; border-left: 0px solid #fff;">k</td>
                            <td class="tg-tabela-grafico-0lax" style="text-align: center">2,00</td>
                            
                        </tr>
                        <tr>
                            <td class="tg-tabela-grafico-0lax" rowspan="2">Massa específica seca máxima</td>
                           <td class="tg-tabela-grafico-0lax" style="border-right: 0px solid #fff;">
                                                Incerteza Expandida
                            </td>
                            <td class="tg-tabela-grafico-0lax" style="text-align: center; border-left: 0px solid #fff;">g/cm³</td>
                            <td class="tg-tabela-grafico-0lax" style="text-align: center">0,12</td>
                            
                        </tr>
                        <tr>
                           
                             <td class="tg-tabela-grafico-0lax" style="border-right: 0px solid #fff;">
                                                Fator de Expansão
                            </td>
                             <td class="tg-tabela-grafico-0lax" style="text-align: center; border-left: 0px solid #fff;">k</td>
                            <td class="tg-tabela-grafico-0lax" style="text-align: center">2,06</td>
                           
                        </tr>
                    </tbody>
                </table>
                  </td>
                </tr>          
                    
                <tr>
               <td class="tg-0pky" colspan="15">
                  <p class="title">Observação:</p>
                  <div style="height: 20px;">' . $observation . ' <div>
               </td>
            </tr>
             <tr>
                  <td class="tg-0pky" colspan="5">
                  <p class="title" style="top: 0 !important">Execução: </p> 
                  <p class="title"> '  . $dataEnsaioCompactacao['Executado']. '</p>
              </td>
                  <td class="tg-0pky" colspan="5">
                     <p class="title" style="top: 0 !important">Verificação: </p> ' . (!empty($assinaturaVerificador) ? ' <img style="margin: 1px 0px 0px 50px" src="data:image/jpeg;base64,' . base64_encode($assinaturaVerificador[0]['Assinatura']) . '" alt="Imagem" height="10px" width="80px">
                     <p class="title"> ' . $assinaturaVerificador[0]['Nome'] . '</p>' : ' <br />
                     <div style="height: 10px"></div>
                     ') . '
                  </td>
                  <td class="tg-0pky" colspan="5" style="overflow: hidden;">
                    <p class="title" style="top: 0 !important">Aprovação:</p>
                    ' . (!empty($assinaturaAprovador) ? '
                        <table style="width: 100%; border-collapse: collapse; border: none;">
                        <tr style="border: none;">
                            <td style="text-align: center; border: none;">
                            <img src="data:image/jpeg;base64,' . base64_encode($assinaturaAprovador[0]['Assinatura']) . '" alt="Imagem" height="30px" width="90px"><br>
                            <p class="title" style="margin: 0;">' . $assinaturaAprovador[0]['Nome'] . '</p>
                            </td>
                            <td style="text-align: center; border: none;">
                            <img src="data:image/jpeg;base64,' . base64_encode($assinaturaMarciel[0]['Assinatura']) . '" alt="Imagem" height="30px" width="90px"><br>
                            <p class="title" style="margin: 0;">Marciel Artur</p>
                            </td>
                        </tr>
                        </table>'
                    : '
                        <br />
                        <div style="height: 10px"></div>'
                    ) . '
                    </td>
            </tr>
                      <tr>
                      <td class="tg-0pky" colspan="15" style="padding: 4px 0px 0px 5px;">
                          <div style="width: 245px; display: inline-block">
                              <p class="title"> Código laboratório: PP-LB-009-02</p>
                          </div>
                          <div style="width: 447px; display: inline-block;">
                              <p class="title"> DATA EMISSÃO: ' . $dataFormatada . ' </p>
                          </div>
                          <div style="display: inline-block">
                              <p class="title">Pág: ' . $pagina . '/' . $totalPaginas . ' </p>
                          </div>
                      </td>
                  </tr>
              </tbody>
            </table>
          </main>
          <footer>
            <div style="text-align: center">
              <p style="font-size: 10px; font-weight: bold; margin: 0; font-family: Arial, sans-serif; !important">
                Este relatório de ensaio só pode ser copiado integralmente ou
                parcialmente com autorização da Geocontrole
              </p>
              <p style="font-size: 10px; font-weight: bold; margin: 0; font-family: Arial, sans-serif; !important">
                Av.Canadá,Nº 159 - Jardim Canadá Nova Lima - Minas Gerais - Brasil -
                CEP: 34007-654 Tel.: +55 31 3517-9011
              </p>
              <div style="width: 100%; background-color: green; color: #fff; font-family: Arial, sans-serif; !important">
                www.geocontrole.com - e-mail: mail.br@geocontrole.com
              </div>
            </div>
          </footer>
        </body>
      </html>';
    return $html;
  }
}
