export interface MainSheetData {
  // Dados gerais
  responsibility: string;
  classification1: string;
  classification2: string;
  descriptionSolo: string;
  observation: string;
  inundado: string;
  
  // Header data
  Processo: string;
  Lote: string;
  Data_Registro: string;
  Sondagem: string;
  Datum: string;
  Coordenada_X: string;
  Coordenada_Y: string;
  Coordenada_Z: string;
  Profundidade_Inicial: string;
  Profundidade_Final: string;
  Aplicacao: string;
  Obra: string;
  Especificacao_tecnica: string;
  Localizacao: string;
  
  // Resumo dos ensaios
  mediaPesoEspUmido?: string;
  np?: string;
  calculoCc?: string;
  calculoCu?: string;
  massaEspSecaMax?: string;
  teorDeUmidade?: string;
  checkCargaVariavel?: boolean;
  checkCargaConstante?: boolean;
  checkCoeficienteConstanteEVariavel?: boolean;
  valorCoeficientePermeabilidade?: string;
  valorTensao?: string;
  checkTensaoConstanteEVariavel?: boolean;
  
  // Aprovação/Verificação
  Aprovacao: string;
  Verificacao: string;
}
