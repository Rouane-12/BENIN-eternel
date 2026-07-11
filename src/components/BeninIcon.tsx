import React from "react";

export function BeninIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="benin-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#008751" />
          <stop offset="50%" stopColor="#FCD116" />
          <stop offset="100%" stopColor="#E8112D" />
        </linearGradient>
      </defs>
      <path
        d="M45 5 L65 10 L80 25 L85 45 L75 60 L65 75 L68 95 L65 115 L35 115 L32 95 L35 75 L25 60 L15 45 L20 25 L35 10 Z"
        fill="url(#benin-gradient)"
        className="drop-shadow-md"
      />
    </svg>
  );
}
