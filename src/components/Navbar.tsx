import { Link } from "react-router";
import { useState } from "react";

export const Navbar = () => {
const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-40 border-white/10">
            <div className="mx-w-5x1 mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <Link to={"/"} className="font-mono text-xl font-bold text-white">
                        unsent<span className="text-cyan-500">.mavs</span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                        to={"/"}
                        className="text-gray-300 hover:text-white transition-colors"
                        >
                        Home{" "}
                        </Link>
                        <Link
                            to={"/create"}
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            Send Message
                        </Link>
                        <Link
                            to={"/terms"}
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            Terms
                        </Link>                        
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMenuOpen((prev) => !prev)}
                            className="text-gray-300 focus:outline-none"
                            aria-label="Toggle menu"
                            >
                            <svg
                                className="w-6 h-6"
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
                    <div>
                    <div>
                        <Link to={"/"}> Home </Link>
                        <Link to={"/create"}> Create Post </Link>
                        <Link to={"/communities"}> Communities </Link>
                        <Link to={"/community/create"}> Create Community</Link>
                    </div>
                    </div>
                )}
        </nav>
    );
}