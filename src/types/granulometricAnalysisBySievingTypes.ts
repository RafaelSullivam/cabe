// Types for Granulometric Analysis By Sieving Model
export interface GranulometricAnalysisBySievingData {
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

  // Main table data
  norma: string;
  dataInicio: string;
  dataFinal: string;
  massaProvote: string; // Massa total da amostra seca
  observacoes: string;

  // Sieve data - 16 sieves
  dimensao1: string;
  dimensao2: string;
  dimensao3: string;
  dimensao4: string;
  dimensao5: string;
  dimensao6: string;
  dimensao7: string;
  dimensao8: string;
  dimensao9: string;
  dimensao10: string;
  dimensao11: string;
  dimensao12: string;
  dimensao13: string;
  dimensao14: string;
  dimensao15: string;
  dimensao16: string;

  retidos1: string;
  retidos2: string;
  retidos3: string;
  retidos4: string;
  retidos5: string;
  retidos6: string;
  retidos7: string;
  retidos8: string;
  retidos9: string;
  retidos10: string;
  retidos11: string;
  retidos12: string;
  retidos13: string;
  retidos14: string;
  retidos15: string;
  retidos16: string;

  acumulados1: string;
  acumulados2: string;
  acumulados3: string;
  acumulados4: string;
  acumulados5: string;
  acumulados6: string;
  acumulados7: string;
  acumulados8: string;
  acumulados9: string;
  acumulados10: string;
  acumulados11: string;
  acumulados12: string;
  acumulados13: string;
  acumulados14: string;
  acumulados15: string;
  acumulados16: string;

  passados1: string;
  passados2: string;
  passados3: string;
  passados4: string;
  passados5: string;
  passados6: string;
  passados7: string;
  passados8: string;
  passados9: string;
  passados10: string;
  passados11: string;
  passados12: string;
  passados13: string;
  passados14: string;
  passados15: string;
  passados16: string;

  // Footer signatures
  executado: string;
  verificado: string;
  aprovado: string;
}
