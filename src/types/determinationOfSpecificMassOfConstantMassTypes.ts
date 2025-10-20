// Types for Determination of Specific Mass of Constant Mass (Permeability - Constant Head)
export interface DeterminationOfSpecificMassOfConstantMassData {
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
  cargaHidraulica: string;
  tempeEnsaio: string;

  // Permeability measurements (7 readings)
  dtDataT1: string;
  dtDataT2: string;
  dtDataT3: string;
  dtDataT4: string;
  dtDataT5: string;
  dtDataT6: string;
  dtDataT7: string;
  dtDataT8: string;
  dtDataT9: string;
  dtDataT10: string;
  dtDataT11: string;
  dtDataT12: string;
  dtDataT13: string;
  dtDataT14: string;

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

  deltaT1: string;
  deltaT2: string;
  deltaT3: string;
  deltaT4: string;
  deltaT5: string;
  deltaT6: string;
  deltaT7: string;

  deltaV1: string;
  deltaV2: string;
  deltaV3: string;
  deltaV4: string;
  deltaV5: string;
  deltaV6: string;
  deltaV7: string;

  q1: string;
  q2: string;
  q3: string;
  q4: string;
  q5: string;
  q6: string;
  q7: string;

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
