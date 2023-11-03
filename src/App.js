import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import PopularPage from "./pages/PopularPage";
import TrendingPage from "./pages/TrendingPage";
import NowPlayingPage from "./pages/NowPlaying";
import TopRatedPage from "./pages/TopRatedPage";
import DetailPage from "./pages/DetailPage";
import SearchResultsPage from "./pages/SearchResultsPage";
import ScrollToTop from "./components/ScrollTop";
import UpcomingPage from "./pages/UpcomingPage";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Protected from "./components/Auth/Protected";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route
              path="/"
              element={
                <Protected>
                  <Home />
                </Protected>
              }
            />
            <Route
              path="/popular"
              element={
                <Protected>
                  <PopularPage />
                </Protected>
              }
            />
            <Route
              path="/upcoming"
              element={
                <Protected>
                  <UpcomingPage />
                </Protected>
              }
            />
            <Route
              path="/trending"
              element={
                <Protected>
                  <TrendingPage />
                </Protected>
              }
            />
            <Route
              path="/now-playing"
              element={
                <Protected>
                  <NowPlayingPage />
                </Protected>
              }
            />
            <Route
              path="/top-rated"
              element={
                <Protected>
                  <TopRatedPage />
                </Protected>
              }
            />
            <Route
              path="/:mediaType/:id"
              element={
                <Protected>
                  <DetailPage />
                </Protected>
              }
            />
            <Route
              path="/search-results"
              element={
                <Protected>
                  <SearchResultsPage />
                </Protected>
              }
            />
            <Route
              path="/details-tv"
              element={
                <Protected>
                  <ErrorPage />
                </Protected>
              }
            />
          </Routes>
          <ScrollToTop />
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
