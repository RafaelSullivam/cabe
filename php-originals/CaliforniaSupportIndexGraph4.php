<?php
require_once 'mainSheet.php';
include_once('configureteConnection.php');
class CaliforniaSupportIndexGraph4
{
    private $data;
    public function __construct($data)
    {
        $this->data = $data;
    }

    public function generateModel($codSample, $numberSample, $observation, $dataHeaderAndFooter, $pagina, $totalPaginas, $logo, $dataFormatada)
    {
        $conexao = new ConfigureteConnection();
        $conexao->connect();

        $pdo = $conexao->getConnection();

        if ($pdo === null) {
            return null;
        }
        $graficoValue = "G3";

        $query = "SELECT * FROM graficos_cbr WHERE Amostra = :codSample AND Grafico = :graficoValue AND N_Ensaio = :numberSample" ;
        $stmt = $pdo->prepare($query);
        $stmt->bindParam(':codSample', $codSample, PDO::PARAM_INT);
        $stmt->bindParam(':graficoValue', $graficoValue, PDO::PARAM_STR);
        $stmt->bindParam(':numberSample', $numberSample, PDO::PARAM_INT);
        $stmt->execute();

        $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $graph = $data[0]['Image_WEB'];

        $graficoValue2 = "G4";

        $query = "SELECT * FROM graficos_cbr WHERE Amostra = :codSample AND Grafico = :graficoValue AND N_Ensaio = :numberSample" ;
        $stmt = $pdo->prepare($query);
        $stmt->bindParam(':codSample', $codSample, PDO::PARAM_INT);
        $stmt->bindParam(':graficoValue', $graficoValue2, PDO::PARAM_STR);
        $stmt->bindParam(':numberSample', $numberSample, PDO::PARAM_INT);
        $stmt->execute();

        $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $graph2 = $data[0]['Image_WEB'];


        $query = "SELECT * FROM IndiceSuporteCalifornia WHERE Amostra = :codSample AND N_Ensaio = :numberSample";
        $stmt = $pdo->prepare($query);
        $stmt->bindParam(':codSample', $codSample, PDO::PARAM_INT);
        $stmt->bindParam(':numberSample', $numberSample, PDO::PARAM_INT);
        $stmt->execute();

        $indiceSuporteCalifornia = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $dataIndiceSuporteCalifornia = $indiceSuporteCalifornia[0];

        $executador = $dataIndiceSuporteCalifornia['Executado'];
        $aprovador = $dataIndiceSuporteCalifornia['Aprovado'];
        $verificador = $dataIndiceSuporteCalifornia['Verificado'];

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

            .tg-g2 {
                border-collapse: collapse;
                border-spacing: 0;
                margin: 0px auto;
                vertical-align: middle;
                width: 100%;
                table-layout: fixed; /* Ensures column widths are respected */
            }
            .tg-g2 td {
                vertical-align:middle;
                border-color: black;
                border-style: solid;
                border-width: 1px;
                font-family: Arial, sans-serif;
                font-size: 10px;
                overflow: hidden;
                padding: 1px 2px;
                word-break: normal;
            }
            .tg-g2 th {
                border-color: black;
                border-style: solid;
                border-width: 1px;
                font-family: Arial, sans-serif;
                font-size: 10px;
                font-weight: normal;
                overflow: hidden;
                padding: 1px 2px;
                word-break: normal;
            }
            .tg-g2 .tg-g2-c3ow {
                border-color: inherit;
                text-align: center;
                vertical-align: middle;
            }
            .tg-g2 .tg-g2-0pky {
                border-color: inherit;
                text-align: left;
                vertical-align: middle;
                
            }
        </style>
        </head>
        <body>
        <header>
        
        </header>
        <main style="margin-top: 45px">
        <table class="tg-cabecalho" style="width: 100%;margin-bottom: 13px">
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
                                ÍNDICE SUPORTE CALIFÓRNIA<div>
                        </th>
                    </tr>
                    <tr>
                        <th class="tg-cabecalho-0pky" colspan="1" style="padding: 0px !important">
                            <table class="tg-cabecalho" style="width: 100%">
                                <thead>
                                    <tr>
                                      <td class="tg-cabecalho-0pky" style="width: 160px !important;padding-bottom: 0px; border-top-color:#fff; border-bottom-color:#fff;white-space: nowrap; border-left-color:#fff"> 
                                            NORMA:
                                          <div style="font-size: 102x; margin-left: 10px; margin-top: 6px; margin-bottom: 5px" class="cabecalho-resultado-font">' . $dataIndiceSuporteCalifornia['Norma'] . '</div>
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
                                  <span class="cabecalho-resultado-font">' . $dataIndiceSuporteCalifornia['DataInicio'] . '</span>
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
                                <span class="cabecalho-resultado-font">' . $dataIndiceSuporteCalifornia['DataFinal'] . '</span>
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
                                <b><span class="cabecalho-resultado-font">' . $dataHeaderAndFooter['Localizacao'] . '
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table class="tg">
                <tr>
                  <td class="tg-0pky" colspan="15" style="border-left: none !important; border-right: none !important; border-top-color: #fff; padding-left: 0px !important; padding-right: 0px !important;">
                    <div style="border: 1px solid #000; margin: 10px 0px; padding: 10px; display: flex; justify-content: center; align-items: center; gap: 10px; position: relative !important; z-index: 7 !important;">
      <img src="data:image/jpeg;base64,' . base64_encode($graph) . '" alt="Imagem" width="345px" height="370px" style="object-fit: contain;margin-top: 85px; margin-bottom: -65px; margin-left: 20px;">

     <img src="data:image/jpeg;base64,' . base64_encode($graph2) . '" alt="Imagem" width="345px" height="370px" style="object-fit: contain;margin-top: 85px; margin-bottom: -65px; margin-left: 10px;">
</div>
                       <table class="tg-g2" style="width: 100%;">
                                <colgroup>
                                    <col style="width: 60px;" />
                                    <col style="width: 75px;" />
                                    <col style="width: 75px;" />
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <td class="tg-g2-0pky" scope="row" rowspan="2" style="text-align: center;font-weight: bold;"> ISC em % no teor de umidade ótimo</td>
                                        <td class="tg-g2-c3ow" >Penetração de 2.54 mm</td>
                                        <td class="tg-g2-c3ow" >Penetração de 5.08 mm</td>
                                    </tr>
                                    <tr>
                                       
                                        <td class="tg-g2-c3ow" style="background-color:silver; font-weight:bold">' . $dataIndiceSuporteCalifornia['CBR_1_max'] . '</td>
                                        <td class="tg-g2-c3ow" style="background-color:silver; font-weight:bold">' . $dataIndiceSuporteCalifornia['CBR_2_max'] . '</td>
                                    </tr>
                                
                                </tbody>
                            </table>
                            <table class="tg-g2" style="width: 100%; margin-top: 10px">
                                <colgroup>
                                    <col style="width: 60px;" />
                                    <col style="width: 75px;" />
                                    <col style="width: 75px;" />
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <td class="tg-g2-0pky" scope="row" rowspan="2" style="text-align: center;font-weight: bold;">Incerteza da massa específica seca máxima</td>
                                        <td class="tg-g2-c3ow" >Incerteza Expandida (g/cm³)</td>
                                        <td class="tg-g2-c3ow" >Fator de Expansão (k)</td>
                                    </tr>
                                    <tr>
                                       
                                        <td class="tg-g2-c3ow" >0,12</td>
                                        <td class="tg-g2-c3ow" >2,06</td>
                                    </tr>
                                
                                </tbody>
                            </table>
                            <table class="tg-g2" style="width: 100%; margin-top: 10px">
                                <colgroup>
                                    <col style="width: 60px;" />
                                    <col style="width: 75px;" />
                                    <col style="width: 75px;" />
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <td class="tg-g2-0pky" scope="row" rowspan="2" style="text-align: center;font-weight: bold;">Incerteza do teor de umidade ótimo</td>
                                        <td class="tg-g2-c3ow" >Incerteza Expandida %</td>
                                        <td class="tg-g2-c3ow" >Fator de Expansão (k)</td>
                                    </tr>
                                    <tr>
                                       
                                        <td class="tg-g2-c3ow" >0,17</td>
                                        <td class="tg-g2-c3ow" >2,00</td>
                                    </tr>
                                
                                </tbody>
                            </table>
                            <table class="tg-g2" style="width: 100%; margin-top: 10px">
                                <colgroup>
                                    <col style="width: 60px;" />
                                    <col style="width: 75px;" />
                                    <col style="width: 75px;" />
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <td class="tg-g2-0pky" scope="row" rowspan="2" style="text-align: center;font-weight: bold;">Incerteza da expansão</td>
                                        <td class="tg-g2-c3ow" >Incerteza Expandida %</td>
                                        <td class="tg-g2-c3ow" >Fator de Expansão (k)</td>
                                    </tr>
                                    <tr>
                                       
                                        <td class="tg-g2-c3ow" >0,13</td>
                                        <td class="tg-g2-c3ow" >2,06</td>
                                    </tr>
                                
                                </tbody>
                            </table>
                            <table class="tg-g2" style="width: 100%; margin-top: 10px">
                                <colgroup>
                                    <col style="width: 60px;" />
                                    <col style="width: 75px;" />
                                    <col style="width: 75px;" />
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <td class="tg-g2-0pky" scope="row" rowspan="2" style="text-align: center;font-weight: bold;">Incerteza do ISC na penetração de 2,54</td>
                                        <td class="tg-g2-c3ow" >Incerteza Expandida %</td>
                                        <td class="tg-g2-c3ow" >Fator de Expansão (k)</td>
                                    </tr>
                                    <tr>
                                       
                                        <td class="tg-g2-c3ow" >2,70</td>
                                        <td class="tg-g2-c3ow" >2,65</td>
                                    </tr>
                                
                                </tbody>
                            </table>
                            <table class="tg-g2" style="width: 100%; margin-top: 10px ">
                                <colgroup>
                                   <col style="width: 60px;" />
                                    <col style="width: 75px;" />
                                    <col style="width: 75px;" />
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <td class="tg-g2-0pky" scope="row" rowspan="2" style="text-align: center;font-weight: bold;">Incerteza do ISC na penetração de 5,08</td>
                                        <td class="tg-g2-c3ow" >Incerteza Expandida %</td>
                                        <td class="tg-g2-c3ow" >Fator de Expansão (k)</td>
                                    </tr>
                                    <tr>
                                       
                                        <td class="tg-g2-c3ow" >3,78</td>
                                        <td class="tg-g2-c3ow" >2,55</td>
                                    </tr>
                                
                                </tbody>
                            </table>
                  </td>
                </tr>
                <tr>
          <td class="tg-0pky" colspan="15">
              <p class="title">Observação:</p>
              <div style="height: 15px;"> ' . $dataIndiceSuporteCalifornia['Observacao'] . ' <div>
          </td>
          </tr>
          <tr>
              <td class="tg-0pky" colspan="5">
                  <p class="title" style="top: 0 !important">Execução: </p> ' . (!empty($assinaturaExecutador) ? ' 
                  <p class="title"> ' . $dataIndiceSuporteCalifornia['Executado'] . '</p>' : ' <br />
                  <div style="height: 10px"></div>
                  ') . '
              </td>
              <td class="tg-0pky" colspan="5">
                  <p class="title" style="top: 0 !important">Verificação: </p> ' . (!empty($assinaturaVerificador) ? ' <img style="margin: 1px 0px 0px 50px" src="data:image/jpeg;base64,' . base64_encode($assinaturaVerificador[0]['Assinatura']) . '" alt="Imagem" height="20px" width="80px">
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
                            <img src="data:image/jpeg;base64,' . base64_encode($assinaturaAprovador[0]['Assinatura']) . '" alt="Imagem" height="20px" width="90px"><br>
                            <p class="title" style="margin: 0;">' . $assinaturaAprovador[0]['Nome'] . '</p>
                            </td>
                            <td style="text-align: center; border: none;">
                            <img src="data:image/jpeg;base64,' . base64_encode($assinaturaMarciel[0]['Assinatura']) . '" alt="Imagem" height="20px" width="90px"><br>
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
                              <p class="title"> Código laboratório: PP-LB-003-02 </p>
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
