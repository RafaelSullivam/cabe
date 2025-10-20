<?php
require_once 'mainSheet.php';
include_once('configureteConnection.php');
class GranulometricAnalysisWithSedimentationGraph
{
  private $data;
  public function __construct($data)
  {
    $this->data = $data;
  }

  public function generateModel($codSample, $numberSample, $observation, $dataHeaderAndFooter, $pagina, $totalPaginas, $logo, $dataFormatada, $dataAnaliseGranulometricaSedimentacao)
  {
    $conexao = new ConfigureteConnection();
    $conexao->connect();

    $pdo = $conexao->getConnection();

    if ($pdo === null) {
      return null;
    }
    $query = "SELECT * FROM ImagemGranulometrico_Sedimentacao WHERE Amostra = :codSample AND N_Ensaio = :numberSample";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(':codSample', $codSample, PDO::PARAM_INT);
    $stmt->bindParam(':numberSample', $numberSample, PDO::PARAM_INT);
    $stmt->execute();

    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Verificar se há dados antes de tentar acessá-los
    if (!empty($data) && isset($data[0]['Image_WEB'])) {
      $graph = $data[0]['Image_WEB'];
    } else {
      // Valor padrão ou tratamento de erro
      $graph = null; // ou uma imagem padrão em base64
    }

    $executador = $dataAnaliseGranulometricaSedimentacao['Executado'];
    $aprovador = $dataAnaliseGranulometricaSedimentacao['Aprovado'];
    $verificador = $dataAnaliseGranulometricaSedimentacao['Verificado'];

    $query = "SELECT * FROM Login WHERE Nome = :executador";
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

            .tg-compression {
                border-collapse: collapse;
                border-spacing: 0;
              }
              .tg-compression td {
                border-color: black;
                border-style: solid;
                border-width: 1px;
                font-family: Arial, sans-serif;
                font-size: 14px;
                overflow: hidden;
                padding: 8px 5px;
                word-break: normal;
              }
              .tg-compression th {
                border-color: black;
                border-style: solid;
                border-width: 1px;
                font-family: Arial, sans-serif;
                font-size: 14px;
                font-weight: normal;
                overflow: hidden;
                padding: 10px 5px;
                word-break: normal;
              }
              .tg-compression .tg-compression-7wru {
                border-color: inherit;
                font-size: xx-small;
                font-weight: bold;
                text-align: left;
                vertical-align: top;
              }
              .tg-compression .tg-compression-p1nr {
                border-color: inherit;
                font-size: 11px;
                text-align: left;
                vertical-align: top;
              }
              .tg-compression .tg-compression-78ff {
                border-color: inherit;
                font-size: xx-small;
                text-align: center;
                vertical-align: top;
              }
              .tg-compression .tg-compression-fmch {
                background-color: #c0c0c0;
                border-color: inherit;
                font-size: 11px;
                text-align: center;
                vertical-align: top;
              }
              .tg-compression .tg-compression-gzo9 {
                border-color: inherit;
                font-size: 11px;
                text-align: center;
                vertical-align: top;
              }
              .tg-compression .tg-compression-25da {
                border-color: inherit;
                font-size: x-small;
                font-weight: bold;
                text-align: center;
                vertical-align: top;
              }
              .tg-compression .tg-compression-6rs4 {
                border-color: inherit;
                font-size: xx-small;
                font-weight: bold;
                text-align: center;
                vertical-align: top;
              }
              .tg-compression .tg-compression-4nn5 {
                background-color: #c0c0c0;
                border-color: inherit;
                font-size: xx-small;
                text-align: center;
                vertical-align: top;
              }
              @media screen and (max-width: 767px) {
                .tg-compression {
                  width: auto !important;
                }
                .tg-compression col {
                  width: auto !important;
                }
                .tg-compression-wrap {
                  overflow-x: auto;
                  -webkit-overflow-scrolling: touch;
                }
              }
                 .tg-density {
                border-collapse: collapse;
                border-spacing: 0;
                margin: 0px auto;
            }
            .tg-density td {
                border-color: black;
                border-style: solid;
                border-width: 1px;
                font-family: Arial, sans-serif;
                font-size: 10px;
                overflow: hidden;
                padding: 5px 5px;
                word-break: normal;
            }
            .tg-density th {
                border-color: black;
                border-style: solid;
                border-width: 1px;
                font-family: Arial, sans-serif;
                font-size: 10px;
                font-weight: normal;
                overflow: hidden;
                padding: 5px 0px 5px 5px !important;
                word-break: normal;
            }
            .tg-density .tg-density-1wig {
                font-weight: normal;
                text-align: left !important;
                vertical-align: middle;
            }
            .tg-density .tg-density-0lax {
                text-align: center;
                vertical-align: middle;
            }
            @media screen and (max-width: 767px) {
                .tg-density {
                    width: auto !important;
                }
                .tg-density col {
                    width: auto !important;
                }
                .tg-density-wrap {
                    overflow-x: auto;
                    -webkit-overflow-scrolling: touch;
                    margin: auto 0px;
                }
            }

            .tg-density-table {
                border-collapse: collapse;
                border-spacing: 0;
                margin: 0px auto;
            }
            .tg-density-table td {
                border-color: black;
                border-style: solid;
                border-width: 1px;
                font-family: Arial, sans-serif;
                font-size: 10px;
                overflow: hidden;
                padding: 5px 5px;
                word-break: normal;
            }
            .tg-density-table th {
                border-color: black;
                border-style: solid;
                border-width: 1px;
                font-family: Arial, sans-serif;
                font-size: 10px;
                font-weight: normal;
                overflow: hidden;
                padding: 5px 5px;
                word-break: normal;
            }
            .tg-density-table .tg-density-table-1wig {
                font-weight: bold;
                text-align: left;
                vertical-align: middle;
            }
            .tg-density-table .tg-density-table-0lax {
                text-align: left;
                vertical-align: middle;
            }
            @media screen and (max-width: 767px) {
                .tg-density-table {
                    width: auto !important;
                }
                .tg-density-table col {
                    width: auto !important;
                }
                .tg-density-table-wrap {
                    overflow-x: auto;
                    -webkit-overflow-scrolling: touch;
                    margin: auto 0px;
                }
            }

              .tg-tabela-grafico  {border-collapse:collapse;border-spacing:0;}
            .tg-tabela-grafico td{
             border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:10px;
              overflow:hidden;padding:3px 5px;word-break:normal;
            }
            .tg-tabela-grafico th{
              border-color:black;border-style:solid;border-width:1px;
              font-family:Arial, sans-serif;
              font-size:10px;
              font-weight:normal;
              overflow:hidden;
              padding:3px 5px;word-break:normal;
            }
            .tg-tabela-grafico .tg-tabela-grafico-0lax{vertical-align:middle}

            #imagem-sobreposta3 {
                    position: absolute;
                    top: 340; /* Ajuste a posição vertical conforme necessário */
                    left: 40; /* Ajuste a posição horizontal conforme necessário */
                    
                  }
                     #linha-sobreposta {
                    position: absolute;
                    top: 340; /* Ajuste a posição vertical conforme necessário */
                    left: 40; /* Ajuste a posição horizontal conforme necessário */
                    
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
                                ANÁLISE GRANULOMÉTRICA<div>
                        </th>
                    </tr>
                    <tr>
                        <th class="tg-cabecalho-0pky" colspan="1" style="padding: 0px !important">
                            <table class="tg-cabecalho" style="width: 100%">
                                <thead>
                                    <tr>
                                      <td class="tg-cabecalho-0pky" style="width: 160px !important;padding-bottom: 0px; border-top-color:#fff; border-bottom-color:#fff;white-space: nowrap; border-left-color:#fff"> 
                                            NORMA:
                                          <div style="font-size: 102x; margin-left: 10px; margin-top: 6px; margin-bottom: 5px" class="cabecalho-resultado-font">' . $dataAnaliseGranulometricaSedimentacao['Norma'] . '</div>
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
                                  <span class="cabecalho-resultado-font">' . $dataAnaliseGranulometricaSedimentacao['DataInicio'] . '</span>
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
                                <span class="cabecalho-resultado-font">' . $dataAnaliseGranulometricaSedimentacao['DataFinal'] . '</span>
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
           

</div>
                            </div>
                            
  
  <table  class="tg-density" style="width: 245px; margin-left: 0px">
          <tbody>
            <tr>
              <td class="tg-densimetro-table-0lax" colspan="3" style="height: 50px">Massa do solo usada na sedimentação:</td>
              <td class="tg-density-0lax">
                ' . $dataAnaliseGranulometricaSedimentacao['MassaTotalFina'] . ' g
              </td>
            </tr>
            </tbody>
            </table>
        <table  class="tg-density" style="width: 245px; margin-left: 257px; margin-top: -64px">
          <tbody>
            <tr>
              <td class="tg-densimetro-table-0lax" style="height: 20px" >Densímetro nº:</td>
              <td class="tg-densimetro-table-0lax" style="width: 40px; border-right: 0px solid #fff; align-text: right">
                ' . $dataAnaliseGranulometricaSedimentacao['DensimetroNum'] . '</td>
                <td class="tg-density-0lax" style="width: 20px; border-left: 0px solid #fff;">
                 </td>
                </tr>
                <tr>
              <td class="tg-density-1wig" style="height: 20px">
                Densidade das partículas:
              </td>
              <td class="tg-density-0lax" style="width: 40px;  border-right: 0px solid #fff; align-text: center">
                ' . $dataAnaliseGranulometricaSedimentacao['densidade'] . '</td>
                <td class="tg-density-0lax" style="width: 20px; border-left: 0px solid #fff;">
                 g/cm³</td>
            </tr>
            </tbody>
            </table>
          <table  class="tg-density" style="width: 245px; margin-left: 515px; margin-top: -104px">
          <tbody>
              <tr>
              <td class="tg-tabela-grafico-amwm" rowspan="2">
                
