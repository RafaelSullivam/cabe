// Tipos para o modelo WaterContentModel

export interface WaterContentData {
  // Dados do ensaio
  Executado: string;
  Aprovado: string;
  Verificado: string;
  NormaEnsaio: string;
  DataInicio: string;
  DataFinal: string;
  
  // Temperaturas
  Temp_CheckBox1: string; // "P1" ou ""
  Temp_CheckBox2: string; // "P2" ou ""
  
  // Dados das cápsulas (4 cápsulas)
  Capsula1: string;
  Capsula2: string;
  Capsula3: string;
  Capsula4: string;
  
  // Massas úmidas
  MassaUmida1: string;
  MassaUmida2: string;
  MassaUmida3: string;
  MassaUmida4: string;
  
  // Massas secas
  MassaSeca1: string;
  MassaSeca2: string;
  MassaSeca3: string;
  MassaSeca4: string;
  
  // Massas das cápsulas
  MassaCapsula1: string;
  MassaCapsula2: string;
  MassaCapsula3: string;
  MassaCapsula4: string;
  
  // Massas da água (calculadas)
  MassaAgua1: string;
  MassaAgua2: string;
  MassaAgua3: string;
  MassaAgua4: string;
  
  // Massas do solo seco (calculadas)
  MassaSoloSeco1: string;
  MassaSoloSeco2: string;
  MassaSoloSeco3: string;
  MassaSoloSeco4: string;
  
  // Teores de umidade (calculados)
  TeorAgua1: string;
  TeorAgua2: string;
  TeorAgua3: string;
  TeorAgua4: string;
  
  // Média e incertezas
  Media: string;
  Incerteza: string;
  Expansao: string;
}

export interface SignatureData {
  Nome: string;
  Assinatura: string; // Base64 string
}

export interface WaterContentModelProps {
  dataRehearsal: WaterContentData;
  codSample: string;
  numberSample: string;
  observation: string;
  pagina: number;
  totalPaginas: number;
  logo?: string; // Base64 string
  dataFormatada: string;
  signatures?: {
    executador?: SignatureData;
    aprovador?: SignatureData;
    verificador?: SignatureData;
    marciel?: SignatureData;
  };
}