import { WaterContentData, WaterContentModelProps } from '../types/waterContentTypes';

// Dados de exemplo para teste do WaterContentModel
export const exemploWaterContentData: WaterContentData = {
  // Responsáveis
  Executado: "João Silva",
  Aprovado: "Maria Santos", 
  Verificado: "Carlos Oliveira",
  NormaEnsaio: "ABNT NBR 6457/2016",
  DataInicio: "15/10/2025",
  DataFinal: "16/10/2025",
  
  // Configuração de temperatura
  Temp_CheckBox1: "P1", // 60º/65º selecionado
  Temp_CheckBox2: "", // 105º/110º não selecionado
  
  // Dados das 4 cápsulas
  Capsula1: "C-001",
  Capsula2: "C-002", 
  Capsula3: "C-003",
  Capsula4: "C-004",
  
  // Massas úmidas (g)
  MassaUmida1: "45.67",
  MassaUmida2: "43.21",
  MassaUmida3: "44.89",
  MassaUmida4: "46.12",
  
  // Massas secas (g)
  MassaSeca1: "42.34",
  MassaSeca2: "40.87",
  MassaSeca3: "42.01",
  MassaSeca4: "43.25",
  
  // Massas das cápsulas (g)
  MassaCapsula1: "18.45",
  MassaCapsula2: "17.98",
  MassaCapsula3: "18.76",
  MassaCapsula4: "19.01",
  
  // Massas da água (calculadas automaticamente)
  MassaAgua1: "3.33",
  MassaAgua2: "2.34", 
  MassaAgua3: "2.88",
  MassaAgua4: "2.87",
  
  // Massas do solo seco (calculadas)
  MassaSoloSeco1: "23.89",
  MassaSoloSeco2: "22.89",
  MassaSoloSeco3: "23.25",
  MassaSoloSeco4: "24.24",
  
  // Teores de umidade (%)
  TeorAgua1: "13.95",
  TeorAgua2: "10.23",
  TeorAgua3: "12.39",
  TeorAgua4: "11.84",
  
  // Resultados finais
  Media: "12.10",
  Incerteza: "±1.2",
  Expansao: "2.0"
};

// Exemplo completo de props para o WaterContentModel
export const exemploWaterContentProps: WaterContentModelProps = {
  dataRehearsal: exemploWaterContentData,
  codSample: "AM-001", 
  numberSample: "001",
  observation: "",
  pagina: 1,
  totalPaginas: 1,
  logo: "", // Base64 do logo seria inserido aqui
  dataFormatada: "17/10/2025",
  signatures: {
    executador: {
      Nome: "João Silva",
      Assinatura: "" // Base64 da assinatura
    },
    verificador: {
      Nome: "Carlos Oliveira", 
      Assinatura: "" // Base64 da assinatura
    },
    aprovador: {
      Nome: "Maria Santos",
      Assinatura: "" // Base64 da assinatura
    },
    marciel: {
      Nome: "Marciel Artur",
      Assinatura: "" // Base64 da assinatura
    }
  }
};

// Função utilitária para calcular valores automaticamente
export const calcularDadosWaterContent = (dados: Partial<WaterContentData>): WaterContentData => {
  const resultado = { ...exemploWaterContentData, ...dados };
  
  // Calcular massa da água (Massa Úmida - Massa Seca)
  for (let i = 1; i <= 4; i++) {
    const massaUmida = parseFloat(resultado[`MassaUmida${i}` as keyof WaterContentData] as string) || 0;
    const massaSeca = parseFloat(resultado[`MassaSeca${i}` as keyof WaterContentData] as string) || 0;
    const massaAgua = massaUmida - massaSeca;
    resultado[`MassaAgua${i}` as keyof WaterContentData] = massaAgua.toFixed(2) as any;
  }
  
  // Calcular massa do solo seco (Massa Seca - Massa Cápsula)
  for (let i = 1; i <= 4; i++) {
    const massaSeca = parseFloat(resultado[`MassaSeca${i}` as keyof WaterContentData] as string) || 0;
    const massaCapsula = parseFloat(resultado[`MassaCapsula${i}` as keyof WaterContentData] as string) || 0;
    const massaSoloSeco = massaSeca - massaCapsula;
    resultado[`MassaSoloSeco${i}` as keyof WaterContentData] = massaSoloSeco.toFixed(2) as any;
  }
  
  // Calcular teor de umidade (Massa Água / Massa Solo Seco * 100)
  const teores: number[] = [];
  for (let i = 1; i <= 4; i++) {
    const massaAgua = parseFloat(resultado[`MassaAgua${i}` as keyof WaterContentData] as string) || 0;
    const massaSoloSeco = parseFloat(resultado[`MassaSoloSeco${i}` as keyof WaterContentData] as string) || 0;
    const teorUmidade = massaSoloSeco > 0 ? (massaAgua / massaSoloSeco) * 100 : 0;
    resultado[`TeorAgua${i}` as keyof WaterContentData] = teorUmidade.toFixed(2) as any;
    teores.push(teorUmidade);
  }
  
  // Calcular média
  const media = teores.reduce((sum, val) => sum + val, 0) / teores.length;
  resultado.Media = media.toFixed(2);
  
  return resultado;
};