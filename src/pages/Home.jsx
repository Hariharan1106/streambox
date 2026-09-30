import Hero from "../components/Hero";
import MovieRow from "../components/MovieRow";
import movies from "../data/Movies";

function Home() {
  return (
    <main className="home-page">

      {/* Hero */}
      <section className="animate-theatre-hero">
        <Hero />
      </section>

      {/* Trending */}
      <section className="animate-theatre-row animation-delay-300">
        <MovieRow
          title="🔥 Trending Now"
          movies={movies}
        />
      </section>

      {/* Popular */}
      <section className="animate-theatre-row animation-delay-600">
        <MovieRow
          title="🎬 Popular Movies"
          movies={movies}
        />
      </section>

      {/* Top Rated */}
      <section className="animate-theatre-row animation-delay-900">
        <MovieRow
          title="⭐ Top Rated"
          movies={movies}
        />
      </section>

    </main>
  );
}

export default Home;