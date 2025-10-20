<?php
require_once 'mainSheet.php';

class WaterContentModel
{
    private $data;
    public function __construct($data)
    {
        $this->data = $data;
    }

    public function generateModel($dataRehearsal, $dataHeaderAndFooter, $codSample, $numberSample, $observation, $pagina, $totalPaginas, $logo, $dataFormatada)
    {
        $conexao = new ConfigureteConnection();
        $conexao->connect();

        $pdo = $conexao->getConnection();

        if ($pdo === null) {
            return null;
        }

        $executador = $dataRehearsal['Executado'];
        $aprovador = $dataRehearsal['Aprovado'];
        $Marciel = 'marciel.artur';
        $verificador = $dataRehearsal['Verificado'];

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
        // return var_dump($assinaturaAprovador);

        $html = '<html>
      <head></head>
      <body>
            <header>
                
              <style type="text/css">
                  .tg-tabela-de-capsula {
                      border-collapse: collapse;
                      border-spacing: 0;
                      margin: 0px auto;
                  }
                    .hr-ass {
                      height: 1px;
                      width: 90px;
                      color: #000000ff;
                      border-top: 1px;
                      border-right: 1px;
                      border-left: 1px;
                  }
                  .tg-tabela-de-capsula td {
                      border-color: black;
                      border-style: solid;
                      border-width: 1px;
                      font-family: Arial, sans-serif;
                      font-size: 14px;
                      overflow: hidden;
                      padding: 5px 5px;
                      word-break: normal;
                  }
  
                  .tg-tabela-de-capsula th {
                      border-color: black;
                      border-style: solid;
                      border-width: 1px;
                      font-family: Arial, sans-serif;
                      font-size: 14px;
                      font-weight: normal;
                      overflow: hidden;
                      padding: 5px 5px;
                      word-break: normal;
                  }

                  .tg-tabela-de-capsula-2 {
                      border-collapse: collapse;
                      border-spacing: 0;
                      margin: 0px auto;
                    width: 100%;
                  }
                  .tg-tabela-de-capsula-2 td {
                      border-color: black;
                      border-style: solid;
                      border-width: 1px;
                      font-family: Arial, sans-serif;
                      font-size: 14px;
                      overflow: hidden;
                      padding: 2px 5px;
                      word-break: normal;
                      height: 10px;
                  }
                      .tg-tabela-de-capsula-2 tr {

                        height: auto;
                        line-height: 2;
                  }
  
                  .tg-tabela-de-capsula-2 th {
                      border-color: black;
                      border-style: solid;
                      border-width: 1px;
                      font-family: Arial, sans-serif;
                      font-size: 14px;
                      font-weight: normal;
                      overflow: hidden;
                      padding: 2px 5px;
                      word-break: normal;
                  }
  
                  .tg-tabela-de-capsula .tg-tabela-de-capsula-0r18 {
                      border-color: inherit;
                      font-size: 14px;
                      text-align: center;
                      vertical-align: middle;
                      padding-top: 13px;
                      padding-bottom: 13px;
                  }
                      .tg-tabela-de-capsula .tg-tabela-de-capsula-0r10 {
                      border-color: inherit;
                      font-size: 14px;
                      text-align: center;
                      vertical-align: middle;
                      padding-top: 13px;
                      padding-bottom: 13px;
                      width: 42.2px !important; 
                  }
                      .tg-tabela-de-capsula-2 .tg-tabela-de-capsula-0r18 {
                      border-color: inherit;       
                      text-align: center;
                      vertical-align: middle;
                   
                  }
                      .tg-tabela-de-capsula-2 .tg-tabela-de-capsula-0r10 {
                      border-color: inherit;         
                      text-align: center;
                      vertical-align: middle;
                      width: 42.2px !important; 
                  }
                    
  
                  .tg-tabela-de-capsula .tg-tabela-de-capsula-zd5i {
                      border-color: inherit;
                      font-size: 14px;
                      text-align: left;
                      vertical-align: middle;
                  }
              </style>
          </header>
          <main style="margin-top: 45px">
              <table class="tg-cabecalho" style="width: 100%;margin-bottom: 13px;">
                  <thead>
                      <tr>
                          <th class="tg-cabecalho-0pky col-1" colspan="2" rowspan="2"> CLIENTE: <br>
                              <img style="margin-left: 30%" src="data:image/jpeg;base64,' . base64_encode($logo) . '"  width="60px";height="40px"">
                          </th>
                          <th class="tg-cabecalho-0pky col-3" colspan="2">RELATÓRIO ENSAIO: <div style="margin-left: 21%; font-size: 15px; margin-top: -6px">
                                  DETERMINAÇÃO DO TEOR DE UMIDADE DO SOLO </div>
                          </th>
                      </tr>
                      <tr>
                          <th class="tg-cabecalho-0pky" colspan="1" style="padding: 0px !important">
                              <table class="tg-cabecalho" style="width: 100%">
                                  <thead>
                                      <tr>
                                          <td class="tg-cabecalho-0pky" style="width: 160px !important;padding-bottom: 0px; border-top-color:#fff; border-bottom-color:#fff;white-space: nowrap; border-left-color:#fff"> 
                                                NORMA:
                                              <div style="font-size: 102x; margin-left: 10px; margin-top: 6px; margin-bottom: 5px" class="cabecalho-resultado-font">' . $dataRehearsal['NormaEnsaio'] . '</div>
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
                                  <span class="cabecalho-resultado-font">' . $dataRehearsal['DataInicio'] . '</span>
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
                                  <span class="cabecalho-resultado-font">' . $dataRehearsal['DataFinal'] . '</span>
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
                            <div style="margin-top: 4%; height: 40px; text-align: left">
                    <div style="display: inline-block; padding-right: 2px">
                        <p style="font-size: 13px">Temperatura de secagem:</p>
                    </div>
                    <div style="display: inline-block; font-size: 13px; margin-top: 1px; border-left: 2px solid #000; padding-left: 8px; padding-top: 1px">
                        <input
                            type="checkbox"
                            id="checkbox1"
                            name="checkboxes"
                            value="checkbox1"
                            ' . ($dataRehearsal['Temp_CheckBox1'] === "P1" ? 'checked="checked"' : '') . '
                        />
                        <label
                            for="checkbox1"
                            style="font-size: 10px; vertical-align: middle"
                        >
                             Intervalo 60º/65º
                        </label>
                        <br>
                        <input
                            type="checkbox"
                            id="checkbox2"
                            name="checkboxes"
                            value="checkbox2"
                            ' . ($dataRehearsal['Temp_CheckBox2'] === "P2" ? 'checked="checked"' : '') . '
                        />
                        <label
                            for="checkbox2"
                            style="font-size: 10px; vertical-align: middle"
                        >
                            Intervalo 105º/110º
                        </label>
                    </div>
                </div>
              <table class="tg" style="padding-right: 10px !important;">
             
                  <tr>
                      <td class="tg-0pky" colspan="15" style="border-left: none !important; border-right: none !important; border-top-color: #fff; padding-left: 0px !important; padding-right: 0px; height: 605px;">
                          <table class="tg-tabela-de-capsula" style="width: 100%; margin-top: 0px">
                              <colgroup>
                                  <col style="width: 252.2px">
                                  <col style="width: 42.2px">
                                  <col style="width: 54.2px">
                                  <col style="width: 54.2px">
                                  <col style="width: 54.2px">
                                  <col style="width: 54.2px">
                              </colgroup>
                              <tr>
                                  <td class="tg-tabela-de-capsula-0r18" style="text-align: left">Cápsula</td>
                                  <td class="tg-tabela-de-capsula-0r18">Nº</td>
                                  <td class="tg-tabela-de-capsula-0r18" style="width: 50px">' . $dataRehearsal['Capsula1'] . '</td>
                                  <td class="tg-tabela-de-capsula-0r18" style="width: 50px">' . $dataRehearsal['Capsula2'] . '</td>
                                  <td class="tg-tabela-de-capsula-0r18" style="width: 50px">' . $dataRehearsal['Capsula3'] . '</td>
                                  <td class="tg-tabela-de-capsula-0r18" style="width: 50px">' . $dataRehearsal['Capsula4'] . '</td>
                              </tr>
                              <tbody>
                                  <tr>
                                      <td class="tg-tabela-de-capsula-0r18" style="text-align: left" >Massa de amostra úmida + cápsula</td>
                                      <td class="tg-tabela-de-capsula-0r18">g</td>
                                      <td class="tg-tabela-de-capsula-0r18">' . $dataRehearsal['MassaUmida1'] . '</td>
                                      <td class="tg-tabela-de-capsula-0r18">' . $dataRehearsal['MassaUmida2'] . '</td>
                                      <td class="tg-tabela-de-capsula-0r18">' . $dataRehearsal['MassaUmida3'] . '</td>
                                      <td class="tg-tabela-de-capsula-0r18">' . $dataRehearsal['MassaUmida4'] . '</td>
                                  </tr>
                                  <tr>
                                      <td class="tg-tabela-de-capsula-0r18" style="text-align: left">Massa da amostra seca + cápsula</td>
                                      <td class="tg-tabela-de-capsula-0r18">g</td>
                                      <td class="tg-tabela-de-capsula-0r18">' . $dataRehearsal['MassaSeca1'] . '</td>
                                      <td class="tg-tabela-de-capsula-0r18">' . $dataRehearsal['MassaSeca2'] . '</td>
                                      <td class="tg-tabela-de-capsula-0r18">' . $dataRehearsal['MassaSeca3'] . '</td>
                                      <td class="tg-tabela-de-capsula-0r18">' . $dataRehearsal['MassaSeca4'] . '</td>
                                  </tr>
                                  <tr>
                                      <td class="tg-tabela-de-capsula-0r18" style="text-align: left">Massa da cápsula</td>
                                      <td class="tg-tabela-de-capsula-0r18">g</td>
                                      <td class="tg-tabela-de-capsula-0r18">' . $dataRehearsal['MassaCapsula1'] . '</td>
                                      <td class="tg-tabela-de-capsula-0r18">' . $dataRehearsal['MassaCapsula2'] . '</td>
                                      <td class="tg-tabela-de-capsula-0r18">' . $dataRehearsal['MassaCapsula3'] . '</td>
                                      <td class="tg-tabela-de-capsula-0r18">' . $dataRehearsal['MassaCapsula4'] . '</td>
                                  </tr>
                                  <tr>
                                      <td class="tg-tabela-de-capsula-0r18" style="text-align: left">Massa da água</td>
                                      <td class="tg-tabela-de-capsula-0r18">g</td>
                                      <td class="tg-tabela-de-capsula-0r18">' . $dataRehearsal['MassaAgua1'] . '</td>
                                      <td class="tg-tabela-de-capsula-0r18">' . $dataRehearsal['MassaAgua2'] . '</td>
                                      <td class="tg-tabela-de-capsula-0r18">' . $dataRehearsal['MassaAgua3'] . '</td>
                                      <td class="tg-tabela-de-capsula-0r18">' . $dataRehearsal['MassaAgua4'] . '</td>
                                  </tr>
                                  <tr>
                                      <td class="tg-tabela-de-capsula-0r18" style="text-align: left">Massa do solo seco</td>
                                      <td class="tg-tabela-de-capsula-0r18">g</td>
                                      <td class="tg-tabela-de-capsula-0r18">' . $dataRehearsal['MassaSoloSeco1'] . '</td>
                                      <td class="tg-tabela-de-capsula-0r18">' . $dataRehearsal['MassaSoloSeco2'] . '</td>
                                      <td class="tg-tabela-de-capsula-0r18">' . $dataRehearsal['MassaSoloSeco3'] . '</td>
                                      <td class="tg-tabela-de-capsula-0r18">' . $dataRehearsal['MassaSoloSeco4'] . '</td>
                                  </tr>
                                  <tr>
                                      <td class="tg-tabela-de-capsula-0r18" style="text-align: left">Teor de umidade</td>
                                      <td class="tg-tabela-de-capsula-0r18">%</td>
                                      <td class="tg-tabela-de-capsula-0r18">' . $dataRehearsal['TeorAgua1'] . '</td>
                                      <td class="tg-tabela-de-capsula-0r18">' . $dataRehearsal['TeorAgua2'] . '</td>
                                      <td class="tg-tabela-de-capsula-0r18">' . $dataRehearsal['TeorAgua3'] . '</td>
                                      <td class="tg-tabela-de-capsula-0r18">' . $dataRehearsal['TeorAgua4'] . '</td>
                                  </tr>
                                  <tr>
                                      <td class="tg-tabela-de-capsula-0r18" style="text-align: left">Teor de umidade médio</td>
                                      <td class="tg-tabela-de-capsula-0r18">%</td>
                                      <td class="tg-tabela-de-capsula-0r18" style="background-color: #c8c8c8; font-weight: bold" colspan="4">' . $dataRehearsal['Media'] . '</td>
                                  </tr>
                                   
                              </tbody>

                               




                            
                          </table>
                          <div style="margin-top: 15px; text-align: left; font-size: 12px; font-family: Arial, sans-serif; font-weight: bold;">
                                    Tabela de Incertezas do resultado do ensaio
                                    </div>
                            <table class="tg-tabela-de-capsula-2" style="width: 100%;  margin-top: 5px">
                            
                           <tr style="margin-top: 5px, height: 4px">
                                      <td class="tg-tabela-de-capsula-0r18" style="text-align: left; width: 442.2px !important;">Incerteza Expandida</td>
                                      <td class="tg-tabela-de-capsula-0r10">%</td>
                                      <td class="tg-tabela-de-capsula-0r18" colspan="4">' . $dataRehearsal['Incerteza'] . '</td>
                                  </tr>
                                  <tr style="margin-top: 5px, height: 5px">
                                      <td class="tg-tabela-de-capsula-0r18" style="text-align: left">Fator de Expansão</td>
                                      <td class="tg-tabela-de-capsula-0r10">k</td>
                                      <td class="tg-tabela-de-capsula-0r18" colspan="4">' . $dataRehearsal['Expansao'] . '</td>
                                  </tr>
                          </table>
                   
                      </td>
                  </tr>
                
                  <tr>
               <td class="tg-0pky" colspan="15" style="padding-right: 10px !important; margin-top: 0px">
                  <p class="title">Observação:</p>
                  <div style="height: 15px;">' . $observation . ' <div>
               </td>
            </tr>
            <td class="tg-0pky" colspan="5">
                  <p class="title" style="top: 0 !important">Execução: </p> 
                  <p class="title"> '  . $dataRehearsal['Executado']. '</p>
              </td>
                  <td class="tg-0pky" colspan="5">
                     <p class="title" style="top: 0 !important">Verificação: </p> ' . (!empty($assinaturaVerificador) ? ' <img style="margin: 1px 0px 0px 50px" src="data:image/jpeg;base64,' . base64_encode($assinaturaVerificador[0]['Assinatura']) . '" alt="Imagem" height="20px" width="80px"><hr class="hr-ass" style="margin: 1px 0px 0px 50px" />
                     <p class="title"  style="margin: 1px 0px 0px 30px !important"> ' . $assinaturaVerificador[0]['Nome'] . '</p>' : ' <br />
                     <div style="height: 10px"></div>
                     ') . '
                  </td>
                  <td class="tg-0pky" colspan="5" style="overflow: hidden;">
                    <p class="title" style="top: 0 !important">Aprovação:</p>
                    ' . (!empty($assinaturaAprovador) ? '
                        <table style="width: 100%; border-collapse: collapse; border: none;">
                        <tr style="border: none;">
                            <td style="text-align: center; border: none;">
                            <img src="data:image/jpeg;base64,' . base64_encode($assinaturaAprovador[0]['Assinatura']) . '" alt="Imagem" height="20px" width="80px"><hr class="hr-ass" />
                            <p class="title" style="margin: 0;">' . $assinaturaAprovador[0]['Nome'] . '</p>
                            </td>
                            <td style="text-align: center; border: none;">
                            <img src="data:image/jpeg;base64,' . base64_encode($assinaturaMarciel[0]['Assinatura']) . '" alt="Imagem" height="20px" width="80px"><hr class="hr-ass" />
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
                              <p class="title"> Código laboratório: PP-LB-008-02 </p>
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
                  <p style="font-size: 10px; font-weight: bold; margin: 0; font-family: Arial, sans-serif; !important">Este relatório de ensaio só pode ser copiado integralmente ou parcialmente com autorização da Geocontrole</p>
                  <p style="font-size: 10px; font-weight: bold; margin: 0; font-family: Arial, sans-serif; !important">Av.Canadá,Nº 159 - Jardim Canadá Nova Lima - Minas Gerais - Brasil - CEP: 34007-654 Tel.: +55 31 3517-9011</p>
                  <div style="width: 100%; background-color: green; color: #fff; font-family: Arial, sans-serif; !important">www.geocontrole.com - e-mail: mail.br@geocontrole.com </div>
              </div>
          </footer>
      </body>
  </html>';
        return $html;
    }
}
