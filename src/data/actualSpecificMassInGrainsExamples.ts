import { ActualSpecificMassInGrainsData } from '../types/actualSpecificMassInGrainsTypes';

export const actualSpecificMassInGrainsExample: ActualSpecificMassInGrainsData = {
  // Dados do cabeçalho
  DataInicio: '10/10/2025',
  DataFinal: '15/10/2025',
  Executado: 'João Silva',
  Aprovado: 'Maria Santos',
  Verificado: 'Carlos Oliveira',
  Observacao: 'Ensaio realizado conforme procedimento interno PP-LB-010-02.',

  // Tipo de Secagem
  Temp_CheckBox1: 'COM', // Com secagem prévia ao ar
  Temp_CheckBox2: '', // Sem secagem prévia ao ar

  // Dados do corpo de prova I
  PICNOMETRO1: 'P-001',
  massaUmidaDoCorpoDeProva1: '50.25',
  Capsula1: 'C-101',
  Capsula2: 'C-102',
  Capsula3: 'C-103',
  massaDoSoloUmdCaps1: '45.67',
  massaDoSoloUmdCaps2: '46.12',
  massaDoSoloUmdCaps3: '45.89',
  massaDoSoloSecCaps1: '42.34',
  massaDoSoloSecCaps2: '42.78',
  massaDoSoloSecCaps3: '42.56',
  MassaCaps1: '35.21',
  MassaCaps2: '35.45',
  MassaCaps3: '35.33',
  teorDeUmd1: '7.86',
  teorDeUmd2: '7.90',
  teorDeUmd3: '7.88',
  teorDeUmdMEDIO1: '7.88',
  massaPicAgDestilada1: '654.32',
  massaPicCorpoProva1: '688.45',
  temperaturaDoEnsaio1: '25.0',
  massaEspDaAguaATempT1: '0.997',
  massaEspCorpoProva1: '2.650',

  // Dados do corpo de prova II
  PICNOMETRO2: 'P-002',
  massaUmidaDoCorpoDeProva2: '50.18',
  Capsula4: 'C-201',
  Capsula5: 'C-202',
  Capsula6: 'C-203',
  massaDoSoloUmdCaps4: '45.89',
  massaDoSoloUmdCaps5: '46.23',
  massaDoSoloUmdCaps6: '45.97',
  massaDoSoloSecCaps4: '42.56',
  massaDoSoloSecCaps5: '42.89',
  massaDoSoloSecCaps6: '42.64',
  MassaCaps4: '35.42',
  MassaCaps5: '35.67',
  MassaCaps6: '35.51',
  teorDeUmd4: '7.82',
  teorDeUmd5: '7.85',
  teorDeUmd6: '7.83',
  teorDeUmdMEDIO2: '7.83',
  massaPicAgDestilada2: '655.12',
  massaPicCorpoProva2: '689.23',
  temperaturaDoEnsaio2: '25.0',
  massaEspDaAguaATempT2: '0.997',
  massaEspCorpoProva2: '2.648',

  // Resultados finais
  massaEspMEDIA: '2.649',
  incertezaexpandida: '±0.012',
  k: '2.00'
};
