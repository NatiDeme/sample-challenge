import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <>
      <p className="text-bold font-black pt-5 pl-2 md:pl-20">LOGO</p>
      <ul className="h-screen px-5 md:flex flex-col gap-3 mt-16 text-xl font-bold tracking-wide hidden">
        <li>
          <NavLink
            to="/"
            className="hover:bg-slate-700 hover:text-white active:bg-slate-700 p-2 active:bg-red"
            activeClassName="selected">
            {' '}
            TOUR{' '}
          </NavLink>
        </li>
        <li className="hover:bg-slate-700 hover:text-white active:bg-slate-700 p-2">
          <NavLink to="/my-reservations"> MY RESERVATIONS </NavLink>
        </li>
        <li className="hover:bg-slate-700 hover:text-white active:bg-slate-700 p-2">
          <NavLink to="/reserve"> RESERVE TOUR </NavLink>
        </li>
        <li className="hover:bg-slate-700 hover:text-white active:bg-slate-700 p-2">
          <NavLink to="/create-tour"> CREATE TOUR </NavLink>
        </li>
        <li className="hover:bg-slate-700 hover:text-white active:bg-slate-700 p-2">
          <NavLink to="/delete-tour"> DELETE TOUR </NavLink>
        </li>
      </ul>
      <ul className="h-screen px-3 flex flex-col gap-3 pt-10 text-xl font-bold tracking-wide lg:hidden">
        <li className="hover:bg-slate-700 hover:text-white active:bg-slate-700 p-2">
          <NavLink to="/"> T</NavLink>
        </li>
        <li className="hover:bg-slate-700 hover:text-white active:bg-slate-700 p-2">
          <NavLink to="/my-reservations"> M-R </NavLink>
        </li>
        <li className="hover:bg-slate-700 hover:text-white active:bg-slate-700 p-2">
          <NavLink to="/reserve"> R-T</NavLink>
        </li>
        <li className="hover:bg-slate-700 hover:text-white active:bg-slate-700 p-2">
          <NavLink to="/create-tour"> C-T</NavLink>
        </li>
        <li className="hover:bg-slate-700 hover:text-white active:bg-slate-700 p-2">
          <NavLink to="/delete-tour"> D-T </NavLink>
        </li>
      </ul>
    </>
  );
}

export default Nav;
