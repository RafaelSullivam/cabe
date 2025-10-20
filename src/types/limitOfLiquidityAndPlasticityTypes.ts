// Types for Limit of Liquidity and Plasticity Model (Atterberg Limits)
export interface LimitOfLiquidityAndPlasticityData {
  // Header data
  numeroAmostra: string;
  obra: string;
  localizacao: string;
  processo: string;
  lote: string;
  sondagem: string;
  profundidadeInicial: string;
  profundidadeFinal: string;
  dataRegistro: string;
  aplicacao: string;
  datum: string;
  coordenadaX: string;
  coordenadaY: string;
  coordenadaZ: string;
  especificacaoTecnica: string;
  codigoLaboratorio: string;

  // Test metadata
  norma: string;
  dataInicio: string;
  dataFinal: string;
  observacao: string;

  // Liquidity Limit Test (5 points with different number of blows)
  numGolpes1: string;
  numGolpes2: string;
  numGolpes3: string;
  numGolpes4: string;
  numGolpes5: string;

  capsula1: string;
  capsula2: string;
  capsula3: string;
  capsula4: string;
  capsula5: string;

  massaSoloUmdCaps1: string; // Massa solo úmido + cápsula
  massaSoloUmdCaps2: string;
  massaSoloUmdCaps3: string;
  massaSoloUmdCaps4: string;
  massaSoloUmdCaps5: string;

  massaSoloSecCaps1: string; // Massa solo seco + cápsula
  massaSoloSecCaps2: string;
  massaSoloSecCaps3: string;
  massaSoloSecCaps4: string;
  massaSoloSecCaps5: string;

  massaDaCapsula1: string;
  massaDaCapsula2: string;
  massaDaCapsula3: string;
  massaDaCapsula4: string;
  massaDaCapsula5: string;

  massaSoloSeco1: string; // Massa de solo seco
  massaSoloSeco2: string;
  massaSoloSeco3: string;
  massaSoloSeco4: string;
  massaSoloSeco5: string;

  massaDaAgua1: string;
  massaDaAgua2: string;
  massaDaAgua3: string;
  massaDaAgua4: string;
  massaDaAgua5: string;

  teorUmidade1: string;
  teorUmidade2: string;
  teorUmidade3: string;
  teorUmidade4: string;
  teorUmidade5: string;

  // Plasticity Limit Test (3 determinations)
  capsula6: string;
  capsula7: string;
  capsula8: string;

  massaSoloUmdCaps6: string;
  massaSoloUmdCaps7: string;
  massaSoloUmdCaps8: string;

  massaSoloSecCaps6: string;
  massaSoloSecCaps7: string;
  massaSoloSecCaps8: string;

  massaDaCapsula6: string;
  massaDaCapsula7: string;
  massaDaCapsula8: string;

  massaSoloSeco6: string;
  massaSoloSeco7: string;
  massaSoloSeco8: string;

  massaDaAgua6: string;
  massaDaAgua7: string;
  massaDaAgua8: string;

  teorUmidade6: string;
  teorUmidade7: string;
  teorUmidade8: string;

  // Results
  ll?: string; // Limite de Liquidez
  lp?: string; // Limite de Plasticidade
  ip?: string; // Índice de Plasticidade
  media: string; // Average moisture content for plasticity limit
  np: string; // Non-plastic indicator if applicable

  // Footer signatures
  executado: string;
  verificado: string;
  aprovado: string;
  assinaturaExecutado?: string;
  assinaturaVerificado?: string;
  assinaturaAprovado?: string;
  
  // Additional fields
  cliente?: string;
  logo?: string;
}

export interface LimitOfLiquidityAndPlasticityProps {
  data: LimitOfLiquidityAndPlasticityData;
}
