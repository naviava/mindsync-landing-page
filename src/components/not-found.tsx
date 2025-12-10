import { Link } from "@tanstack/react-router";

export function NotFound() {
  return (
    <main className="flex-1 flex items-center justify-center bg-slate-50 px-4 py-10">
      <section className="w-full max-w-5xl flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Illustration */}
        <div className="w-full md:w-1/2 flex justify-center">
          <svg
            className="w-full max-w-xs md:max-w-sm"
            viewBox="0 0 400 360"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-labelledby="notFoundTitle notFoundDesc"
          >
            <title id="notFoundTitle">Page not found illustration</title>
            <desc id="notFoundDesc">
              Abstract brain and interface elements symbolizing navigation
              error.
            </desc>

            {/* Background card */}
            <rect
              x="30"
              y="40"
              width="340"
              height="280"
              rx="24"
              fill="#021A33"
            />
            <rect
              x="45"
              y="60"
              width="310"
              height="250"
              rx="18"
              fill="#031F3D"
            />

            {/* Subtle grid */}
            <g opacity="0.3">
              {Array.from({ length: 6 }).map((_, i) => (
                <line
                  key={`v-${i}`}
                  x1={70 + i * 50}
                  y1="70"
                  x2={70 + i * 50}
                  y2="255"
                  stroke="#0B355C"
                  strokeWidth="1"
                />
              ))}
              {Array.from({ length: 4 }).map((_, i) => (
                <line
                  key={`h-${i}`}
                  x1="60"
                  y1={90 + i * 40}
                  x2="340"
                  y2={90 + i * 40}
                  stroke="#0B355C"
                  strokeWidth="1"
                />
              ))}
            </g>

            {/* 404 text */}
            <text
              x="200"
              y="105"
              textAnchor="middle"
              fill="#0EA5E9"
              fontSize="32"
              fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
              fontWeight="700"
            >
              404
            </text>

            {/* Brain-ish network */}
            <g transform="translate(125,115)">
              <circle
                cx="75"
                cy="55"
                r="52"
                fill="#021A33"
                stroke="#0EA5E9"
                strokeWidth="2"
              />

              {/* Left lobe */}
              <path
                d="M50 35C42 35 36 41 36 49V66C36 74 42 80 50 80"
                fill="none"
                stroke="#38BDF8"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M50 40C45 40 41 44 41 49V66C41 71 45 75 50 75"
                fill="none"
                stroke="#EEF9FF"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.85"
              />

              {/* Right lobe */}
              <path
                d="M100 35C108 35 114 41 114 49V66C114 74 108 80 100 80"
                fill="none"
                stroke="#38BDF8"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M100 40C105 40 109 44 109 49V66C109 71 105 75 100 75"
                fill="none"
                stroke="#EEF9FF"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.85"
              />

              {/* Middle folds */}
              <path
                d="M61 32C71 24 79 24 89 32"
                fill="none"
                stroke="#0EA5E9"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M61 83C71 91 79 91 89 83"
                fill="none"
                stroke="#0EA5E9"
                strokeWidth="3"
                strokeLinecap="round"
              />

              {/* Nodes */}
              {[
                [55, 30],
                [95, 30],
                [55, 90],
                [95, 90],
                [75, 55],
              ].map(([cx, cy], i) => (
                <circle
                  key={i}
                  cx={cx}
                  cy={cy}
                  r={4}
                  fill="#0EA5E9"
                  stroke="#F9FAFB"
                  strokeWidth="1"
                />
              ))}
            </g>

            {/* Floating UI chips */}
            <rect
              x="70"
              y="70"
              width="70"
              height="26"
              rx="12"
              fill="#022446"
              stroke="#0EA5E9"
            />
            <circle cx="86" cy="83" r="5" fill="#0EA5E9" />
            <rect
              x="98"
              y="78"
              width="32"
              height="10"
              rx="5"
              fill="#0EA5E9"
              opacity="0.5"
            />

            <rect
              x="260"
              y="210"
              width="80"
              height="28"
              rx="14"
              fill="#022446"
              stroke="#0EA5E9"
            />
            <rect
              x="272"
              y="218"
              width="40"
              height="12"
              rx="6"
              fill="#0EA5E9"
              opacity="0.7"
            />

            {/* Bottom label */}
            <text
              x="200"
              y="280"
              textAnchor="middle"
              fill="#E5E7EB"
              fontSize="13"
              fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
            >
              Looks like this route doesn&apos;t exist.
            </text>
          </svg>
        </div>

        {/* Copy + actions */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-500">
            Error 404
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-slate-900">
            You&apos;ve reached an unknown route.
          </h1>
          <p className="text-sm md:text-base text-slate-600">
            The page you&apos;re looking for doesn&apos;t exist, has been moved,
            or isn&apos;t part of our current experience. Let&apos;s get you
            back to familiar territory.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start pt-2">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 transition"
            >
              Back to homepage
            </Link>
            <a
              href="mailto:info@mindsync.cc"
              className="inline-flex items-center justify-center rounded-full border border-sky-500 px-6 py-2.5 text-sm font-medium text-sky-600 bg-white/80 hover:bg-sky-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 transition"
            >
              Talk to our team
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
