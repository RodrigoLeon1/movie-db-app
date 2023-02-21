export interface Movie {
  id: number;
  overview: string;
  title: string;
  runtime: number | string | undefined;
  voteAverage: number;
  posterImg: string;
  backdropImg?: string;
  releaseDate?: string;
}
