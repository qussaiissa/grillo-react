
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Photo from './Photo.js';

function Navbar() {
    const [open, setOpen] = useState(false);

    const pages = [
        ['/', 'Home'],
        ['/about', 'About'],
        ['/services', 'Services'],
        ['/menu', 'Menu'],
        ['/contact', 'Contact']
    ];

    return (
        <header className="site-header">
            <nav className="site-nav" aria-label="Main navigation">
                <Link
                    className="brand"
                    to="/"
                    onClick={() => setOpen(false)}
                >
                    <Photo name="logo.jpg" className="logo" />

                    <span>
                        GRILLO
                        <small>Fresh • Local • Delicious</small>
                    </span>
                </Link>

                <button
                    type="button"
                    className="menu-toggle"
                    aria-label={
                        open ? 'Close navigation' : 'Open navigation'
                    }
                    aria-expanded={open}
                    aria-controls="primary-links"
                    onClick={() => setOpen(!open)}
                >
                    {open ? '✕' : '☰'}
                </button>

                <div
                    id="primary-links"
                    className={`links ${open ? 'links-open' : ''}`}
                >
                    {pages.map(([to, label]) => (
                        <NavLink
                            key={to}
                            end={to === '/'}
                            to={to}
                            onClick={() => setOpen(false)}
                            className={({ isActive }) =>
                                isActive ? 'on' : ''
                            }
                        >
                            {label}
                        </NavLink>
                    ))}
                </div>
            </nav>
        </header>
    );
}


export default Navbar;