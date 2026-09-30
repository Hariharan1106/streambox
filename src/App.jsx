import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TVShows from "./pages/TVShows";
import Watchlist from "./pages/Watchlist";
import MovieDetails from "./pages/MovieDetails";
import TVShowDetails from "./pages/TVShowsDetails";
import Search from "./pages/Search";
import WatchlistProvider from "./context/WatchlistContext";
import TheatreIntro from "./components/TheatreIntro";

function App() {
  return (
    <BrowserRouter>

      <WatchlistProvider>
        <TheatreIntro>


          <div className="min-h-screen bg-black">

            <Navbar />

            <Routes>

              <Route path="/" element={<Home />} />

              <Route
                path="/movies"
                element={<Movies />}
              />

              <Route
                path="/tv-shows"
                element={<TVShows />}
              />

              <Route
                path="/watchlist"
                element={<Watchlist />}
              />

              <Route
                path="/movie/:id"
                element={<MovieDetails />}
              />

              <Route
                path="/tv-show/:id"
                element={<TVShowDetails />}
              />

              <Route
                path="/search"
                element={<Search />}
              />

            </Routes>

          </div>
        </TheatreIntro>
      </WatchlistProvider>
    </BrowserRouter>
  );
}

export default App;