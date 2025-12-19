import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

export default function Navbar() {
  return (
    <nav className="bg-white text-gray-800 px-6 md:px-20 py-4 flex justify-between items-center sticky top-0 z-50 shadow-sm">
      <Link to="/" className="flex items-center gap-2">
        <div className="w-8 h-8 bg-[#1a2b56] rounded flex items-center justify-center">
          <span className="text-white font-bold text-xs">PR</span>
        </div>
        <span className="text-xl font-bold tracking-tight text-[#1a2b56]">
          Project <span className="font-normal text-gray-600">Right</span>
        </span>
      </Link>

      <div className="hidden md:flex items-center space-x-8 text-sm font-semibold uppercase tracking-wider">
        <NavHashLink
          smooth
          to="/#home"
          className="hover:text-blue-900 border-b-2 border-transparent hover:border-blue-900 transition-all pb-1"
        >
          Home
        </NavHashLink>
        <NavHashLink
          smooth
          to="/#services"
          className="hover:text-blue-900 border-b-2 border-transparent hover:border-blue-900 transition-all pb-1"
        >
          Services
        </NavHashLink>
        <NavHashLink
          smooth
          to="/#projects"
          className="hover:text-blue-900 border-b-2 border-transparent hover:border-blue-900 transition-all pb-1"
        >
          About Projects
        </NavHashLink>
        <NavHashLink
          smooth
          to="/#testimonials"
          className="hover:text-blue-900 border-b-2 border-transparent hover:border-blue-900 transition-all pb-1"
        >
          Testimonials
        </NavHashLink>
      </div>

      <div className="flex items-center gap-4">
        <Link
          to="/admin/projects"
          className="bg-[#ff6b00] text-white px-6 py-2 rounded-sm font-bold uppercase text-xs tracking-widest hover:bg-orange-600 transition shadow-md"
        >
          ADMIN PANEL
        </Link>
      </div>
    </nav>
  );
}
