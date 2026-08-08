import { Link, useLocation } from "react-router-dom";

export default function Navbar({ theme, toggle }) {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 lg:px-8">
        <Link
          to="/"
          className="group flex items-center text-foreground transition-opacity duration-300 hover:opacity-80"
        >
          <span className="font-mono text-lg font-medium tracking-wide">
            &lt; Pasupuleti Sai Kalyan /&gt;
          </span>
        </Link>
        {/* Navigation */}
        <nav className="hidden items-center gap-4 rounded-xl border border-border bg-card/70 px-2 py-2 backdrop-blur-xl md:flex">
          {navItems.map((item) => {
            const active = location.pathname === item.path;

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`
                  rounded-lg
                  px-5
                  py-2.5
                  text-[15px]
                  font-medium
                  transition-all
                  duration-300
                  ${
                    active
                      ? "bg-foreground text-background shadow-md"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }
                `}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Theme Toggle */}
        <button
          onClick={toggle}
          aria-label="Toggle Theme"
          className="
flex
h-12
w-12
items-center
justify-center
rounded-full
border
border-border
bg-card/70
text-muted-foreground
backdrop-blur-xl
transition-all
duration-300
hover:bg-muted
hover:text-foreground
"
        >
          {theme === "dark" ? (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
            </svg>
          ) : (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}
