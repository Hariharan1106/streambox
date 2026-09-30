import { Link } from "react-router-dom";
import { useWatchlist } from "../context/WatchlistContext";

function Watchlist() {
  const {
    watchlist,
    removeFromWatchlist,
  } = useWatchlist();

  return (
    <div className="min-h-screen bg-black px-6 py-10 text-white md:px-10">

      <h1 className="mb-8 text-3xl font-bold">
        My Watchlist
      </h1>

      {watchlist.length === 0 ? (
        <div className="py-20 text-center">

          <h2 className="text-2xl font-semibold">
            Your watchlist is empty
          </h2>

          <p className="mt-3 text-gray-400">
            Add movies to your list and they will appear here.
          </p>

          <Link
            to="/movies"
            className="mt-6 inline-block rounded-md bg-white px-6 py-3 font-semibold text-black"
          >
            Browse Movies
          </Link>

        </div>
      ) : (
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">

          {watchlist.map((movie) => (
            <div key={movie.id}>

              <Link
                to={`/movie/${movie.id}`}
                className="group block"
              >
                <div className="overflow-hidden rounded-lg">

                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="h-[250px] w-full object-cover transition duration-300 group-hover:scale-105"
                  />

                </div>

                <h3 className="mt-2 truncate font-semibold">
                  {movie.title}
                </h3>

                <p className="mt-1 text-sm text-gray-400">
                  ⭐ {movie.rating}
                </p>
              </Link>

              <button
                onClick={() => removeFromWatchlist(movie.id)}
                className="mt-2 w-full rounded-md bg-red-600 px-3 py-2 text-sm font-semibold hover:bg-red-700"
              >
                Remove
              </button>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default Watchlist;