# Movie Recommender App

A Next.js application that allows users to search for movies and get recommendations based on selected movies using The Movie Database (TMDB) API.

## Features

- Search for movies by title
- View popular movies
- Click on a movie to get similar movie recommendations
- Responsive design with Tailwind CSS

## Setup

1. Clone or download the project.

2. Install dependencies:
   ```
   npm install
   ```

3. Get a TMDB API key:
   - Go to [TMDB API](https://www.themoviedb.org/settings/api)
   - Create an account and request an API key

4. Create a `.env.local` file in the root directory and add your API key:
   ```
   NEXT_PUBLIC_TMDB_API_KEY=your_actual_api_key_here
   ```

5. Run the development server:
   ```
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## How to Use

- Enter a movie title in the search bar and click "Search" to find movies.
- Click "Load Popular Movies" to see trending movies.
- Click on any movie card to view recommendations similar to that movie.

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- TMDB API
