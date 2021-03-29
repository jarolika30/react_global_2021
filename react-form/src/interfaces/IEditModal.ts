import { IMovie } from '../selectors/interfaces/IMovie';

interface IFilm {
  id: string;
  title: string;
  year: number,
  ganre: string;
  img: string;
  rating: string;
  duration: string;
  description: string;
}

export interface IEditModal {
  show: boolean;
  onClose: (event: Event) => void;
  handleConfirm: (event: Event) => void;
  mode: boolean;
  movie: IFilm;
}
