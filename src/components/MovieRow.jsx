import MovieCard from "./MovieCard";

function MovieRow({ title, movies, type = "movie" }) {
  return (
    <section className="px-6 py-6 md:px-10">

      <h2 className="mb-4 text-xl font-bold text-white md:text-2xl">
        {title}
      </h2>

      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            type={type}
          />
        ))}
      </div>

    </section>
  );
}

export default MovieRow;

