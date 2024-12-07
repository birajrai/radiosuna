import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faBroadcastTower, faLink, faComment } from '@fortawesome/free-solid-svg-icons';

const Request = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [radioName, setRadioName] = useState('');
    const [website, setWebsite] = useState('');
    const [aboutRadio, setAboutRadio] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState(null);

    // Function to send data to Discord webhook
    const sendToDiscord = async (data) => {
        try {
            const response = await fetch('https://discord.com/api/webhooks/1305858443676090428/HYKYKG70ytIJje3qm0rsEBEwbnD8-gj_iva4_vkAzJL642PucszVDaQ28YWtKWqxMsWs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    content: `New Request Form Submission:\nName: ${data.name}\nEmail: ${data.email}\nRadio Name: ${data.radioName}\nWebsite: ${data.website}\nAbout Radio: ${data.aboutRadio}\nMessage: ${data.message}`,
                }),
            });

            if (response.ok) {
                setStatus('success');
                setName('');
                setEmail('');
                setRadioName('');
                setWebsite('');
                setAboutRadio('');
                setMessage('');
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !radioName || !website || !message) {
            setStatus('error');
            return;
        }

        const formData = {
            name,
            email,
            radioName,
            website,
            aboutRadio,
            message,
        };

        await sendToDiscord(formData);
    };

    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-6">Request</h1>
            <img src="/request.gif" alt="Radio Suna" className="block mx-auto h-40 mb-6" /> {/* Increased size here */}

            {status && (
                <div className={`mb-4 text-center ${status === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                    {status === 'success' ? 'Your message has been sent!' : 'There was an error. Please try again.'}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                        <FontAwesomeIcon icon={faUser} className="mr-2" />
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your full name"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your email address"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="radioName" className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                        <FontAwesomeIcon icon={faBroadcastTower} className="mr-2" />
                        Radio Name
                    </label>
                    <input
                        type="text"
                        id="radioName"
                        value={radioName}
                        onChange={(e) => setRadioName(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your radio name"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="website" className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                        <FontAwesomeIcon icon={faLink} className="mr-2" />
                        Website Link
                    </label>
                    <input
                        type="url"
                        id="website"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your website link"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="aboutRadio" className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                        <FontAwesomeIcon icon={faComment} className="mr-2" />
                        About Radio
                    </label>
                    <textarea
                        id="aboutRadio"
                        value={aboutRadio}
                        onChange={(e) => setAboutRadio(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Tell us about your radio"
                        rows="3"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                        <FontAwesomeIcon icon={faComment} className="mr-2" />
                        Your Message
                    </label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Write your message"
                        rows="4"
                        required
                    />
                </div>

                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Request;
