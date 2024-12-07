import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlay,
    faPause,
    faVolumeUp,
    faVolumeMute,
    faSpinner,
    faGlobe,
    faPhone,
    faEnvelope,
    faLocationDot,
    faHeart,
    faShare
} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

export async function getServerSideProps({ params }) {
    const res = await axios.get(`${process.env.NEXT_API_SITE_URL}`);
    const stations = res.data;

    const station = stations.find((s) => s.slug === params.slug);
    const otherStations = stations.filter((s) => s.slug !== params.slug);

    if (!station) {
        return { notFound: true };
    }

    return {
        props: {
            station,
            otherStations,
        },
    };
}

export default function RadioStationPage({ station, otherStations }) {
    const [isPageLoading, setIsPageLoading] = useState(false); // Preloader state
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.8);
    const [isMuted, setIsMuted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isFavorite, setIsFavorite] = useState(false);
    const audioRef = useRef(null);
    const previousVolume = useRef(0.8);
    const router = useRouter();

    useEffect(() => {
        const handleRouteChangeStart = () => setIsPageLoading(true); // Show preloader
        const handleRouteChangeComplete = () => setIsPageLoading(false); // Hide preloader

        router.events.on('routeChangeStart', handleRouteChangeStart);
        router.events.on('routeChangeComplete', handleRouteChangeComplete);
        router.events.on('routeChangeError', handleRouteChangeComplete); // Handle errors

        return () => {
            router.events.off('routeChangeStart', handleRouteChangeStart);
            router.events.off('routeChangeComplete', handleRouteChangeComplete);
            router.events.off('routeChangeError', handleRouteChangeComplete);
        };
    }, [router.events]);

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('radioFavorites') || '[]');
        setIsFavorite(favorites.includes(station.slug));

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, [station.slug]);

    const handlePlay = async () => {
        try {
            setIsLoading(true);
            setError(null);

            if (!audioRef.current) {
                audioRef.current = new Audio(station.audio_link);
                audioRef.current.volume = volume;
            }

            if (!isPlaying) {
                await audioRef.current.play();
                setIsPlaying(true);
            } else {
                audioRef.current.pause();
                setIsPlaying(false);
            }
        } catch (err) {
            setError('Unable to play the stream. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleVolume = (newVolume) => {
        setVolume(newVolume);
        if (audioRef.current) {
            audioRef.current.volume = newVolume;
        }
        if (newVolume > 0) {
            setIsMuted(false);
        }
    };

    const toggleMute = () => {
        if (isMuted) {
            setVolume(previousVolume.current);
            if (audioRef.current) {
                audioRef.current.volume = previousVolume.current;
            }
        } else {
            previousVolume.current = volume;
            setVolume(0);
            if (audioRef.current) {
                audioRef.current.volume = 0;
            }
        }
        setIsMuted(!isMuted);
    };

    const toggleFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem('radioFavorites') || '[]');
        if (isFavorite) {
            const newFavorites = favorites.filter(slug => slug !== station.slug);
            localStorage.setItem('radioFavorites', JSON.stringify(newFavorites));
        } else {
            favorites.push(station.slug);
            localStorage.setItem('radioFavorites', JSON.stringify(favorites));
        }
        setIsFavorite(!isFavorite);
    };

    const shareStation = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: station.name,
                    text: `Listen to ${station.name} on our radio platform!`,
                    url: window.location.href,
                });
            } catch (err) {
                console.error('Error sharing:', err);
            }
        } else {
            navigator.clipboard.writeText(window.location.href);
        }
    };

    if (router.isFallback) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <FontAwesomeIcon icon={faSpinner} spin className="text-4xl text-blue-600" />
            </div>
        );
    }
    if (isPageLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <FontAwesomeIcon icon={faSpinner} spin className="text-5xl text-red-600" />
            </div>
        );
    }

    return (
        <>
            <Head>
                <title>{`${station.name} - Online Radio`}</title>
                <meta name="description" content={`Listen to ${station.name} live online - ${station.frequency} from ${station.location}`} />
            </Head>

            <div className="min-h-screen bg-gray-100">
                <div className="max-w-5xl mx-auto p-6 space-y-6">
                    {/* Support Info */}
                    <div className="bg-red-50 text-sm p-3 rounded-md flex flex-wrap items-center justify-between">
                        <span className="font-medium text-red-800 mr-2">Need help?</span>
                        <div className="flex items-center space-x-4">
                            <a href="tel:+977-XXXXXXXXXX" className="flex items-center text-red-700 hover:text-red-900">
                                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                                <span>+977-XXXXXXXXXX</span>
                            </a>
                            <a href="mailto:support@meropatra.com" className="flex items-center text-red-700 hover:text-red-900">
                                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                                <span>support@meropatra.com</span>
                            </a>
                        </div>
                    </div>

                    {/* Main Station Player */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
                        <div className="flex items-center p-5">
                            <div className="w-24 h-24 bg-gray-100 rounded-full overflow-hidden flex-shrink-0 mr-5">
                                <img
                                    src={station.logo || '/placeholder.svg'}
                                    alt={station.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex-grow">
                                <h1 className="text-2xl font-bold text-gray-900 mb-1">{station.name}</h1>
                                <p className="text-base text-gray-600">{station.frequency} | {station.location}</p>
                                <p className="text-sm text-gray-500 mt-2">Now Playing: {station.currentSong || 'Information not available'}</p>
                            </div>
                            <div className="flex-shrink-0">
                                <button
                                    onClick={handlePlay}
                                    disabled={isLoading}
                                    className="bg-red-600 text-white rounded-full p-4 hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                                >
                                    {isLoading ? (
                                        <FontAwesomeIcon icon={faSpinner} spin className="text-xl" />
                                    ) : isPlaying ? (
                                        <FontAwesomeIcon icon={faPause} className="text-xl" />
                                    ) : (
                                        <FontAwesomeIcon icon={faPlay} className="text-xl" />
                                    )}
                                </button>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-3 flex justify-between items-center">
                            <div className="flex items-center space-x-4">
                                <button onClick={shareStation} className="text-gray-600 hover:text-red-600 transition-colors">
                                    <FontAwesomeIcon icon={faShare} className="text-lg" />
                                </button>
                                <button
                                    onClick={toggleFavorite}
                                    className={`transition-colors ${isFavorite ? 'text-red-600' : 'text-gray-400 hover:text-red-600'}`}
                                >
                                    <FontAwesomeIcon icon={faHeart} className="text-lg" />
                                </button>
                                <span className="text-sm text-gray-500">{station.listeners || '0'} listeners</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <button onClick={toggleMute} className="text-gray-600 hover:text-red-600 transition-colors">
                                    <FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeUp} className="text-lg" />
                                </button>
                                <input
                                    type="range"
                                    min="0"
                                    max="1"
                                    step="0.05"
                                    value={volume}
                                    onChange={(e) => handleVolume(parseFloat(e.target.value))}
                                    className="w-24"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Station Info */}
                    <div className="bg-white rounded-lg p-5 space-y-4 shadow-md border border-gray-200">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Station Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                                <div className="flex items-start">
                                    <FontAwesomeIcon icon={faLocationDot} className="text-red-500 mr-3 text-lg mt-1" />
                                    <div>
                                        <p className="font-semibold text-gray-700">Visit us at:</p>
                                        <p className="text-gray-600">{station.location}</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <FontAwesomeIcon icon={faPhone} className="text-red-500 mr-3 text-lg mt-1" />
                                    <div>
                                        <p className="font-semibold text-gray-700">Talk right now:</p>
                                        <a href={`tel:${station.phone}`} className="text-blue-600 hover:text-blue-800">{station.phone}</a>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-start">
                                    <FontAwesomeIcon icon={faEnvelope} className="text-red-500 mr-3 text-lg mt-1" />
                                    <div>
                                        <p className="font-semibold text-gray-700">Reach us through email:</p>
                                        <a href={`mailto:${station.email}`} className="text-blue-600 hover:text-blue-800">{station.email}</a>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <FontAwesomeIcon icon={faGlobe} className="text-red-500 mr-3 text-lg mt-1" />
                                    <div>
                                        <p className="font-semibold text-gray-700">Website:</p>
                                        <a href={station.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                                            {station.website}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Other Stations */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-gray-900">Other Radio Stations</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            {otherStations.map((otherStation) => (
                                <Link
                                    href={`/listen/${otherStation.slug}`}
                                    key={otherStation.id}
                                    className="bg-white rounded-lg border border-gray-200 p-3 hover:shadow-md transition-all"
                                >
                                    <div className="w-16 h-16 mx-auto mb-3">
                                        <img
                                            src={otherStation.logo || '/placeholder.svg'}
                                            alt={otherStation.name}
                                            className="w-full h-full object-cover rounded-full"
                                        />
                                    </div>
                                    <div className="text-center">
                                        <h3 className="font-medium text-sm text-gray-900 truncate">{otherStation.name}</h3>
                                        <p className="text-xs text-gray-500 truncate">{otherStation.frequency}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
}

