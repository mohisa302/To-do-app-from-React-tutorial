import { NavLink, Outlet } from 'react-router-dom';

const Navbar = () => {
  const links = [
    { path: '/', text: 'Home' },
    { path: 'about', text: 'About' },
  ];
  return (
    <>
      <div className="wrapper">
        <nav className="navbar">
          <ul>
            {links.map((link) => (
              <li key={link.text}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => (isActive ? 'active__class' : undefined)}
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <Outlet />
      </div>
    </>
  );
};
export default Navbar;
