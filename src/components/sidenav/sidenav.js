import { Link } from 'react-router-dom';

function Nav() {
  return (
    <>
      <p className="text-bold font-black pt-5 pl-2 md:pl-20">LOGO</p>
      <ul className="h-screen px-5 md:flex flex-col gap-3 mt-16 text-xl font-bold tracking-wide hidden">
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
      <ul className="h-screen px-3 flex flex-col gap-3 pt-10 text-xl font-bold tracking-wide">
        <li className="hover:bg-slate-700 hover:text-white active:bg-slate-700 p-2">
          <Link to="/"> T</Link>
        </li>
        <li className="hover:bg-slate-700 hover:text-white active:bg-slate-700 p-2">
          <Link to="/my-reservations"> M-R </Link>
        </li>
        <li className="hover:bg-slate-700 hover:text-white active:bg-slate-700 p-2">
          <Link to="/reserve"> R-T</Link>
        </li>
        <li className="hover:bg-slate-700 hover:text-white active:bg-slate-700 p-2">
          <Link to="/create-tour"> C-T</Link>
        </li>
        <li className="hover:bg-slate-700 hover:text-white active:bg-slate-700 p-2">
          <Link to="/delete-tour"> D-T </Link>
        </li>
      </ul>
    </>
  );
}

export default Nav;
