export interface ICreateMovie {
  title: string; 
  release_date: string;
  genres: Array<string>;
  poster_path: string;
  runtime: number;
  overview: string;
}
