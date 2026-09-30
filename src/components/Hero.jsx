import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import movies from "../data/Movies";
import ParticleBackground from "./ParticleBackground";

function Hero() {
  const heroMovies = movies.slice(0, 5);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayTitle, setDisplayTitle] = useState("");

  const currentMovie = heroMovies[currentIndex];

  // ================================
  // Typing Animation
  // ================================

  useEffect(() => {
    setDisplayTitle("");

    let index = 0;

    const typingInterval = setInterval(() => {
      setDisplayTitle(
        currentMovie.title.slice(0, index + 1)
      );

      index++;

      if (index === currentMovie.title.length) {
        clearInterval(typingInterval);
      }
    }, 80);

    return () => {
      clearInterval(typingInterval);
    };
  }, [currentMovie.title]);

  // ================================
  // Automatic Slider
  // ================================

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex) => {
        return (
          (currentIndex + 1) %
          heroMovies.length
        );
      });
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [heroMovies.length]);

  // ================================
  // Previous Movie
  // ================================

  function handlePrevious() {
    setCurrentIndex((currentIndex) => {
      return currentIndex === 0
        ? heroMovies.length - 1
        : currentIndex - 1;
    });
  }

  // ================================
  // Next Movie
  // ================================

  function handleNext() {
    setCurrentIndex((currentIndex) => {
      return (
        (currentIndex + 1) %
        heroMovies.length
      );
    });
  }

  return (
    <section className="relative min-h-[500px] overflow-hidden bg-black md:min-h-[600px]">
      <img
        src={currentMovie.image}
        alt={currentMovie.title}
        className="absolute inset-0 h-full w-full scale-105 object-cover object-center contrast-125 brightness-75 saturate-110"
      />

      {/* =================================
          Animated Background
      ================================= */}

      <ParticleBackground />

      {/* =================================
          Dark Gradient Overlay
      ================================= */}

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

      {/* =================================
          Hero Content
      ================================= */}

      <div className="relative z-10 flex min-h-[500px] items-center px-6 py-16 md:min-h-[600px] md:px-16">

        <div className="max-w-xl text-white">

          {/* Label */}

          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
            StreamBox Featured
          </p>

          {/* Movie Title */}

          <h1 className="min-h-[48px] text-4xl font-bold md:min-h-[72px] md:text-6xl">
            {displayTitle}

            <span className="typing-cursor">
            
            </span>
          </h1>

          {/* Movie Information */}

          <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-300">

            <span>
              {currentMovie.year}
            </span>

            <span>
              •
            </span>

            <span>
              {currentMovie.genre}
            </span>

            <span>
              •
            </span>

            <span className="text-yellow-400">
              ⭐ {currentMovie.rating}
            </span>

          </div>

          {/* Description */}

          <p className="mt-5 max-w-lg leading-7 text-gray-300">
            Experience an exciting movie filled with
            action, adventure and unforgettable moments.
          </p>

          {/* Buttons */}

          <div className="mt-7 flex flex-wrap gap-4">

            {/* Watch Now */}

            <Link
              to={`/movie/${currentMovie.id}`}
              className="rounded-md bg-white px-6 py-3 font-semibold text-black transition duration-300 hover:scale-105 hover:bg-gray-200"
            >
              ▶ Watch Now
            </Link>

            {/* My List */}

            <Link
              to={`/movie/${currentMovie.id}`}
              className="rounded-md bg-gray-700/80 px-6 py-3 font-semibold text-white backdrop-blur-sm transition duration-300 hover:scale-105 hover:bg-gray-600"
            >
              + My List
            </Link>

          </div>

        </div>

      </div>

      {/* =================================
          Previous Button
      ================================= */}

      <button
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-black/60 px-4 py-3 text-2xl text-white backdrop-blur-sm transition hover:scale-110 hover:bg-black md:block"
        aria-label="Previous movie"
      >
        ‹
      </button>

      {/* =================================
          Next Button
      ================================= */}

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-black/60 px-4 py-3 text-2xl text-white backdrop-blur-sm transition hover:scale-110 hover:bg-black md:block"
        aria-label="Next movie"
      >
        ›
      </button>

      {/* =================================
          Slider Indicators
      ================================= */}

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">

        {heroMovies.map((movie, index) => (
          <button
            key={movie.id}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-7 bg-white"
                : "w-2 bg-gray-500"
            }`}
            aria-label={`Show ${movie.title}`}
          />
        ))}

      </div>

    </section>
  );
}

export default Hero;