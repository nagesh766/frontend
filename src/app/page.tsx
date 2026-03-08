'use client';

import { useState } from 'react';
import SearchBar from '@/components/SearchBar';
import MovieList from '@/components/MovieList';
import { Movie, searchMovies, getMovieRecommendations, getPopularMovies } from '@/utils/api';

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [recommendations, setRecommendations] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query: string) => {
    setLoading(true);
    try {
      const results = await searchMovies(query);
      setMovies(results);
      setRecommendations([]);
      setSelectedMovie(null);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
    setLoading(false);
  };

  const handleMovieClick = async (movie: Movie) => {
    setSelectedMovie(movie);
    setLoading(true);
    try {
      const recs = await getMovieRecommendations(movie.id);
      setRecommendations(recs);
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    }
    setLoading(false);
  };

  const loadPopular = async () => {
    setLoading(true);
    try {
      const popular = await getPopularMovies();
      setMovies(popular);
      setRecommendations([]);
      setSelectedMovie(null);
    } catch (error) {
      console.error('Error fetching popular movies:', error);
    }
    setLoading(false);
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Movie Recommender</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="mb-8">
        <button
          onClick={loadPopular}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Load Popular Movies
        </button>
      </div>
      {loading && <p className="text-center">Loading...</p>}
      {movies.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {selectedMovie ? `Movies similar to "${selectedMovie.title}"` : 'Search Results'}
          </h2>
          <MovieList movies={movies} onMovieClick={handleMovieClick} />
        </div>
      )}
      {recommendations.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Recommended Movies</h2>
          <MovieList movies={recommendations} />
        </div>
      )}
    </main>
  );
}
