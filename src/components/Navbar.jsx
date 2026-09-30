import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  function handleSearch(event) {
    event.preventDefault();

    const trimmedSearch = search.trim();

    if (!trimmedSearch) {
      return;
    }

    navigate(`/search?q=${encodeURIComponent(trimmedSearch)}`);

    setMenuOpen(false);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className="relative bg-[#0f1014] text-white">
      
      {/* Main Navbar */}

      <div className="flex items-center justify-between px-6 py-4">

        {/* Logo */}

        <Link
          to="/"
          onClick={closeMenu}
          className="text-2xl font-bold text-blue-500"
        >
          StreamBox
        </Link>

        {/* Desktop Navigation */}

        <div className="hidden items-center gap-6 md:flex">

          <Link
            to="/"
            className="hover:text-blue-400"
          >
            Home
          </Link>

          <Link
            to="/movies"
            className="hover:text-blue-400"
          >
            Movies
          </Link>

          <Link
            to="/tv-shows"
            className="hover:text-blue-400"
          >
            TV Shows
          </Link>

          <Link
            to="/watchlist"
            className="hover:text-blue-400"
          >
            My List
          </Link>

        </div>

        {/* Desktop Search */}

        <form
          onSubmit={handleSearch}
          className="hidden md:block"
        >
          <input
            type="text"
            placeholder="Search movies..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="w-48 rounded-md bg-[#25262b] px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </form>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl md:hidden"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="border-t border-gray-800 bg-[#15161b] px-6 py-5 md:hidden">

          <div className="flex flex-col gap-5">

            <Link
              to="/"
              onClick={closeMenu}
              className="hover:text-blue-400"
            >
              Home
            </Link>

            <Link
              to="/movies"
              onClick={closeMenu}
              className="hover:text-blue-400"
            >
              Movies
            </Link>

            <Link
              to="/tv-shows"
              onClick={closeMenu}
              className="hover:text-blue-400"
            >
              TV Shows
            </Link>

            <Link
              to="/watchlist"
              onClick={closeMenu}
              className="hover:text-blue-400"
            >
              My List
            </Link>

            {/* Mobile Search */}

            <form onSubmit={handleSearch}>

              <input
                type="text"
                placeholder="Search movies..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                className="w-full rounded-md bg-[#25262b] px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              />

            </form>

          </div>

        </div>
      )}

    </nav>
  );
}

export default Navbar;