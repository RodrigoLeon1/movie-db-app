import { ApiCompany } from './ApiCompany';
import { ApiCountry } from './ApiCountry';
import { ApiGenre } from './ApiGenre';

export interface ApiMovie {
  id: number;
  imdb_id?: number;
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  budget?: number;
  runtime?: number;
  production_companies?: ApiCompany[];
  production_countries?: ApiCountry[];
  genres?: ApiGenre[];
}
