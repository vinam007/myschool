import { NavLink, Outlet } from "react-router-dom";
import "../CSS/layout.css";
import { UserCB} from "../callBacks/UserCB"; 

function Layout() {
  return (
    <div className="layout">
      <header className="header">My App</header>

      <div className="body">
        <aside className="sidebar">
          <NavLink to="/" end className="link">
            Dashboard
          </NavLink>

          <NavLink to="/clients" className="link">
            Clients
          </NavLink>

          <NavLink to="/sidebar" className="link">
            Settings
          </NavLink>
          <NavLink to="/users" className="link">Users</NavLink>
          <NavLink to="/WeatherUI" className="link">Weather</NavLink>

        </aside>
        <UserCB />
       
        <main className="content">
          <Outlet />
        </main>
      </div>
      <footer className="footer">© 2026</footer>
    </div>
  );
}

export default Layout;
