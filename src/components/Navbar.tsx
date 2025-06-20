import { Link } from 'react-router';
import { useState } from 'react';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-40 w-full border-white/10 font-mono">
      <div className="max-w-5x1 mx-auto px-4">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            to={'//'}
            className="text-xl font-bold text-[#121212] hover:text-[#ff3333]"
          >
            FromMy<span className="text-[#ff3333]">Silence</span>
          </Link>

          {/* Desktop Links */}
          <div className="font absolute left-1/2 hidden -translate-x-1/2 transform items-center space-x-12 md:flex">
            <Link
              to={'/'}
              className="text-[#121212] transition-colors hover:text-[#ff3333]"
            >
              Home
            </Link>
            <Link
              to={'/about'}
              className="text-[#121212] transition-colors hover:text-[#ff3333]"
            >
              About
            </Link>
            <Link
              to={'/terms'}
              className="text-[#121212] transition-colors hover:text-[#ff3333]"
            >
              Terms
            </Link>
          </div>
          <Link
            to={'/send'}
            className="hidden transform rounded-lg bg-[#ff3333] p-3 text-[#f4f3f2] hover:bg-[#f20400] md:flex"
          >
            Send Message
          </Link>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="rounded-lg p-3 text-[#121212] hover:cursor-pointer hover:bg-[#eceae8] focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mx-3 rounded-lg border-1 border-[#dcd9df] bg-[#ECEAE8] p-2 md:hidden">
          <div className="flex items-center justify-around space-y-1 px-2 pt-2 pb-3">
            <Link
              className="text-[#121212] transition-colors hover:text-[#ff3333]"
              to={'/'}
            >
              {' '}
              Home{' '}
            </Link>
            <Link
              className="text-[#121212] transition-colors hover:text-[#ff3333]"
              to={'/about'}
            >
              {' '}
              About{' '}
            </Link>
            <Link
              className="text-[#121212] transition-colors hover:text-[#ff3333]"
              to={'/terms'}
            >
              {' '}
              Terms
            </Link>
          </div>
          <Link
            className="flex w-full justify-center rounded-lg bg-[#ff3333] p-2 text-[#eceae8]"
            to={'/send'}
          >
            {' '}
            Send Message{' '}
          </Link>
        </div>
      )}
    </nav>
  );
};
