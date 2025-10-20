// Types for PDL Graph Model
export interface PDLGraphData {
  // Header data
  numeroAmostra: string;
  norma: string;
  processo: string;
  identificacao: string;
  data: string;
  estacaPosicao: string;
  obra: string;
  datum: string;
  coordenadaX: string;
  coordenadaY: string;
  coordenadaZ: string;
  camada: string;
  responsavel: string;
  localArea: string;
  especificacaoTecnica: string;
  material: string;

  // Graph image
  graphImage: string; // base64 encoded image

  // Footer
  statusEnsaio: string;
  aprovado: boolean;
  observacao: string;
  executado: string;
  codigoLaboratorio: string;
  dataEmissao: string;
  pagina: number;
  totalPaginas: number;
}
