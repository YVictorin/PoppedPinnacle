import { Link } from 'react-router-dom';

export default function Navbar({ isContactPage }) {
    return !isContactPage ? (
    
        <>
        <header>
        <div className="shipping-nav">
            <p>FREE shipping on orders $50+</p>
            
            <ul className="nav-info">
                <p><span className="material-symbols-outlined ">call</span></p>
                <p>445-932-2322</p>
                <p>CONTACT</p>
                <p>FAQ</p>
            </ul>
        </div>
        <nav id="logo-list">
            <ul className="logo-ul">
                <li><Link to="/"><img className="logo" src="images/logo.png" alt=""></img></Link></li>
                {/* <li><Link to="/">HOME</Link></li> */}
                    <li><Link id="products-page-link" to="/products">POPCORN FLAVORS</Link></li>
                    <li><Link to="/login">LOGIN</Link></li>
                    <li><Link to="/account">YOUR ACCOUNT</Link></li>
                    <li><Link to="/contact">CONTACT US</Link></li>

                   
                    <li><span id="search-icon" className="material-symbols-outlined">search</span></li>
                    <li><span id="cart-icon" className="material-symbols-outlined">shopping_cart</span></li>
                    <li><span id="menu-icon" className="material-symbols-outlined">menu</span></li>
            </ul>
        </nav>
    </header>
        </> 
    ) : null
}