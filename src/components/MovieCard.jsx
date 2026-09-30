import { Link } from "react-router-dom";

function MovieCard({ movie, type = "movie" }) {
  const detailsPath =
    type === "tv"
      ? `/tv-show/${movie.id}`
      : `/movie/${movie.id}`;

  return (
    <Link
      to={detailsPath}
      className="group block min-w-[160px] cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-lg">

        <img
          src={movie.image}
          alt={movie.title}
          className="h-[240px] w-full object-cover transition duration-300 group-hover:scale-110"
        />

        <div className="absolute bottom-2 left-2 rounded bg-black/80 px-2 py-1 text-xs text-yellow-400">
          ⭐ {movie.rating}
        </div>

      </div>

      <h3 className="mt-2 truncate text-sm font-semibold text-white">
        {movie.title}
      </h3>

      <p className="mt-1 text-xs text-gray-400">
        {movie.year} • {movie.genre}
      </p>

    </Link>
  );
}

export default MovieCard;
