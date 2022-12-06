import {Outlet, Link} from "react-router-dom"


const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Recipes</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
          <li>
            <Link to="/submit">Submit</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;