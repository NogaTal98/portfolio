import react from 'react';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../pictures/logo.png';

function Layout() {
  const [currentPage, setCurrentPage] = react.useState('');

  useEffect(() => { setCurrentPage(window.location.href.split('/').pop()) }, [currentPage]);

  
  return (
    <>
      <nav className='navBar'>
        <div className='navBarLogo'>
        <img src={logo} className="logo" alt="logo"/>
        </div>
        <div className='navBarButtons'>
          <Link to="/" className={currentPage === "" ? 'currentPage navLink' : 'navLink'} onClick={() => setCurrentPage("")}>Home</Link>
          <Link to="/About" className={currentPage === "About" ? 'currentPage navLink' : 'navLink'} onClick={() => setCurrentPage("About")}>About</Link>
          <Link to="/Projects" className={currentPage === "Projects" ? 'currentPage navLink' : 'navLink'} onClick={() => setCurrentPage("Projects")}>Projects</Link>
        </div>
      </nav>

      <Outlet />
    </>
  );
}

export default Layout;