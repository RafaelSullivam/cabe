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

    public function generateModel($codSample, $numberSample)
    {

        // $main = new MainSheetModel($this->data);

        $html  = '';
        // Injeta o CSS do header
        $html .= file_get_contents(__DIR__ . '/headerStyles.css.php');
        $html .= '';

        // Captura o headerTemplate
        ob_start();
        // Precisamos definir as variáveis antes do include:
        //    $codSample e $numberSample já vêm como parâmetro
        include __DIR__ . './headerTemplate.php';
        ob_get_clean();
        $conexao = new ConfigureteConnection();
        $conexao->connect();

        $pdo = $conexao->getConnection();

        if ($pdo === null) {
            return null;
        }

        $furoRows = '';
        for ($i = 0; $i < 15; $i++) {
            $furoRows .= '
        <tr>
            <td style="border: 1px solid #000; padding: 5px; height: 20px; width: 30%;"> </td>
            <td style="border: 1px solid #000; padding: 5px; height: 20px; width: 30%;"> </td>
            <td style="border: 1px solid #000; padding: 5px; height: 20px; width: 20%;"> </td>
            <td style="border: 1px solid #000; padding: 5px; background-color: #f0f0f0; height: 20px; width: 20%;"> </td>
        </tr>
    ';
        }
        $html .= '<html>
        <body>
 <header>
          <div style="display: inline-block; width: 539px; padding-top: 20px">
              <img src="images/geocontrole.png" width="195px"/>
          </div>
          <div style="width: 212px; background-color: green; color: #fff; display: inline-block; font-family:Arial, sans-serif; font-size: 13px; padding: 2px; text-align: center">
            REGISTRO Nº: 
         </div>
       </header>
     
     
        <table class="tg-cabecalho" style="width: 100%;margin-bottom: 20px">
                <thead>
                    <tr>
                        <th class="tg-cabecalho-0pky col-1" colspan="1" rowspan="2"> CLIENTE: <br>
                        </th>
                        <th class="tg-cabecalho-0pky col-2" colspan="1" rowspan="2"> CERTIFICAÇÃO: <br>
                            <div style="margin-left: 10%; margin-top: 5px; font-size: 12px;">
                                <img style="margin-left: 30%" src="images/ABNT.png" width="60px" height="40px">
                            </div>
                            <img style="margin-left: 30%" src="data:image/jpeg;base64,"  width="60px";height="40px"">
                        </th>
                        <th class="tg-cabecalho-0pky col-3" colspan="3">RELATÓRIO ENSAIO: <div style="margin-left: 21%; font-size: 15px; margin-top: -6px">
                               <div>
                        </th>
                    </tr>
                    <tr>
                        <th class="tg-cabecalho-0pky" style="white-space: nowrap; border-right: 1px solid #000; vertical-align: top;"> 
                            NORMA:
                            <div style="font-size: 12px; margin-left: 10px; margin-top: 6px; margin-bottom: 5px" class="cabecalho-resultado-font"></div>
                        </th>
                        <th class="tg-cabecalho-0pky" style="vertical-align: top;"> 
                            PROCESSO: / LOTE:
                            <div style="font-size: 12px; margin-top: 6px; margin-left: 25px; margin-bottom: 5px" class="cabecalho-resultado-font"> </div>
                        </th>
                        <th class="tg-cabecalho-p1nr"" style="vertical-align: top;">IDENTIFICAÇÃO:
                            <div style="text-align: center; font-size: 12px; margin-top: 7px !important; margin-bottom: 4px !important" class="cabecalho-resultado-font"> </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="tg-cabecalho-0pky col-2" colspan="1" rowspan="4">DATA: <div style="margin-top: 15px">
                                <span class="cabecalho-resultado-font"></span>
                            </div>
                        </td>
                        <td class="tg-cabecalho-0pky col-2" colspan="1" rowspan="4"> ESTACA/POSIÇÃO: <div style="margin-top: 2px">
                                  <span class="cabecalho-resultado-font"></span>
                              </div>
                          </td>
                          <td class="tg-cabecalho-0pky col-3" colspan="2" rowspan="4">OBRA: <br>
                            <div style="text-align: center; font-size: 12px; margin-top: 9px;">
                                <b>
                                    <span class="cabecalho-resultado-font"></span>
                            </div>
                        </td>
                        <td class="tg-cabecalho-p1nr">**DATUM:</td>
                    </tr>
                    <tr>
                        <td class="tg-cabecalho-p1nr">**COORDENADA X: <span class="cabecalho-resultado-font"></span>
                        </td>
                    </tr>
                    <tr>
                        <td class="tg-cabecalho-p1nr">**COORDENADA Y: <span class="cabecalho-resultado-font"></span>
                        </td>
                    </tr>
                    <tr>
                        <td class="tg-cabecalho-ps66">**COORDENADA Z: <span class="cabecalho-resultado-font"></span>
                        </td>
                    </tr>
                    <tr>
                        <td class="tg-cabecalho-0pky" rowspan="2">CAMADA: <div style="margin-top: 15px">
                                <span class="cabecalho-resultado-font"></span>  
                            </div>
                            <br>
                        </td>
                        <td class="tg-cabecalho-0pky" rowspan="2">RESPONSÁVEL: <div style="margin-top: 15px">
                                <span class="cabecalho-resultado-font"></span>
                            </div>
                        </td>
                        <td class="tg-cabecalho-0pky col-3" colspan="2">LOCAL/ÁREA: <br>
                            <div style="text-align: center; font-size: 12px; margin-top: 0px;">
                                <b>
                                    <span class="cabecalho-resultado-font"></span>
                            </div>
                        </td>
                        <td class="tg-cabecalho-p1nr" rowspan="2">**ESPECIFICAÇÃO TÉCNICA: <span class="cabecalho-resultado-font"></span>
                        </td>
                    </tr>
                    <tr>
                        <td class="tg-cabecalho-0pky" colspan="2">MATERIAL: <br>
                            <div style="text-align: center; font-size: 12px">
                                <b><span class="cabecalho-resultado-font">
                            </div>  
                        </td>
                    </tr>
                </tbody>
            </table>
        
        <!-- Bloco de Controle de Equipamentos -->
        <table class="equipments-table" style="margin-top: 0; width: 100%; border-collapse: collapse; font-family: Arial, sans-serif; font-size: 10px;">
            <!-- Row 1: "Controle" cell and headers -->
            <tr>
                <td rowspan="4" style="width: 15%; vertical-align: middle; text-align: center; font-weight: bold; border: 1px solid #000; padding: 3px;">Controle de Equipamentos</td>
                <td style="width: 20%; border: 1px solid #000; padding: 3px; font-weight: bold; text-align: center;">Equipamento</td>
                <td style="width: 18%; border: 1px solid #000; padding: 3px; font-weight: bold; text-align: center;">Modelo</td>
                <td style="width: 17%; border: 1px solid #000; padding: 3px; font-weight: bold; text-align: center;">TAG / Nº Série</td>
                <td style="width: 15%; border: 1px solid #000; padding: 3px; font-weight: bold; text-align: center;">Tipo de Solo</td>
                <td style="width: 15%; border: 1px solid #000; padding: 3px; font-weight: bold; text-align: center;">Marcação da Leitura</td>
            </tr>
            <!-- Row 2: First data row -->
            <tr>
                <td style="border: 1px solid #000; padding: 5px; height: 20px;"></td>
                <td style="border: 1px solid #000; padding: 5px; height: 20px;"></td>
                <td style="border: 1px solid #000; padding: 5px; height: 20px;"></td>
                <td rowspan="3" style="border: 1px solid #000; padding: 5px;"></td>
                <td rowspan="3" style="border: 1px solid #000; padding: 5px;"></td>
            </tr>
            <!-- Row 3: Second data row -->
            <tr>
                <td style="border: 1px solid #000; padding: 5px; height: 20px;"></td>
                <td style="border: 1px solid #000; padding: 5px; height: 20px;"></td>
                <td style="border: 1px solid #000; padding: 5px; height: 20px;"></td>
            </tr>
            <!-- Row 4: Third data row -->
            <tr>
                <td style="border: 1px solid #000; padding: 5px; height: 20px;"></td>
                <td style="border: 1px solid #000; padding: 5px; height: 20px;"></td>
                <td style="border: 1px solid #000; padding: 5px; height: 20px;"></td>
            </tr>
        </table>
        
        <!-- Tabela de Profundidade -->
        <table class="furo-table" style="margin: 20px 0 20px 0; width: 100%; border-collapse: collapse; font-family: Arial, sans-serif; font-size: 11px; table-layout: fixed;">
            <thead>
                <tr>
                    <th class="text-center" style="width: 30%; border: 1px solid #000; padding: 5px; font-weight: bold; white-space: nowrap; height: 40px;">PROFUNDIDADE INÍCIO</th>
                    <th class="text-center" style="width: 30%; border: 1px solid #000; padding: 5px; font-weight: bold; white-space: nowrap;">PROFUNDIDADE FIM</th>
                    <th class="text-center" style="width: 20%; border: 1px solid #000; padding: 5px; font-weight: bold; white-space: nowrap;">N° GOLPES</th>
                    <th class="text-center" style="width: 20%; border: 1px solid #000; padding: 5px; background-color: #f0f0f0; font-weight: bold; white-space: nowrap;">Tx Adm Kgf/cm²</th>
                </tr>
            </thead>
            <tbody>
              ' .  $furoRows . '
            </tbody>
        </table>
            <footer style="position: fixed; bottom: 0; width: 100%; font-family: Arial, sans-serif; font-size: 10px;">
                <table style="width: 100%; border-collapse: collapse; border: 1px solid #000; font-family: inherit; font-size: inherit;">
                    <tbody>
       <!-- Primeira linha: Status do Ensaio | Aprovado | Observação -->
    <tr>
        <td rowspan="2" style="width: 12%; border: 1px solid #000; padding: 4px; vertical-align: top; text-align: left; height:16px; padding-top: 2px;"><strong>Status do Ensaio:</strong></td>
        <td style="width: 15%; border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; height:21px; vertical-align: middle;">Aprovado</td>
        <td rowspan="2" style="width: 54%; border: 1px solid #000; padding: 4px; vertical-align: top; text-align: left; height:16px;"><strong>Observação:</strong></td>
    </tr>
    <!-- Segunda linha: Reprovado -->
    <tr>
        <td style="border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; height:21px; vertical-align: middle;">Reprovado</td>
    </tr>
    <!-- Terceira linha: Execução | Aprovação | Fiscalização -->
    <tr>
    <td colspan="3" style="border-left: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; border-top: none; padding: 0;">
        <table style="width: 100%; border-collapse: collapse; border: none; margin: 0;">
            <tr>
                 <td style="width: 33.33%; border-right: 1px solid #000; border-left: none; border-top: none; border-bottom: none; padding: 4px; padding-top: 0px; text-align: left; height:38px; vertical-align: top;"><strong>Execução:</strong></td>
                <td style="width: 33.33%; border-right: 1px solid #000; border-left: none; border-top: none; border-bottom: none; padding: 4px; padding-top: 0px; text-align: left; height:38px; vertical-align: top;"><strong>Aprovação:</strong></td>
                <td style="width: 33.33%; border: none; padding: 4px; padding-top: 0px; text-align: left; height:38px; vertical-align: top;"><strong>Fiscalização:</strong></td>
            </tr>
        </table>
    </td>
</tr>
    <!-- MUDANÇA AQUI: Adicionado "DATA EMISSÃO :" na célula do meio -->
    <tr>
        <td style="border-top: 1px solid #000; border-left: 1px solid #000; border-right: none; border-bottom: none; padding: 2px 4px; text-align: left;"><strong>Código laboratório:</strong></td>
        <td style="border-top: 1px solid #000; border-left: none; border-right: none; padding: 2px 4px; text-align: center;"><strong>DATA EMISSÃO :</strong></td>
        <td style="border-top: 1px solid #000; border-right: 1px solid #000; border-left: none; border-bottom: none; padding: 2px 4px; text-align: right;"><strong>Pág: 1/1</strong></td>
    </tr>
</tbody>
                    </tbody>
                </table>
                <!-- Bloco de informações -->
                <div style="text-align: center; margin-top: 0;">
                    <p style="font-size: 10px; font-weight: bold; margin: 0; font-family: Arial, sans-serif; line-height: 1.2;">Este relatório de ensaio só pode ser copiado integralmente ou parcialmente com autorização da Geocontrole</p>
                    <p style="font-size: 10px; font-weight: bold; margin: 0; font-family: Arial, sans-serif; line-height: 1.2;">Av.Canadá,Nº 159 - Jardim Canadá Nova Lima - Minas Gerais - Brasil - CEP: 34007-654 Tel.: +55 31 3517-9011</p>
                    <p style="font-size: 10px; font-weight: bold; margin: 0; font-family: Arial, sans-serif; line-height: 1.2;">Informações fornecidas pelo Técnico ou Cliente</p>
                    <div style="width: 100%; background-color: #008000; color: #fff; font-family: Arial, sans-serif; padding: 3px 0; font-size: 11px; font-weight: bold;">www.geocontrole.com - e-mail: mail.br@geocontrole.com</div>
                </div>
            </footer>
        </body>
    </html>';
        return $html;
    }
}