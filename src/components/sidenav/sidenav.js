import { Link } from 'react-router-dom';

function Nav() {
  return (
    <>
      <ul>
        <li>
          <Link to="/"> Tour </Link>
        </li>
        <li>
          <Link to="/my-reservations"> My Reservation </Link>
        </li>
        <li>
          <Link to="/reserve"> Reserve </Link>
        </li>
      </ul>
    </>
  );
}

export default Nav;
