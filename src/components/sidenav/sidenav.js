import { Link } from 'react-router-dom';

function Nav() {
  return (
    <>
      <ul className="h-screen px-5 flex flex-col gap-3 pt-10 text-xl font-bold tracking-wide">
        <li className="hover:bg-slate-700 hover:text-white active:bg-slate-700 p-2">
          <Link to="/"> TOUR </Link>
        </li>
        <li className="hover:bg-slate-700 hover:text-white active:bg-slate-700 p-2">
          <Link to="/my-reservations"> MY RESERVATIONS </Link>
        </li>
        <li className="hover:bg-slate-700 hover:text-white active:bg-slate-700 p-2">
          <Link to="/reserve"> RESERVE TOUR </Link>
        </li>
        <li className="hover:bg-slate-700 hover:text-white active:bg-slate-700 p-2">
          <Link to="/create-tour"> CREATE TOUR </Link>
        </li>
        <li className="hover:bg-slate-700 hover:text-white active:bg-slate-700 p-2">
          <Link to="/delete-tour"> DELETE TOUR </Link>
        </li>
      </ul>
    </>
  );
}

export default Nav;
