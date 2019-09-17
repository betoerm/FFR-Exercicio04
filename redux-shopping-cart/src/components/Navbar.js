import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    <nav className="nav">
        <div className="container">
            <Link to = "/">Shopp</Link>

            <ul>
                <li><Link to="/cart">Cart</Link></li>                
            </ul>
        </div>
    </nav>
}

export default Navbar;