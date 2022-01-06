export const HomePath ="/home"

export type MovieProps = {
  id: string;
  name?: string;
  title?: string;
  overview: string;
  poster_path: string;
}

export type SectionsMoviesProps = {
  id: number;
  name: string;
  movies: MovieProps[];
}