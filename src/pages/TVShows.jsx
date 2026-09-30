import MovieRow from "../components/MovieRow";
import tvShows from "../data/TvShows";

function TVShows() {
  const trendingShows = tvShows.slice(0, 4);

  const topRatedShows = [...tvShows]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-black py-10 text-white">

      <h1 className="mb-8 px-6 text-3xl font-bold md:px-10">
        📺 TV Shows
      </h1>

      <MovieRow
        title="🔥 Trending Shows"
        movies={trendingShows}
         type="tv"
      />

      <MovieRow
        title="⭐ Top Rated Shows"
        movies={topRatedShows}
        type="tv"
      />

    </div>
  );
}

export default TVShows;