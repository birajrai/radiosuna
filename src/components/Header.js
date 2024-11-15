'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about-us' },
    { name: 'Contact', href: '/contact-us' },
]

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const pathname = usePathname()

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
        // Close the mobile menu when the route changes
        setIsMenuOpen(false)
    }, [pathname])

    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="flex items-center">
                    <Image src="/logo.png" alt="Logo" width={120} height={40} />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`transition duration-150 ease-in-out ${pathname === item.href
                                ? 'text-blue-600 font-semibold'
                                : 'text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link
                        href="/request"
                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-150 ease-in-out"
                    >
                        Request
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-gray-600" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
                </button>
            </div>

            {/* Off-canvas Menu for Mobile */}
            <div
                className={`fixed top-0 right-0 bottom-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    } md:hidden`}
            >
                <div className="p-4">
                    <button className="mb-4 text-gray-600" onClick={toggleMenu}>
                        <FontAwesomeIcon icon={faTimes} className="h-6 w-6" />
                    </button>
                    <nav className="flex flex-col space-y-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`transition duration-150 ease-in-out ${pathname === item.href
                                    ? 'text-blue-600 font-semibold'
                                    : 'text-gray-600 hover:text-gray-900'
                                    }`}
                                onClick={toggleMenu}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="/request"
                            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-150 ease-in-out text-center"
                            onClick={toggleMenu}
                        >
                            Request
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}