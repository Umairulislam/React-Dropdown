import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import Dropdown from './Dropdown';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 950) {
            setDropdown(false)
        } else {
            setDropdown(true)
        }
    };
    const onMouseLeave = () => {
        if (window.innerWidth < 950) {
            setDropdown(false)
        } else {
            setDropdown(false)
        }
    };

    return (
        <>
            <nav className='navbar'>
                <Link className='navbar-logo' to='/'>
                    <h2>Epic<i class='fab fa-firstdraft' /></h2>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link
                            className='nav-links'
                            to='/'
                            onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}>
                        <Link
                            className='nav-links'
                            to='/services'
                            onClick={closeMobileMenu}>
                            Services <i className='fas fa-caret-down' />
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>
                    <li className='nav-item'>
                        <Link
                            className='nav-links'
                            to='/products'
                            onClick={closeMobileMenu}>
                            Products
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            className='nav-links'
                            to='/contact-us'
                            onClick={closeMobileMenu}>
                            Contact Us
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            className='nav-links-mobile'
                            to='/sign-up'
                            onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
                <Button />
            </nav>
        </>
    )
}

export default Navbar;