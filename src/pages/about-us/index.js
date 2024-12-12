import React from 'react';

const About = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 font-sans">
            <h1 className="text-5xl text-center text-gray-800 mb-4">About RadioSuna</h1>
            <p className="text-lg text-center text-gray-600 mb-8">
                Welcome to <strong>RadioSuna</strong>—your hub for Nepali radio! Explore diverse stations from all over Nepal, 
                bringing music, culture, news, and stories right to your ears, wherever you are.
            </p>

            <section className="mb-10">
                <h2 className="text-3xl text-gray-700 mb-4 border-b-2 border-gray-300 pb-2">What is RadioSuna?</h2>
                <p className="text-lg text-gray-600 mb-4">
                    RadioSuna connects you to live broadcasts from across Nepal, offering a variety of music, news, talk shows, 
                    and entertainment. Whether you’re in the vibrant streets of Kathmandu or the serene rural hills, 
                    we bring the best of Nepali radio to you.
                </p>
                <p className="text-lg text-gray-600">
                    Our mission is to share the diverse voices of Nepal globally, ensuring you never miss your favorite stations 
                    and feel connected to the sounds of home.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-3xl text-gray-700 mb-4 border-b-2 border-gray-300 pb-2">Why Choose RadioSuna?</h2>
                <ul className="text-lg text-gray-600 space-y-2 pl-6 list-disc">
                    <li>Access Nepali radio stations from every region.</li>
                    <li>Diverse content: music, news, talk shows, and cultural programs.</li>
                    <li>Stay updated with real-time news from Nepal.</li>
                    <li>User-friendly platform for easy access.</li>
                    <li>Free to use, no subscriptions or hidden fees.</li>
                </ul>
            </section>

            <section className="mb-10">
                <h2 className="text-3xl text-gray-700 mb-4 border-b-2 border-gray-300 pb-2">Our Vision</h2>
                <p className="text-lg text-gray-600">
                    We aim to connect Nepali communities worldwide through radio, preserving our culture, language, 
                    and music in a digital space accessible to everyone.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-3xl text-gray-700 mb-4 border-b-2 border-gray-300 pb-2">Join Us</h2>
                <p className="text-lg text-gray-600">
                    Explore the vibrant world of Nepali radio with RadioSuna. Discover new songs, stay updated with news, 
                    and feel closer to your roots. Dive into our collection of stations and immerse yourself in the soul of Nepal!
                </p>
            </section>
        </div>
    );
};

export default About;
