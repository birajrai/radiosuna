import React from 'react';

const CookiePolicy = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 font-sans">
            <h1 className="text-5xl text-center text-gray-800 mb-6">Cookie Policy</h1>
            <p className="text-lg text-center text-gray-600 mb-8">
                At <strong>RadioSuna</strong>, we value your privacy and are committed to transparency regarding how we use cookies
                and other tracking technologies. This Cookie Policy explains what cookies are, how we use them, and how you can manage
                them while using our services.
            </p>

            <section className="mb-10">
                <h2 className="text-3xl text-gray-700 mb-4 border-b-2 border-gray-300 pb-2">What are Cookies?</h2>
                <p className="text-lg text-gray-600 mb-4">
                    Cookies are small text files stored on your device by the websites you visit. They enhance your browsing experience,
                    remember your preferences, and improve website functionality.
                </p>
                <p className="text-lg text-gray-600">
                    RadioSuna uses cookies to provide you with the best experience on our site, allowing you to easily access your
                    favorite radio stations each time you return.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-3xl text-gray-700 mb-4 border-b-2 border-gray-300 pb-2">How We Use Cookies</h2>
                <p className="text-lg text-gray-600 mb-4">
                    We use cookies for the following purposes:
                </p>
                <ul className="text-lg text-gray-600 space-y-2 pl-6 list-disc">
                    <li><strong>Preference Storage:</strong> To remember your favorite radio stations and settings for a personalized experience.</li>
                    <li><strong>Session Management:</strong> To ensure your session remains active while you navigate through the site.</li>
                    <li><strong>Analytics:</strong> To track visitor interactions with our site and improve the overall user experience.</li>
                </ul>
            </section>

            <section className="mb-10">
                <h2 className="text-3xl text-gray-700 mb-4 border-b-2 border-gray-300 pb-2">Managing Cookies</h2>
                <p className="text-lg text-gray-600 mb-4">
                    You can manage your cookie preferences by adjusting your browser settings. Most browsers allow you to control
                    cookies, including deleting or disabling them, and setting preferences for specific websites.
                </p>
                <p className="text-lg text-gray-600">
                    Please note that if you disable cookies, some features of the RadioSuna website may not function properly, such as
                    the ability to store your favorite radio stations.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-3xl text-gray-700 mb-4 border-b-2 border-gray-300 pb-2">Third-Party Cookies</h2>
                <p className="text-lg text-gray-600 mb-4">
                    In addition to our own cookies, we may use third-party cookies from trusted partners to enhance site functionality
                    and performance. These cookies may be used for purposes such as analytics or advertisement targeting.
                </p>
                <p className="text-lg text-gray-600">
                    We ensure that all third-party services comply with applicable data protection regulations and maintain their own
                    privacy policies.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-3xl text-gray-700 mb-4 border-b-2 border-gray-300 pb-2">Changes to This Cookie Policy</h2>
                <p className="text-lg text-gray-600">
                    We may update this Cookie Policy periodically to reflect changes in our practices or for operational, legal, or
                    regulatory reasons. We will notify you of significant changes by posting the updated policy on this page.
                </p>
            </section>
        </div>
    );
};

export default CookiePolicy;
