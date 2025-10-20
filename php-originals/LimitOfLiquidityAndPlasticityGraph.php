<?php
include_once('configureteConnection.php');
class LimitOfLiquidityAndPlasticityGraph
{
    private $data;
    public function __construct($data)
    {
        $this->data = $data;
    }

    public function generateModel($codSample, $numberSample, $observation, $dataHeaderAndFooter, $pagina, $totalPaginas, $logo, $dataLimitesAttemberg, $dataImagemLimitesAttemberg, $dataFormatada)
    {
        $conexao = new ConfigureteConnection();
        $conexao->connect();

        $pdo = $conexao->getConnection();

        if ($pdo === null) {
            return null;
        }

        $executador = $dataLimitesAttemberg['Executado'];
        $aprovador = $dataLimitesAttemberg['Aprovado'];
        $Marciel = 'marciel.artur';
        $verificador = $dataLimitesAttemberg['Verificado'];

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

        $query = "SELECT * FROM Login WHERE Nome = :aprovador OR usuario = :aprovador";
        $stmt = $pdo->prepare($query);
        $stmt->bindParam(':aprovador', $Marciel, PDO::PARAM_STR);
        $stmt->execute();
        $assinaturaMarciel = $stmt->fetchAll(PDO::FETCH_ASSOC);

        $query = "SELECT * FROM Login WHERE usuario = :verificador";
        $stmt = $pdo->prepare($query);
        $stmt->bindParam(':verificador', $verificador, PDO::PARAM_STR);
        $stmt->execute();
        $assinaturaVerificador = $stmt->fetchAll(PDO::FETCH_ASSOC);


        $query = "SELECT * FROM imagem_grafico_limites_liquidez_plasticidade WHERE Amostra = :codSample AND N_Ensaio = :numberSample";
        $stmt = $pdo->prepare($query);
        $stmt->bindParam(':codSample', $codSample, PDO::PARAM_INT);
        $stmt->bindParam(':numberSample', $numberSample, PDO::PARAM_INT);
        $stmt->execute();

        $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $graph = $data[0]['Image_WEB'];
        $assinaturaAprovadorblob = $assinaturaVerificador[0]['Assinatura'];
        $np = $dataLimitesAttemberg['NP'] === "NP" ? true : false;
        $html = '<html>
    <head>
        <style type="text/css">
            .tg-limit-of-liquidity {
                border-collapse: collapse;
                border-spacing: 0;
                margin: 0px auto;
            }
                .tg-limit-of-liquidity2 {
                border-collapse: collapse;
                border-spacing: 0;
                margin: 0px auto;
            }
                .tg-limit-of-liquidity2 td {
                border-color: black;
                border-style: solid;
                border-width: 1px;
                font-family: Arial, sans-serif;
                font-size: 13px;
                overflow: hidden;
            }
            .tg-limit-of-liquidity td {
                border-color: black;
                border-style: solid;
                border-width: 1px;
                font-family: Arial, sans-serif;
                font-size: 13px;
                overflow: hidden;
                padding: 3px 5px;
                word-break: normal;
            }
            td.rotate {
                transform: rotate(270deg);
                font-size: 13px;
                text-align: center;
                }
            .tg-limit-of-liquidity th {
                border-color: black;
                border-style: solid;
                border-width: 1px;
                font-family: Arial, sans-serif;
                font-size: 13px;
                font-weight: normal;
                overflow: hidden;
                padding: 3px 5px;
                word-break: normal;
            }
            .tg-limit-of-liquidity .tg-limit-of-liquidity-ltad {
                font-size: 13px;
                text-align: left;
                vertical-align: top;
            }
                .tg-limit-of-liquidity .tg-limit-of-liquidity-ltad2 {
                font-size: 13px;
                text-align: left;
                vertical-align: top;

            }
            .tg-limit-of-liquidity .tg-limit-of-liquidity-6nwz {
                font-size: 13px;
                text-align: center;
                vertical-align: top;
            }
            @media screen and (max-width: 767px) {
                .tg-limit-of-liquidity {
                    width: auto !important;
                }
                .tg-limit-of-liquidity col {
                    width: auto !important;
                }
                .tg-limit-of-liquidity-wrap {
                    overflow-x: auto;
                    -webkit-overflow-scrolling: touch;
                    margin: auto 0px;
                    display: flex;
                    justify-content: space-between; /* Ajusta o espaçamento entre tabelas */
                    align-items: flex-start; /* Alinha as tabelas no topo */
                }
            }
                #imagem-sobreposta2 {
                    position: absolute;
                    top: 340; /* Ajuste a posição vertical conforme necessário */
                    left: 180; /* Ajuste a posição horizontal conforme necessário */
                    z-index: 1; /* Garante que a imagem fique sobreposta à tabela */
                  }
                    #imagem-sobreposta4 {
                    position: absolute;
                    top: 260; /* Ajuste a posição vertical conforme necessário */
                    left: 50; /* Ajuste a posição horizontal conforme necessário */
                    
                  }
        </style>
    </head>
    <body>
    <header>
        <div style="display: inline-block; width: 539px; padding-top: 10px">
            <img src="data:image/png;base64,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" width="195px" />
        </div>
        <div style="width: 212px; background-color: green; color: #fff; display: inline-block; font-family:Arial, sans-serif; font-size: 13px; padding: 2px; text-align: center">
            AMOSTRA Nº: ' . $codSample . ' / ' . $numberSample . '
        </div>
    </header>
        <main style="margin-top: 45px">
        <table class="tg-cabecalho" style="width: 100%;margin-bottom: 13px">
                <thead>
                    <tr>
                        <th class="tg-cabecalho-0pky col-1" colspan="2" rowspan="2"> CLIENTE: <br>
                            <img style="margin-left: 30%" src="data:image/jpeg;base64,' . base64_encode($logo) . '"  width="60px";height="40px"">
                        </th>
                        <th class="tg-cabecalho-0pky col-3" colspan="2">RELATÓRIO ENSAIO: <div style="margin-left: 21%; font-size: 15px; margin-top: -6px">
                                LIMITE DE LIQUIDEZ E PLASTICIDADE<div>
                        </th>
                    </tr>
                    <tr>
                        <th class="tg-cabecalho-0pky" colspan="1" style="padding: 0px !important">
                            <table class="tg-cabecalho" style="width: 100%">
                                <thead>
                                    <tr>
                                      <td class="tg-cabecalho-0pky" style="width: 160px !important;padding-bottom: 0px; border-top-color:#fff; border-bottom-color:#fff;white-space: nowrap; border-left-color:#fff"> 
                                            NORMA:
                                          <div style="font-size: 102x; margin-left: 10px; margin-top: 6px; margin-bottom: 5px" class="cabecalho-resultado-font">' . $dataLimitesAttemberg['Norma'] . '</div>
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
                                  <span class="cabecalho-resultado-font">' . $dataLimitesAttemberg['DataInicio'] . '</span>
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
                                <span class="cabecalho-resultado-font">' . $dataLimitesAttemberg['DataFinal'] . '</span>
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
    <div style="border: 1px solid #000; margin: 20px 0px 15px 0px; padding: 4px">
