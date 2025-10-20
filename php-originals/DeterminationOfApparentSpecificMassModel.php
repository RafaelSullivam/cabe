<?php
require_once 'mainSheet.php';
include_once('configureteConnection.php');
class DeterminationOfApparentSpecificMassModel
{
    private $data;
    public function __construct($data)
    {
        $this->data = $data;
    }

    public function generateModel($codSample, $numberSample, $observation, $dataHeaderAndFooter, $pagina, $totalPaginas, $dataDeterminacaoDaMassaEspecificaAparente, $logo, $dataFormatada)
    {
        $conexao = new ConfigureteConnection();
        $conexao->connect();

        $pdo = $conexao->getConnection();

        if ($pdo === null) {
            return null;
        }

        $executador = $dataDeterminacaoDaMassaEspecificaAparente['Executado'];
        $aprovador = $dataDeterminacaoDaMassaEspecificaAparente['Aprovado'];
        $verificador = $dataDeterminacaoDaMassaEspecificaAparente['Verificado'];

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

            .tg-determinacao {
                border-collapse: collapse;
                border-spacing: 0;
                margin: 0px auto;
            }
            .tg-determinacao td {
                border-color: black;
                border-style: solid;
                border-width: 1px;
                font-family: Arial, sans-serif;
                font-size: 15px;
                overflow: hidden;
                padding: 5px 5px;
                word-break: normal;
                vertical-align: middle;
            }
            .tg-determinacao th {
                border-color: black;
                border-style: solid;
                border-width: 1px;
                font-family: Arial, sans-serif;
                font-size: 15px;
                font-weight: normal;
                overflow: hidden;
                padding: 2px 3px;
                word-break: normal;
            }
            .tg-determinacao .tg-determinacao-34fe {
                background-color: #c0c0c0;
                font-weight: bold;
                border-color: inherit;
                text-align: center;
                vertical-align: middle;
            }
            .tg-determinacao .tg-determinacao-c3ow {
                border-color: inherit;
                text-align: center;
                vertical-align: middle;
            }
            .tg-determinacao .tg-determinacao-0pky {
                border-color: inherit;
                text-align: left;
                vertical-align: middle;
            }
                .tg-determinacao .tg-main-table-c3ow {
                    border-color: inherit;
                    font-size: 12px;
                    text-align: center;
                    vertical-align: middle;
                    padding: 2px 3px;
                     font-family: Arial Unicode MS, DejaVu Sans, Arial, sans-serif;
                   
                }
                     .tg-determinacao .tg-main-table-c1ow {
                    border-color: inherit;
                    font-size: 12px;
                    text-align: center;
                    vertical-align: middle;
                    padding: 2px 3px;
                     font-family: Arial Unicode MS, DejaVu Sans, Arial, sans-serif;
                      width: 48px !important;
                   
                }
        </style>
    </head>
    <body>
    <header>
        
        </header>
        <main style="margin-top: 45px">
        <table class="tg-cabecalho" style="width: 100%;margin-bottom: 5px">
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
                                DETERMINAÇÃO DA MASSA ESPECÍFICA APARENTE<div>
                        </th>
                    </tr>
                    <tr>
                        <th class="tg-cabecalho-0pky" colspan="1" style="padding: 0px !important">
                            <table class="tg-cabecalho" style="width: 100%">
                                <thead>
                                    <tr>
                                      <td class="tg-cabecalho-0pky" style="width: 160px !important;padding-bottom: 0px; border-top-color:#fff; border-bottom-color:#fff;white-space: nowrap; border-left-color:#fff"> 
                                            NORMA:
                                          <div style="font-size: 102x; margin-left: 10px; margin-top: 6px; margin-bottom: 5px" class="cabecalho-resultado-font">' . $dataDeterminacaoDaMassaEspecificaAparente['NormaEnsaio'] . '</div>
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
                                  <span class="cabecalho-resultado-font">' . $dataDeterminacaoDaMassaEspecificaAparente['DataInicio'] . '</span>
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
                                <span class="cabecalho-resultado-font">' . $dataDeterminacaoDaMassaEspecificaAparente['DataFinal'] . '</span>
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
    <td class="tg-0pky" colspan="15" style="border-left: none !important; border-right: none !important; border-top-color: #fff; padding-left: 0px !important; padding-right: 0px !important; height: 675px;">                           
                         <br />
                            <table class="tg-determinacao" style="width: 100%">
                                <colgroup>
                                    <col style="width: 300px;" />
                                    <col style="width: 20px;" />
                                    <col style="width: 20px;" />
                                    <col style="width: 20px;" />
                                    <col style="width: 20px;" />
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <td class="tg-determinacao-0pky" style="width: 300px">Corpo de prova</td>
                                        <td class="tg-main-table-c3ow"></td>
                                        <td class="tg-main-table-c1ow"></td>
                                        <td class="tg-determinacao-c3ow">I</td>
                                        <td class="tg-determinacao-c3ow">II</td>
                                        <td class="tg-determinacao-c3ow">III</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-determinacao-0pky">Massa úmida do corpo de prova</td>
                                        <td class="tg-main-table-c3ow">(M<w style="font-size: 0.7em; vertical-align: sub;">u</w>)</td>
                                        <td class="tg-main-table-c1ow">g</td>
                                        <td class="tg-determinacao-c3ow">' . $dataDeterminacaoDaMassaEspecificaAparente['MassaHumidaP1'] . '</td>
                                        <td class="tg-determinacao-c3ow">' . $dataDeterminacaoDaMassaEspecificaAparente['MassaHumidaP2'] . '</td>
                                        <td class="tg-determinacao-c3ow">' . $dataDeterminacaoDaMassaEspecificaAparente['MassaHumidaP3'] . '</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-determinacao-0pky">Massa do corpo de prova parafinado</td>
                                        <td class="tg-main-table-c3ow">(M<w style="font-size: 0.7em; vertical-align: sub;">p</w>)</td>
                                        <td class="tg-main-table-c1ow">g</td>
                                        <td class="tg-determinacao-c3ow">' . $dataDeterminacaoDaMassaEspecificaAparente['MassaCorpoParafinadoP1'] . '</td>
                                        <td class="tg-determinacao-c3ow">' . $dataDeterminacaoDaMassaEspecificaAparente['MassaCorpoParafinadoP2'] . '</td>
                                        <td class="tg-determinacao-c3ow">' . $dataDeterminacaoDaMassaEspecificaAparente['MassaCorpoParafinadoP3'] . '</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-determinacao-0pky">Massa do corpo de prova imerso</td>
                                        <td class="tg-main-table-c3ow">(M<w style="font-size: 0.7em; vertical-align: sub;">p(i)</w>)</td>
                                        <td class="tg-main-table-c1ow">g</td>
                                        <td class="tg-determinacao-c3ow">' . $dataDeterminacaoDaMassaEspecificaAparente['MassaCorpoSubmersoP1'] . '</td>
                                        <td class="tg-determinacao-c3ow">' . $dataDeterminacaoDaMassaEspecificaAparente['MassaCorpoSubmersoP2'] . '</td>
                                        <td class="tg-determinacao-c3ow">' . $dataDeterminacaoDaMassaEspecificaAparente['MassaCorpoSubmersoP3'] . '</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-determinacao-0pky">Massa da parafina</td>
                                        <td class="tg-main-table-c3ow">(M<w style="font-size: 0.7em; vertical-align: sub;">paraf</w>)</td>
                                        <td class="tg-main-table-c1ow">g</td>
                                        <td class="tg-determinacao-c3ow">' . $dataDeterminacaoDaMassaEspecificaAparente['MassaParafinaP1'] . '</td>
                                        <td class="tg-determinacao-c3ow">' . $dataDeterminacaoDaMassaEspecificaAparente['MassaParafinaP2'] . '</td>
                                        <td class="tg-determinacao-c3ow">' . $dataDeterminacaoDaMassaEspecificaAparente['MassaParafinaP3'] . '</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-determinacao-0pky">Cápsula</td>
                                        <td class="tg-main-table-c3ow"></td>
                                        <td class="tg-main-table-c1ow">n°</td>
                                        <td class="tg-determinacao-c3ow">' . $dataDeterminacaoDaMassaEspecificaAparente['CapsulaP1'] . '</td>
                                        <td class="tg-determinacao-c3ow">' . $dataDeterminacaoDaMassaEspecificaAparente['CapsulaP2'] . '</td>
                                        <td class="tg-determinacao-c3ow">' . $dataDeterminacaoDaMassaEspecificaAparente['CapsulaP3'] . '</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-determinacao-0pky">Amostra úmida + cápsula</td>
                                         <td class="tg-main-table-c3ow"></td>
                                        <td class="tg-main-table-c1ow">g</td>
                                        <td class="tg-determinacao-c3ow">' . $dataDeterminacaoDaMassaEspecificaAparente['AmostraUmidaP1'] . '</td>
                                        <td class="tg-determinacao-c3ow">' . $dataDeterminacaoDaMassaEspecificaAparente['AmostraUmidaP2'] . '</td>
                                        <td class="tg-determinacao-c3ow">' . $dataDeterminacaoDaMassaEspecificaAparente['AmostraUmidaP3'] . '</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-determinacao-0pky">Amostra seca + cápsula</td>
                                         <td class="tg-main-table-c3ow"></td>
                                        <td class="tg-main-table-c1ow">g</td>
                                        <td class="tg-determinacao-c3ow">' . $dataDeterminacaoDaMassaEspecificaAparente['AmostraSecaP1'] . '</td>
                                        <td class="tg-determinacao-c3ow">' . $dataDeterminacaoDaMassaEspecificaAparente['AmostraSecaP2'] . '</td>
                                        <td class="tg-determinacao-c3ow">' . $dataDeterminacaoDaMassaEspecificaAparente['AmostraSecaP3'] . '</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-determinacao-0pky">Massa da cápsula</td>
                                         <td class="tg-main-table-c3ow"></td>
                                        <td class="tg-main-table-c1ow">g</td>
                                        <td class="tg-determinacao-c3ow">' . $dataDeterminacaoDaMassaEspecificaAparente['MassaCapsulaP1'] . '</td>
                                        <td class="tg-determinacao-c3ow">' . $dataDeterminacaoDaMassaEspecificaAparente['MassaCapsulaP2'] . '</td>
                                        <td class="tg-determinacao-c3ow">' . $dataDeterminacaoDaMassaEspecificaAparente['MassaCapsulaP3'] . '</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-determinacao-0pky">Massa de água</td>
                                         <td class="tg-main-table-c3ow"></td>
                                        <td class="tg-main-table-c1ow">g</td>
                                        <td class="tg-determinacao-c3ow">' . $dataDeterminacaoDaMassaEspecificaAparente['MassaAguaP1'] . '</td>
                                        <td class="tg-determinacao-c3ow">' . $dataDeterminacaoDaMassaEspecificaAparente['MassaAguaP2'] . '</td>
                                        <td class="tg-determinacao-c3ow">' . $dataDeterminacaoDaMassaEspecificaAparente['MassaAguaP3'] . '</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-determinacao-0pky">Massa de solo seco</td>
                                         <td class="tg-main-table-c3ow"></td>
                                        <td class="tg-main-table-c1ow">g</td>
                                        <td class="tg-determinacao-c3ow">' . $dataDeterminacaoDaMassaEspecificaAparente['MassaSoloSecoP1'] . '</td>
                                        <td class="tg-determinacao-c3ow">' . $dataDeterminacaoDaMassaEspecificaAparente['MassaSoloSecoP2'] . '</td>
                                        <td class="tg-determinacao-c3ow">' . $dataDeterminacaoDaMassaEspecificaAparente['MassaSoloSecoP3'] . '</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-determinacao-0pky">Teor de umidade</td>
                                         <td class="tg-main-table-c3ow"></td>
                                        <td class="tg-main-table-c1ow">%</td>
                                        <td class="tg-determinacao-c3ow">' . $dataDeterminacaoDaMassaEspecificaAparente['TeorUmidadeP1'] . '</td>
                                        <td class="tg-determinacao-c3ow">' . $dataDeterminacaoDaMassaEspecificaAparente['TeorUmidadeP2'] . '</td>
                                        <td class="tg-determinacao-c3ow">' . $dataDeterminacaoDaMassaEspecificaAparente['TeorUmidadeP3'] . '</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-determinacao-0pky">Média do teor de umidade</td>
                                         <td class="tg-main-table-c3ow"></td>
                                        <td class="tg-determinacao-c3ow">%</td>
                                        <td class="tg-determinacao-34fe" colspan="3">' . $dataDeterminacaoDaMassaEspecificaAparente['MediaTeorUmidade'] . '</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-determinacao-0pky">Volume do corpo de prova</td>
                                        <td class="tg-main-table-c3ow">(V<w style="font-size: 0.7em; vertical-align: sub;">cp</w>)</td>
                                        <td class="tg-main-table-c1ow">cm³</td>
                                        <td class="tg-determinacao-c3ow">' . $dataDeterminacaoDaMassaEspecificaAparente['VolumeCorpoP1'] . '</td>
                                        <td class="tg-determinacao-c3ow">' . $dataDeterminacaoDaMassaEspecificaAparente['VolumeCorpoP2'] . '</td>
                                        <td class="tg-determinacao-c3ow">' . $dataDeterminacaoDaMassaEspecificaAparente['VolumeCorpoP3'] . '</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-determinacao-0pky">Massa específica aparente natural</td>
                                        <td class="tg-main-table-c3ow">(ρ<w style="font-size: 0.7em; vertical-align: sub;">nat</w>)</td>
                                        <td class="tg-main-table-c1ow">g/cm³</td>
                                        <td class="tg-determinacao-c3ow">' . $dataDeterminacaoDaMassaEspecificaAparente['MassaEspUmidaP1'] . '</td>
                                        <td class="tg-determinacao-c3ow">' . $dataDeterminacaoDaMassaEspecificaAparente['MassaEspUmidaP2'] . '</td>
                                        <td class="tg-determinacao-c3ow">' . $dataDeterminacaoDaMassaEspecificaAparente['MassaEspUmidaP3'] . '</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-determinacao-0pky">Massa específica aparente seca</td>
                                        <td class="tg-main-table-c3ow">(ρ<w style="font-size: 0.7em; vertical-align: sub;">d</w>)</td>
                                        <td class="tg-main-table-c1ow">g/cm³</td>
                                        <td class="tg-determinacao-34fe">' . $dataDeterminacaoDaMassaEspecificaAparente['MassaEspSecaP1'] . '</td>
                                        <td class="tg-determinacao-34fe">' . $dataDeterminacaoDaMassaEspecificaAparente['MassaEspSecaP2'] . '</td>
                                        <td class="tg-determinacao-34fe">' . $dataDeterminacaoDaMassaEspecificaAparente['MassaEspSecaP3'] . '</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-determinacao-0pky">Média da massa específica aparente seca</td>
                                        <td class="tg-main-table-c3ow">(ρ<w style="font-size: 0.7em; vertical-align: sub;">d</w>)</td>
                                        <td class="tg-main-table-c1ow">g/cm³</td>
                                        <td class="tg-determinacao-34fe" colspan="3">' . $dataDeterminacaoDaMassaEspecificaAparente['MediaMassaEspSeca'] . '</td>
                                    </tr>
                                </tbody>
                                
                            </table>
                            <div style="margin-top: 10px; text-align: left; font-size: 12px; font-family: Arial, sans-serif; font-weight: bold;">
                                    Tabela de Incertezas do resultado do ensaio
                                    </div>
                                    <table class="tg-determinacao" style="width: 100%;  margin-top: 5px;">
                                   
                           <tr style="margin-top: 5px, height: 4px">
                                      <td class="tg-determinacao-0pky" style="text-align: left; width: 388px">Incerteza Expandida</td>
                                      <td class="tg-main-table-c1ow" style="width: 48px">g/cm³</td>
                                      <td class="tg-main-table-c3ow style="width: 300px" colspan="3""  >' . $dataDeterminacaoDaMassaEspecificaAparente['incertezaexpandida'] . '</td>
                                  </tr>
                                  <tr style="margin-top: 5px, height: 5px">
                                      <td class="tg-determinacao-0pky" style="text-align: left; width: 388px">Fator de Expansão</td>
                                      <td class="tg-main-table-c1ow">k</td>
                                      <td class="tg-main-table-c3ow style="width: 300px" colspan="3""  >' . $dataDeterminacaoDaMassaEspecificaAparente['k'] . '</td>
                                  </tr>
                          </table>

                            <br />
                        </td>
                    </tr>
                    <tr>
          <td class="tg-0pky" colspan="15">
              <p class="title">Observação:</p>
              <div style="height: 15px;"> ' . $dataDeterminacaoDaMassaEspecificaAparente['Observacao'] . ' <div>
          </td>
          </tr>
          <tr>
              <td class="tg-0pky" colspan="5">
                  <p class="title" style="top: 0 !important">Execução: </p> 
                  <p class="title"> ' . $dataDeterminacaoDaMassaEspecificaAparente['Executado'] . '</p>
                  <div style="height: 10px"></div>
                 
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
                              <p class="title"> Código laboratório: ' . 'PP-LB-019-02' . ' </p>
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
