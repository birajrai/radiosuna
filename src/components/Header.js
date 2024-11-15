import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBars, faTimes, faRadio } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

const menuItems = [
    { name: 'Home', href: '/', icon: faHome },
    { name: 'About', href: '/about-us', icon: faRadio },
    { name: 'Contact', href: '/contact-us', icon: faRadio },
];

export default function Header() {
    const [activeLink, setActiveLink] = useState('/');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        // Set active link based on the current URL path when the component mounts
        setActiveLink(window.location.pathname);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = (href) => {
        setActiveLink(href);
        toggleMenu(); // Close menu on link click for mobile
    };

    return (
        <header className="bg-white border-b border-gray-300">
            <div className="container mx-auto px-4 flex items-center justify-between py-2">

                {/* Home Icon */}
                <a
                    href="/"
                    className={`text-red-700 text-2xl font-semibold ${activeLink === '/' ? 'bg-red-700 text-white p-2 rounded-md' : 'p-2'}`}
                    onClick={() => handleLinkClick('/')}
                >
                    <FontAwesomeIcon icon={faHome} />
                </a>

                {/* Hamburger Menu for Mobile */}
                <button
                    className="text-red-700 text-2xl md:hidden"
                    onClick={toggleMenu}
                >
                    <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
                </button>

                {/* Desktop Navigation Links */}
                <nav className="hidden md:flex space-x-4 items-center">
                    {menuItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            className={`px-4 py-2 font-medium transition-all duration-300 flex items-center ${activeLink === item.href
                                ? 'bg-red-700 text-white rounded-md'
                                : 'text-gray-800 hover:text-red-700 hover:bg-gray-200'
                                }`}
                            onClick={() => handleLinkClick(item.href)}
                        >
                            <FontAwesomeIcon icon={item.icon} className="mr-2" />
                            {item.name}
                        </a>
                    ))}
                </nav>

                {/* Radio Button */}
                <button className="hidden md:flex bg-red-700 text-white px-4 py-2 rounded-md items-center space-x-2 hover:bg-red-800 transition-all duration-300 font-medium">
                    <FontAwesomeIcon icon={faRadio} />
                    <span>Radio</span>
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <nav
                    className="fixed top-0 left-0 w-3/4 h-full bg-white z-40 transform translate-x-0 transition-transform p-4 md:hidden"
                >
                    {/* Close Button */}
                    <button
                        className="text-red-700 text-2xl mb-4"
                        onClick={toggleMenu}
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </button>

                    {menuItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            className={`block px-4 py-2 font-medium transition-all duration-300 ${activeLink === item.href
                                ? 'bg-red-700 text-white rounded-md'
                                : 'text-gray-800 hover:text-red-700 hover:bg-gray-200'
                                }`}
                            onClick={() => handleLinkClick(item.href)}
                        >
                            <FontAwesomeIcon icon={item.icon} className="mr-2" />
                            {item.name}
                        </a>
                    ))}
                </nav>
            )}
        </header>
    );
}
