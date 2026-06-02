export default function Particles() {
  return (
    <div className="particles">
      {Array.from({ length: 80 }).map((_, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 20}s`,
            animationDuration: `${15 + Math.random() * 20}s`,
          }}
        />
      ))}
    </div>
  );
}