import navbar from './Nav';

function Header() {
    return(
        <header>
            <h1>KB</h1>
            {navbar()}
        </header>
    )
}

export default Header;