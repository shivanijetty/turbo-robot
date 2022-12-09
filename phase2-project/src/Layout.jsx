import {Outlet, Link} from "react-router-dom"


const Layout = () => {
  return (
    <>
    <h1 className="webpage-title">Ye Olde Mom n' Pop Recipe Shoppe</h1>
      <nav className="nav">
        <ul className="nav-ul">
          <li className="nav-li">
            <Link to="/" className="nav-a">Recipes</Link>
          </li>
          <li className="nav-li">
            <Link to="/favorites" className="nav-a">Yee Fancies</Link>
          </li>
          <li className="nav-li">
            <Link to="/submit" className="nav-a">Submit Thine Own</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;