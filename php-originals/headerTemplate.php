<?php
// headerTemplate.php
?>

    <header>
        <div style="display: inline-block; width: 539px; padding-top: 10px">
            <img src="images/geocontrole.png" width="195px" />
        </div>
        <div style="width: 212px; background-color: green; color: #fff; display: inline-block; font-family:Arial, sans-serif; font-size: 13px; padding: 2px; text-align: center">
            AMOSTRA Nº: ' . $codSample . ' / ' . $numberSample . '
        </div>
    </header>
    <main style="margin-top: 10px">

        <table class="tg-cabecalho" style="width: 100%;margin-bottom: 13px">
            <thead>
                <tr>
                    <th class="tg-cabecalho-0pky col-1" colspan="2" rowspan="2">
                        CLIENTE:
                        <br>


                    </th>
                    <th class="tg-cabecalho-0pky col-3" colspan="2">RELATÓRIO ENSAIO:<div style="margin-left: 21%; font-size: 15px; margin-top: -6px">QUADRO RESULTADOS<div>
                    </th>
                </tr>
                <tr>
                    <th class="tg-cabecalho-0pky" colspan="1" class="col-2">PROCESSO / LOTE:<br>
                        <div style="text-align: center; font-size: 13px; margin-top: 4px" class="cabecalho-resultado-font"></div>
                    </th>
                    <th class="tg-cabecalho-p1nr">PROFUNDIDADE (m):<br>
                        <div style="text-align: center; font-size: 13px; margin-top: 4px" class="cabecalho-resultado-font"> </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="tg-cabecalho-0pky col-2" colspan="1" rowspan="4">DATA DO REGISTRO:<div style="margin-top: 15px"><span class="cabecalho-resultado-font"></span></div>
                    </td>
                    <td class="tg-cabecalho-0pky col-2" colspan="1" rowspan="4">DATA DE VERIFICAÇÃO:<div style="margin-top: 15px"><span class="cabecalho-resultado-font"></span></div>
                    </td>
                    <td class="tg-cabecalho-0pky col-3" rowspan="4">SONDAGEM:<br>
                        <div style="text-align: center; font-size: 12px; margin-top: 9px;"><b><span class="cabecalho-resultado-font"></span></div>
                    </td>
                    <td class="tg-cabecalho-p1nr">**DATUM: </td>
                </tr>
                <tr>
                    <td class="tg-cabecalho-p1nr">**COORDENADA X: <span class="cabecalho-resultado-font"></span></td>
                </tr>
                <tr>
                    <td class="tg-cabecalho-p1nr">**COORDENADA Y: <span class="cabecalho-resultado-font"></span></td>
                </tr>
                <tr>
                    <td class="tg-cabecalho-ps66">**COORDENADA Z: <span class="cabecalho-resultado-font"></span></td>
                </tr>
                <tr>
                    <td class="tg-cabecalho-0pky" rowspan="2">DATA DE CONCLUSÃO:<div style="margin-top: 15px"><span class="cabecalho-resultado-font"></span></div><br></td>
                    <td class="tg-cabecalho-0pky" rowspan="2">**APLICAÇÃO:<div style="margin-top: 15px"><span class="cabecalho-resultado-font"></span></div>
                    </td>
                    <td class="tg-cabecalho-0pky col-3">**OBRA: <br>
                        <div style="text-align: center; font-size: 12px; margin-top: 0px;"><b><span class="cabecalho-resultado-font"></span></div>
                    </td>
                    <td class="tg-cabecalho-p1nr" rowspan="2">**ESPECIFICAÇÃO TÉCNICA: <span class="cabecalho-resultado-font"></span></td>
                </tr>
                <tr>
                    <td class="tg-cabecalho-0pky">**LOCAL DA COLETA / ENDEREÇO: <br>
                        <div style="text-align: center; font-size: 12px">
                            <span class="cabecalho-resultado-font">

                            </span>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>





';