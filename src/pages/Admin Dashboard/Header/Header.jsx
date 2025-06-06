import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Admin Dashboard</h1>
      <div className="flex items-center gap-4">
        <span className="text-gray-600">Admin</span>
        {/* You can replace this with a profile picture */}
        <div className="w-8 h-8 rounded-full bg-gray-300" />
      </div>
    </header>
  );
};

export default Header;
