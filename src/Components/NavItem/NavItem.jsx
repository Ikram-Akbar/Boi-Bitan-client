import { Link } from "react-router-dom";

export function NavItem({ to, icon, label, open }) {
  return (
    <Link
      to={to}
      className="flex items-center gap-3 p-2 rounded-md text-gray-700 hover:bg-gray-100"
    >
      <span className="text-xl">{icon}</span>
      {open && <span>{label}</span>}
    </Link>
  );
}