// Types for Determination of The Specific Mass of Variable Mass (Permeability - Variable/Falling Head)
export interface DeterminationOfTheSpecificMassOfVariableMassData {
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
  normaEnsaio: string;
  dataInicio: string;
  dataFinal: string;
  observacao: string;

  // Sample dimensions
  diametroInicial: string;
  diametroFinal: string;
  alturaInicial: string;
  alturaFinal: string;
  areaInicial: string;
  areaFinal: string;
  areaInternaTubo: string;

  // Mass properties
  massaUmida: string;
  massaSeca: string;
  massaEspHumida: string;
  massaEspSeca: string;
  massaEspGraos: string;
  indiceVazios: string;
  grauSaturacao: string;

  // Test conditions
  tensaoConfinamento: string;
  tempeEnsaio: string;

  // Variable head measurements (14 readings with H measurements)
  dataT1: string;
  dataT2: string;
  dataT3: string;
  dataT4: string;
  dataT5: string;
  dataT6: string;
  dataT7: string;
  dataT8: string;
  dataT9: string;
  dataT10: string;
  dataT11: string;
  dataT12: string;
  dataT13: string;
  dataT14: string;

  horaT1: string;
  horaT2: string;
  horaT3: string;
  horaT4: string;
  horaT5: string;
  horaT6: string;
  horaT7: string;
  horaT8: string;
  horaT9: string;
  horaT10: string;
  horaT11: string;
  horaT12: string;
  horaT13: string;
  horaT14: string;

  // Head measurements (H0-H14)
  h0: string;
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  h5: string;
  h6: string;
  h7: string;
  h8: string;
  h9: string;
  h10: string;
  h11: string;
  h12: string;
  h13: string;
  h14: string;

  // Delta values for 7 calculations
  deltaT1: string;
  deltaT2: string;
  deltaT3: string;
  deltaT4: string;
  deltaT5: string;
  deltaT6: string;
  deltaT7: string;

  aH1: string;
  aH2: string;
  aH3: string;
  aH4: string;
  aH5: string;
  aH6: string;
  aH7: string;

  k1: string;
  k2: string;
  k3: string;
  k4: string;
  k5: string;
  k6: string;
  k7: string;

  coeficientePerme: string;
  coeficientePerme20C: string;

  // Footer signatures
  executado: string;
  verificado: string;
  aprovado: string;
}
