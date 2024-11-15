import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBars, faTimes, faRadio } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const menuItems = [
    { name: 'Home', href: '/', icon: faHome },
    { name: 'About', href: '#', icon: faRadio },
    { name: 'Contact', href: '#', icon: faRadio },
];

export default function Header() {
    const [activeLink, setActiveLink] = useState('/');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white border-b border-gray-300 shadow-lg">
            <div className="container mx-auto px-4 flex items-center justify-between py-2">

                {/* Home Icon */}
                <a
                    href="/"
                    className="text-red-700 text-2xl font-semibold font-sans"
                    onClick={() => setActiveLink('/')}
                >
                    <FontAwesomeIcon icon={faHome} />
                </a>

                {/* Hamburger Menu for Mobile */}
                <button
                    className="text-red-700 text-2xl md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
                </button>

                {/* Navigation Links - Offcanvas */}
                <nav
                    className={`fixed top-0 left-0 w-3/4 h-full bg-white shadow-lg transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                        } transition-transform md:relative md:translate-x-0 md:flex md:space-x-4 items-center`}
                >
                    <div className="p-4 md:hidden">
                        {/* Close Button */}
                        <button
                            className="text-red-700 text-2xl"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                    </div>
                    {menuItems.map((item, index) => (
                        <div key={index} className="relative group">
                            <a
                                href={item.href}
                                className={`px-4 py-2 font-medium font-sans transition ${activeLink === item.href
                                    ? 'bg-red-700 text-white'
                                    : 'text-gray-800 hover:text-red-700'} 
                                    flex items-center`}
                                onClick={() => {
                                    setActiveLink(item.href);
                                    setIsMenuOpen(false); // Close menu on click
                                }}
                            >
                                {item.name}
                            </a>
                        </div>
                    ))}
                </nav>

                {/* Radio Button */}
                <button className="hidden md:flex bg-red-700 text-white px-4 py-2 rounded-md items-center space-x-2 hover:bg-red-800 transition font-medium font-sans">
                    <FontAwesomeIcon icon={faRadio} />
                    <span>Radio</span>
                </button>
            </div>
        </header>
    );
}
