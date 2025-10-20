<?php
// Caminho do arquivo
$arquivo = './DetermineMaximumAndMinimumSandModel.php';

// Lê o conteúdo do arquivo
$conteudo = file_get_contents($arquivo);

// Remove tudo entre ' .  e . '
$conteudoLimpo = preg_replace("/' \.(.*?)\.\s*'/s", "''", $conteudo);

// Salva o resultado de volta no arquivo
file_put_contents($arquivo, $conteudoLimpo);