                Correções:
              </td>
              <td class="tg-tabela-grafico-0lax" colspan="2" style="height: 20px">Menisco:</td>
              <td class="tg-density-0lax">
             ' . $dataAnaliseGranulometricaSedimentacao['Menisco'] . '
              </td>
            </tr>
            <tr>
              <td class="tg-tabela-grafico-0lax" colspan="2" style="height: 20px">Defloculante:</td>
              <td class="tg-density-0lax">
                ' . $dataAnaliseGranulometricaSedimentacao['Defloculante'] . '
              </td>
            </tr>
          
       </tbody>
</table>
 <div style="margin-top: 15px; height: 3px; text-align: left">
                    <div style="display: inline-block; font-size: 13px; margin-top: 1px; border-left: 2px solid #000; padding-left: 8px; padding-top: 3px">
                        <input
                            type="checkbox"
                            id="checkbox1"
                            name="checkboxes"
                            value="checkbox1"
                            ' . ($dataAnaliseGranulometricaSedimentacao['Atribuido'] === "true" ? 'checked="checked"' : '') . '
                        />
                        <label
                            for="checkbox1"
                            style="font-size: 10px; vertical-align: middle"
                        >
                             Atribuido
                        </label>
                        <input
                            type="checkbox"
                            id="checkbox2"
                            name="checkboxes"
                            value="checkbox2"
                            ' . ($dataAnaliseGranulometricaSedimentacao['Determinado'] === "true" ? 'checked="checked"' : '') . '
                        />
                        <label
                            for="checkbox2"
                            style="font-size: 10px; vertical-align: middle"
                        >
                            Determinado
                        </label>
                    </div>
                </div>
            <table class="tg">
                <tr>
                  <td class="tg-0pky" colspan="15" style="border-left: none !important; border-right: none !important; border-top-color: #fff; padding-left: 0px !important; padding-right: 0px !important;">
                    <div style="border: 1px solid #000; margin: 50px 0px 0px 0px; padding: 5px 0px 5px 5px">
                  
                   
                      <div style="width: 50%; margin-left: 30%; position: absolute; z-index: 1; top: 420px; height: 30px; font-size: 15px; background-color: #fff;">CURVA DE DISTRIBUIÇÃO GRANULOMÉTRICA</div>
                      <img src="data:image/jpeg;base64,' . base64_encode($graph) . '" alt="Imagem" width="700px" height="430px" style="visibility: hidden;">
                       <img src="data:image/jpeg;base64,' . base64_encode($graph) . '" alt="Imagem" width="625px" height="355px" id="imagem-sobreposta3">

