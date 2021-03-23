export interface IMovie {
  id: string; 
  title: string; 
  tagline: string;
  release_date: string;
  genres: Array<string>;
  poster_path: string;
  vote_average: string;
  vote_count: string;
  runtime: string;
  overview: string;
  budget: string;
  revenue: string;
}
