import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Container from './Container';
import Header from './Header';
// import Loader from './Loader';
// import Cast from './MovieDetails/Cast';
// import Reviews from './MovieDetails/Reviews';

const HomePage = lazy(
  () => import('../pages/HomePage' /* webpackChunkName: "home-page" */)
);
const CatalogPage = lazy(
  () => import('../pages/CatalogPage' /* webpackChunkName: "catalog-page" */)
);
const FavoritesPage = lazy(
  () =>
    import('../pages/FavoritesPage' /* webpackChunkName: "favorites-page" */)
);

export const App = () => (
  <Container>
    {/*<Suspense fallback={<Loader />}>*/}
    <Suspense fallback="loading ...">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
          {/*<Route path="movies/:movieId" element={<MovieDetailsPage />}>*/}
          {/*  <Route path="cast" element={<Cast />} />*/}
          {/*  <Route path="review" element={<Reviews />} />*/}
          {/*</Route>*/}
        </Route>
      </Routes>
    </Suspense>
  </Container>
);

// export const App = () => {
//   // const error = useSelector(selectError);
//   // const isLoading = useSelector(selectIsLoading);
//   const campers = useSelector(selectCampers);
//   const favorite = useSelector(selectFavoriteCampers);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(fetchCampers(1));
//   }, [dispatch]);
//   console.log(campers);
//   console.log(favorite);
//   return (
//     <>
//       <h1>React homework template</h1>
//       <button
//         onClick={() => {
//           dispatch(toggleFavorite(3));
//         }}
//       >
//         Click me
//       </button>
//       ,
//     </>
//   );
// };
