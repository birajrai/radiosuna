import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faRadio } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const menuItems = [
    { name: 'Home', href: '/', icon: faHome },
    { name: 'About', href: '#', icon: faRadio },
    { name: 'Contact', href: '#', icon: faRadio },
];

export default function Header() {
    const [activeLink, setActiveLink] = useState('/');

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

                {/* Navigation Links */}
                <nav className="flex space-x-4 items-center">
                    {menuItems.map((item, index) => (
                        <div key={index} className="relative group">
                            <a
                                href={item.href}
                                className={`px-4 py-2 font-medium font-sans transition ${activeLink === item.href
                                    ? 'bg-red-700 text-white h-full' // Active link style with full height
                                    : 'text-gray-800 hover:text-red-700'} 
                                    flex items-center`} // Make sure text is vertically centered
                                onClick={() => setActiveLink(item.href)} // Set active link
                            >
                                {item.name}
                            </a>
                        </div>
                    ))}
                </nav>

                {/* Radio Button */}
                <button className="bg-red-700 text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-red-800 transition font-medium font-sans">
                    <FontAwesomeIcon icon={faRadio} />
                    <span>Radio</span>
                </button>

            </div>
        </header>
    );
}
