// Tipos principais do projeto

export interface ClienteData {
  logo?: string;
  abntImage?: string;
  nome?: string;
}

export interface RelatorioData {
  titulo: string;
  subtitulo: string;
  tipo: 'UMIDADE' | 'DENSIDADE' | 'GRANULOMETRIA' | 'OUTROS';
}

export interface DadosRelatorio {
  cliente: {
    nome: string;
    logo?: string;
  };
  abnt: {
    imagem?: string;
  };
  relatorio: {
    titulo: string;
    subtitulo: string;
    tipo: 'UMIDADE' | 'DENSIDADE' | 'GRANULOMETRIA' | 'OUTROS';
  };
}

export interface PrintMenuProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onBackToSelection?: () => void;
}

export interface A4ContainerProps {
  children: any; // ReactNode será tipado nos componentes
  darkMode: boolean;
}

export interface HeaderTableProps {
  logo?: string;
  abntImage?: string;
  cliente?: ClienteData;
  relatorio?: RelatorioData;
}

// Tipos para funções utilitárias
export interface KeyboardCallbacks {
  onPrint: () => void;
  onPreview: () => void;
  onToggleDarkMode: () => void;
}

export interface PrintConfig {
  pageSize: 'A4' | 'A3' | 'Letter';
  orientation: 'portrait' | 'landscape';
  margins: string;
}

export interface ThemeConfig {
  darkMode: {
    background: string;
    containerBg: string;
    textColor: string;
  };
  lightMode: {
    background: string;
    containerBg: string;
    textColor: string;
  };
}

// Tipos para mensagens do sistema
export interface SystemMessages {
  pdfInstructions: string;
  copySuccess: string;
  copyError: string;
  menuLoadError?: string;
}

// Hook personalizado
export type UseDarkModeReturn = [boolean, () => void];

// Export all model types
export * from './waterContentTypes';
export * from './actualSpecificMassInGrainsTypes';
export * from './determinationOfApparentSpecificMassTypes';
export * from './pdlTypes';
export * from './pdlGraphTypes';
export * from './pdlPhotoTypes';
export * from './mainSheetTypes';
export * from './determineMaximumAndMinimumSandTypes';
export * from './granulometricAnalysisBySievingTypes';
export * from './compressionTypes';
export * from './limitOfLiquidityAndPlasticityTypes';
export * from './determinationOfSpecificMassOfConstantMassTypes';
export * from './determinationOfTheSpecificMassOfVariableMassTypes';