' . ($np == true ? ' <br /><br /><img src="images/Empty_Graph.png" alt="Imagem" width="750px" height="440px" style="visibility: hidden;"> 
<img src="images/LLP(NP).png" alt="NP" id="imagem-sobreposta2" width="250px" height="140px"> <img src="images/Empty_Graph.png" alt="Imagem" width="605px" height="355px" id="imagem-sobreposta4">'  : ' <img src="data:image/jpeg;base64,' . base64_encode($graph) . '" alt="Imagem" width="750px" height="440px" style="visibility: hidden;">
                       <img src="data:image/jpeg;base64,' . base64_encode($graph) . '" alt="Imagem" width="605px" height="355px" id="imagem-sobreposta4"> ') . '
        
  
                            </div>
                            <div class="tg-limit-of-liquidity-wrap" style="display: flex; justify-content: left; align-items: flex-start; gap: 1rem; margin-left: -428px;">
                                <table class="tg-limit-of-liquidity" border="1" data-texto="Essa frase quebra certo para RL vai pra dentro">
                                    <colgroup>

                                        <col style="width: 180px;" />
                                        <col style="width: 20px;" />
                                        <col style="width: 35px;" />
                                        <col style="width: 20px;" />

                                    </colgroup>
                                    <tbody>
                                        <tr>
                                            <td class="tg-limit-of-liquidity-ltad" style="width: 135px">Limite de liquidez</td>
                                            <td class="tg-limit-of-liquidity-6nwz" style="width: 40px">LL =</td>
                                           ' . ($np == true ? '<td class="tg-limit-of-liquidity-6nwz" style="width: 70px; background-color:silver; font-weight: bold">' . 'NL' . '</td>' : ' <td class="tg-limit-of-liquidity-6nwz" style="width: 70px; background-color:silver; font-weight: bold">' . $dataLimitesAttemberg['LL'] . '</td>') . '
                                            <td class="tg-limit-of-liquidity-6nwz" style="width: 40px">%</td>
                                           
                                        </tr>
                                        <tr>
                                            <td class="tg-limit-of-liquidity-ltad">Limite de plasticidade</td>
                                            <td class="tg-limit-of-liquidity-6nwz">LP =</td>
                                             ' . ($np == true ? '<td class="tg-limit-of-liquidity-6nwz" style="width: 70px; background-color:silver; font-weight: bold">' . 'NP' . '</td>' : '<td class="tg-limit-of-liquidity-6nwz" style="background-color:silver; font-weight: bold">' . $dataLimitesAttemberg['LP'] . '</td>') . '
                                            <td class="tg-limit-of-liquidity-6nwz">%</td>
                                           
                                        </tr>
                                        <tr>
                                            <td class="tg-limit-of-liquidity-ltad">Índice de plasticidade</td>
                                            <td class="tg-limit-of-liquidity-6nwz">IP =</td>
                                            ' . ($np == true ? '<td class="tg-limit-of-liquidity-6nwz" style="width: 70px; background-color:silver; font-weight: bold">' . '---' . '</td>' : ' <td class="tg-limit-of-liquidity-6nwz" style="background-color:silver; font-weight: bold">' . $dataLimitesAttemberg['IP'] . '</td>') . '
                                            <td class="tg-limit-of-liquidity-6nwz">%</td>
                                         
                                        </tr>
                                        <tr>
                                            <td class="tg-limit-of-liquidity-ltad">Índice de consistência</td>
                                            <td class="tg-limit-of-liquidity-6nwz">IC =</td>
                                             ' . ($np == true ? '<td class="tg-limit-of-liquidity-6nwz" style="width: 70px; background-color:silver; font-weight: bold">' . '---' . '</td>' : '<td class="tg-limit-of-liquidity-6nwz" style="background-color:silver; font-weight: bold" >' . $dataLimitesAttemberg['IC'] . '</td>') . '
                                            <td class="tg-limit-of-liquidity-6nwz">%</td>
                                        
                                        </tr>
                                    </tbody>
                                 </table>
                                </div>
                                 <div class="tg-limit-of-liquidity-wrap" style="display: flex; gap: 1rem; margin-top: -100px !important; margin-right: -187px;">
                                 <table class="tg-limit-of-liquidity" style="border">
                                    <colgroup>

                                        <col style="width: 100px;" />


                                    </colgroup>
                                    <tbody>
                                        <tr>
                                            <td class="tg-limit-of-liquidity-ltad" style="height: 39px; border-right: none;">Limite de liquidez</td>
                                            
                                           
                                        </tr>
                                       
                                        <tr>
                                            <td class="tg-limit-of-liquidity-ltad" style="height: 38.5px; border-right: none;">Limite de plasticidade</td>
                                          
                                         
                                        </tr>
                                     
                                    </tbody>
                                </table>
                            </div>
                          <div class="tg-limit-of-liquidity-wrap" style="display: flex; justify-content: left; align-items: flex-start; margin-top: -100px !important; margin-right: -540px;">
                                <table class="tg-limit-of-liquidity">
                                    
                                    <tbody>
                                        <tr>
                                            <td class="tg-limit-of-liquidity-ltad">Incerteza Expandida</td>
                                             <td class="tg-limit-of-liquidity-6nwz" style="width: 30px !important">%</td>
                                             ' . ($np == true ? '<td class="tg-limit-of-liquidity-6nwz" style="width: 36px !important">--- </td>' : '<td class="tg-limit-of-liquidity-6nwz" style="width: 36px !important">' . $dataLimitesAttemberg['incertezaexpandida_liquidez'] . '</td>') . '
                                            
                                          
                                           
                                        </tr>
                                        <tr>
                                            <td class="tg-limit-of-liquidity-ltad">Fator de Expansão</td>
                                             <td class="tg-limit-of-liquidity-6nwz" style="width: 30px !important">k</td>
                                             ' . ($np == true ? '<td class="tg-limit-of-liquidity-6nwz" style="width: 36px !important">--- </td>' : '<td class="tg-limit-of-liquidity-6nwz" style="width: 36px !important">' . $dataLimitesAttemberg['k_liquidez'] . '</td>') . '
                                             
                                           
                                           
                                        </tr>
                                        <tr>
                                            <td class="tg-limit-of-liquidity-ltad">Incerteza Expandida</td>
                                          <td class="tg-limit-of-liquidity-6nwz" style="width: 30px !important">%</td>
                                          ' . ($np == true ? '<td class="tg-limit-of-liquidity-6nwz" style="width: 36px !important">--- </td>' : '<td class="tg-limit-of-liquidity-6nwz" style="width: 36px !important">' . $dataLimitesAttemberg['incertezaexpandida_plasticidade'] . '</td>') . '
                                             
                                           
                                         
                                        </tr>
                                        <tr>
                                            <td class="tg-limit-of-liquidity-ltad">Fator de Expansão</td>
                                           <td class="tg-limit-of-liquidity-6nwz" style="width: 30px !important">k</td>
                                            ' . ($np == true ? '<td class="tg-limit-of-liquidity-6nwz" style="width: 36px !important">--- </td>' : '<td class="tg-limit-of-liquidity-6nwz" style="width: 36px !important">' . $dataLimitesAttemberg['k_plasticidade'] . '</td>') . '
                                             
                                            
                                        
                                        </tr>
                                    </tbody>
                                </table>
                                </div>
                               
                                <div class="tg-limit-of-liquidity-wrap" style="display: flex; justify-content: left; align-items: flex-start; margin-top: -56.25px; margin-left: -78px;">
                                <table class="tg-limit-of-liquidity2">
                                    
                                    <tbody>
                                        <tr>
                                            <td class="rotate" style="height: 20px !important; width: 90.5px !important;white-space: nowrap;  border-top: none;">Aprox. 1%</td>
                                          
                                           
                                        </tr>
                                    </tbody>
                                </table>
                                </div>
                            <br />
                            <br />
                        </td>
                    </tr>
                    <tr>
          <td class="tg-0pky" colspan="15">
              <p class="title">Observação:</p>
              <div style="height: 15px;"> ' . $dataLimitesAttemberg['Observacao'] . ' <div>
          </td>
          </tr>
          <tr>
               <td class="tg-0pky" colspan="5">
                  <p class="title" style="top: 0 !important">Execução: </p> 
                  <p class="title"> '  . $dataLimitesAttemberg['Executado'] . '</p>
              </td>
              <td class="tg-0pky" colspan="5">
                  <p class="title" style="top: 0 !important">Verificação: </p>  <img style="margin: 1px 0px 0px 50px" src="data:image/jpeg;base64,' . base64_encode($assinaturaAprovadorblob) . '" alt="Imagem" height="10px" width="80px">
                  <p class="title"> ' . $assinaturaVerificador[0]['Nome'] . '</p>
              </td>
              <td class="tg-0pky" colspan="5" style="overflow: hidden;">
                    <p class="title" style="top: 0 !important">Aprovação:</p>
                    ' . (!empty($assinaturaAprovador) ? '
                        <table style="width: 100%; border-collapse: collapse; border: none;">
                        <tr style="border: none;">
                            <td style="text-align: center; border: none;">
                            <img src="data:image/jpeg;base64,' . base64_encode($assinaturaAprovador[0]['Assinatura']) . '" alt="Imagem" height="10px" width="90px"><br>
                            <p class="title" style="margin: 0;">' . $assinaturaAprovador[0]['Nome'] . '</p>
                            </td>
                            <td style="text-align: center; border: none;">
                            <img src="data:image/jpeg;base64,' . base64_encode($assinaturaMarciel[0]['Assinatura']) . '" alt="Imagem" height="10px" width="90px"><br>
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
                              <p class="title"> Código laboratório: PP-LB-004-02 </p>
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
            <div style="text-align: center;">
                <p style="font-size: 10px; font-weight: bold; margin: 0; font-family: Arial, sans-serif; !important">
                    Este relatório de ensaio só pode ser copiado integralmente ou parcialmente com autorização da Geocontrole
                </p>
                <p style="font-size: 10px; font-weight: bold; margin: 0; font-family: Arial, sans-serif; !important">
                    Av.Canadá,Nº 159 - Jardim Canadá Nova Lima - Minas Gerais - Brasil - CEP: 34007-654 Tel.: +55 31 3517-9011
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