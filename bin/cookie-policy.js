import React from 'react';

const CookiePolicy = () => {
    return (
        <div className="p-8 font-sans">
            <h1 className="text-4xl text-center text-gray-800 mb-6">Cookie Policy</h1>
            <p className="text-lg text-center text-gray-600 mb-8">
                At <strong>RadioSuna</strong>, we value your privacy and are committed to ensuring transparency in how we use cookies
                and other tracking technologies. This Cookie Policy explains what cookies are, how we use them, and how you can manage
                them while using our services.
            </p>

            <section className="mb-12">
                <h2 className="text-2xl text-gray-700 mb-4">What are Cookies?</h2>
                <p className="text-lg text-gray-600">
                    Cookies are small text files stored on your device by a website that you visit. They are widely used to enhance
                    your browsing experience, remember your preferences, and improve website functionality.
                </p>
                <p className="text-lg text-gray-600">
                    RadioSuna uses cookies to help provide you with the best experience on our site. We use cookies to store your
                    favorite radio stations, so you can easily access them every time you return.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl text-gray-700 mb-4">How We Use Cookies</h2>
                <p className="text-lg text-gray-600">
                    We use cookies for the following purposes:
                </p>
                <ul className="text-lg text-gray-600 space-y-2 pl-6 list-disc">
                    <li><strong>Preference Storage:</strong> To remember your favorite radio stations and settings for a personalized experience.</li>
                    <li><strong>Session Management:</strong> To ensure your session remains active while you navigate through the site.</li>
                    <li><strong>Analytics:</strong> To track how visitors interact with our site and improve the overall user experience.</li>
                </ul>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl text-gray-700 mb-4">Managing Cookies</h2>
                <p className="text-lg text-gray-600">
                    You can manage your cookie preferences by adjusting the settings in your browser. Most browsers allow you to control
                    cookies, including deleting them, disabling them, or setting preferences for certain websites.
                </p>
                <p className="text-lg text-gray-600">
                    Please note that if you disable cookies, some features of the RadioSuna website may not work properly, such as the
                    ability to store your favorite radio stations.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl text-gray-700 mb-4">Third-Party Cookies</h2>
                <p className="text-lg text-gray-600">
                    In addition to our own cookies, we may use third-party cookies from trusted partners to improve the functionality
                    and performance of the site. These cookies may be used for purposes such as analytics or advertisement targeting.
                </p>
                <p className="text-lg text-gray-600">
                    We ensure that all third-party services comply with applicable data protection regulations and have their own
                    privacy policies.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl text-gray-700 mb-4">Changes to This Cookie Policy</h2>
                <p className="text-lg text-gray-600">
                    We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational,
                    legal, or regulatory reasons. We will notify you of any significant changes by posting the updated policy on this
                    page.
                </p>
            </section>
        </div>
    );
};

export default CookiePolicy;
