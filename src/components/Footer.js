import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-300 text-gray-800 pt-8 pb-4">  {/* Changed to bg-gray-300 for a silver-like background */}
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">

                {/* Contact Information */}
                <div>
                    <h2 className="text-lg font-semibold mb-2">Contact</h2>
                    <p>Bagmati, Nepal</p>
                    {/* <p>+977-0000000000</p> */}
                    <p>contact@bishestamedia.com.np</p>
                    <p>support@bishestamedia.com.np</p>
                    <p>info@bishestamedia.com.np</p>
                </div>

                {/* Useful Links */}
                <div>
                    <h2 className="text-lg font-semibold mb-2">Useful Links</h2>
                    <div className="grid grid-cols-2 gap-2">
                        <Link href="/">Home</Link>
                        <Link href="/about-us">About Us</Link>
                        <Link href="/contact-us">Contact Us</Link>
                        <Link href="/privacy-policy">Privacy Policy</Link>
                        <Link href="/terms-of-service">Terms of Service</Link>
                        <Link href="/cookie-policy">Cookie Policy</Link>
                        <Link href="/advertising">Advertising</Link>
                    </div>
                </div>

                {/* Logo and Copyright */}
                <div className="flex flex-col items-center md:items-end">
                    <img src="/logo.svg" alt="Company Logo" className="w-32 mb-2" />
                    <p>&copy; 2024 Copyright Radio Suna | All rights reserved.</p>
                    <p className="mt-1 text-xs">All content is not affiliated with this site.</p>
                    <div className="flex space-x-4 mt-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600" aria-label="Facebook">
                            <FontAwesomeIcon icon={faFacebook} size="lg" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600" aria-label="Twitter">
                            <FontAwesomeIcon icon={faTwitter} size="lg" />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600" aria-label="YouTube">
                            <FontAwesomeIcon icon={faYoutube} size="lg" />
                        </a>
                        <a href="mailto:support@example.com" className="text-gray-800 hover:text-gray-600" aria-label="Email">
                            <FontAwesomeIcon icon={faEnvelope} size="lg" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="text-center mt-6 text-xs">
                Design & Developed by <span className="font-semibold"><a href='https://github.com/birajrai'>Biraj Rai</a></span>
            </div>
        </footer>
    );
}
