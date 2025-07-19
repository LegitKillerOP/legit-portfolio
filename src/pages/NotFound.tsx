import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-gray-200 px-6">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-cyan-400 drop-shadow-[0_0_10px_cyan] font-mono mb-6">
          404
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-6 font-mono">
          Oops! The page you're looking for doesn't exist.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 border border-cyan-400 text-cyan-400 font-mono rounded-md hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-[0_0_10px_cyan] hover:shadow-[0_0_20px_cyan]"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
