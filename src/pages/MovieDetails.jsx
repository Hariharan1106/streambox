import { useParams, Link } from "react-router-dom";
import movies from "../data/Movies";
import { useWatchlist } from "../context/WatchlistContext";

function MovieDetails() {
  const { id } = useParams();
const {
  addToWatchlist,
  removeFromWatchlist,
  isInWatchlist,
} = useWatchlist();
  const movie = movies.find(
    (movie) => movie.id === Number(id)
  );

  if (!movie) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white text-black">
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            Movie Not Found
          </h1>

          <Link
            to="/"
            className="mt-4 inline-block text-blue-400 hover:text-blue-300"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black px-6 py-10 text-white md:px-16">

      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row">

        {/* Poster */}

        <div className="w-full md:w-[300px]">
          <img
            src={movie.image}
            alt={movie.title}
            className="w-full rounded-xl object-cover shadow-lg"
          />
        </div>

        {/* Movie Information */}

        <div className="flex flex-col justify-center">

          <h1 className="text-4xl font-bold md:text-5xl">
            {movie.title}
          </h1>

          <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-400">
            <span>{movie.year}</span>
            <span>•</span>
            <span>{movie.genre}</span>
            <span>•</span>
            <span className="text-yellow-400">
              ⭐ {movie.rating}
            </span>
          </div>

          <p className="mt-6 max-w-2xl leading-7 text-gray-300">
            Experience an exciting journey filled with action,
            adventure and unforgettable moments.
          </p>

          <div className="mt-8 flex gap-4">

            <button className="rounded-md bg-white px-6 py-3 font-semibold text-black hover:bg-gray-200">
              ▶ Watch Now
            </button>

            <button
  onClick={() => {
    if (isInWatchlist(movie.id)) {
      removeFromWatchlist(movie.id);
    } else {
      addToWatchlist(movie);
    }
  }}
  className="rounded-md bg-gray-700 px-6 py-3 font-semibold hover:bg-gray-600"
>
  {isInWatchlist(movie.id)
    ? "✓ Added to MyList"
    : "+ My List"}
</button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default MovieDetails;