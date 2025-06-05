import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 text-center ">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:text-center">
          {/* Brand Info */}
          <div>
            <h2 className="text-2xl font-bold text-white">Boi Bitan</h2>
            <p className="mt-2 text-sm">
              Your gateway to the world of books. Explore, read, and learn every day.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold  text-white mb-2">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">Books</a></li>
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Social Media or Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Connect with Us</h3>
            <div className="flex space-x-4 mt-2 justify-between">
              <a href="#" className="hover:text-white">Facebook</a>
              <a href="#" className="hover:text-white">Twitter</a>
              <a href="#" className="hover:text-white">Instagram</a>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Boi Bitan. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