                      <div>
                        <table class="tg-tabela-grafico" style="margin-left: 87px; z-index: 2;">
                          <tbody>
                            <tr>
                              <td class="tg-tabela-grafico-0lax" style="width: 43px;text-align: center; padding: 0px 2px">Argila</td>
                              <td class="tg-tabela-grafico-0lax" style="text-align: center; width: 158px">Slite</td>
                              <td class="tg-tabela-grafico-0lax" style="text-align: center; width: 141px">Areia</td>
                              <td class="tg-tabela-grafico-0lax" style="text-align: center; width: 190px">Pedregulho</td>
                            </tr>
                          </tbody>
                        </table>           
                      </div>
                      
                    </div>
                    <div style="margin-top: 15px">
                      <table class="tg-tabela-grafico" style="width: 573px; border: 1px solid #000; margin-left: 93px; margin-bottom: 15px;">
          <tbody> 
            <tr>
              <td class="tg-tabela-grafico-0lax"  >Pedregulho:</td>
              <td class="tg-tabela-grafico-0lax" style="text-align: center; border-right: 0px; width: 15px;">
                ' . str_replace('.', ',', $dataAnaliseGranulometricaSedimentacao['Pedregulho']) . '
              </td>
               <td class="tg-tabela-grafico-0lax" style="border-left: 0px; width: 5px; text-align: center;" >%</td>
              <td class="tg-tabela-grafico-0lax">Areia:</td>
              <td class="tg-tabela-grafico-0lax" style="text-align: center;  border-right: 0px; width: 15px;">
                ' . str_replace('.', ',', $dataAnaliseGranulometricaSedimentacao['Areia']) . '
              </td>
              <td class="tg-tabela-grafico-0lax" style="border-left: 0px; width: 5px; text-align: center;"  >%</td>   
              </tr> 
               <tr>
              <td class="tg-tabela-grafico-0lax">Silte:</td>
              <td class="tg-tabela-grafico-0lax" style="text-align: center; border-right: 0px; width: 15px">
               ' . str_replace('.', ',', $dataAnaliseGranulometricaSedimentacao['Silte']) . '
              </td>
              <td class="tg-tabela-grafico-0lax" style="border-left: 0px; width: 5px; text-align: center;" >%</td>
              <td class="tg-tabela-grafico-0lax">Argila:</td>
              <td class="tg-tabela-grafico-0lax" style="text-align: center; border-right: 0px; width: 15px">
                ' . str_replace('.', ',', $dataAnaliseGranulometricaSedimentacao['Argila']) . '
              </td>
              <td class="tg-tabela-grafico-0lax" style="border-left: 0px ; width: 5px; text-align: center;" >%</td>
            </tr>
          </tbody>
        </table>
        </div>
                  </td>
                   
                  
                </tr>
        
                <tr>
          <td class="tg-0pky" colspan="15">
              <p class="title">Observação:</p>
              <div style="height: 20px;"> ' . $dataAnaliseGranulometricaSedimentacao['Observacoes'] . ' <div>
          </td>
          </tr>
          <tr>
               <td class="tg-0pky" colspan="5">
                  <p class="title" style="top: 0 !important">Execução: </p> 
                  <p class="title"> '  . $dataAnaliseGranulometricaSedimentacao['Executado'] . '</p>
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
                              <p class="title"> Código laboratório: PP-LB-002-02 </p>
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
              <p style="font-size: 10px; font-weight: bold; margin: -1; font-family: Arial, sans-serif; !important">
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
