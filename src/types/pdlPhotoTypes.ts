// Types for PDL Photo Model
export interface PDLPhotoData {
  // Header data (same as PDLGraphData)
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

  // Photo and map images
  photoImage: string; // base64 encoded image
  mapImage: string; // base64 encoded map image

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
