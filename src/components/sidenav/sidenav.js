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
        <li>
          <Link to="/create-tour"> Create Tour </Link>
        </li>
        <li>
          <Link to="/delete-tour"> Delete Tour </Link>
        </li>
      </ul>
    </>
  );
}

export default Nav;
