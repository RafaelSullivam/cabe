import { DadosRelatorio } from '../types'

// Dados de exemplo para demonstrar o sistema

// Dados de exemplo - você pode substituir pelos dados reais
export const dadosExemplo: DadosRelatorio = {
  cliente: {
    nome: "Geocontrole Ltda",
    // logo: "base64_string_aqui" // Descomente e adicione a string base64 do logo
  },
  abnt: {
    // imagem: "caminho/para/imagem/abnt.png" // Descomente e adicione o caminho da imagem
  },
  relatorio: {
    titulo: "RELATÓRIO ENSAIO",
    subtitulo: "DETERMINAÇÃO DO TEOR DE UMIDADE DO SOLO",
    tipo: "UMIDADE"
  }
}

// Dados de exemplo com diferentes tipos de relatório
export const exemplosDados: DadosRelatorio[] = [
  {
    cliente: {
      nome: "Empresa ABC Ltda",
    },
    abnt: {},
    relatorio: {
      titulo: "RELATÓRIO ENSAIO",
      subtitulo: "DETERMINAÇÃO DO TEOR DE UMIDADE DO SOLO",
      tipo: "UMIDADE"
    }
  },
  {
    cliente: {
      nome: "Construtora XYZ",
    },
    abnt: {},
    relatorio: {
      titulo: "RELATÓRIO ENSAIO", 
      subtitulo: "ENSAIO DE DENSIDADE DO SOLO",
      tipo: "DENSIDADE"
    }
  },
  {
    cliente: {
      nome: "Engenharia 123",
    },
    abnt: {},
    relatorio: {
      titulo: "RELATÓRIO ENSAIO",
      subtitulo: "ANÁLISE GRANULOMÉTRICA",
      tipo: "GRANULOMETRIA"
    }
  }
]