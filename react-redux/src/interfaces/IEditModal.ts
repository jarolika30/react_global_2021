import { IMovie } from '../selectors/interfaces/IMovie';

interface IFilm {
  id: number;
  title: string;
  year: number,
  ganre: string;
  img: string;
  rating: number;
  duration: number;
  description: string;
}

export interface IEditModal {
  show: boolean;
  onClose: (event: Event) => void;
  handleConfirm: (event: Event) => void;
  mode: boolean;
  movie: IFilm;
}
