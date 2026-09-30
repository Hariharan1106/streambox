import { useEffect, useState } from "react";

function TheatreIntro({ children }) {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Main Website */}

      <div
        className={`transition-all duration-700 ${
          showIntro
            ? "scale-[0.98] opacity-0"
            : "scale-100 opacity-100"
        }`}
      >
        {children}
      </div>

      {/* Theatre Curtains */}

      {showIntro && (
        <div className="pointer-events-none fixed inset-0 z-[9999] flex">

          {/* Left Curtain */}

          <div className="theatre-curtain-left h-full w-1/2 bg-black">
            <div className="curtain-folds h-full w-full" />
          </div>

          {/* Right Curtain */}

          <div className="theatre-curtain-right h-full w-1/2 bg-black">
            <div className="curtain-folds h-full w-full" />
          </div>

          {/* Logo */}

          <div className="absolute inset-0 flex items-center justify-center">

            <h1 className="theatre-logo text-4xl font-bold tracking-widest text-white md:text-6xl">
              STREAMBOX
            </h1>

          </div>

        </div>
      )}
    </>
  );
}

export default TheatreIntro;