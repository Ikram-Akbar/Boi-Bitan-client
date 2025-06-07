import { Menu, Book, Plus, LogOut, Home, Archive,LayoutDashboard , DeleteIcon} from "lucide-react";
import { useState } from "react";
import {  Outlet } from "react-router-dom";
import Header from '../../pages/Admin Dashboard/Header/Header';
import { NavItem } from "../../Components/NavItem/NavItem";

const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    return (
         <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`bg-white shadow-lg p-4 transition-all duration-300 ${sidebarOpen ? "w-64" : "w-16"} flex flex-col`}>
        <button
          className="mb-6 text-gray-600 hover:text-black"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <Menu />
        </button>

        <nav className="flex flex-col gap-4">
          <NavItem to="/" icon={<Home />} label="Go To Home" open={sidebarOpen} />
          <NavItem to="/admin" icon={<LayoutDashboard/>} label="All Statistics" open={sidebarOpen} />
          <NavItem to="/admin/all-books" icon={<Book />} label="All Books" open={sidebarOpen} />
          <NavItem to="/admin/add-book" icon={<Plus />} label="Add Book" open={sidebarOpen} />
          <NavItem to="/admin/update-book" icon={<Plus />} label="Update Book" open={sidebarOpen} />
          <NavItem to="/admin/delete-book" icon={<DeleteIcon />} label="Delete Book" open={sidebarOpen} />
          <NavItem to="/admin/archived-books" icon={<Archive />} label="Archived" open={sidebarOpen} />
          <NavItem to="/logout" icon={<LogOut />} label="Logout" open={sidebarOpen} />
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header/>
        
        {/* Page content */}
        <main className="p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;

