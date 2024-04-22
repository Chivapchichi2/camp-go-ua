import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Container from './Container';
import Header from './Header';
import Loader from './Loader';

const HomePage = lazy(
  () => import('../pages/HomePage' /* webpackChunkName: "home-page" */)
);
const CatalogPage = lazy(
  () =>
    import(
      '../pages/CatalogPage/CatalogPage' /* webpackChunkName: "catalog-page" */
    )
);
const FavoritesPage = lazy(
  () =>
    import('../pages/FavoritesPage' /* webpackChunkName: "favorites-page" */)
);

export const App = () => (
  <Container>
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
        </Route>
      </Routes>
    </Suspense>
  </Container>
);
