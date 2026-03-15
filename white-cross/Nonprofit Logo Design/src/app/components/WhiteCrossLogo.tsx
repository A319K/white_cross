export function WhiteCrossLogo() {
  return (
    <svg
      width="480"
      height="140"
      viewBox="0 0 480 140"
      xmlns="http://www.w3.org/2000/svg"
      className="white-cross-logo"
    >
      <defs>
        {/* Gradient for the cross - sky blue to cornflower blue */}
        <linearGradient id="crossGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#87CEEB" />
          <stop offset="100%" stopColor="#4A9FD4" />
        </linearGradient>

        {/* White highlight gradient for light source effect */}
        <linearGradient id="highlightGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.15" />
          <stop offset="60%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>

        {/* Drop shadow for 3D lift */}
        <filter id="dropShadow" x="-50%" y="-50%" width="200%" height="200%">
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

      {/* Circular container background */}
      <circle
        cx="70"
        cy="70"
        r="55"
        fill="#EBF7FD"
        stroke="#B8E4F5"
        strokeWidth="1.5"
      />

      {/* Cross Icon with shadow and effects */}
      <g transform="translate(70, 70)" filter="url(#dropShadow)">
        {/* Vertical bar of cross */}
        <rect
          x="-11"
          y="-34"
          width="22"
          height="68"
          rx="11"
          fill="url(#crossGradient)"
        />
        {/* Horizontal bar of cross */}
        <rect
          x="-34"
          y="-11"
          width="68"
          height="22"
          rx="11"
          fill="url(#crossGradient)"
        />
        
        {/* White highlight overlay on top-left */}
        <rect
          x="-11"
          y="-34"
          width="22"
          height="68"
          rx="11"
          fill="url(#highlightGradient)"
        />
        <rect
          x="-34"
          y="-11"
          width="68"
          height="22"
          rx="11"
          fill="url(#highlightGradient)"
        />
      </g>

      {/* White Cross Text */}
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

      {/* Tagline with middle dots */}
      <text
        x="150"
        y="102"
        fontFamily="Inter, sans-serif"
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