import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './modules/Navbar/Navbar';
import FilmTrending from 'modules/FilmTrending/FilmTrending';

import HomePage from './pages/HomePage/HomePage';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import MoviesDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
import CastPage from './pages/CastPage/CastPage';
import ReviewsPage from './pages/ReviewsPage/ReviewsPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MoviesDetailsPage />}>
            <Route path="cast" element={<CastPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
