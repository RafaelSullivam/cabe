<?php
require_once 'mainSheet.php';
include_once('configureteConnection.php');

class PDLGraphModel
{
    private $data;
    public function __construct($data)
    {
        $this->data = $data;
    }

    public function generateModel($codSample, $numberSample, $datapdl, $logo, $dataCadastroAmostra, $pagina, $totalPaginas)
    {
        $conexao = new ConfigureteConnection();
        $conexao->connect();

        $pdo = $conexao->getConnection();

        if ($pdo === null) {
            return null;
        }
        $query = "SELECT * FROM pdlgrafico WHERE Processo = :codSample AND codigo = :numberSample";
        $stmt = $pdo->prepare($query);
        $stmt->bindParam(':codSample', $codSample, PDO::PARAM_INT);
        $stmt->bindParam(':numberSample', $numberSample, PDO::PARAM_INT);
        $stmt->execute();
        $pdlGraph = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $datapdlGraph = count($pdlGraph) === 0 ? null : $pdlGraph[0];
       
        // $main = new MainSheetModel($this->data);
        $graph = $datapdlGraph['Grafico'];
         
        $html  = '';
        // Injeta o CSS do header
        $html .= file_get_contents(__DIR__ . '/headerStyles.css.php');
        $html .= '';

        // Captura o headerTemplate
        ob_start();
        // Precisamos definir as variáveis antes do include:
        //    $codSample e $numberSample já vêm como parâmetro
        // include __DIR__ . './headerTemplate.php';
        ob_get_clean();
        $conexao = new ConfigureteConnection();
        $conexao->connect();

        $pdo = $conexao->getConnection();

        if ($pdo === null) {
            return null;
        }
        $status = $datapdl['Cond_Ensaio'] ?? '';
        $aprovadoStyle = 'width: 15%; border: 1px solid #000; padding: 4px; text-align: center; font-weight: bold; height:21px; vertical-align: middle;';
        $reprovadoStyle = $aprovadoStyle;

        if (strtolower($status) === 'aprovado') {
            $aprovadoStyle .= ' background-color: #4CAF50; color: #fff;'; // verde
        } else if (strtolower($status) === 'reprovado') {
            $reprovadoStyle .= ' background-color: #f44336; color: #fff;'; // vermelho
        }

        $furoRows = '';
        for ($i = 1; $i < 16; $i++) {
            $furoRows .= '
        <tr>
          <td style="border: 1px solid #000; padding: 5px; height: 20px; width: 30%; text-align: center;">' . $datapdl['ProfundidadeDe' . $i . '_1'] . ' </td>
<td style="border: 1px solid #000; padding: 5px; height: 20px; width: 30%; text-align: center;">' . $datapdl['ProfundidadeDe' . $i . '_1'] . '  </td>
<td style="border: 1px solid #000; padding: 5px; height: 20px; width: 20%; text-align: center;">' . $datapdl['N_Golpe' . $i . '_1'] . '  </td>
         <td style="border: 1px solid #000; padding: 5px; background-color: #f0f0f0; height: 20px; width: 20%; text-align: center; font-weight: bold; font-size: 14px;">' . $datapdl['TX_Adm' . $i . '_1'] . '</td>
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
            REGISTRO Nº: ' . $numberSample . '
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
                            <img style="margin-left: 30%" src="data:image/jpeg;base64,' . base64_encode($logo) . '"  width="60px";height="40px"">
                        </th>
                        <th class="tg-cabecalho-0pky col-3" colspan="3">RELATÓRIO ENSAIO: <div style="margin-left: 40%; font-size: 15px; margin-top: -5px">
                             PDL  <div>
                        </th>
                    </tr>
                    <tr>
                        <th width="21%" class="tg-cabecalho-0pky" style="white-space: nowrap; border-right: 1px solid #000; vertical-align: top;"> 
                            NORMA: 
                            <div style="font-size: 12px; margin-left: 10px; margin-top: 6px; margin-bottom: 5px" class="cabecalho-resultado-font">EN ISO 22476-2</div>
                        </th>
                        <th width="21%" class="tg-cabecalho-0pky" style="vertical-align: top;"> 
                            PROCESSO: / LOTE:
                            <div style="font-size: 12px; margin-top: 6px; margin-left: 25px; margin-bottom: 5px" class="cabecalho-resultado-font">' . $codSample . ' </div>
                        </th>
                        <th width="27%" class="tg-cabecalho-p1nr"" style="vertical-align: top;">IDENTIFICAÇÃO:
                            <div style="text-align: center; font-size: 12px; margin-top: 7px !important; margin-bottom: 4px !important" class="cabecalho-resultado-font">' . $dataCadastroAmostra['Identificacao'] . ' </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td width="15%" colspan="1" rowspan="4" class="tg-cabecalho-0pky col-2">DATA: <div style="margin-top: 15px">
                                <span class="cabecalho-resultado-font">' . $dataCadastroAmostra['Data'] . '</span>
                            </div>
                        </td>
                        <td width="16%" colspan="1" rowspan="4" class="tg-cabecalho-0pky col-2"> ESTACA/POSIÇÃO: <div style="text-align: center; font-size: 12px; margin-top: 10px;">
                                  <span class="cabecalho-resultado-font">' . $dataCadastroAmostra['Estaca_Posicao'] . '</span>
                              </div>
                          </td>
                          <td class="tg-cabecalho-0pky col-3" colspan="2" rowspan="4">OBRA: <br>
                            <div style="text-align: center; font-size: 12px; margin-top: 9px;">
                                <b>
                                    <span class="cabecalho-resultado-font">' . $dataCadastroAmostra['Obra'] . '</span>
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
                        <div style="text-align: center; font-size: 12px; margin-top: 9px;">        
                        <span class="cabecalho-resultado-font">' . $dataCadastroAmostra['Camada'] . '</span>  
                            </div>
                            <br>
                        </td>
                        <td class="tg-cabecalho-0pky" rowspan="2">RESPONSÁVEL: <div style="margin-top: 15px">
                         <div style="text-align: center; font-size: 12px; margin-top: 9px;">   
                                <span class="cabecalho-resultado-font">' . $dataCadastroAmostra['Responsavel'] . '</span>
                            </div>
                        </td>
                        <td class="tg-cabecalho-0pky col-3" colspan="2">LOCAL/ÁREA: <br>
                            <div style="text-align: center; font-size: 12px; margin-top: 0px;">
                                <b>
                                    <span class="cabecalho-resultado-font">' . $dataCadastroAmostra['Local_Area'] . '</span>
                            </div>
                        </td>
                        <td class="tg-cabecalho-p1nr" rowspan="2">**ESPECIFICAÇÃO TÉCNICA: 
                         <div style="text-align: center; font-size: 12px; margin-top: 10px;">
                            <b>
                        <span class="cabecalho-resultado-font">' . $dataCadastroAmostra['Especificacao_Tec'] . '</span>
                         </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="tg-cabecalho-0pky" colspan="2">MATERIAL: <br>
                            <div style="text-align: center; font-size: 12px">
                                <b><span class="cabecalho-resultado-font">' . $dataCadastroAmostra['Material'] . '</span>
                            </div>  
                        </td>
                    </tr>
                </tbody>
            </table>
          <!--Acima Cabeçalho -->
        
        
            <table style="margin-top: 90px;">
                <tr>
                  <td class="tg-0pky" colspan="15" style="border-left: none !important; border-right: none !important; border-top-color: #fff; padding-left: 0px !important; padding-right: 0px !important; height: 10px;">
                    <div style="border: 1px solid #000; margin: 30px 0px 0px 0px; padding: 5px 5px 0px 5px">
                      <div style="width: 50%; margin-left: 42%;font-family: Arial, sans-serif; position: absolute; z-index: 1; top: 385px; height: 30px; font-size: 15px; background-color: #fff;">GRÁFICO PDL</div>
                        <img src="data:image/jpeg;base64,' . base64_encode($graph) . '" alt="Imagem" width="700px" height="440px" style="visibility: hidden;">
                       <img src="data:image/jpeg;base64,' . base64_encode($graph) . '" alt="Imagem" width="575px" height="355px" style="margin-top: 70px;" id="imagem-sobrepostaComp">
                        
                    
                     </div>  
                    </td>
                </tr>
                    
                </table>
     
                  <footer style=" bottom: 0; width: 100%;margin-top: 80; font-family: Arial, sans-serif; font-size: 10px;">
                <table style="width: 100%; border-collapse: collapse; border: 1px solid #000; font-family: inherit; font-size: inherit;">
                    <tbody>
       <!-- Primeira linha: Status do Ensaio | Aprovado | Observação -->
    <tr>
        <td rowspan="2" style="width: 12%; border: 1px solid #000; padding: 4px; vertical-align: top; text-align: left; height:16px; padding-top: 2px;"><strong>Status do Ensaio:
          <div style="text-align: center; font-size: 10px; margin-top: 9px;">
                                <b><span class="cabecalho-resultado-font">' . $datapdl['StatusEnsaio'] . '</span>
                            </div>  
        </strong></td>
         <td style="'.$aprovadoStyle.'">Aprovado</td>
        <td rowspan="2" style="width: 54%; border: 1px solid #000; padding: 4px; vertical-align: top; text-align: left; height:16px;"><strong>Observação:</strong> <div style="text-align: center; font-size: 10px; margin-top: 9px;">
                                <b><span class="cabecalho-resultado-font">' . $datapdl['Observacao'] . '</span>
                            </div>  </td>
    </tr>
    <!-- Segunda linha: Reprovado -->
    <tr>
       <td style="'.$reprovadoStyle.'">Reprovado</td>
    </tr>
    <!-- Terceira linha: Execução | Aprovação | Fiscalização -->
    <tr>
    <td colspan="3" style="border-left: 1px solid #000; border-right: 1px solid #000; border-bottom: 1px solid #000; border-top: none; padding: 0;">
        <table style="width: 100%; border-collapse: collapse; border: none; margin: 0;">
            <tr>
                 <td style="width: 33.33%; border-right: 1px solid #000; border-left: none; border-top: none; border-bottom: none; padding: 4px; padding-top: 0px; text-align: left; height:38px; vertical-align: top;"><strong>Execução:</strong><div style="text-align: center; font-size: 10px; margin-top: 9px;">
                                <b><span class="cabecalho-resultado-font">' . $datapdl['Executado'] . '</span>
                            </div> </td>
                <td style="width: 33.33%; border-right: 1px solid #000; border-left: none; border-top: none; border-bottom: none; padding: 4px; padding-top: 0px; text-align: left; height:38px; vertical-align: top;"><strong>Aprovação:</strong></td>
                <td style="width: 33.33%; border: none; padding: 4px; padding-top: 0px; text-align: left; height:38px; vertical-align: top;"><strong>Fiscalização:</strong></td>
            </tr>
        </table>
    </td>
</tr>
    <!-- MUDANÇA AQUI: Adicionado "DATA EMISSÃO :" na célula do meio -->
    <tr>
        <td style="border-top: 1px solid #000; border-left: 1px solid #000; border-right: none; border-bottom: none; padding: 2px 4px; text-align: left;"><strong>Código laboratório:
      
        </strong></td>
        <td style="border-top: 1px solid #000; border-left: none; border-right: none; padding: 2px 4px; text-align: center;"><strong>DATA EMISSÃO :</strong></td>
        <td style="border-top: 1px solid #000; border-right: 1px solid #000; border-left: none; border-bottom: none; padding: 2px 4px; text-align: right;"><strong>Pág: ' . $pagina . '/' . $totalPaginas . '</strong></td>
    </tr>
</tbody>
                    </tbody>
                </table>
                <!-- Bloco de informações -->
                <div style="text-align: center; margin-top: 1;">
                    <p style="font-size: 10px; font-weight: bold; margin: 0; font-family: Arial, sans-serif; line-height: 1.2;">Este relatório de ensaio só pode ser copiado integralmente ou parcialmente com autorização da Geocontrole</p>
                    <p style="font-size: 10px; font-weight: bold; margin: 0; font-family: Arial, sans-serif; line-height: 1.2;">Av.Canadá,Nº 159 - Jardim Canadá Nova Lima - Minas Gerais - Brasil - CEP: 34007-654 Tel.: +55 31 3517-9011</p>
                    <p style="font-size: 10px; font-weight: bold; margin: 0; font-family: Arial, sans-serif; line-height: 1.2;">**Informações fornecidas pelo Técnico ou Cliente</p>
                    <div style="width: 100%; background-color: #008000; color: #fff; font-family: Arial, sans-serif; padding: 3px 0; font-size: 11px; font-weight: bold;">www.geocontrole.com - e-mail: mail.br@geocontrole.com</div>
                </div>
            </footer>
        </body>  
        
              


      
    </html>';
        return $html;
    }
}
