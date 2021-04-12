import './Navbar.style.scss';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div className = 'hero-text'>
                <h1>Bloogi</h1>
            </div>
            <div className = 'nav-links'>
                <Link to = '/' >Home</Link>
                <Link to = '/create' >Create Blog</Link>
            </div> 
        </nav>
     );
}
 
export default Navbar;