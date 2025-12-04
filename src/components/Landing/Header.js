import navbar from './Nav';
import { Link } from 'react-router-dom';
function Header() {
    return(
        <header>
            <Link to = "/">
            <button>
                KB
            </button>
            </Link>
            {navbar()}
        </header>
    )
}

export default Header;