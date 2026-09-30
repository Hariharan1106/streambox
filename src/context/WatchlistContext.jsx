import { createContext, useContext, useEffect, useState } from "react";

const WatchlistContext = createContext();

function WatchlistProvider({ children }) {
  const [watchlist, setWatchlist] = useState(() => {
    const savedMovies = localStorage.getItem("watchlist");

    return savedMovies ? JSON.parse(savedMovies) : [];
  });

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  function addToWatchlist(movie) {
    setWatchlist((currentList) => {
      const alreadyExists = currentList.some(
        (item) => item.id === movie.id
      );

      if (alreadyExists) {
        return currentList;
      }

      return [...currentList, movie];
    });
  }

  function removeFromWatchlist(movieId) {
    setWatchlist((currentList) =>
      currentList.filter((movie) => movie.id !== movieId)
    );
  }

  function isInWatchlist(movieId) {
    return watchlist.some(
      (movie) => movie.id === movieId
    );
  }

  return (
    <WatchlistContext.Provider
      value={{
        watchlist,
        addToWatchlist,
        removeFromWatchlist,
        isInWatchlist,
      }}
    >
      {children}
    </WatchlistContext.Provider>
  );
}

export function useWatchlist() {
  return useContext(WatchlistContext);
}

export default WatchlistProvider;