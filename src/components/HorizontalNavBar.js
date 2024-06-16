import react from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

function HorizontalNavBar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Projects">Projects</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}

export default HorizontalNavBar;