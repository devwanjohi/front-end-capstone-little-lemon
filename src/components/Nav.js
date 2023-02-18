import * as React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav>
        <ul>
            <li>
            <Link to="/" className="a">Home</Link>
            </li>
            <li>
            <Link to="/Menu" className="a">Menu</Link>
            </li>
            <li>
            <Link to="/About" className="a">About</Link>
            </li>
            <li>
            <Link to="/reservations" className="a">Reservations</Link></li>
            <li>
            <Link to="/OrderOnline" className="a">Order Online</Link>
            </li>
            <li>
            <Link to="/Login" className="a">Login</Link>
            </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
