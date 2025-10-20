export interface ActualSpecificMassInGrainsData {
  // Dados do cabeçalho
  DataInicio: string;
  DataFinal: string;
  Executado: string;
  Aprovado: string;
  Verificado: string;
  Observacao: string;

  // Tipo de Secagem
  Temp_CheckBox1: string; // "COM" ou ""
  Temp_CheckBox2: string; // "SEM" ou ""

  // Dados do corpo de prova I
  PICNOMETRO1: string;
  massaUmidaDoCorpoDeProva1: string;
  Capsula1: string;
  Capsula2: string;
  Capsula3: string;
  massaDoSoloUmdCaps1: string;
  massaDoSoloUmdCaps2: string;
  massaDoSoloUmdCaps3: string;
  massaDoSoloSecCaps1: string;
  massaDoSoloSecCaps2: string;
  massaDoSoloSecCaps3: string;
  MassaCaps1: string;
  MassaCaps2: string;
  MassaCaps3: string;
  teorDeUmd1: string;
  teorDeUmd2: string;
  teorDeUmd3: string;
  teorDeUmdMEDIO1: string;
  massaPicAgDestilada1: string;
  massaPicCorpoProva1: string;
  temperaturaDoEnsaio1: string;
  massaEspDaAguaATempT1: string;
  massaEspCorpoProva1: string;

  // Dados do corpo de prova II
  PICNOMETRO2: string;
  massaUmidaDoCorpoDeProva2: string;
  Capsula4: string;
  Capsula5: string;
  Capsula6: string;
  massaDoSoloUmdCaps4: string;
  massaDoSoloUmdCaps5: string;
  massaDoSoloUmdCaps6: string;
  massaDoSoloSecCaps4: string;
  massaDoSoloSecCaps5: string;
  massaDoSoloSecCaps6: string;
  MassaCaps4: string;
  MassaCaps5: string;
  MassaCaps6: string;
  teorDeUmd4: string;
  teorDeUmd5: string;
  teorDeUmd6: string;
  teorDeUmdMEDIO2: string;
  massaPicAgDestilada2: string;
  massaPicCorpoProva2: string;
  temperaturaDoEnsaio2: string;
  massaEspDaAguaATempT2: string;
  massaEspCorpoProva2: string;

  // Resultados finais
  massaEspMEDIA: string;
  incertezaexpandida: string;
  k: string;
}
