export interface PDLData {
  // Header data
  Identificacao: string;
  Data: string;
  Estaca_Posicao: string;
  Obra: string;
  Camada: string;
  Responsavel: string;
  Local_Area: string;
  Especificacao_Tec: string;
  
  // Equipment control
  Equipamento_pdl: string;
  TipoSolo_1: string;
  MarcacaoLeitura_1: string;
  
  // Profundidade data (15 rows)
  ProfundidadeDe1_1: string;
  N_Golpe1_1: string;
  TX_Adm1_1: string;
  ProfundidadeDe2_1: string;
  N_Golpe2_1: string;
  TX_Adm2_1: string;
  ProfundidadeDe3_1: string;
  N_Golpe3_1: string;
  TX_Adm3_1: string;
  ProfundidadeDe4_1: string;
  N_Golpe4_1: string;
  TX_Adm4_1: string;
  ProfundidadeDe5_1: string;
  N_Golpe5_1: string;
  TX_Adm5_1: string;
  ProfundidadeDe6_1: string;
  N_Golpe6_1: string;
  TX_Adm6_1: string;
  ProfundidadeDe7_1: string;
  N_Golpe7_1: string;
  TX_Adm7_1: string;
  ProfundidadeDe8_1: string;
  N_Golpe8_1: string;
  TX_Adm8_1: string;
  ProfundidadeDe9_1: string;
  N_Golpe9_1: string;
  TX_Adm9_1: string;
  ProfundidadeDe10_1: string;
  N_Golpe10_1: string;
  TX_Adm10_1: string;
  ProfundidadeDe11_1: string;
  N_Golpe11_1: string;
  TX_Adm11_1: string;
  ProfundidadeDe12_1: string;
  N_Golpe12_1: string;
  TX_Adm12_1: string;
  ProfundidadeDe13_1: string;
  N_Golpe13_1: string;
  TX_Adm13_1: string;
  ProfundidadeDe14_1: string;
  N_Golpe14_1: string;
  TX_Adm14_1: string;
  ProfundidadeDe15_1: string;
  N_Golpe15_1: string;
  TX_Adm15_1: string;
  
  // Status
  StatusEnsaio: string;
  Cond_Ensaio: string; // "Aprovado" or "Reprovado"
  Observacao: string;
  Executado: string;
}
