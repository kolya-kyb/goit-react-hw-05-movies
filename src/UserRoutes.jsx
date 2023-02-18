import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Loader from 'modules/Loader/Loader';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));
const MoviesDetailsPage = lazy(() =>
  import('./pages/MovieDetailsPage/MovieDetailsPage')
);
const CastPage = lazy(() => import('./pages/CastPage/CastPage'));
const ReviewsPage = lazy(() => import('./pages/ReviewsPage/ReviewsPage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={Loader}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MoviesDetailsPage />}>
          <Route path="cast" element={<CastPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Route>
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
