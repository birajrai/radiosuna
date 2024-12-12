import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faGlobe, faExclamationTriangle, faSpinner, faBroadcastTower, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export default function SponsoredRadios() {
    const [sponsoredStations, setSponsoredStations] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSponsoredStations = async () => {
            try {
                const response = await axios.get(process.env.NEXT_PUBLIC_API_SITE_URL, {
                    timeout: 10000, // 10 seconds timeout
                });
                const allStations = response.data;
                const sponsored = allStations.filter(station => station.sponsor === "true");
                setSponsoredStations(sponsored);
                setIsLoading(false);
            } catch (err) {
                console.error('Error fetching sponsored stations:', err);
                if (err.code === 'ECONNABORTED') {
                    setError('Request timed out. Please check your internet connection and try again.');
                } else if (err.message === 'Network Error') {
                    setError('Network error. Please check your internet connection and try again.');
                } else {
                    setError(`Failed to load sponsored radio stations. ${err.message}`);
                }
                setIsLoading(false);
            }
        };

        fetchSponsoredStations();
    }, []);

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <FontAwesomeIcon icon={faSpinner} spin size="3x" className="text-blue-500 mb-4" />
                <p className="text-xl">Loading sponsored stations...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center h-screen text-center">
                <FontAwesomeIcon icon={faExclamationTriangle} size="3x" className="text-red-500 mb-4" />
                <p className="text-xl text-red-600 mb-4">{error}</p>
                <button
                    onClick={() => window.location.reload()}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                >
                    Try Again
                </button>
            </div>
        );
    }

    return (
        <>
            <Head>
                <title>Sponsored Radio Stations</title>
                <meta name="description" content="Listen to our sponsored radio stations" />
            </Head>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6 text-center">Sponsored Radio Stations</h1>
                {sponsoredStations.length === 0 ? (
                    <p className="text-center text-gray-600">No sponsored radio stations available at the moment.</p>
                ) : (
                    <div className="bg-gray-800 rounded-lg overflow-hidden">
                        {sponsoredStations.map((station, index) => (
                            <div
                                key={station.id}
                                className={`flex items-center p-4 hover:bg-gray-700 transition-colors ${index % 2 === 0 ? 'bg-gray-900' : 'bg-gray-800'
                                    }`}
                            >
                                <img
                                    src={station.logo || '/placeholder.svg?height=64&width=64'}
                                    alt={`${station.name} logo`}
                                    className="w-16 h-16 object-cover rounded-md mr-4"
                                />
                                <div className="flex-grow">
                                    <h2 className="text-xl font-semibold text-white mb-1">{station.name}</h2>
                                    <div className="flex items-center text-gray-400 text-sm">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                                        <span>{station.location}, {station.pradesh}</span>
                                    </div>
                                    <div className="flex items-center text-gray-400 text-sm mt-1">
                                        <FontAwesomeIcon icon={faBroadcastTower} className="mr-2" />
                                        <span>{station.frequency}</span>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Link
                                        href={`/listen/${station.slug}`}
                                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors flex items-center"
                                    >
                                        <FontAwesomeIcon icon={faPlay} className="mr-2" />
                                        Listen
                                    </Link>
                                    {station.website && (
                                        <a
                                            href={station.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                                        >
                                            <FontAwesomeIcon icon={faGlobe} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}

