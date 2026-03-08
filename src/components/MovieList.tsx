import { Movie } from '@/utils/api';
import MovieCard from './MovieCard';

interface MovieListProps {
  movies: Movie[];
  onMovieClick?: (movie: Movie) => void;
}

export default function MovieList({ movies, onMovieClick }: MovieListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onClick={() => onMovieClick?.(movie)}
        />
      ))}
    </div>
  );
}
