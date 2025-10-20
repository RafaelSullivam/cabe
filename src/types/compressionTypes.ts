// Types for Compression Model (Proctor Compaction Test)
export interface CompressionData {
  // Header data (same structure as others)
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
  normaEnsaio: string;
  energiaCompactacao: string;
  dataInicio: string;
  dataFinal: string;

  // 6 Compaction Points (P1-P6)
  // Point 1
  moldeP1: string;
  volumeMolde1: string;
  massaSoloUmidaP1: string;
  massaSoloUmiMassaMolP1: string;
  massaEspSecaP1: string;
  massaAgua1: string;
  umidadeMediaP1: string;

  // Point 2
  moldeP2: string;
  volumeMolde2: string;
  massaSoloUmidaP2: string;
  massaSoloUmiMassaMolP2: string;
  massaEspSecaP2: string;
  massaAgua2: string;
  umidadeMediaP2: string;

  // Point 3
  moldeP3: string;
  volumeMolde3: string;
  massaSoloUmidaP3: string;
  massaSoloUmiMassaMolP3: string;
  massaEspSecaP3: string;
  massaAgua3: string;
  umidadeMediaP3: string;

  // Point 4
  moldeP4: string;
  volumeMolde4: string;
  massaSoloUmidaP4: string;
  massaSoloUmiMassaMolP4: string;
  massaEspSecaP4: string;
  massaAgua4: string;
  umidadeMediaP4: string;

  // Point 5
  moldeP5: string;
  volumeMolde5: string;
  massaSoloUmidaP5: string;
  massaSoloUmiMassaMolP5: string;
  massaEspSecaP5: string;
  massaAgua5: string;
  umidadeMediaP5: string;

  // Point 6
  moldeP6: string;
  volumeMolde6: string;
  massaSoloUmidaP6: string;
  massaSoloUmiMassaMolP6: string;
  massaAgua6: string;

  // Moisture Content Determinations - Point 1 (3 determinations)
  capsulaP11: string;
  umidaCapsulaP11: string;
  secaCapsulaP11: string;
  massaCapsulaP11: string;
  massaSoloSecoP11: string;
  massaAguaP11: string;
  teorUmidadeP11: string;

  capsulaP12: string;
  umidaCapsulaP12: string;
  secaCapsulaP12: string;
  massaCapsulaP12: string;
  massaSoloSecoP12: string;
  massaAguaP12: string;
  teorUmidadeP12: string;

  capsulaP13: string;
  umidaCapsulaP13: string;
  secaCapsulaP13: string;
  massaCapsulaP13: string;
  massaSoloSecoP13: string;
  massaAguaP13: string;
  teorUmidadeP13: string;

  // Moisture Content Determinations - Point 2 (3 determinations)
  capsulaP21: string;
  umidaCapsulaP21: string;
  secaCapsulaP21: string;
  massaCapsulaP21: string;
  massaSoloSecoP21: string;
  massaAguaP21: string;
  teorUmidadeP21: string;

  capsulaP22: string;
  umidaCapsulaP22: string;
  secaCapsulaP22: string;
  massaCapsulaP22: string;
  massaSoloSecoP22: string;
  massaAguaP22: string;
  teorUmidadeP22: string;

  capsulaP23: string;
  umidaCapsulaP23: string;
  secaCapsulaP23: string;
  massaCapsulaP23: string;
  massaSoloSecoP23: string;
  massaAguaP23: string;
  teorUmidadeP23: string;

  // Moisture Content Determinations - Point 3 (3 determinations)
  capsulaP31: string;
  umidaCapsulaP31: string;
  secaCapsulaP31: string;
  massaCapsulaP31: string;
  massaSoloSecoP31: string;
  massaAguaP31: string;
  teorUmidadeP31: string;

  capsulaP32: string;
  umidaCapsulaP32: string;
  secaCapsulaP32: string;
  massaCapsulaP32: string;
  massaSoloSecoP32: string;
  massaAguaP32: string;
  teorUmidadeP32: string;

  capsulaP33: string;
  umidaCapsulaP33: string;
  secaCapsulaP33: string;
  massaCapsulaP33: string;
  massaSoloSecoP33: string;
  massaAguaP33: string;
  teorUmidadeP33: string;

  // Moisture Content Determinations - Point 4 (3 determinations)
  capsulaP41: string;
  umidaCapsulaP41: string;
  secaCapsulaP41: string;
  massaCapsulaP41: string;
  massaSoloSecoP41: string;
  massaAguaP41: string;
  teorUmidadeP41: string;

  capsulaP42: string;
  umidaCapsulaP42: string;
  secaCapsulaP42: string;
  massaCapsulaP42: string;
  massaSoloSecoP42: string;
  massaAguaP42: string;
  teorUmidadeP42: string;

  capsulaP43: string;
  umidaCapsulaP43: string;
  secaCapsulaP43: string;
  massaCapsulaP43: string;
  massaSoloSecoP43: string;
  massaAguaP43: string;
  teorUmidadeP43: string;

  // Moisture Content Determinations - Point 5 (3 determinations)
  capsulaP51: string;
  umidaCapsulaP51: string;
  secaCapsulaP51: string;
  massaCapsulaP51: string;
  massaSoloSecoP51: string;
  massaAguaP51: string;
  teorUmidadeP51: string;

  capsulaP52: string;
  umidaCapsulaP52: string;
  secaCapsulaP52: string;
  massaCapsulaP52: string;
  massaSoloSecoP52: string;
  massaAguaP52: string;
  teorUmidadeP52: string;

  capsulaP53: string;
  umidaCapsulaP53: string;
  secaCapsulaP53: string;
  massaCapsulaP53: string;
  massaSoloSecoP53: string;
  massaAguaP53: string;
  teorUmidadeP53: string;

  // Moisture Content Determinations - Point 6 (3 determinations)
  capsulaP61: string;
  umidaCapsulaP61: string;
  secaCapsulaP61: string;
  massaCapsulaP61?: string;
  massaSoloSecoP61?: string;
  massaAguaP61?: string;
  teorUmidadeP61?: string;

  capsulaP62: string;
  umidaCapsulaP62: string;
  secaCapsulaP62: string;
  massaCapsulaP62?: string;
  massaSoloSecoP62?: string;
  massaAguaP62?: string;
  teorUmidadeP62: string;

  capsulaP63: string;
  umidaCapsulaP63: string;
  secaCapsulaP63: string;
  massaCapsulaP63?: string;
  massaSoloSecoP63?: string;
  massaAguaP63?: string;
  teorUmidadeP63: string;

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
  observacao?: string;
  
  // Calculated results
  teorUmidadeMediaP1?: string;
  teorUmidadeMediaP2?: string;
  teorUmidadeMediaP3?: string;
  teorUmidadeMediaP4?: string;
  teorUmidadeMediaP5?: string;
  teorUmidadeMediaP6?: string;
  
  massaEspecificaSeca1?: string;
  massaEspecificaSeca2?: string;
  massaEspecificaSeca3?: string;
  massaEspecificaSeca4?: string;
  massaEspecificaSeca5?: string;
  massaEspecificaSeca6?: string;
  
  umidadeOtima?: string;
  massaEspecificaAparenteMaxima?: string;
  grauSaturacao?: string;
}

export interface CompressionProps {
  data: CompressionData;
}
