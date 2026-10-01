import { useParams, Link } from "react-router-dom";
import tvShows from "../data/TVShows";
import { useWatchlist } from "../context/WatchlistContext";

function TVShowDetails() {
    const { id } = useParams();
    const {
        addToWatchlist,
        removeFromWatchlist,
        isInWatchlist,
    } = useWatchlist();

    const show = tvShows.find(
        (show) => show.id === Number(id)
    );

    if (!show) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-black text-white">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">
                        TV Show Not Found
                    </h1>

                    <Link
                        to="/tv-shows"
                        className="mt-4 inline-block text-blue-400 hover:text-blue-300"
                    >
                        ← Back to TV Shows
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
                        src={show.image}
                        alt={show.title}
                        className="w-full rounded-xl object-cover shadow-lg"
                    />
                </div>

                {/* Show Information */}

                <div className="flex flex-col justify-center">

                    <p className="mb-3 text-sm uppercase tracking-widest text-blue-400">
                        StreamBox TV Show
                    </p>

                    <h1 className="text-4xl font-bold md:text-5xl">
                        {show.title}
                    </h1>

                    <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-400">
                        <span>{show.year}</span>

                        <span>•</span>

                        <span>{show.genre}</span>

                        <span>•</span>

                        <span className="text-yellow-400">
                            ⭐ {show.rating}
                        </span>
                    </div>

                    <p className="mt-6 max-w-2xl leading-7 text-gray-300">
                        Experience an exciting TV series filled with
                        action, adventure and unforgettable moments.
                    </p>

                    <div className="mt-8 flex gap-4">

                        <button className="rounded-md bg-white px-6 py-3 font-semibold text-black hover:bg-gray-200">
                            ▶ Watch Now
                        </button>

                        <button
                            onClick={() => {
                                if (isInWatchlist(show.id)) {
                                    removeFromWatchlist(show.id);
                                } else {
                                    addToWatchlist(show);
                                }
                            }}
                            className="rounded-md bg-gray-700 px-6 py-3 font-semibold hover:bg-gray-600"
                        >
                            {isInWatchlist(show.id)
                                ? "✓ Added to My List"
                                : "+ My List"}
                        </button>


                    </div>

                </div>

            </div>

        </div>
    );
}

export default TVShowDetails;

