<?php
require_once 'mainSheet.php';
include_once('configureteConnection.php');
class GranulometricAnalysisWithSedimentation
{
    private $data;
    public function __construct($data)
    {
        $this->data = $data;
    }

    public function generateModel($codSample, $numberSample, $observation, $dataHeaderAndFooter, $pagina, $totalPaginas, $dataAnaliseGranulometricaSedimentacao, $logo, $dataFormatada)
    {

        $conexao = new ConfigureteConnection();
        $conexao->connect();

        $pdo = $conexao->getConnection();

        if ($pdo === null) {

            return null;
        }
        $seriePeneiras1 = $dataAnaliseGranulometricaSedimentacao['SeriePeneiras1'];
        $firstSpacePosition1 = strpos($seriePeneiras1, ' ');
        if ($firstSpacePosition1 !== false) {
            $firstPart1 = substr($seriePeneiras1, 0, $firstSpacePosition1);
            $secondPart1 = substr($seriePeneiras1, $firstSpacePosition1);
            $modifiedSeriePeneiras1 = $firstPart1 . "<br>" . $secondPart1;
        } else {
            $modifiedSeriePeneiras1 = $seriePeneiras1;
        }

        $seriePeneiras2 = $dataAnaliseGranulometricaSedimentacao['SeriePeneiras2'];
        $firstSpacePosition2 = strpos($seriePeneiras2, ' ');
        if ($firstSpacePosition2 !== false) {
            $firstPart2 = substr($seriePeneiras2, 0, $firstSpacePosition2);
            $secondPart2 = substr($seriePeneiras2, $firstSpacePosition2);
            $modifiedSeriePeneiras2 = $firstPart2 . "<br>" . $secondPart2;
        } else {
            $modifiedSeriePeneiras2 = $seriePeneiras2;
        }

        $seriePeneiras3 = $dataAnaliseGranulometricaSedimentacao['SeriePeneiras3'];
        $firstSpacePosition3 = strpos($seriePeneiras3, ' ');
        if ($firstSpacePosition3 !== false) {
            $firstPart3 = substr($seriePeneiras3, 0, $firstSpacePosition3);
            $secondPart3 = substr($seriePeneiras3, $firstSpacePosition3);
            $modifiedSeriePeneiras3 = $firstPart3 . "<br>" . $secondPart3;
        } else {
            $modifiedSeriePeneiras3 = $seriePeneiras3;
        }

        $seriePeneiras4 = $dataAnaliseGranulometricaSedimentacao['SeriePeneiras4'];
        $firstSpacePosition4 = strpos($seriePeneiras4, ' ');
        if ($firstSpacePosition4 !== false) {
            $firstPart4 = substr($seriePeneiras4, 0, $firstSpacePosition4);
            $secondPart4 = substr($seriePeneiras4, $firstSpacePosition4);
            $modifiedSeriePeneiras4 = $firstPart4 . "<br>" . $secondPart4;
        } else {
            $modifiedSeriePeneiras4 = $seriePeneiras4;
        }

        $seriePeneiras5 = $dataAnaliseGranulometricaSedimentacao['SeriePeneiras5'];
        $firstSpacePosition5 = strpos($seriePeneiras5, ' ');
        if ($firstSpacePosition5 !== false) {
            $firstPart5 = substr($seriePeneiras5, 0, $firstSpacePosition5);
            $secondPart5 = substr($seriePeneiras5, $firstSpacePosition5);
            $modifiedSeriePeneiras5 = $firstPart5 . "<br>" . $secondPart5;
        } else {
            $modifiedSeriePeneiras5 = $seriePeneiras5;
        }

        $seriePeneiras6 = $dataAnaliseGranulometricaSedimentacao['SeriePeneiras6'];
        $firstSpacePosition6 = strpos($seriePeneiras6, ' ');
        if ($firstSpacePosition6 !== false) {
            $firstPart6 = substr($seriePeneiras6, 0, $firstSpacePosition6);
            $secondPart6 = substr($seriePeneiras6, $firstSpacePosition6);
            $modifiedSeriePeneiras6 = $firstPart6 . "<br>" . $secondPart6;
        } else {
            $modifiedSeriePeneiras6 = $seriePeneiras6;
        }

        $seriePeneiras7 = $dataAnaliseGranulometricaSedimentacao['SeriePeneiras7'];
        $firstSpacePosition7 = strpos($seriePeneiras7, ' ');
        if ($firstSpacePosition7 !== false) {
            $firstPart7 = substr($seriePeneiras7, 0, $firstSpacePosition7);
            $secondPart7 = substr($seriePeneiras7, $firstSpacePosition7);
            $modifiedSeriePeneiras7 = $firstPart7 . "<br>" . $secondPart7;
        } else {
            $modifiedSeriePeneiras7 = $seriePeneiras7;
        }

        $seriePeneiras8 = $dataAnaliseGranulometricaSedimentacao['SeriePeneiras8'];
        $firstSpacePosition8 = strpos($seriePeneiras8, ' ');
        if ($firstSpacePosition8 !== false) {
            $firstPart8 = substr($seriePeneiras8, 0, $firstSpacePosition8);
            $secondPart8 = substr($seriePeneiras8, $firstSpacePosition8);
            $modifiedSeriePeneiras8 = $firstPart8 . "<br>" . $secondPart8;
        } else {
            $modifiedSeriePeneiras8 = $seriePeneiras8;
        }

        $seriePeneiras9 = $dataAnaliseGranulometricaSedimentacao['SeriePeneiras9'];
        $firstSpacePosition9 = strpos($seriePeneiras9, ' ');
        if ($firstSpacePosition9 !== false) {
            $firstPart9 = substr($seriePeneiras9, 0, $firstSpacePosition9);
            $secondPart9 = substr($seriePeneiras9, $firstSpacePosition9);
            $modifiedSeriePeneiras9 = $firstPart9 . "<br>" . $secondPart9;
        } else {
            $modifiedSeriePeneiras9 = $seriePeneiras9;
        }

        $seriePeneiras10 = $dataAnaliseGranulometricaSedimentacao['SeriePeneiras10'];
        $firstSpacePosition10 = strpos($seriePeneiras10, ' ');
        if ($firstSpacePosition10 !== false) {
            $firstPart10 = substr($seriePeneiras10, 0, $firstSpacePosition10);
            $secondPart10 = substr($seriePeneiras10, $firstSpacePosition10);
            $modifiedSeriePeneiras10 = $firstPart10 . "<br>" . $secondPart10;
        } else {
            $modifiedSeriePeneiras10 = $seriePeneiras10;
        }

        $seriePeneiras11 = $dataAnaliseGranulometricaSedimentacao['SeriePeneiras11'];
        $firstSpacePosition11 = strpos($seriePeneiras11, ' ');
        if ($firstSpacePosition11 !== false) {
            $firstPart11 = substr($seriePeneiras11, 0, $firstSpacePosition11);
            $secondPart11 = substr($seriePeneiras11, $firstSpacePosition11);
            $modifiedSeriePeneiras11 = $firstPart11 . "<br>" . $secondPart11;
        } else {
            $modifiedSeriePeneiras11 = $seriePeneiras11;
        }

        $seriePeneiras12 = $dataAnaliseGranulometricaSedimentacao['SeriePeneiras12'];
        $firstSpacePosition12 = strpos($seriePeneiras12, ' ');
        if ($firstSpacePosition12 !== false) {
            $firstPart12 = substr($seriePeneiras12, 0, $firstSpacePosition12);
            $secondPart12 = substr($seriePeneiras12, $firstSpacePosition12);
            $modifiedSeriePeneiras12 = $firstPart12 . "<br>" . $secondPart12;
        } else {
            $modifiedSeriePeneiras12 = $seriePeneiras12;
        }

        $seriePeneiras13 = $dataAnaliseGranulometricaSedimentacao['SeriePeneiras13'];
        $firstSpacePosition13 = strpos($seriePeneiras13, ' ');
        if ($firstSpacePosition13 !== false) {
            $firstPart13 = substr($seriePeneiras13, 0, $firstSpacePosition13);
            $secondPart13 = substr($seriePeneiras13, $firstSpacePosition13);
            $modifiedSeriePeneiras13 = $firstPart13 . "<br>" . $secondPart13;
        } else {
            $modifiedSeriePeneiras13 = $seriePeneiras13;
        }

        $seriePeneiras14 = $dataAnaliseGranulometricaSedimentacao['SeriePeneiras14'];
        $firstSpacePosition14 = strpos($seriePeneiras14, ' ');
        if ($firstSpacePosition14 !== false) {
            $firstPart14 = substr($seriePeneiras14, 0, $firstSpacePosition14);
            $secondPart14 = substr($seriePeneiras14, $firstSpacePosition14);
            $modifiedSeriePeneiras14 = $firstPart14 . "<br>" . $secondPart14;
        } else {
            $modifiedSeriePeneiras14 = $seriePeneiras14;
        }

        $seriePeneiras15 = $dataAnaliseGranulometricaSedimentacao['SeriePeneiras15'];
        $firstSpacePosition15 = strpos($seriePeneiras15, ' ');
        if ($firstSpacePosition15 !== false) {
            $firstPart15 = substr($seriePeneiras15, 0, $firstSpacePosition15);
            $secondPart15 = substr($seriePeneiras15, $firstSpacePosition15);
            $modifiedSeriePeneiras15 = $firstPart15 . "<br>" . $secondPart15;
        } else {
            $modifiedSeriePeneiras15 = $seriePeneiras15;
        }

        $seriePeneiras16 = $dataAnaliseGranulometricaSedimentacao['SeriePeneiras16'];
        $firstSpacePosition16 = strpos($seriePeneiras16, ' ');
        if ($firstSpacePosition16 !== false) {
            $firstPart16 = substr($seriePeneiras16, 0, $firstSpacePosition16);
            $secondPart16 = substr($seriePeneiras16, $firstSpacePosition16);
            $modifiedSeriePeneiras16 = $firstPart16 . "<br>" . $secondPart16;
        } else {
            $modifiedSeriePeneiras16 = $seriePeneiras16;
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
            .tg-corrections-table {
                border-collapse: collapse;
                border-spacing: 0;
                margin: 0px auto;
            }
            .tg-corrections-table td {
                border-color: black;
                border-style: solid;
                border-width: 1px;
                font-family: Arial, sans-serif;
                font-size: 10px;
                overflow: hidden;
                padding: 2px 2px;
                word-break: normal;
            }
            .tg-corrections-table th {
                border-color: black;
                border-style: solid;
                border-width: 1px;
                font-family: Arial, sans-serif;
                font-size: 10px;
                font-weight: normal;
                overflow: hidden;
                padding: 2px 2px;
                word-break: normal;
            }
            .tg-corrections-table .tg-corrections-table-amwm {
                font-weight: normal;
                text-align: start;
                vertical-align: top;
            }
            .tg-corrections-table .tg-corrections-table-0lax {
                text-align: left;
                vertical-align: top;
            }
            @media screen and (max-width: 767px) {
                .tg-corrections-table {
                    width: auto !important;
                }
                .tg-corrections-table col {
                    width: auto !important;
                }
                .tg-corrections-table-wrap {
                    overflow-x: auto;
                    -webkit-overflow-scrolling: touch;
                    margin: auto 0px;
                }
            }

            .tg-secund-table {
                border-collapse: collapse;
                border-spacing: 0;
                margin: 0px 0px 0px 0px;
            }
            .tg-secund-table td {
                border-color: black;
                border-style: solid;
                border-width: 1px;
                font-family: Arial, sans-serif;
                font-size: 14px;
                overflow: hidden;
                padding: 1px 1px;
                word-break: normal;
            }
            .tg-secund-table th {
                border-color: black;
                border-style: solid;
                border-width: 1px;
                font-family: Arial, sans-serif;
                font-size: 14px;
                font-weight: normal;
                overflow: hidden;
                padding: 1px 1px;
                word-break: normal;
            }
            .tg-secund-table .tg-secund-table-91w8 {
                font-size: 10px;
                text-align: center;
                vertical-align: top;
            }
            @media screen and (max-width: 767px) {
                .tg-secund-table {
                    width: auto !important;
                }
                .tg-secund-table col {
                    width: auto !important;
                }
                .tg-secund-table-wrap {
                    overflow-x: auto;
                    -webkit-overflow-scrolling: touch;
                    margin: 0px 0px 0px 0px;
                    border: 1px solid #000;
                }
            }

            .tg-primary-table {
                border-collapse: collapse;
                border-spacing: 0;
                margin: 0px auto;
            }
            .tg-primary-table td {
                border-color: black;
                border-style: solid;
                border-width: 1px;
                font-family: Arial, sans-serif;
                font-size: 10px;
                overflow: hidden;
                padding: 3px 3px;
                word-break: normal;
            }
            .tg-primary-table th {
                border-color: black;
                border-style: solid;
                border-width: 1px;
                font-family: Arial, sans-serif;
                font-size: 10px;
                font-weight: normal;
                overflow: hidden;
                padding: 3px 3px;
                word-break: normal;
            }
            .tg-primary-table .tg-primary-table-fymr {
                border-color: inherit;
                font-weight: bold;
                text-align: left;
                vertical-align: top;
            }
            .tg-primary-table .tg-primary-table-0pky {
                border-color: inherit;
                text-align: center;
                vertical-align: top;
                
            }
                .tg-primary-table .tg-primary-table-1pky {
                border-color: inherit;
                text-align: center;
                vertical-align: top;
                white-space: normal; 
                word-break: break-word !important;
                
            }
            @media screen and (max-width: 767px) {
                .tg-primary-table {
                    width: auto !important;
                }
                .tg-primary-table col {
                    width: auto !important;
                }
                .tg-primary-table-wrap {
                    overflow-x: auto;
                    -webkit-overflow-scrolling: touch;
                    margin: auto 0px;
                }
            }

            .tg-densimetro-table {
                border-collapse: collapse;
                border-spacing: 0;
                margin: 0px auto;
            }
            .tg-densimetro-table td {
                border-color: black;
                border-style: solid;
                border-width: 1px;
                font-family: Arial, sans-serif;
                font-size: 10px;
                overflow: hidden;
                padding: 5px 5px;
                word-break: normal;
            }
            .tg-densimetro-table th {
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
            .tg-densimetro-table .tg-densimetro-table-1wig {
                text-align: left;
                vertical-align: middle;
            }
            .tg-densimetro-table .tg-densimetro-table-0lax {
                text-align: left;
                vertical-align: middle;
            }
            @media screen and (max-width: 767px) {
                .tg-densimetro-table {
                    width: auto !important;
                }
                .tg-densimetro-table col {
                    width: auto !important;
                }
                .tg-densimetro-table-wrap {
                    overflow-x: auto;
                    -webkit-overflow-scrolling: touch;
                    margin: auto 0px;
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

            .tg-pedregulho {
                border-collapse: collapse;
                border-spacing: 0;
                margin: 0px auto;
            }
            .tg-pedregulho td {
                border-color: black;
                border-style: solid;
                border-width: 1px;
                font-size: 10px;
                overflow: hidden;
                padding: 5px 0px 5px 3px !important;
                word-break: normal;
            }
            .tg-pedregulho th {
                border-color: black;
                border-style: solid;
                border-width: 1px;
                font-family: Arial, sans-serif;
                font-size: 10px;
                font-weight: normal;
                overflow: hidden;
                padding: 5px 0px 5px 3px;
                word-break: normal;
            }
            .tg-pedregulho .tg-pedregulho-0lax {
                text-align: left;
                vertical-align: middle;
            }
            @media screen and (max-width: 767px) {
                .tg-pedregulho {
                    width: auto !important;
                }
                .tg-pedregulho col {
                    width: auto !important;
                }
                .tg-pedregulho-wrap {
                    overflow-x: auto;
                    -webkit-overflow-scrolling: touch;
                    margin: auto 0px;
                }
            }
        </style>
    </head>
    <body>
    <header>
        
        </header>
        <main style="margin-top: 45px">
        <table class="tg-cabecalho" style="width: 100%;margin-bottom: 0px">
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
            <table class="tg" style="margin-bottom: 20px;">
                    <tr>
<td class="tg-0pky" colspan="15" style="border-left: none !important; border-right: none !important; border-top-color: #fff; padding-left: 0px !important; padding-right: 0px !important; height: 655px; margin-top: 5px; margin-bottom: 20px">                            
                                <div class="tg-primary-table-wrap" style="margin-top: 0px;">
                                
                                <style type="text/css">
                                    .tg-tabela-totalmente-a-direita  {border-collapse:collapse;border-spacing:0;}
                                    .tg-tabela-totalmente-a-direita td{border-color:black;border-style:solid;border-width:1px;font-size:10px;
                                    overflow:hidden;padding:3px 3px;word-break:normal;}
                                    .tg-tabela-totalmente-a-direita th{border-color:black;border-style:solid;border-width:1px;font-size:10px;
                                    font-weight:normal;overflow:hidden;padding:3px 3px;word-break:normal;}
                                    .tg-tabela-totalmente-a-direita .tg-tabela-totalmente-a-direita-baqh{text-align:center;vertical-align:top}
                                    .tg-tabela-totalmente-a-direita .tg-tabela-totalmente-a-direita-0lax{text-align:left;vertical-align:top}
                                </style>

                                <div style="display: inline-block; margin-bottom: 6px; margin-top: 5px !important;margin-left: 524px">
                                    <table class="tg-tabela-totalmente-a-direita">
                                        <tr>
                                            <td class="tg-tabela-totalmente-a-direita-baqh" style="width: 155px;margin-left: 200px">Massa total da amostra seca:</td>
                                            <td class="tg-tabela-totalmente-a-direita-0lax" style="width: 65px; text-align: center;  ">' . $dataAnaliseGranulometricaSedimentacao['MassaTotalSeca'] . ' g</td>
                                        </tr>
                                    </table>
                                </div>
                                
                                <table class="tg-primary-table" style="width: 100%;">
                                    <tbody>
                                        <tr>
                                            <td class="tg-primary-table-0pky" style="width: 150px">Designação da peneira</td>
                                            <td class="tg-primary-table-0pky"  style="width: 67px">' . $modifiedSeriePeneiras1 . '</td>
                                            <td class="tg-primary-table-0pky" style="width: 62px">' . $modifiedSeriePeneiras2 . '</td>
                                            <td class="tg-primary-table-0pky" style="width: 77px">' . $modifiedSeriePeneiras3 . '</td>
                                            <td class="tg-primary-table-0pky" style="width: 62px">' . $modifiedSeriePeneiras4 . '</td>
                                            <td class="tg-primary-table-0pky" style="width: 77px">' . $modifiedSeriePeneiras5 . '</td>
                                            <td class="tg-primary-table-0pky" style="width: 62px">' . $modifiedSeriePeneiras6 . '</td>
                                            <td class="tg-primary-table-0pky">' . $modifiedSeriePeneiras7 . '</td>
                                            <td class="tg-primary-table-0pky">' . $modifiedSeriePeneiras8 . '</td>
                                        </tr>
                                        <tr>
                                            <td class="tg-primary-table-0pky">Massa retida acumulada (g)</td>
                                            <td class="tg-primary-table-0pky">' . $dataAnaliseGranulometricaSedimentacao['RetidosF8'] . '</td>
                                            <td class="tg-primary-table-0pky">' . $dataAnaliseGranulometricaSedimentacao['RetidosG7'] . '</td>
                                            <td class="tg-primary-table-0pky">' . $dataAnaliseGranulometricaSedimentacao['RetidosG8'] . '</td>
                                            <td class="tg-primary-table-0pky">' . $dataAnaliseGranulometricaSedimentacao['RetidosF1'] . '</td>
                                            <td class="tg-primary-table-0pky">' . $dataAnaliseGranulometricaSedimentacao['RetidosF2'] . '</td>
                                            <td class="tg-primary-table-0pky">' . $dataAnaliseGranulometricaSedimentacao['RetidosF3'] . '</td>
                                            <td class="tg-primary-table-0pky">' . $dataAnaliseGranulometricaSedimentacao['RetidosF4'] . '</td>
                                            <td class="tg-primary-table-0pky">' . $dataAnaliseGranulometricaSedimentacao['RetidosF5'] . '</td>
                                        </tr>
                                        <tr>
                                            <td class="tg-primary-table-0pky">% Acumulada</td>
                                            <td class="tg-primary-table-0pky">' .  number_format($dataAnaliseGranulometricaSedimentacao['AcumuladoGrosso1'], 2, ',', '') . '</td>
                                            <td class="tg-primary-table-0pky">' . number_format($dataAnaliseGranulometricaSedimentacao['AcumuladoGrosso2'], 2, ',', '') . '</td>
                                            <td class="tg-primary-table-0pky">' . number_format($dataAnaliseGranulometricaSedimentacao['AcumuladoGrosso3'], 2, ',', '') . '</td>
                                            <td class="tg-primary-table-0pky">' . number_format($dataAnaliseGranulometricaSedimentacao['AcumuladoGrosso4'], 2, ',', '') . '</td>
                                            <td class="tg-primary-table-0pky">' . number_format($dataAnaliseGranulometricaSedimentacao['AcumuladoGrosso5'], 2, ',', '') . '</td>
                                            <td class="tg-primary-table-0pky">' . number_format($dataAnaliseGranulometricaSedimentacao['AcumuladoGrosso6'], 2, ',', '') . '</td>
                                            <td class="tg-primary-table-0pky">' . number_format($dataAnaliseGranulometricaSedimentacao['AcumuladoGrosso7'], 2, ',', '') . '</td>
                                            <td class="tg-primary-table-0pky">' . number_format($dataAnaliseGranulometricaSedimentacao['AcumuladoGrosso8'], 2, ',', '') . '</td>
                                        </tr>
                                        <tr>
                                            <td class="tg-primary-table-0pky">% Passada</td>
                                            <td class="tg-primary-table-0pky" style="background-color:silver; font-weight: bold">' . number_format($dataAnaliseGranulometricaSedimentacao['PassadosGrosso1'], 1, ',', '') . '</td>
                                            <td class="tg-primary-table-0pky" style="background-color:silver; font-weight: bold">' . number_format($dataAnaliseGranulometricaSedimentacao['PassadosGrosso2'], 1, ',', '') . '</td>
                                            <td class="tg-primary-table-0pky" style="background-color:silver; font-weight: bold">' . number_format($dataAnaliseGranulometricaSedimentacao['PassadosGrosso3'], 1, ',', '') . '</td>
                                            <td class="tg-primary-table-0pky" style="background-color:silver; font-weight: bold">' . number_format($dataAnaliseGranulometricaSedimentacao['PassadosGrosso4'], 1, ',', '') . '</td>
                                            <td class="tg-primary-table-0pky" style="background-color:silver; font-weight: bold">' . number_format($dataAnaliseGranulometricaSedimentacao['PassadosGrosso5'], 1, ',', '') . '</td>
                                            <td class="tg-primary-table-0pky" style="background-color:silver; font-weight: bold">' . number_format($dataAnaliseGranulometricaSedimentacao['PassadosGrosso6'], 1, ',', '') . '</td>
                                            <td class="tg-primary-table-0pky" style="background-color:silver; font-weight: bold">' . number_format($dataAnaliseGranulometricaSedimentacao['PassadosGrosso7'], 1, ',', '') . '</td>
                                            <td class="tg-primary-table-0pky" style="background-color:silver; font-weight: bold">' . number_format($dataAnaliseGranulometricaSedimentacao['PassadosGrosso8'], 1, ',', '') . '</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <br />
                            <table class="tg-primary-table" style="width: 100%;  margin-top: 5px;">
                                   
                           <tr style="margin-top: 5px, height: 4px">
                                      <td class="tg-primary-table-0pky" style="width: 150px">Fator de Expansão(k)</td>
                                      <td class="tg-primary-table-0pky" style="width: 67px">' . "2,01" . '</td>
                                      <td class="tg-primary-table-0pky" style="width: 62px">' . "2,01" . '</td>
                                      <td class="tg-primary-table-0pky" style="width: 77px">' . "2,01" . '</td>
                                      <td class="tg-primary-table-0pky" style="width: 62px">' . "2,01" . '</td>
                                      <td class="tg-primary-table-0pky" style="width: 77px">' . "2,01" . '</td>
                                      <td class="tg-primary-table-0pky" style="width: 62px">' . "2,01" . '</td>
                                      <td class="tg-primary-table-0pky" >' . "2,01" . '</td>
                                      <td class="tg-primary-table-0pky" >' . "2,02" . '</td>
                                  </tr>
                                  <tr style="margin-top: 5px, height: 5px">
                                      <td class="tg-primary-table-0pky" style="width: 150px">Incerteza Expandida(%)</td>
                                      <td class="tg-primary-table-0pky" >' . "1,18" . '</td>
                                      <td class="tg-primary-table-0pky" >' . "1,26" . '</td>
                                      <td class="tg-primary-table-0pky" >' . "1,18" . '</td>
                                      <td class="tg-primary-table-0pky" >' . "1,17" . '</td>
                                      <td class="tg-primary-table-0pky" >' . "1,17" . '</td>
                                      <td class="tg-primary-table-0pky" >' . "1,17" . '</td>
                                      <td class="tg-primary-table-0pky" >' . "1,17" . '</td>
                                      <td class="tg-primary-table-0pky" >' . "1,18" . '</td>
                                  </tr>
                          </table>
                            <br />

                            <div class="tg-primary-table-wrap" style="width: 100%; margin-top: 30px;">
                                
                                    <style type="text/css">
                                        .tg-tabela-totalmente-a-direita  {border-collapse:collapse;border-spacing:0;}
                                        .tg-tabela-totalmente-a-direita td{border-color:black;border-style:solid;border-width:1px;font-size:10px;
                                        overflow:hidden;padding:3px 3px;word-break:normal;}
                                        .tg-tabela-totalmente-a-direita th{border-color:black;border-style:solid;border-width:1px;font-size:10px;
                                        font-weight:normal;overflow:hidden;padding:3px 3px;word-break:normal;}
                                        .tg-tabela-totalmente-a-direita .tg-tabela-totalmente-a-direita-baqh{text-align:center;vertical-align:top}
                                        .tg-tabela-totalmente-a-direita .tg-tabela-totalmente-a-direita-0lax{text-align:left;vertical-align:top}
                                    </style>

                                    <div style="display: inline-block; margin-bottom: 6px;margin-left: 524px">
                                        <table class="tg-tabela-totalmente-a-direita">
                                            <tr>
                                                <td class="tg-tabela-totalmente-a-direita-baqh" style="width: 155px;margin-left: 200px">Massa seca dos elementos finos:</td>
                                                <td class="tg-tabela-totalmente-a-direita-0lax" style="width: 65px; text-align: center">' . $dataAnaliseGranulometricaSedimentacao['MassaTotalFina'] . ' g</td>
                                            </tr>
                                        </table>
                                    </div>
                                <table class="tg-primary-table" style="width: 100%">
                                    <tbody>
                                        <tr>
                                            <td class="tg-primary-table-0pky" style="width: 150px">Designação da peneira</td>
                                            <td class="tg-primary-table-1pky"  style="width: 67px;">' . $modifiedSeriePeneiras9 . '</td>
                                            <td class="tg-primary-table-0pky" style="width: 62px">' . $modifiedSeriePeneiras10  . '</td>
                                            <td class="tg-primary-table-0pky" style="width: 77px">' . $modifiedSeriePeneiras11 . '</td>
                                            <td class="tg-primary-table-0pky" style="width: 62px">' . $modifiedSeriePeneiras12 . '</td>
                                            <td class="tg-primary-table-0pky" style="width: 77px">' . $modifiedSeriePeneiras13 . '</td>
                                            <td class="tg-primary-table-0pky" style="width: 62px">' . $modifiedSeriePeneiras14 . '</td>
                                            <td class="tg-primary-table-0pky">' . $modifiedSeriePeneiras15 . '</td>
                                            <td class="tg-primary-table-0pky">' . $modifiedSeriePeneiras16 . '</td>
                                        </tr>
                                        <tr>
                                            <td class="tg-primary-table-0pky">Massa retida acumulada (g)</td>
                                            <td class="tg-primary-table-0pky">' . $dataAnaliseGranulometricaSedimentacao['RetidosF6'] . '</td>
                                            <td class="tg-primary-table-0pky">' . $dataAnaliseGranulometricaSedimentacao['RetidosF7'] . '</td>
                                            <td class="tg-primary-table-0pky">' . $dataAnaliseGranulometricaSedimentacao['RetidosG1'] . '</td>
                                            <td class="tg-primary-table-0pky">' . $dataAnaliseGranulometricaSedimentacao['RetidosG2'] . '</td>
                                            <td class="tg-primary-table-0pky">' . $dataAnaliseGranulometricaSedimentacao['RetidosG3'] . '</td>
                                            <td class="tg-primary-table-0pky">' . $dataAnaliseGranulometricaSedimentacao['RetidosG4'] . '</td>
                                            <td class="tg-primary-table-0pky">' . $dataAnaliseGranulometricaSedimentacao['RetidosG5'] . '</td>
                                            <td class="tg-primary-table-0pky">' . $dataAnaliseGranulometricaSedimentacao['RetidosG6'] . '</td>
                                        </tr>
                                        <tr>
                                            <td class="tg-primary-table-0pky">% Acumulada</td>
                                            <td class="tg-primary-table-0pky">' . number_format($dataAnaliseGranulometricaSedimentacao['AcumuladoFino1'], 2, ',', '') . '</td>
                                            <td class="tg-primary-table-0pky">' . number_format($dataAnaliseGranulometricaSedimentacao['AcumuladoFino2'], 2, ',', '') . '</td>
                                            <td class="tg-primary-table-0pky">' . number_format($dataAnaliseGranulometricaSedimentacao['AcumuladoFino3'], 2, ',', '') . '</td>
                                            <td class="tg-primary-table-0pky">' . number_format($dataAnaliseGranulometricaSedimentacao['AcumuladoFino4'], 2, ',', '') . '</td>
                                            <td class="tg-primary-table-0pky">' . number_format($dataAnaliseGranulometricaSedimentacao['AcumuladoFino5'], 2, ',', '') . '</td>
                                            <td class="tg-primary-table-0pky">' . number_format($dataAnaliseGranulometricaSedimentacao['AcumuladoFino6'], 2, ',', '') . '</td>
                                            <td class="tg-primary-table-0pky">' . number_format($dataAnaliseGranulometricaSedimentacao['AcumuladoFino7'], 2, ',', '') . '</td>
                                            <td class="tg-primary-table-0pky">' . number_format($dataAnaliseGranulometricaSedimentacao['AcumuladoFino8'], 2, ',', '') . '</td>
                                        </tr>
                                        <tr>
                                            <td class="tg-primary-table-0pky">% Corrigida a massa total</td>
                                            <td class="tg-primary-table-0pky"> --- </td>
                                            <td class="tg-primary-table-0pky"> --- </td>
                                            <td class="tg-primary-table-0pky">' . number_format(100 - (100 - $dataAnaliseGranulometricaSedimentacao['AcumuladoFino3']) * (100 - $dataAnaliseGranulometricaSedimentacao['AcumuladoFino2']) / 100, 2, ',', '') . '</td>
                                            <td class="tg-primary-table-0pky">' . number_format(100 - (100 - $dataAnaliseGranulometricaSedimentacao['AcumuladoFino4']) * (100 - $dataAnaliseGranulometricaSedimentacao['AcumuladoFino2']) / 100, 2, ',', '') . '</td>
                                            <td class="tg-primary-table-0pky">' . number_format(100 - (100 - $dataAnaliseGranulometricaSedimentacao['AcumuladoFino5']) * (100 - $dataAnaliseGranulometricaSedimentacao['AcumuladoFino2']) / 100, 2, ',', '') . '</td>
                                            <td class="tg-primary-table-0pky">' . number_format(100 - (100 - $dataAnaliseGranulometricaSedimentacao['AcumuladoFino6']) * (100 - $dataAnaliseGranulometricaSedimentacao['AcumuladoFino2']) / 100, 2, ',', '') . '</td>
                                            <td class="tg-primary-table-0pky">' . number_format(100 - (100 - $dataAnaliseGranulometricaSedimentacao['AcumuladoFino7']) * (100 - $dataAnaliseGranulometricaSedimentacao['AcumuladoFino2']) / 100, 2, ',', '') . '</td>
                                            <td class="tg-primary-table-0pky">' . number_format(100 - (100 - $dataAnaliseGranulometricaSedimentacao['AcumuladoFino8']) * (100 - $dataAnaliseGranulometricaSedimentacao['AcumuladoFino2']) / 100, 2, ',', '') . '</td>
                                        </tr>
                                        <tr>
                                            <td class="tg-primary-table-0pky">% Passada referida ao total</td>
                                            <td class="tg-primary-table-0pky" style="background-color:silver; font-weight: bold">' . number_format($dataAnaliseGranulometricaSedimentacao['PassadosFino1'], 1, ',', '') . '</td>
                                            <td class="tg-primary-table-0pky" style="background-color:silver; font-weight: bold">' . number_format($dataAnaliseGranulometricaSedimentacao['PassadosFino2'], 1, ',', '') . '</td>
                                            <td class="tg-primary-table-0pky" style="background-color:silver; font-weight: bold">' . number_format($dataAnaliseGranulometricaSedimentacao['PassadosFino3'], 1, ',', '') . '</td>
                                            <td class="tg-primary-table-0pky" style="background-color:silver; font-weight: bold">' . number_format($dataAnaliseGranulometricaSedimentacao['PassadosFino4'], 1, ',', '') . '</td>
                                            <td class="tg-primary-table-0pky" style="background-color:silver; font-weight: bold">' . number_format($dataAnaliseGranulometricaSedimentacao['PassadosFino5'], 1, ',', '') . '</td>
                                            <td class="tg-primary-table-0pky" style="background-color:silver; font-weight: bold">' . number_format($dataAnaliseGranulometricaSedimentacao['PassadosFino6'], 1, ',', '') . '</td>
                                            <td class="tg-primary-table-0pky" style="background-color:silver; font-weight: bold">' . number_format($dataAnaliseGranulometricaSedimentacao['PassadosFino7'], 1, ',', '') . '</td>
                                            <td class="tg-primary-table-0pky" style="background-color:silver; font-weight: bold">' . number_format($dataAnaliseGranulometricaSedimentacao['PassadosFino8'], 1, ',', '') . '</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <br />
                                    <table class="tg-primary-table" style="width: 100%;  margin-top: 0px;">
                                   
                           <tr style="margin-top: 5px, height: 4px">
                                      <td class="tg-primary-table-0pky" style="width: 150px">Fator de Expansão(k)</td>
                                      <td class="tg-primary-table-0pky" style="width: 67px" >' . "2,01" . '</td>
                                      <td class="tg-primary-table-0pky" style="width: 62px" >' . "2,02" . '</td>
                                      <td class="tg-primary-table-0pky" style="width: 77px">' . "2,01" . '</td>
                                      <td class="tg-primary-table-0pky" style="width: 62px">' . "2,01" . '</td>
                                      <td class="tg-primary-table-0pky" style="width: 77px">' . "2,01" . '</td>
                                      <td class="tg-primary-table-0pky" style="width: 62px">' . "2,01" . '</td>
                                      <td class="tg-primary-table-0pky" >' . "2,01" . '</td>
                                      <td class="tg-primary-table-0pky" >' . "2,01" . '</td>
                                  </tr>
                                  <tr style="margin-top: 5px, height: 5px">
                                      <td class="tg-primary-table-0pky" style="width: 150px">Incerteza Expandida(%)</td>
                                      <td class="tg-primary-table-0pky" >' . "1,18" . '</td>
                                      <td class="tg-primary-table-0pky" >' . "1,26" . '</td>
                                      <td class="tg-primary-table-0pky" >' . "1,18" . '</td>
                                      <td class="tg-primary-table-0pky" >' . "1,17" . '</td>
                                      <td class="tg-primary-table-0pky" >' . "1,17" . '</td>
                                      <td class="tg-primary-table-0pky" >' . "1,17" . '</td>
                                      <td class="tg-primary-table-0pky" >' . "1,17" . '</td>
                                      <td class="tg-primary-table-0pky" >' . "1,18" . '</td>
                                  </tr>
                          </table>
                            <br />
                            <br />

                            <div class="tg-secund-table-wrap" style="display: inline-block;">
                                <table class="tg-secund-table" style="width: 335px; margin-bottom: -40px;margin-top: 20px; border: 1px solid #000">
                                   <colgroup>
                                        <col style="width: 30px;"/>
                                        <col style="width: 60px;"/>
                                        <col style="width: 60px;" />
                                        <col style="width: 60px;" />
                                        <col style="width: 60px;" />
                                        <col style="width: 60px;" />
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th class="tg-secund-table-91w8" >
                                                Tempo<br />
                                                t (min)
                                            </th>
                                            <th class="tg-secund-table-91w8" style="width: 60px !important" >
                                                Temperatura<br />
                                                T (°)
                                            </th>
                                            <th class="tg-secund-table-91w8" style="width: 70px !important">
                                                Leitura no <br />
                                                densímetro<br />L
                                            </th>
                                            <th class="tg-secund-table-91w8">
                                                Leitura<br />corrigida<br />
                                                (L - Ld)
                                            </th>
                                            <th class="tg-secund-table-91w8">
                                                Altura ao<br />
                                                bulbo a
                                            </th>
                                            <th class="tg-secund-table-91w8" style="padding: 0 0 0 0">
                                                P<w style="font-size: 0.7em; vertical-align: sub;">md</w>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="tg-secund-table-91w8">' . '0,5' . '</td>
                                            <td class="tg-secund-table-91w8" style="width: 60px !important">' . $dataAnaliseGranulometricaSedimentacao['temperatura1'] . '</td>
                                            <td class="tg-secund-table-91w8" style="width: 70px !important">' . $dataAnaliseGranulometricaSedimentacao['desimetro1'] . '</td>
                                            <td class="tg-secund-table-91w8">' . number_format($dataAnaliseGranulometricaSedimentacao['Corrigida1'], 4, ',', '')  . '</td>
                                            <td class="tg-secund-table-91w8">' . number_format($dataAnaliseGranulometricaSedimentacao['bulbo1'], 1, ',', '') . '</td>
                                            <td class="tg-secund-table-91w8" style="padding: 0 0 0 0">' . number_format($dataAnaliseGranulometricaSedimentacao['Correcao1'], 4, ',', '') . '</td>
 
                                        </tr>
                                        <tr>
                                            <td class="tg-secund-table-91w8">' . '1' . '</td>
                                            <td class="tg-secund-table-91w8">' . $dataAnaliseGranulometricaSedimentacao['temperatura2'] . '</td>
                                            <td class="tg-secund-table-91w8">' . $dataAnaliseGranulometricaSedimentacao['desimetro2'] . '</td>
                                            <td class="tg-secund-table-91w8">' . number_format($dataAnaliseGranulometricaSedimentacao['Corrigida2'], 4, ',', '')  . '</td>
                                            <td class="tg-secund-table-91w8">' . number_format($dataAnaliseGranulometricaSedimentacao['bulbo2'], 1, ',', '') . '</td>
                                            <td class="tg-secund-table-91w8">' . number_format($dataAnaliseGranulometricaSedimentacao['Correcao2'], 4, ',', '') . '</td>

                                        </tr>
                                        <tr>
                                            <td class="tg-secund-table-91w8">' . '2' . '</td>
                                            <td class="tg-secund-table-91w8">' . $dataAnaliseGranulometricaSedimentacao['temperatura3'] . '</td>
                                            <td class="tg-secund-table-91w8">' . $dataAnaliseGranulometricaSedimentacao['desimetro3'] . '</td>
                                            <td class="tg-secund-table-91w8">' . number_format($dataAnaliseGranulometricaSedimentacao['Corrigida3'], 4, ',', '')  . '</td>
                                            <td class="tg-secund-table-91w8">' . number_format($dataAnaliseGranulometricaSedimentacao['bulbo3'], 1, ',', '') . '</td>
                                            <td class="tg-secund-table-91w8">' . number_format($dataAnaliseGranulometricaSedimentacao['Correcao3'], 4, ',', '') . '</td>

                                        </tr>
                                        <tr>
                                            <td class="tg-secund-table-91w8">' . '4' . '</td>
                                            <td class="tg-secund-table-91w8">' . $dataAnaliseGranulometricaSedimentacao['temperatura4'] . '</td>
                                            <td class="tg-secund-table-91w8">' . $dataAnaliseGranulometricaSedimentacao['desimetro4'] . '</td>
                                            <td class="tg-secund-table-91w8">' . number_format($dataAnaliseGranulometricaSedimentacao['Corrigida4'], 4, ',', '')  . '</td>
                                            <td class="tg-secund-table-91w8">' . number_format($dataAnaliseGranulometricaSedimentacao['bulbo4'], 1, ',', '') . '</td>
                                            <td class="tg-secund-table-91w8">' . number_format($dataAnaliseGranulometricaSedimentacao['Correcao4'], 4, ',', '') . '</td>

                                        </tr>
                                        <tr>
                                            <td class="tg-secund-table-91w8">' . '8' . '</td>
                                            <td class="tg-secund-table-91w8">' . $dataAnaliseGranulometricaSedimentacao['temperatura5'] . '</td>
                                            <td class="tg-secund-table-91w8">' . $dataAnaliseGranulometricaSedimentacao['desimetro5'] . '</td>
                                            <td class="tg-secund-table-91w8">' . number_format($dataAnaliseGranulometricaSedimentacao['Corrigida5'], 4, ',', '')  . '</td>
                                            <td class="tg-secund-table-91w8">' . number_format($dataAnaliseGranulometricaSedimentacao['bulbo5'], 1, ',', '') . '</td>
                                            <td class="tg-secund-table-91w8">' . number_format($dataAnaliseGranulometricaSedimentacao['Correcao5'], 4, ',', '') . '</td>

                                        </tr>
                                        <tr>
                                            <td class="tg-secund-table-91w8">' . '15' . '</td>
                                            <td class="tg-secund-table-91w8">' . $dataAnaliseGranulometricaSedimentacao['temperatura6'] . '</td>
                                            <td class="tg-secund-table-91w8">' . $dataAnaliseGranulometricaSedimentacao['desimetro6'] . '</td>
                                            <td class="tg-secund-table-91w8">' . number_format($dataAnaliseGranulometricaSedimentacao['Corrigida6'], 4, ',', '')  . '</td>
                                            <td class="tg-secund-table-91w8">' . number_format($dataAnaliseGranulometricaSedimentacao['bulbo6'], 1, ',', '') . '</td>
                                            <td class="tg-secund-table-91w8">' . number_format($dataAnaliseGranulometricaSedimentacao['Correcao6'], 4, ',', '') . '</td>

                                        </tr>
                                        <tr>
                                            <td class="tg-secund-table-91w8">' . '30' . '</td>
                                            <td class="tg-secund-table-91w8">' . $dataAnaliseGranulometricaSedimentacao['temperatura7'] . '</td>
                                            <td class="tg-secund-table-91w8">' . $dataAnaliseGranulometricaSedimentacao['desimetro7'] . '</td>
                                            <td class="tg-secund-table-91w8">' . number_format($dataAnaliseGranulometricaSedimentacao['Corrigida7'], 4, ',', '')  . '</td>
                                            <td class="tg-secund-table-91w8">' . number_format($dataAnaliseGranulometricaSedimentacao['bulbo7'], 1, ',', '') . '</td>
                                            <td class="tg-secund-table-91w8">' . number_format($dataAnaliseGranulometricaSedimentacao['Correcao7'], 4, ',', '') . '</td>
            
                                        </tr>
                                        <tr>
                                            <td class="tg-secund-table-91w8">' . '60' . '</td>
                                            <td class="tg-secund-table-91w8">' . $dataAnaliseGranulometricaSedimentacao['temperatura8'] . '</td>
                                            <td class="tg-secund-table-91w8">' . $dataAnaliseGranulometricaSedimentacao['desimetro8'] . '</td>
                                            <td class="tg-secund-table-91w8">' . number_format($dataAnaliseGranulometricaSedimentacao['Corrigida8'], 4, ',', '')  . '</td>
                                            <td class="tg-secund-table-91w8">' . number_format($dataAnaliseGranulometricaSedimentacao['bulbo8'], 1, ',', '') . '</td>
                                            <td class="tg-secund-table-91w8">' . number_format($dataAnaliseGranulometricaSedimentacao['Correcao8'], 4, ',', '') . '</td>

                                        </tr>
                                        <tr>
                                            <td class="tg-secund-table-91w8">' . '120' . '</td>
                                            <td class="tg-secund-table-91w8">' . $dataAnaliseGranulometricaSedimentacao['temperatura9'] . '</td>
                                            <td class="tg-secund-table-91w8">' . $dataAnaliseGranulometricaSedimentacao['desimetro9'] . '</td>
                                            <td class="tg-secund-table-91w8">' . number_format($dataAnaliseGranulometricaSedimentacao['Corrigida9'], 4, ',', '')  . '</td>
                                            <td class="tg-secund-table-91w8">' . number_format($dataAnaliseGranulometricaSedimentacao['bulbo9'], 1, ',', '') . '</td>
                                            <td class="tg-secund-table-91w8">' . number_format($dataAnaliseGranulometricaSedimentacao['Correcao9'], 4, ',', '') . '</td>

                                        </tr>
                                        <tr>
                                            <td class="tg-secund-table-91w8">' . '240' . '</td>
                                            <td class="tg-secund-table-91w8">' . $dataAnaliseGranulometricaSedimentacao['temperatura10'] . '</td>
                                            <td class="tg-secund-table-91w8">' . $dataAnaliseGranulometricaSedimentacao['desimetro10'] . '</td>
                                            <td class="tg-secund-table-91w8">' . number_format($dataAnaliseGranulometricaSedimentacao['Corrigida10'], 4, ',', '')  . '</td>
                                            <td class="tg-secund-table-91w8">' . number_format($dataAnaliseGranulometricaSedimentacao['bulbo10'], 1, ',', '') . '</td>
                                            <td class="tg-secund-table-91w8">' . number_format($dataAnaliseGranulometricaSedimentacao['Correcao10'], 4, ',', '') . '</td>

                                        </tr>
                                        <tr>
                                            <td class="tg-secund-table-91w8">' . '480' . '</td>
                                            <td class="tg-secund-table-91w8">' . $dataAnaliseGranulometricaSedimentacao['temperatura11'] . '</td>
                                            <td class="tg-secund-table-91w8">' . $dataAnaliseGranulometricaSedimentacao['desimetro11'] . '</td>
                                            <td class="tg-secund-table-91w8">' . number_format($dataAnaliseGranulometricaSedimentacao['Corrigida11'], 4, ',', '')  . '</td>
                                            <td class="tg-secund-table-91w8">' . number_format($dataAnaliseGranulometricaSedimentacao['bulbo11'], 1, ',', '') . '</td>
                                            <td class="tg-secund-table-91w8">' . number_format($dataAnaliseGranulometricaSedimentacao['Correcao11'], 4, ',', '') . '</td>

                                        </tr>
                                        <tr>
                                            <td class="tg-secund-table-91w8">' . '1440' . '</td>
                                            <td class="tg-secund-table-91w8">' . $dataAnaliseGranulometricaSedimentacao['temperatura12'] . '</td>
                                            <td class="tg-secund-table-91w8">' . $dataAnaliseGranulometricaSedimentacao['desimetro12'] . '</td>
                                            <td class="tg-secund-table-91w8">' . number_format($dataAnaliseGranulometricaSedimentacao['Corrigida12'], 4, ',', '')  . '</td>
                                            <td class="tg-secund-table-91w8">' . number_format($dataAnaliseGranulometricaSedimentacao['bulbo12'], 1, ',', '') . '</td>
                                            <td class="tg-secund-table-91w8">' . number_format($dataAnaliseGranulometricaSedimentacao['Correcao12'], 4, ',', '') . '</td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div class="tg-secund-table-wrap" style="display: inline-block; margin-left: 50px; margin-bottom: -40px;margin-top: 10px">
                                <table class="tg-secund-table" style="undefined;table-layout: fixed; width: 210px">
                                    <colgroup>
                                        <col style="width: 111px;" />
                                        <col style="width: 38px;" />
                                        <col style="width: 61px;" />
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            
                                            <th class="tg-secund-table-91w8">
                                                Diâmetro das partículas d (mm)
                                            </th>
                                            <th class="tg-secund-table-91w8">
                                                Fator de Expansão<br />
                                                (k)
                                            </th>
                                            <th class="tg-secund-table-91w8">
                                                Incerteza Expandida<br />
                                                (mm)
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                          
                                            <td class="tg-secund-table-91w8" style="background-color:silver; font-weight: bold">' . number_format($dataAnaliseGranulometricaSedimentacao['Dimensao1'], 4, ',', '') . '</td>
                                            <td class="tg-secund-table-91w8" >' . "2,00" . '</td>
                                            <td class="tg-secund-table-91w8" >' . "0,008" . '</td>
                                        </tr>
                                        <tr>
                                         
                                            <td class="tg-secund-table-91w8" style="background-color:silver; font-weight: bold">' . number_format($dataAnaliseGranulometricaSedimentacao['Dimensao2'], 4, ',', '') . '</td>
                                            <td class="tg-secund-table-91w8">' . "2,01" . '</td>
                                            <td class="tg-secund-table-91w8" >' . "0,003" . '</td>
                                        </tr>
                                        <tr>
                                          
                                            <td class="tg-secund-table-91w8" style="background-color:silver; font-weight: bold">' . number_format($dataAnaliseGranulometricaSedimentacao['Dimensao3'], 4, ',', '') . '</td>
                                            <td class="tg-secund-table-91w8" >' . "2,02" . '</td>
                                            <td class="tg-secund-table-91w8" >' . "0,001" . '</td>
                                        </tr>
                                        <tr>
                                           
                                            <td class="tg-secund-table-91w8" style="background-color:silver; font-weight: bold">' . number_format($dataAnaliseGranulometricaSedimentacao['Dimensao4'], 4, ',', '') . '</td>
                                            <td class="tg-secund-table-91w8" >' . "2,21" . '</td>
                                            <td class="tg-secund-table-91w8" >' . "0,001" . '</td>
                                        </tr>
                                        <tr>
                                            
                                            <td class="tg-secund-table-91w8" style="background-color:silver; font-weight: bold">' . number_format($dataAnaliseGranulometricaSedimentacao['Dimensao5'], 4, ',', '') . '</td>
                                            <td class="tg-secund-table-91w8" >' . "2,52" . '</td>
                                            <td class="tg-secund-table-91w8" >' . "0,001" . '</td>
                                        </tr>
                                        <tr>
                                            
                                            <td class="tg-secund-table-91w8" style="background-color:silver; font-weight: bold">' . number_format($dataAnaliseGranulometricaSedimentacao['Dimensao6'], 4, ',', '') . '</td>
                                            <td class="tg-secund-table-91w8" >' . "2,65" . '</td>
                                            <td class="tg-secund-table-91w8" >' . "0,001" . '</td>
                                        </tr>
                                        <tr>
                                            
                                            <td class="tg-secund-table-91w8" style="background-color:silver; font-weight: bold">' . number_format($dataAnaliseGranulometricaSedimentacao['Dimensao7'], 4, ',', '') . '</td>
                                            <td class="tg-secund-table-91w8" >' . "2,65" . '</td>
                                            <td class="tg-secund-table-91w8" >' . "0,001" . '</td>
                                        </tr>
                                        <tr>
                                          
                                            <td class="tg-secund-table-91w8" style="background-color:silver; font-weight: bold">' . number_format($dataAnaliseGranulometricaSedimentacao['Dimensao8'], 4, ',', '') . '</td>
                                            <td class="tg-secund-table-91w8" >' . "2,65" . '</td>
                                            <td class="tg-secund-table-91w8" >' . "0,001" . '</td>
                                        </tr>
                                        <tr>
                                   
                                            <td class="tg-secund-table-91w8" style="background-color:silver; font-weight: bold">' . number_format($dataAnaliseGranulometricaSedimentacao['Dimensao9'], 4, ',', '') . '</td>
                                            <td class="tg-secund-table-91w8" >' . "2,65" . '</td>
                                            <td class="tg-secund-table-91w8" >' . "0,001" . '</td>
                                        </tr>
                                        <tr>
                                  
                                            <td class="tg-secund-table-91w8" style="background-color:silver; font-weight: bold">' . number_format($dataAnaliseGranulometricaSedimentacao['Dimensao10'], 4, ',', '') . '</td>
                                            <td class="tg-secund-table-91w8" >' . "2,65" . '</td>
                                            <td class="tg-secund-table-91w8" >' . "0,001" . '</td>
                                        </tr>
                                        <tr>
                                       
                                            <td class="tg-secund-table-91w8" style="background-color:silver; font-weight: bold">' . number_format($dataAnaliseGranulometricaSedimentacao['Dimensao11'], 4, ',', '') . '</td>
                                            <td class="tg-secund-table-91w8" >' . "2,65" . '</td>
                                            <td class="tg-secund-table-91w8" >' . "0,001" . '</td>
                                        </tr>
                                        <tr>
                                         
                                            <td class="tg-secund-table-91w8" style="background-color:silver; font-weight: bold">' . number_format($dataAnaliseGranulometricaSedimentacao['Dimensao12'], 4, ',', '') . '</td>
                                            <td class="tg-secund-table-91w8" >' . "2,65" . '</td>
                                            <td class="tg-secund-table-91w8" >' . "0,001" . '</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="tg-secund-table-wrap" style="display: inline-block; margin-bottom: -40px; margin-left: 214px; margin-top: 60px">
                                <table class="tg-secund-table" style="undefined;table-layout: fixed; width: 200px">
                                    <colgroup>
                                        <col style="width: 84px;" />
                                        <col style="width: 43px;" />
                                        <col style="width: 66px;" />
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            
                                            <th class="tg-secund-table-91w8">
                                                % de particulas<br />
                                                sedimentadas
                                            </th>
                                            <th class="tg-secund-table-91w8">
                                                Fator de Expansão<br />
                                                (k)
                                            </th>
                                            <th class="tg-secund-table-91w8">
                                                Incerteza Expandida<br />
                                                (%)
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                          
                                            <td class="tg-secund-table-91w8" style="background-color:silver; font-weight: bold">' . number_format($dataAnaliseGranulometricaSedimentacao['porcento1'], 1, ',', '') . '</td>
                                            <td class="tg-secund-table-91w8" >' . "2,01" . '</td>
                                            <td class="tg-secund-table-91w8" >' . "2,03" . '</td>
                                        </tr>
                                        <tr>
                                         
                                            <td class="tg-secund-table-91w8" style="background-color:silver; font-weight: bold">' . number_format($dataAnaliseGranulometricaSedimentacao['porcento2'], 1, ',', '') . '</td>
                                            <td class="tg-secund-table-91w8" >' . "2,01" . '</td>
                                            <td class="tg-secund-table-91w8" >' . "1,92" . '</td>
                                        </tr>
                                        <tr>
                                          
                                            <td class="tg-secund-table-91w8" style="background-color:silver; font-weight: bold">' . number_format($dataAnaliseGranulometricaSedimentacao['porcento3'], 1, ',', '') . '</td>
                                            <td class="tg-secund-table-91w8" >' . "2,00" . '</td>
                                            <td class="tg-secund-table-91w8" >' . "1,84" . '</td>
                                        </tr>
                                        <tr>
                                           
                                            <td class="tg-secund-table-91w8" style="background-color:silver; font-weight: bold">' . number_format($dataAnaliseGranulometricaSedimentacao['porcento4'], 1, ',', '') . '</td>
                                            <td class="tg-secund-table-91w8" >' . "2,00" . '</td>
                                            <td class="tg-secund-table-91w8" >' . "1,75" . '</td>
                                        </tr>
                                        <tr>
                                            
                                            <td class="tg-secund-table-91w8" style="background-color:silver; font-weight: bold">' . number_format($dataAnaliseGranulometricaSedimentacao['porcento5'], 1, ',', '') . '</td>
                                            <td class="tg-secund-table-91w8" >' . "2,00" . '</td>
                                            <td class="tg-secund-table-91w8" >' . "1,70" . '</td>
                                        </tr>
                                        <tr>
                                            
                                            <td class="tg-secund-table-91w8" style="background-color:silver; font-weight: bold">' . number_format($dataAnaliseGranulometricaSedimentacao['porcento6'], 1, ',', '') . '</td>
                                            <td class="tg-secund-table-91w8" >' . "2,00" . '</td>
                                            <td class="tg-secund-table-91w8" >' . "1,68" . '</td>
                                        </tr>
                                        <tr>
                                            
                                            <td class="tg-secund-table-91w8" style="background-color:silver; font-weight: bold">' . number_format($dataAnaliseGranulometricaSedimentacao['porcento7'], 1, ',', '') . '</td>
                                            <td class="tg-secund-table-91w8" >' . "2,00" . '</td>
                                            <td class="tg-secund-table-91w8" >' . "1,66" . '</td>
                                        </tr>
                                        <tr>
                                          
                                            <td class="tg-secund-table-91w8" style="background-color:silver; font-weight: bold">' . number_format($dataAnaliseGranulometricaSedimentacao['porcento8'], 1, ',', '') . '</td>
                                            <td class="tg-secund-table-91w8" >' . "2,00" . '</td>
                                            <td class="tg-secund-table-91w8" >' . "1,66" . '</td>
                                        </tr>
                                        <tr>
                                   
                                            <td class="tg-secund-table-91w8" style="background-color:silver; font-weight: bold">' . number_format($dataAnaliseGranulometricaSedimentacao['porcento9'], 1, ',', '') . '</td>
                                            <td class="tg-secund-table-91w8" >' . "2,00" . '</td>
                                            <td class="tg-secund-table-91w8" >' . "1,65" . '</td>
                                        </tr>
                                        <tr>
                                  
                                            <td class="tg-secund-table-91w8" style="background-color:silver; font-weight: bold">' . number_format($dataAnaliseGranulometricaSedimentacao['porcento10'], 1, ',', '') . '</td>
                                            <td class="tg-secund-table-91w8" >' . "2,00" . '</td>
                                            <td class="tg-secund-table-91w8" >' . "1,65" . '</td>
                                        </tr>
                                        <tr>
                                       
                                            <td class="tg-secund-table-91w8" style="background-color:silver; font-weight: bold">' . number_format($dataAnaliseGranulometricaSedimentacao['porcento11'], 1, ',', '') . '</td>
                                            <td class="tg-secund-table-91w8" >' . "2,00" . '</td>
                                            <td class="tg-secund-table-91w8" >' . "1,65" . '</td>
                                        </tr>
                                        <tr>
                                         
                                            <td class="tg-secund-table-91w8" style="background-color:silver; font-weight: bold">' . number_format($dataAnaliseGranulometricaSedimentacao['porcento12'], 1, ',', '') . '</td>
                                            <td class="tg-secund-table-91w8" >' . "2,00" . '</td>
                                            <td class="tg-secund-table-91w8" >' . "1,65" . '</td>
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
          <td class="tg-0pky" colspan="5">
    <p class="title" style="top: 0 !important">Execução: </p> 
    <p class="title"> '  . $dataAnaliseGranulometricaSedimentacao['Executado'] . '</p>
</td>
<td class="tg-0pky" colspan="5">
    <p class="title" style="top: 0 !important">Verificação: </p> ' .
            (!empty($assinaturaVerificador) && isset($assinaturaVerificador[0]['Assinatura']) && !empty($assinaturaVerificador[0]['Assinatura']) ?
                '<img style="margin: 1px 0px 0px 50px" src="data:image/jpeg;base64,' . base64_encode($assinaturaVerificador[0]['Assinatura']) . '" alt="Imagem" height="10px" width="80px">
        <p class="title"> ' . (isset($assinaturaVerificador[0]['Nome']) ? $assinaturaVerificador[0]['Nome'] : '') . '</p>' :
                '<br /><div style="height: 10px"></div>'
            ) . '
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
             
        </main>
        <footer>
            <div style="text-align: center;">
                <p style="font-size: 10px; font-weight: bold; margin: 0; font-family: Arial, sans-serif; !important">
                    Este relatório de ensaio só pode ser copiado integralmente ou parcialmente com autorização da Geocontrole
                </p>
                <p style="font-size: 10px; font-weight: bold; margin: -1; font-family: Arial, sans-serif; !important">
                    Av.Canadá,Nº 159 - Jardim Canadá Nova Lima - Minas Gerais - Brasil - CEP: 34007-654 Tel.: +55 31 3517-9011
                </p>
                <div style="width: 100%; background-color: green; color: #fff; font-family: Arial, sans-serif; !important">
                    www.geocontrole.com - e-mail: mail.br@geocontrole.com
                </div>
            </div>
        </footer>
    </body>
</html>


';
        return $html;
    }
}
