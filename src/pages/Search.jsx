import { useSearchParams, Link } from "react-router-dom";
import movies from "../data/Movies";

function Search() {
  const [searchParams] = useSearchParams();

  const query = searchParams.get("q") || "";

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black px-6 py-10 text-white md:px-10">

      <h1 className="mb-6 text-2xl font-bold">
        Search Results
      </h1>

      {/* Search Query */}
      {query && (
        <p className="mb-6 text-gray-400">
          Results for:{" "}
          <span className="text-white">
            "{query}"
          </span>
        </p>
      )}

      {/* No Search Query */}
      {!query ? (
        <div className="py-20 text-center">
          <h2 className="text-2xl font-semibold">
            Search for a movie
          </h2>

          <p className="mt-2 text-gray-400">
            Enter a movie name to see the results.
          </p>
        </div>
      ) : filteredMovies.length === 0 ? (

        /* No Results */
        <div className="py-20 text-center">
          <h2 className="text-2xl font-semibold">
            No movies found
          </h2>

          <p className="mt-2 text-gray-400">
            Try searching for another movie.
          </p>
        </div>

      ) : (

        /* Search Results */
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">

          {filteredMovies.map((movie) => (
            <Link
              key={movie.id}
              to={`/movie/${movie.id}`}
              className="group"
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

              <p className="text-sm text-gray-400">
                ⭐ {movie.rating}
              </p>
            </Link>
          ))}

        </div>
      )}

    </div>
  );
}

export default Search;
