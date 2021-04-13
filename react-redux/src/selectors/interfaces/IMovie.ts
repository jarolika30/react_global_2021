export interface IMovie {
  id: number; 
  title: string; 
  tagline: string;
  release_date: string;
  genres: Array<string>;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  runtime: number;
  overview: string;
  budget: number;
  revenue: number;
}
