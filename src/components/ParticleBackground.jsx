import { useMemo } from "react";

function ParticleBackground() {
  const particles = useMemo(() => {
    return Array.from({ length: 70 }, (_, index) => ({
      id: index,
      size: Math.floor(Math.random() * 4) + 2,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="particle"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

export default ParticleBackground;