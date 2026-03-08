import { Movie } from '@/utils/api';

interface MovieCardProps {
  movie: Movie;
  onClick?: () => void;
}

export default function MovieCard({ movie, onClick }: MovieCardProps) {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : '/placeholder.png'; // You can add a placeholder image

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
      onClick={onClick}
    >
      <img
        src={posterUrl}
        alt={movie.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{movie.title}</h3>
        <p className="text-gray-600 text-sm mb-2">
          {movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'}
        </p>
        <p className="text-gray-700 text-sm line-clamp-3">{movie.overview}</p>
        <p className="text-yellow-500 font-semibold mt-2">
          Rating: {movie.vote_average.toFixed(1)}
        </p>
      </div>
    </div>
  );
}
