import { Link } from "react-router-dom";

function Nav() {
    return(
        <nav>
            <Link to="/">Work</Link>
            <Link to="/about">About</Link>
            <Link to="/visual">Visual</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    )
}
export default Nav;