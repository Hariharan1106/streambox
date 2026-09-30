import MovieRow from "../components/MovieRow";
import movies from "../data/Movies";

function Movies() {
  return (
    <div className="pt-10">
      <MovieRow
        title="🎬 All Movies"
        movies={movies}
      />
    </div>
  );
}

export default Movies;