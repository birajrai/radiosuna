import React from 'react';

const TermsOfService = () => {
    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-6">Terms of Service</h1>
            <p className="text-center text-sm text-gray-500 mb-8">
                <strong>Last Updated: November 12, 2024</strong>
            </p>

            <div className="space-y-6">
                <section>
                    <h2 className="text-2xl font-semibold text-gray-800">1. Acceptance of Terms</h2>
                    <p className="text-gray-700">
                        By accessing or using the RadioSuna website and Services, you agree to comply with these Terms of Service.
                        If you do not agree to these Terms, please do not use the Services.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-800">2. Changes to Terms</h2>
                    <p className="text-gray-700">
                        RadioSuna reserves the right to modify or revise these Terms at any time. When we make changes, we will
                        post the updated Terms on this page and update the "Last Updated" date. Your continued use of the Services
                        after such changes will constitute your acceptance of the new Terms.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-800">3. User Registration</h2>
                    <p className="text-gray-700">
                        To use certain features of our Services, you may be required to create an account. You agree to provide
                        accurate, current, and complete information during the registration process and to update your account
                        information as necessary.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-800">4. Use of the Services</h2>
                    <p className="text-gray-700">
                        You agree to use the Services only for lawful purposes and in accordance with these Terms. You may not:
                    </p>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>Violate any applicable laws or regulations.</li>
                        <li>Engage in any activity that could harm the platform or its users.</li>
                        <li>Use the Services to transmit harmful, fraudulent, or illegal content.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-800">5. Content Ownership and Usage</h2>
                    <p className="text-gray-700">
                        - <strong>RadioSuna Content:</strong> All content provided by RadioSuna, including but not limited to text,
                        graphics, logos, images, audio, and video, are the property of RadioSuna or its licensors and are protected
                        by copyright laws.
                    </p>
                    <p className="text-gray-700">
                        - <strong>User-Generated Content:</strong> You retain ownership of any content you upload, but by uploading
                        it to the platform, you grant RadioSuna a license to use, display, and distribute the content within the scope
                        of our Services.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-800">6. Termination</h2>
                    <p className="text-gray-700">
                        We may suspend or terminate your access to the Services at any time, without notice, for violating these
                        Terms or engaging in unlawful activities.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-800">7. Limitation of Liability</h2>
                    <p className="text-gray-700">
                        In no event shall RadioSuna be liable for any indirect, incidental, special, or consequential damages resulting
                        from your use of the Services.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-800">8. Governing Law</h2>
                    <p className="text-gray-700">
                        These Terms shall be governed by and construed in accordance with the laws of the jurisdiction where RadioSuna
                        operates, without regard to its conflict of law principles.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-800">9. Contact Information</h2>
                    <p className="text-gray-700">
                        If you have any questions about these Terms of Service, please contact us at{' '}
                        <a href="mailto:support@radiosuna.com" className="text-blue-500">support@radiosuna.com</a>.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default TermsOfService;
