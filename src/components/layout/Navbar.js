import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className='blue'>
                <div className="nav-wrapper" >
                <a style={{margin: "10px",}} href="#" className="brand-logo">Konnex</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="">Home</a></li>
                </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;

