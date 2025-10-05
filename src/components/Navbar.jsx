import { Link } from "react-router-dom";

const fulname = "hello world";

export default function Navbar() {
  return (
    <div className="flex items-center justify-center gap-10 py-5 my-5 font-semibold bg-gray-200 text-2xl">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/todos">Todos</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}
