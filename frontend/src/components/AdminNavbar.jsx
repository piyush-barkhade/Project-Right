import { Link, useLocation } from "react-router-dom";

const AdminNavbar = () => {
  const location = useLocation();
  const navLinks = [
    { name: "Projects", path: "/admin/projects" },
    { name: "Clients", path: "/admin/clients" },
    { name: "Contacts", path: "/admin/contacts" },
    { name: "Subscribers", path: "/admin/subscribers" },
  ];

  return (
    <nav className="bg-[#1e3a8a] text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 font-bold text-xl tracking-wider text-[#fb923c]">
            ADMIN<span className="text-white">PANEL</span>
          </div>
          <div className="hidden md:flex gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "bg-[#fb923c] text-white"
                    : "hover:bg-[#3b82f6] text-blue-100"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
