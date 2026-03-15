export default function WhiteCrossLogo({ size = 'full' }) {
  // nav: compact for navbar, full: larger for footer
  const dims = size === 'nav'
    ? { width: 180, height: 52 }
    : { width: 240, height: 70 };

  return (
    <svg
      width={dims.width}
      height={dims.height}
      viewBox="0 0 480 140"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block' }}
    >
      <defs>
        <linearGradient id="wcLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#87CEEB" />
          <stop offset="100%" stopColor="#4A9FD4" />
        </linearGradient>
        <linearGradient id="wcHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.15" />
          <stop offset="60%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
        <filter id="wcShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
          <feOffset dx="0" dy="3" result="offsetblur" />
          <feFlood floodColor="#1A7FAA" floodOpacity="0.3" />
          <feComposite in2="offsetblur" operator="in" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Circular badge */}
      <circle cx="70" cy="70" r="55" fill="#EBF7FD" stroke="#B8E4F5" strokeWidth="1.5" />

      {/* Cross icon */}
      <g transform="translate(70, 70)" filter="url(#wcShadow)">
        <rect x="-11" y="-34" width="22" height="68" rx="11" fill="url(#wcLogoGrad)" />
        <rect x="-34" y="-11" width="68" height="22" rx="11" fill="url(#wcLogoGrad)" />
        <rect x="-11" y="-34" width="22" height="68" rx="11" fill="url(#wcHighlight)" />
        <rect x="-34" y="-11" width="68" height="22" rx="11" fill="url(#wcHighlight)" />
      </g>

      {/* Text */}
      <text
        x="150"
        y="78"
        fontFamily="Poppins, sans-serif"
        fontWeight="800"
        fontSize="38"
        fill="#1A1A4E"
        letterSpacing="-0.5"
      >
        White Cross
      </text>

      {/* Tagline */}
      <text
        x="150"
        y="102"
        fontFamily="Outfit, sans-serif"
        fontWeight="500"
        fontSize="14"
        fill="#60C5F1"
        letterSpacing="1.5"
      >
        Educate · Prevent · Empower
      </text>
    </svg>
  );
}
