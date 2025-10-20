export interface DeterminationOfApparentSpecificMassData {
  // Dados do cabeçalho
  DataInicio: string;
  DataFinal: string;
  Executado: string;
  Aprovado: string;
  Verificado: string;
  Observacao: string;
  NormaEnsaio: string;

  // Corpo de prova I
  MassaHumidaP1: string;
  MassaCorpoParafinadoP1: string;
  MassaCorpoSubmersoP1: string;
  MassaParafinaP1: string;
  CapsulaP1: string;
  AmostraUmidaP1: string;
  AmostraSecaP1: string;
  MassaCapsulaP1: string;
  MassaAguaP1: string;
  MassaSoloSecoP1: string;
  TeorUmidadeP1: string;
  VolumeCorpoP1: string;
  MassaEspUmidaP1: string;
  MassaEspSecaP1: string;

  // Corpo de prova II
  MassaHumidaP2: string;
  MassaCorpoParafinadoP2: string;
  MassaCorpoSubmersoP2: string;
  MassaParafinaP2: string;
  CapsulaP2: string;
  AmostraUmidaP2: string;
  AmostraSecaP2: string;
  MassaCapsulaP2: string;
  MassaAguaP2: string;
  MassaSoloSecoP2: string;
  TeorUmidadeP2: string;
  VolumeCorpoP2: string;
  MassaEspUmidaP2: string;
  MassaEspSecaP2: string;

  // Corpo de prova III
  MassaHumidaP3: string;
  MassaCorpoParafinadoP3: string;
  MassaCorpoSubmersoP3: string;
  MassaParafinaP3: string;
  CapsulaP3: string;
  AmostraUmidaP3: string;
  AmostraSecaP3: string;
  MassaCapsulaP3: string;
  MassaAguaP3: string;
  MassaSoloSecoP3: string;
  TeorUmidadeP3: string;
  VolumeCorpoP3: string;
  MassaEspUmidaP3: string;
  MassaEspSecaP3: string;

  // Resultados finais
  MediaTeorUmidade: string;
  MediaMassaEspSeca: string;
  incertezaexpandida: string;
  k: string;
}
