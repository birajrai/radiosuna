import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-6">Privacy Policy</h1>
            <p className="text-center text-sm text-gray-500 mb-8">
                <strong>Last Updated: November 12, 2024</strong>
            </p>

            <div className="space-y-6">
                <section>
                    <h2 className="text-2xl font-semibold text-gray-800">1. Introduction</h2>
                    <p className="text-gray-700">
                        Welcome to RadioSuna. This Privacy Policy explains how we collect, use, and protect your information
                        when you use our website and services. By using our services, you agree to the terms outlined in this policy.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-800">2. Information We Collect</h2>
                    <p className="text-gray-700">
                        We collect the following types of information when you use our services:
                    </p>
                    <ul className="list-disc list-inside text-gray-700">
                        <li><strong>Personal Information:</strong> Information that can identify you, such as your name, email address, and payment information.</li>
                        <li><strong>Usage Data:</strong> Information about how you interact with our services, such as your IP address, device type, and browser information.</li>
                        <li><strong>Cookies and Tracking Technologies:</strong> We use cookies to enhance your user experience and gather analytical data.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-800">3. How We Use Your Information</h2>
                    <p className="text-gray-700">
                        We use the information we collect to:
                    </p>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>Provide and maintain our services.</li>
                        <li>Improve and personalize your experience on our platform.</li>
                        <li>Communicate with you regarding updates, promotions, or changes to our services.</li>
                        <li>Comply with legal obligations and enforce our terms of service.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-800">4. How We Share Your Information</h2>
                    <p className="text-gray-700">
                        We do not sell your personal information to third parties. We may share your information with:
                    </p>
                    <ul className="list-disc list-inside text-gray-700">
                        <li><strong>Service Providers:</strong> Third-party companies that assist us in operating our services.</li>
                        <li><strong>Legal Compliance:</strong> We may disclose your information if required by law or to protect our rights.</li>
                        <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-800">5. Data Security</h2>
                    <p className="text-gray-700">
                        We take reasonable steps to protect your personal information, but no method of transmission over the internet is completely secure. We cannot guarantee the security of your information.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-800">6. Your Rights</h2>
                    <p className="text-gray-700">
                        Depending on your location, you may have the following rights regarding your personal data:
                    </p>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>Access your data and request copies of the information we hold about you.</li>
                        <li>Request corrections or updates to your personal information.</li>
                        <li>Request deletion of your personal information.</li>
                        <li>Object to the processing of your personal data under certain conditions.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-800">7. Children's Privacy</h2>
                    <p className="text-gray-700">
                        Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-800">8. Changes to This Privacy Policy</h2>
                    <p className="text-gray-700">
                        We may update this Privacy Policy from time to time. When we make changes, we will post the updated policy on this page and update the "Last Updated" date. We encourage you to review this policy periodically.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-800">9. Contact Information</h2>
                    <p className="text-gray-700">
                        If you have any questions or concerns about this Privacy Policy, please contact us at{' '}
                        <a href="mailto:support@radiosuna.com" className="text-blue-500">support@radiosuna.com</a>.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
