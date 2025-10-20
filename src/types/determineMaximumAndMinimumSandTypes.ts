// Types for Determine Maximum and Minimum Sand Model
export interface DetermineMaximumAndMinimumSandData {
  // Header data (reusing HeaderTable structure)
  numeroAmostra: string;
  obra: string;
  cliente: string;
  local: string;
  profundidade: string;
  sondagem: string;
  cota: string;
  amostraRecebidaEm: string;
  inicioDoEnsaioEm: string;
  terminoDoEnsaioEm: string;
  materialEnsaiado: string;
  procedencia: string;
  nsr: string;
  dimensaoMaximaCaracteristica: string;
  aplicacao: string;
  responsavelPelaColeta: string;
  dataEmissao: string;

  // Minimum specific mass table (Massa específica mínima)
  minMolde: string;
  minVolumeMolde: string;
  minPesoMolde: string;
  minMassaEspecificaDasParticulas: string;
  minPesoMoldeAreia1: string;
  minPesoMoldeAreia2: string;
  minPesoMoldeAreia3: string;
  minPesoAreia1: string;
  minPesoAreia2: string;
  minPesoAreia3: string;
  minMassaEspecifica1: string;
  minMassaEspecifica2: string;
  minMassaEspecifica3: string;
  minMassaEspecificaMinimaMedia: string;
  minIndiceVaziosMaximos: string;

  // Maximum specific mass table (Massa específica máxima) - 9 specimens
  maxMolde: string;
  maxVolumeMolde: string;
  maxPesoMolde: string;
  
  maxPesoMoldeAreia1: string;
  maxPesoMoldeAreia2: string;
  maxPesoMoldeAreia3: string;
  maxPesoMoldeAreia4: string;
  maxPesoMoldeAreia5: string;
  maxPesoMoldeAreia6: string;
  maxPesoMoldeAreia7: string;
  maxPesoMoldeAreia8: string;
  maxPesoMoldeAreia9: string;

  maxPesoAreia1: string;
  maxPesoAreia2: string;
  maxPesoAreia3: string;
  maxPesoAreia4: string;
  maxPesoAreia5: string;
  maxPesoAreia6: string;
  maxPesoAreia7: string;
  maxPesoAreia8: string;
  maxPesoAreia9: string;

  maxMassaEspecificaUmida1: string;
  maxMassaEspecificaUmida2: string;
  maxMassaEspecificaUmida3: string;
  maxMassaEspecificaUmida4: string;
  maxMassaEspecificaUmida5: string;
  maxMassaEspecificaUmida6: string;
  maxMassaEspecificaUmida7: string;
  maxMassaEspecificaUmida8: string;
  maxMassaEspecificaUmida9: string;

  maxSoloAguaCapsula1: string;
  maxSoloAguaCapsula2: string;
  maxSoloAguaCapsula3: string;
  maxSoloAguaCapsula4: string;
  maxSoloAguaCapsula5: string;
  maxSoloAguaCapsula6: string;
  maxSoloAguaCapsula7: string;
  maxSoloAguaCapsula8: string;
  maxSoloAguaCapsula9: string;

  maxSoloSecoCapsula1: string;
  maxSoloSecoCapsula2: string;
  maxSoloSecoCapsula3: string;
  maxSoloSecoCapsula4: string;
  maxSoloSecoCapsula5: string;
  maxSoloSecoCapsula6: string;
  maxSoloSecoCapsula7: string;
  maxSoloSecoCapsula8: string;
  maxSoloSecoCapsula9: string;

  maxCapsula1: string;
  maxCapsula2: string;
  maxCapsula3: string;
  maxCapsula4: string;
  maxCapsula5: string;
  maxCapsula6: string;
  maxCapsula7: string;
  maxCapsula8: string;
  maxCapsula9: string;

  maxMassaAgua1: string;
  maxMassaAgua2: string;
  maxMassaAgua3: string;
  maxMassaAgua4: string;
  maxMassaAgua5: string;
  maxMassaAgua6: string;
  maxMassaAgua7: string;
  maxMassaAgua8: string;
  maxMassaAgua9: string;

  maxTeorUmidade1: string;
  maxTeorUmidade2: string;
  maxTeorUmidade3: string;
  maxTeorUmidade4: string;
  maxTeorUmidade5: string;
  maxTeorUmidade6: string;
  maxTeorUmidade7: string;
  maxTeorUmidade8: string;
  maxTeorUmidade9: string;

  maxTeorUmidadeMedio: string;

  maxMassaEspecificaSeca1: string;
  maxMassaEspecificaSeca2: string;
  maxMassaEspecificaSeca3: string;
  maxMassaEspecificaSeca4: string;
  maxMassaEspecificaSeca5: string;
  maxMassaEspecificaSeca6: string;
  maxMassaEspecificaSeca7: string;
  maxMassaEspecificaSeca8: string;
  maxMassaEspecificaSeca9: string;

  maxMassaEspecificaMaximaMedia: string;
  maxIndiceVaziosMinimos: string;

  // Footer signatures
  executado: string;
  executadoData: string;
  verificado: string;
  verificadoData: string;
  aprovado: string;
  aprovadoData: string;
}
