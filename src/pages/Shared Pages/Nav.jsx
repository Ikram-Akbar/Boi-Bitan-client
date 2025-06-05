import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const navItems = (
    <>
      <NavLink to="/" className="text-gray-700 hover:text-blue-600">
        Home
      </NavLink>
      <NavLink to="archive" className="text-gray-700 hover:text-blue-600">
        Archive
      </NavLink>
      <NavLink to="booklist" className="text-gray-700 hover:text-blue-600">
        Book List
      </NavLink>
    </>
  );
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md px-4 py-3 md:px-8">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-600">Boi Bitan</div>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div className="hidden md:flex space-x-6 items-center">
            {navItems}
          <div className="flex space-x-3">
            <button className="px-4 py-1 border border-blue-600 text-blue-600 rounded hover:bg-blue-50">
              Sign In
            </button>
            <button className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 space-y-2">
          {navItems}
          <div className="flex space-x-3 mt-2">
            <button className="w-full px-4 py-1 border border-blue-600 text-blue-600 rounded hover:bg-blue-50">
              Sign In
            </button>
            <button className="w-full px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
