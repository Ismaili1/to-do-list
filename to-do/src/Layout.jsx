import { Link, Outlet } from "react-router-dom";
import "./Layout.css";

function Layout() {
    return (
        <div className="app-container">
            <nav className="main-nav">
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link to='today_tasks' className="nav-link">Today Tasks</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/' className="nav-link">Tasks</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/done_tasks' className="nav-link">Done Tasks</Link>
                    </li>
                </ul>
            </nav>
            <div className="content-container">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;