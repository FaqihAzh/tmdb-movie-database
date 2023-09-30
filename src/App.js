import { Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popular" element={<PopularPage />} />
          <Route path="/upcoming" element={<UpcomingPage />} />
          <Route path="/trending" element={<TrendingPage />} />
          <Route path="/now-playing" element={<NowPlayingPage />} />
          <Route path="/top-rated" element={<TopRatedPage />} />
          <Route path="/movie/:id" element={<DetailPage />} />
          <Route path="/search-results" element={<SearchResultsPage />} />
        </Routes>
        <ScrollToTop />
      </Layout>
    </>
  );
}

export default App;
