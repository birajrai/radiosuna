import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-red-700 text-white pt-8 pb-4">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">

                {/* Contact Information */}
                <div>
                    <h2 className="text-lg font-semibold mb-2">सम्पर्क</h2>
                    <p>BAKHUNDOL, LALITPUR</p>
                    <p>01-5010630, 01-5010671</p>
                    <p>ratopati@gmail.com</p>
                    <p>info@ratopati.com</p>
                    <p>marketing.ratopati@gmail.com</p>
                    <p>article.ratopati@gmail.com</p>
                </div>

                {/* Useful Links */}
                <div>
                    <h2 className="text-lg font-semibold mb-2">उपयोगी लिङ्कहरु</h2>
                    <div className="grid grid-cols-2 gap-2">
                        <Link href="/">गृहपृष्ठ</Link>
                        <Link href="/">मनोरञ्जन</Link>
                        <Link href="/">साहित्य</Link>
                        <Link href="/">क्रीकेट</Link>
                        <Link href="/">अर्थ</Link>
                        <Link href="/">शिक्षा</Link>
                        <Link href="/">स्वास्थ्य शैली</Link>
                        <Link href="/">प्रविधि</Link>
                        <Link href="/">हाम्रो टीम</Link>
                        <Link href="/">विज्ञापनको लागि</Link>
                        <Link href="/">Give Feedback</Link>
                        <Link href="/">Privacy Policy</Link>
                        <Link href="/">Terms and Condition</Link>
                        <Link href="/">Nepali Date Converter</Link>
                    </div>
                </div>

                {/* Logo and Copyright */}
                <div className="flex flex-col items-center md:items-end">
                    <img src="https://www.meropatra.com/wp-content/uploads/2024/02/MP-LOGO-web-1-1.png" alt="Logo" className="w-32 mb-2" />
                    <p>&copy; 2024 Copyright Discovery News Network | All rights reserved.</p>
                    <p className="mt-1 text-xs">छोटेहरू खुल्ला रूपमा बाहेक रतोपाटीमा प्रकाशित सम्पूर्ण सामग्रीहरू डिस्कवरी न्यूज नेटवर्कका सम्पत्ति हुन्।</p>
                    <div className="flex space-x-4 mt-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                            <FontAwesomeIcon icon={faFacebook} size="lg" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                            <FontAwesomeIcon icon={faTwitter} size="lg" />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                            <FontAwesomeIcon icon={faYoutube} size="lg" />
                        </a>
                        <a href="mailto:info@ratopati.com" className="text-white hover:text-gray-300">
                            <FontAwesomeIcon icon={faEnvelope} size="lg" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="text-center mt-6 text-xs">
                Design & Developed by <span className="font-semibold">Futuressoft</span>
            </div>
        </footer>
    );
}
