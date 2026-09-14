import { Link } from "react-router-dom";

export default function Navbar({ theme, toggle }) {
  return (
    <header className="">
      <div className="mx-auto flex h-20 max-w-4xl items-center justify-between px-6">
        {/* Logo / Name */}
        <Link
          to="/"
          className="text-[17px] font-semibold tracking-tight text-foreground transition-opacity hover:opacity-70"
        >
          Pasupuleti Sai Kalyan
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-7">
          <Link
            to="/blogs"
            className="text-sm font-semibold text-foreground transition-opacity hover:opacity-60"
          >
            Blogs
          </Link>

          <a
            href="/Kalyan_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-foreground transition-opacity hover:opacity-60"
          >
            Resume
          </a>

          {/* Theme Toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle Theme"
            className="flex h-6 w-6 items-center justify-center text-foreground transition-opacity hover:opacity-60"
          >
            {theme === "dark" ? (
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.93 4.93 1.41 1.41" />
                <path d="m17.66 17.66 1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m6.34 17.66-1.41 1.41" />
                <path d="m19.07 4.93-1.41 1.41" />
              </svg>
            ) : (
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}
