<?php
require_once 'mainSheet.php';
include_once('configureteConnection.php');
class DetermineMaximumAndMinimumSandModel
{
    private $data;
    public function __construct($data)
    {
        $this->data = $data;
    }

    public function generateModel($codSample, $numberSample, $observation, $dataHeaderAndFooter, $pagina, $totalPaginas, $dataMassaEspecificaMaxEMinDeAreia, $logo, $dataFormatada)
    {
        $conexao = new ConfigureteConnection();
        $conexao->connect();

        $pdo = $conexao->getConnection();

        if ($pdo === null) {
            return null;
        }

        $executador = $dataMassaEspecificaMaxEMinDeAreia['Executado'];
        $aprovador = $dataMassaEspecificaMaxEMinDeAreia['Aprovado'];
        $verificador = $dataMassaEspecificaMaxEMinDeAreia['Verificado'];

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

        $query = "SELECT * FROM Login WHERE Nome = :verificador OR usuario = :verificador";
        $stmt = $pdo->prepare($query);
        $stmt->bindParam(':verificador', $verificador, PDO::PARAM_STR);
        $stmt->execute();
        $assinaturaVerificador = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $html = '<html>
        <head>
            <style type="text/css">
    
                .tg-minima {
                    border-collapse: collapse;
                    border-spacing: 0;
                    margin: 0px auto;
                }
    
                .tg-minima td {
                    border-color: black;
                    border-style: solid;
                    border-width: 1px;
                    font-family: Arial, sans-serif;
                    font-size: 13px;
                    overflow: hidden;
                    padding: 1px 4px;
                    word-break: normal;
                }
    
                .tg-minima th {
                    border-color: black;
                    border-style: solid;
                    border-width: 1px;
                    font-family: Arial, sans-serif;
                    font-size: 13px;
                    font-weight: normal;
                    overflow: hidden;
                    padding: 1px 4px;
                    word-break: normal;
                }
    
                .tg-minima .tg-minima-34fe {
                    background-color: #c0c0c0;
                    border-color: inherit;
                    text-align: center;
                    vertical-align: middle;
                    font-weight: bold;
                }
    
                .tg-minima .tg-minima-c3ow {
                    border-color: inherit;
                    text-align: center;
                    vertical-align: middle;
                }
    
                .tg-minima .tg-minima-0pky {
                    border-color: inherit;
                    text-align: left;
                    vertical-align: middle;
                }
    
                .tg-maxima {
                    border-collapse: collapse;
                    border-spacing: 0;
                    margin: 0px auto;
                }
    
                .tg-maxima td {
                    border-color: black;
                    border-style: solid;
                    border-width: 1px;
                    font-family: Arial, sans-serif;
                    font-size: 13px;
                    overflow: hidden;
                    padding: 4px 5px;
                    word-break: normal;
                }
    
                .tg-maxima th {
                    border-color: black;
                    border-style: solid;
                    border-width: 1px;
                    font-family: Arial, sans-serif;
                    font-size: 13px;
                    font-weight: normal;
                    overflow: hidden;
                    padding: 4px 5px;
                    word-break: normal;
                }
    
                .tg-maxima .tg-maxima-76qt {
                    border-color: inherit;
                    font-size: 13px;
                    text-align: center;
                    vertical-align: middle;
                }
    
                .tg-maxima .tg-maxima-387r {
                    border-color: inherit;
                    font-size: 13px;
                    text-align: left;
                    vertical-align: middle;
                }
            </style>
        </head>
        <body>
        <header>
        
        </header>
        <main style="margin-top: 45px">
                <table class="tg">
                        <tr>
        <td class="tg-0pky" colspan="15" style="border-left: none !important; border-right: none !important; border-top-color: #fff; padding-left: 0px !important; padding-right: 0px !important; height: 675px;">                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <table class="tg-minima" style="width: 100%">
                                    <colgroup>
                                        <col style="width: 151px">
                                        <col style="width: 55px">
                                        <col style="width: 62px">
                                        <col style="width: 62px">
                                        <col style="width: 62px">
                                        <col style="width: 48px">
                                        <col style="width: 48px">
                                        <col style="width: 48px">
                                        <col style="width: 65px">
                                        <col style="width: 50px">
                                        <col style="width: 46px">
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th class="tg-minima-c3ow" colspan="11">Massa específica mínima das areia</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="tg-minima-0pky" colspan="3">Molde</td>
                                            <td class="tg-minima-c3ow" colspan="2"></td>
                                            <td class="tg-minima-0pky" colspan="3">Volume do molde:</td>
                                            <td class="tg-minima-c3ow">(g/cm³)</td>
                                            <td class="tg-minima-c3ow" colspan="2"></td>
                                        </tr>
                                        <tr>
                                            <td class="tg-minima-0pky" colspan="2">Peso do molde:</td>
                                            <td class="tg-minima-c3ow">(g)</td>
                                            <td class="tg-minima-c3ow" colspan="2"></td>
                                            <td class="tg-minima-0pky" colspan="4" style="width: 40px">Massa específica das partículas</td>
                                            <td class="tg-minima-c3ow" colspan="2"></td>
                                        </tr>
                                        <tr>
                                            <td class="tg-minima-0pky" colspan="2">Corpo de prova</td>
                                            <td class="tg-minima-c3ow" style="width: 40px !important;">1</td>
                                            <td class="tg-minima-c3ow" style="width: 40px !important;">2</td>
                                            <td class="tg-minima-c3ow" style="width: 40px !important;">3</td>
                                            <td class="tg-minima-c3ow" style="width: 40px !important;">4</td>
                                            <td class="tg-minima-c3ow" style="width: 40px !important;">5</td>
                                            <td class="tg-minima-c3ow" style="width: 40px !important;">6</td>
                                            <td class="tg-minima-c3ow" style="width: 40px !important;">7</td>
                                            <td class="tg-minima-c3ow" style="width: 40px !important;">8</td>
                                            <td class="tg-minima-c3ow" style="width: 40px !important;">9</td>
                                        </tr>
                                        <tr>
                                            <td class="tg-minima-0pky">Peso do molde + areia</td>
                                            <td class="tg-minima-c3ow">(g)</td>
                                            <td class="tg-minima-c3ow"></td>
                                            <td class="tg-minima-c3ow"></td>
                                            <td class="tg-minima-c3ow"></td>
                                            <td class="tg-minima-0pky"></td>
                                            <td class="tg-minima-0pky"></td>
                                            <td class="tg-minima-0pky"></td>
                                            <td class="tg-minima-0pky"></td>
                                            <td class="tg-minima-0pky"></td>
                                            <td class="tg-minima-0pky"></td>
                                        </tr>
                                        <tr>
                                            <td class="tg-minima-0pky">Peso da areia</td>
                                            <td class="tg-minima-c3ow">(g)</td>
                                            <td class="tg-minima-c3ow"></td>
                                            <td class="tg-minima-c3ow"></td>
                                            <td class="tg-minima-c3ow"></td>
                                            <td class="tg-minima-0pky"></td>
                                            <td class="tg-minima-0pky"></td>
                                            <td class="tg-minima-0pky"></td>
                                            <td class="tg-minima-0pky"></td>
                                            <td class="tg-minima-0pky"></td>
                                            <td class="tg-minima-0pky"></td>
                                        </tr>
                                        <tr>
                                            <td class="tg-minima-0pky">Massa específica</td>
                                            <td class="tg-minima-c3ow">(g/cm³)</td>
                                            <td class="tg-minima-c3ow"></td>
                                            <td class="tg-minima-c3ow"></td>
                                            <td class="tg-minima-c3ow"></td>
                                            <td class="tg-minima-0pky"></td>
                                            <td class="tg-minima-0pky"></td>
                                            <td class="tg-minima-0pky"></td>
                                            <td class="tg-minima-0pky"></td>
                                            <td class="tg-minima-0pky"></td>
                                            <td class="tg-minima-0pky"></td>
                                        </tr>
                                        <tr>
                                            <td class="tg-minima-0pky" colspan="3">Massa específica mínima média</td>
                                            <td class="tg-minima-c3ow">rmin</td>
                                            <td class="tg-minima-34fe"></td>
                                            <td class="tg-minima-0pky" colspan="5">Índice de vazios máximos</td>
                                            <td class="tg-minima-34fe"></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <br>
                                <br>
                                <br>
                                <br>
                                <table class="tg-maxima" style="width: 100%">
                                    <colgroup>
                                        <col style="width: 400px">
                                        <col style="width: 50px">
                                        <col style="width: 53px">
                                        <col style="width: 53px">
                                        <col style="width: 53px">
                                        <col style="width: 53px">
                                        <col style="width: 53px">
                                        <col style="width: 53px">
                                        <col style="width: 53px">
                                        <col style="width: 53px">
                                        <col style="width: 53px">
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th class="tg-maxima-76qt" colspan="11">Massa específica máxima das areia</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="tg-maxima-387r" colspan="2">Molde</td>
                                            <td class="tg-maxima-76qt"></td>
                                            <td class="tg-maxima-76qt" colspan="2">Volume do molde</td>
                                            <td class="tg-maxima-76qt">(g/cm³)</td>
                                            <td class="tg-maxima-76qt"></td>
                                            <td class="tg-maxima-76qt" colspan="2">Peso do molde:</td>
                                            <td class="tg-maxima-76qt">(g)</td>
                                            <td class="tg-maxima-76qt"></td>
                                        </tr>
                                        <tr>
                                            <td class="tg-maxima-387r" colspan="2">Corpo de prova</td>
                                            <td class="tg-maxima-76qt" style="width: 40px">1</td>
                                            <td class="tg-maxima-76qt" style="width: 40px">2</td>
                                            <td class="tg-maxima-76qt" style="width: 40px">3</td>
                                            <td class="tg-maxima-76qt" style="width: 40px">4</td>
                                            <td class="tg-maxima-76qt" style="width: 40px">5</td>
                                            <td class="tg-maxima-76qt" style="width: 40px">6</td>
                                            <td class="tg-maxima-76qt" style="width: 40px">7</td>
                                            <td class="tg-maxima-76qt" style="width: 40px">8</td>
                                            <td class="tg-maxima-76qt" style="width: 40px">9</td>
                                        </tr>
                                        <tr>
                                            <td class="tg-maxima-387r">Peso do molde + areia</td>
                                            <td class="tg-maxima-76qt">(g)</td>
                                            <td class="tg-maxima-76qt"></td>
                                            <td class="tg-maxima-76qt"></td>
                                            <td class="tg-maxima-76qt"></td>
                                            <td class="tg-maxima-76qt"></td>
                                            <td class="tg-maxima-76qt"></td>
                                            <td class="tg-maxima-76qt"></td>
                                            <td class="tg-maxima-387r"></td>
                                            <td class="tg-maxima-387r"></td>
                                            <td class="tg-maxima-387r"></td>
                                        </tr>
                                        <tr>
                                            <td class="tg-maxima-387r">Peso da areia</td>
                                            <td class="tg-maxima-76qt">(g)</td>
                                            <td class="tg-maxima-76qt"></td>
                                            <td class="tg-maxima-76qt"></td>
                                            <td class="tg-maxima-76qt"></td>
                                            <td class="tg-maxima-76qt"></td>
                                            <td class="tg-maxima-76qt"></td>
                                            <td class="tg-maxima-76qt"></td>
                                            <td class="tg-maxima-387r"></td>
                                            <td class="tg-maxima-387r"></td>
                                            <td class="tg-maxima-387r"></td>
                                        </tr>
                                        <tr>
                                            <td class="tg-maxima-387r">Massa específica úmida</td>
                                            <td class="tg-maxima-76qt">(g/cm³)</td>
                                            <td class="tg-maxima-76qt"></td>
                                            <td class="tg-maxima-76qt"></td>
                                            <td class="tg-maxima-76qt"></td>
                                            <td class="tg-maxima-76qt"></td>
                                            <td class="tg-maxima-76qt"></td>
                                            <td class="tg-maxima-76qt"></td>
                                            <td class="tg-maxima-387r"></td>
                                            <td class="tg-maxima-387r"></td>
                                            <td class="tg-maxima-387r"></td>
                                        </tr>
                                        <tr>
                                            <td class="tg-maxima-387r">Solo + água + cápsula</td>
                                            <td class="tg-maxima-76qt">(g)</td>
                                            <td class="tg-maxima-76qt"></td>
                                            <td class="tg-maxima-76qt"></td>
                                            <td class="tg-maxima-76qt"></td>
                                            <td class="tg-maxima-76qt"></td>
                                            <td class="tg-maxima-76qt"></td>
                                            <td class="tg-maxima-76qt"></td>
                                            <td class="tg-maxima-387r"></td>
                                            <td class="tg-maxima-387r"></td>
                                            <td class="tg-maxima-387r"></td>
                                        </tr>
                                        <tr>
                                            <td class="tg-maxima-387r">Solo seco + cápsula</td>
                                            <td class="tg-maxima-76qt">(g)</td>
                                            <td class="tg-maxima-76qt"></td>
                                            <td class="tg-maxima-76qt"></td>
                                            <td class="tg-maxima-76qt"></td>
                                            <td class="tg-maxima-76qt"></td>
                                            <td class="tg-maxima-76qt"></td>
                                            <td class="tg-maxima-76qt"></td>
                                            <td class="tg-maxima-387r"></td>
                                            <td class="tg-maxima-387r"></td>
                                            <td class="tg-maxima-387r"></td>
                                        </tr>
                                        <tr>
                                            <td class="tg-maxima-387r">Massa da cápsula</td>
                                            <td class="tg-maxima-76qt">(g)</td>
                                            <td class="tg-maxima-76qt"></td>
                                            <td class="tg-maxima-76qt"></td>
                                            <td class="tg-maxima-76qt"></td>
                                            <td class="tg-maxima-76qt"></td>
                                            <td class="tg-maxima-76qt"></td>
                                            <td class="tg-maxima-76qt"></td>
                                            <td class="tg-maxima-387r"></td>
                                            <td class="tg-maxima-387r"></td>
                                            <td class="tg-maxima-387r"></td>
                                        </tr>
                                        <tr>
                                            <td class="tg-maxima-387r">Massa do solo seco</td>
                                            <td class="tg-maxima-76qt">(g)</td>
                                            <td class="tg-maxima-76qt"></td>
                                            <td class="tg-maxima-76qt"></td>
                                            <td class="tg-maxima-76qt"></td>
                                            <td class="tg-maxima-76qt"></td>
                                            <td class="tg-maxima-76qt"></td>
                                            <td class="tg-maxima-76qt"></td>
                                            <td class="tg-maxima-387r"></td>
                                            <td class="tg-maxima-387r"></td>
                                            <td class="tg-maxima-387r"></td>
                                        </tr>
                                        <tr>
                                            <td class="tg-maxima-387r">Massa de água</td>
                                            <td class="tg-maxima-76qt">(g)</td>
                                            <td class="tg-maxima-76qt"></td>
                                            <td class="tg-maxima-76qt"></td>
                                            <td class="tg-maxima-76qt"></td>
                                            <td class="tg-maxima-76qt"></td>
                                            <td class="tg-maxima-76qt"></td>
                                            <td class="tg-maxima-76qt"></td>
                                            <td class="tg-maxima-387r"></td>
                                            <td class="tg-maxima-387r"></td>
                                            <td class="tg-maxima-387r"></td>
                                        </tr>
                                        <tr>
                                            <td class="tg-maxima-387r">Teor de umidade</td>
                                            <td class="tg-maxima-76qt">%</td>
                                            <td class="tg-maxima-76qt"></td>
                                            <td class="tg-maxima-76qt"></td>
                                            <td class="tg-maxima-76qt"></td>
                                            <td class="tg-maxima-76qt"></td>
                                            <td class="tg-maxima-76qt"></td>
                                            <td class="tg-maxima-76qt"></td>
                                            <td class="tg-maxima-387r"></td>
                                            <td class="tg-maxima-387r"></td>
                                            <td class="tg-maxima-387r"></td>
                                        </tr>
                                        <tr>
                                            <td class="tg-maxima-387r">Teor de umidade médio</td>
                                            <td class="tg-maxima-76qt">%</td>
                                            <td class="tg-maxima-76qt" colspan="9" style="background-color: #c0c0c0; font-weight: bold""></td>
                                        </tr>
                                        <tr>
                                            <td class="tg-maxima-387r">Massa específica seca</td>
                                            <td class="tg-maxima-76qt">(g/cm³)</td>
                                            <td class="tg-maxima-76qt"></td>
                                            <td class="tg-maxima-76qt"></td>
                                            <td class="tg-maxima-76qt"></td>
                                            <td class="tg-maxima-76qt"></td>
                                            <td class="tg-maxima-76qt"></td>
                                            <td class="tg-maxima-76qt"></td>
                                            <td class="tg-maxima-387r"></td>
                                            <td class="tg-maxima-387r"></td>
                                            <td class="tg-maxima-387r"></td>
                                        </tr>
                                        <tr>
                                            <td class="tg-maxima-387r" colspan="4">Massa específica média</td>
                                            <td class="tg-maxima-76qt" style="background-color: #c0c0c0; font-weight: bold"></td>
                                            <td class="tg-maxima-387r" colspan="5">Índice de vazios mínimo</td>
                                            <td class="tg-maxima-76qt" style="background-color: #c0c0c0; font-weight: bold"></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                            </td>
                        </tr>
                        <tr>
          <td class="tg-0pky" colspan="15">
              <p class="title">Observação:</p>
              <div style="height: 35px;">  <div>
          </td>
          </tr>
          <tr>
                      <td class="tg-0pky" colspan="15" style="padding: 4px 0px 0px 5px;">
                          <div style="width: 245px; display: inline-block">
                              <p class="title"> Código laboratório:  </p>
                          </div>
                          <div style="width: 447px; display: inline-block;">
                              <p class="title"> DATA EMISSÃO:  </p>
                          </div>
                          <div style="display: inline-block">
                              <p class="title">Pág: / </p>
                          </div>
                      </td>
                  </tr>
                    </tbody>
                </table>
            </main>
            <footer>
                <div style="text-align: center;">
                    <p style="font-size: 10px; font-weight: bold; margin: 0; font-family: Arial, sans-serif; !important"> Este relatório de ensaio só pode ser copiado integralmente ou parcialmente com autorização da Geocontrole </p>
                    <p style="font-size: 10px; font-weight: bold; margin: 0; font-family: Arial, sans-serif; !important"> Av.Canadá,Nº 159 - Jardim Canadá Nova Lima - Minas Gerais - Brasil - CEP: 34007-654 Tel.: +55 31 3517-9011 </p>
                    <div style="width: 100%; background-color: green; color: #fff; font-family: Arial, sans-serif; !important"> www.geocontrole.com - e-mail: mail.br@geocontrole.com </div>
                </div>
            </footer>
        </body>
    </html>';
        return $html;
    }
}
