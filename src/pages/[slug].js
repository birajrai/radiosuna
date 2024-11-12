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
    faBroadcastTower,
    faShare,
    faHeart,
    faMapLocation,
    faRadio
} from '@fortawesome/free-solid-svg-icons';

export async function getStaticPaths() {
    const res = await fetch('https://kiratdewas.vercel.app/api/streams.json');
    const stations = await res.json();

    const paths = stations.map((station) => ({
        params: { slug: station.slug },
    }));

    return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
    const res = await fetch('https://kiratdewas.vercel.app/api/streams.json');
    const stations = await res.json();
    const station = stations.find((s) => s.slug === params.slug);
    const otherStations = stations.filter((s) => s.slug !== params.slug);

    if (!station) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            station,
            otherStations,
        },
        revalidate: 3600,
    };
}

export default function RadioStationPage({ station, otherStations }) {
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
        // Check if station is in favorites
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
            // Fallback - copy to clipboard
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

    return (
        <>
            <Head>
                <title>{station.name} - Online Radio</title>
                <meta name="description" content={`Listen to ${station.name} live online - ${station.frequency} from ${station.location}`} />
            </Head>

            <div className="min-h-screen bg-gray-50">
                <div className="max-w-7xl mx-auto p-4 md:p-6 space-y-8">
                    {/* Breadcrumb */}
                    <nav className="text-sm text-gray-500">
                        <Link href="/" className="hover:text-blue-600">
                            Home
                        </Link>
                        <span className="mx-2">/</span>
                        <span className="text-gray-900">{station.name}</span>
                    </nav>

                    {/* Main Station Player */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                        <div className="grid md:grid-cols-2 gap-8 p-8">
                            <div className="space-y-6">
                                <div className="aspect-square bg-gray-50 rounded-xl overflow-hidden border border-gray-100">
                                    <img
                                        src={station.logo || '/api/placeholder/400/400'}
                                        alt={station.name}
                                        className="w-full h-full object-contain p-4"
                                    />
                                </div>

                                <div className="flex flex-col items-center space-y-4">
                                    <button
                                        onClick={handlePlay}
                                        disabled={isLoading}
                                        className="flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:bg-blue-300 transition-all transform hover:scale-105 w-full max-w-xs shadow-lg"
                                    >
                                        {isLoading ? (
                                            <FontAwesomeIcon icon={faSpinner} spin className="mr-3 text-xl" />
                                        ) : isPlaying ? (
                                            <FontAwesomeIcon icon={faPause} className="mr-3 text-xl" />
                                        ) : (
                                            <FontAwesomeIcon icon={faPlay} className="mr-3 text-xl" />
                                        )}
                                        {isPlaying ? 'Pause' : 'Play'} Stream
                                    </button>

                                    <div className="flex items-center gap-4 w-full max-w-xs">
                                        <button
                                            onClick={toggleMute}
                                            className="text-gray-600 hover:text-gray-800 p-2"
                                        >
                                            <FontAwesomeIcon
                                                icon={isMuted ? faVolumeMute : faVolumeUp}
                                                className="text-xl"
                                            />
                                        </button>
                                        <input
                                            type="range"
                                            min="0"
                                            max="1"
                                            step="0.05"
                                            value={volume}
                                            onChange={(e) => handleVolume(parseFloat(e.target.value))}
                                            className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h1 className="text-4xl font-bold text-gray-900 mb-2">
                                            {station.name}
                                        </h1>
                                        <p className="text-lg text-gray-600">
                                            Broadcasting from {station.location}
                                        </p>
                                    </div>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={toggleFavorite}
                                            className={`p-2 rounded-full transition-colors ${isFavorite ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
                                                }`}
                                        >
                                            <FontAwesomeIcon icon={faHeart} className="text-xl" />
                                        </button>
                                        <button
                                            onClick={shareStation}
                                            className="p-2 text-gray-400 hover:text-gray-600 rounded-full transition-colors"
                                        >
                                            <FontAwesomeIcon icon={faShare} className="text-xl" />
                                        </button>
                                    </div>
                                </div>

                                <div className="grid gap-4">
                                    <div className="flex items-center text-gray-600">
                                        <FontAwesomeIcon icon={faBroadcastTower} className="w-6 mr-4 text-blue-600" />
                                        <span className="font-medium">{station.frequency}</span>
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        <FontAwesomeIcon icon={faMapLocation} className="w-6 mr-4 text-blue-600" />
                                        <span>{station.pradesh} Province, {station.location}</span>
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        <FontAwesomeIcon icon={faPhone} className="w-6 mr-4 text-blue-600" />
                                        <a href={`tel:${station.phone}`} className="hover:text-blue-600 transition-colors">
                                            {station.phone}
                                        </a>
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        <FontAwesomeIcon icon={faEnvelope} className="w-6 mr-4 text-blue-600" />
                                        <a href={`mailto:${station.email}`} className="hover:text-blue-600 transition-colors">
                                            {station.email}
                                        </a>
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        <FontAwesomeIcon icon={faGlobe} className="w-6 mr-4 text-blue-600" />
                                        <a
                                            href={station.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-blue-600 transition-colors"
                                        >
                                            Visit Website
                                        </a>
                                    </div>
                                </div>

                                {error && (
                                    <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
                                        <p className="flex items-center">
                                            <FontAwesomeIcon icon={faRadio} className="mr-2" />
                                            {error}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Other Stations */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900">Other Radio Stations</h2>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                            {otherStations.map((otherStation) => (
                                <Link
                                    href={`/${otherStation.slug}`}
                                    key={otherStation.id}
                                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-105 overflow-hidden border border-gray-100"
                                >
                                    <div className="aspect-square bg-gray-50 border-b border-gray-100">
                                        <img
                                            src={otherStation.logo || '/api/placeholder/200/200'}
                                            alt={otherStation.name}
                                            className="w-full h-full object-contain p-4"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-semibold text-gray-900 mb-1">
                                            {otherStation.name}
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            {otherStation.frequency} • {otherStation.location}
                                        </p>
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