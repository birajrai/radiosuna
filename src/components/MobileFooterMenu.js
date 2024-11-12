import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faEnvelope, faRadio } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const footerMenuItems = [
    { name: 'Home', href: '/', icon: faHome },
    { name: 'About', href: '/aboutus', icon: faInfoCircle },
    { name: 'Contact', href: '/contactus', icon: faEnvelope },
    { name: 'Radio', href: '/listen', icon: faRadio },  // assuming '/listen' is the radio page
];

export default function MobileFooterMenu() {
    return (
        <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-300 shadow-lg flex justify-around items-center py-2 z-50 md:hidden">
            {footerMenuItems.map((item, index) => (
                <Link key={index} href={item.href} className="flex flex-col items-center text-gray-600 hover:text-gray-800 transition">
                    <FontAwesomeIcon icon={item.icon} className="text-xl" />
                    <span className="text-xs">{item.name}</span>
                </Link>
            ))}
        </div>
    );
}
