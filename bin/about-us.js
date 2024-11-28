import React from 'react';

const About = () => {
    return (
        <div className="p-8 font-sans">
            <h1 className="text-4xl text-center text-gray-800 mb-6">About RadioSuna</h1>
            <p className="text-lg text-center text-gray-600 mb-8">
                Welcome to <strong>RadioSuna</strong>, your ultimate destination for exploring the vibrant world of Nepali radio!
                Our platform connects you to a rich diversity of radio stations from across Nepal, bringing the music, culture,
                news, and stories from every corner of this beautiful country to your ears, no matter where you are in the world.
            </p>

            <section className="mb-12">
                <h2 className="text-2xl text-gray-700 mb-4">What is RadioSuna?</h2>
                <p className="text-lg text-gray-600 mb-4">
                    RadioSuna is an online platform that gives you access to a wide range of radio stations broadcasting live from
                    every area of Nepal. From the bustling streets of Kathmandu to the serene landscapes of the rural hills,
                    we curate the best of Nepali radio for you to enjoy. Whether you’re in search of music, local news, talk shows,
                    or entertainment, RadioSuna has it all, available for you anytime, anywhere.
                </p>
                <p className="text-lg text-gray-600">
                    Our mission is to bring the diverse voices of Nepal to the global stage, allowing listeners to experience the
                    essence of Nepali life through radio. With RadioSuna, you’ll never miss a beat from your favorite stations in
                    Nepal. Whether you're in Nepal or abroad, we aim to bridge the distance and keep you connected to the sounds of
                    home.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl text-gray-700 mb-4">Why Choose RadioSuna?</h2>
                <ul className="text-lg text-gray-600 space-y-2 pl-6 list-disc">
                    <li>Listen to Nepali radio stations from all regions of Nepal.</li>
                    <li>Enjoy diverse content including music, news, talk shows, and cultural programming.</li>
                    <li>Stay connected with real-time updates on what’s happening in Nepal.</li>
                    <li>Easy-to-use platform that makes accessing your favorite stations simple and convenient.</li>
                    <li>Free to use, with no subscriptions or hidden fees.</li>
                </ul>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl text-gray-700 mb-4">Our Vision</h2>
                <p className="text-lg text-gray-600 mb-4">
                    Our vision is to create a platform that connects Nepali communities globally through the power of radio.
                    We want to preserve and promote Nepali culture, language, and music by providing a digital space where you
                    can explore the sounds of Nepal from anywhere in the world.
                </p>
                <p className="text-lg text-gray-600">
                    At RadioSuna, we are dedicated to offering an easy and seamless experience for users, so they can always
                    tune in and feel the pulse of Nepal, no matter where life takes them.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl text-gray-700 mb-4">Join Us</h2>
                <p className="text-lg text-gray-600 mb-4">
                    We invite you to explore the vast world of Nepali radio with us. Whether you want to discover new songs,
                    stay updated with the latest news, or just feel closer to your roots, RadioSuna is here for you.
                    Feel free to explore our collection of stations, share your favorites, and immerse yourself in the soul of Nepal.
                </p>
            </section>
        </div>
    );
};

export default About;
