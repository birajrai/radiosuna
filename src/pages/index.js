import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSearch,
    faMapLocation,
    faSort,
    faTimes,
    faHeart,
    faHeartBroken
} from '@fortawesome/free-solid-svg-icons';

// Change to getServerSideProps for real-time data
export async function getServerSideProps() {
    try {
        // Fetch data server-side
        const response = await fetch(`${process.env.NEXT_API_SITE_URL}`);
        const stations = await response.json();

        // Process data server-side
        const pradeshList = [...new Set(stations.map(station => station.pradesh))].sort();

        return {
            props: {
                stations,
                pradeshList,
                error: null
            }
        };
    } catch (error) {
        return {
            props: {
                stations: [],
                pradeshList: [],
                error: 'Failed to load radio stations'
            }
        };
    }
}

export default function RadioIndex({ stations, pradeshList, error }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedPradesh, setSelectedPradesh] = useState('');
    const [favorites, setFavorites] = useState([]);
    const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
    const [sortOrder, setSortOrder] = useState('asc');

    useEffect(() => {
        // Only handle favorites in useEffect
        const storedFavorites = JSON.parse(localStorage.getItem('radioFavorites') || '[]');
        setFavorites(storedFavorites);
    }, []);

    const toggleFavorite = (slug) => {
        const newFavorites = favorites.includes(slug)
            ? favorites.filter(f => f !== slug)
            : [...favorites, slug];
        setFavorites(newFavorites);
        localStorage.setItem('radioFavorites', JSON.stringify(newFavorites));
    };

    // Move filtering logic to a separate function for clarity
    const getFilteredStations = () => {
        return stations
            .filter(station => {
                const matchesSearch = station.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    station.frequency.toLowerCase().includes(searchTerm.toLowerCase());
                const matchesPradesh = !selectedPradesh || station.pradesh === selectedPradesh;
                const matchesFavorites = !showFavoritesOnly || favorites.includes(station.slug);
                return matchesSearch && matchesPradesh && matchesFavorites;
            })
            .sort((a, b) => {
                const nameA = a.name.toLowerCase();
                const nameB = b.name.toLowerCase();
                return sortOrder === 'asc'
                    ? nameA.localeCompare(nameB)
                    : nameB.localeCompare(nameA);
            });
    };

    const resetFilters = () => {
        setSearchTerm('');
        setSelectedPradesh('');
        setShowFavoritesOnly(false);
    };

    // Handle error state
    if (error) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Error Loading Stations</h1>
                    <p className="text-gray-600">{error}</p>
                </div>
            </div>
        );
    }

    const filteredStations = getFilteredStations();

    return (
        <>
            <Head>
                <title>Online Radio Stations - Listen Live</title>
                <meta name="description" content="Listen to your favorite radio stations online. Browse through our collection of radio stations from different provinces of Nepal." />
            </Head>

            <div className="min-h-screen bg-gray-50">
                <div className="max-w-7xl mx-auto p-4 md:p-6 space-y-8">
                    {/* Header */}
                    <div className="text-center space-y-4">
                        <h1 className="text-4xl font-bold text-gray-900">
                            Online Radio Stations
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Listen to your favorite radio stations from across Nepal. Browse by province, search by name, or save your favorites for quick access.
                        </p>
                    </div>

                    {/* Search and Filters */}
                    <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                            {/* Search Input */}
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    placeholder="Search stations..."
                                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            {/* Pradesh Filter */}
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FontAwesomeIcon icon={faMapLocation} className="text-gray-400" />
                                </div>
                                <select
                                    value={selectedPradesh}
                                    onChange={(e) => setSelectedPradesh(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                                >
                                    <option value="">All Provinces</option>
                                    {pradeshList.map((pradesh) => (
                                        <option key={pradesh} value={pradesh}>
                                            {pradesh} Province
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Sort Order */}
                            <button
                                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                                className="flex items-center justify-center px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50"
                            >
                                <FontAwesomeIcon icon={faSort} className="mr-2 text-gray-400" />
                                Sort {sortOrder === 'asc' ? 'A-Z' : 'Z-A'}
                            </button>

                            {/* Favorites Toggle */}
                            <button
                                onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
                                className={`flex items-center justify-center px-4 py-2 border rounded-lg transition-colors ${showFavoritesOnly
                                    ? 'border-red-200 bg-red-50 text-red-600 hover:bg-red-100'
                                    : 'border-gray-200 hover:bg-gray-50'
                                    }`}
                            >
                                <FontAwesomeIcon
                                    icon={showFavoritesOnly ? faHeartBroken : faHeart}
                                    className="mr-2"
                                />
                                {showFavoritesOnly ? 'Show All' : 'Show Favorites'}
                            </button>
                        </div>

                        {/* Active Filters */}
                        {(searchTerm || selectedPradesh || showFavoritesOnly) && (
                            <div className="flex items-center gap-2 pt-2">
                                <span className="text-sm text-gray-500">Active filters:</span>
                                {searchTerm && (
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-700">
                                        "{searchTerm}"
                                        <button
                                            onClick={() => setSearchTerm('')}
                                            className="ml-2 hover:text-blue-900"
                                        >
                                            <FontAwesomeIcon icon={faTimes} />
                                        </button>
                                    </span>
                                )}
                                {selectedPradesh && (
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">
                                        {selectedPradesh} Province
                                        <button
                                            onClick={() => setSelectedPradesh('')}
                                            className="ml-2 hover:text-green-900"
                                        >
                                            <FontAwesomeIcon icon={faTimes} />
                                        </button>
                                    </span>
                                )}
                                {showFavoritesOnly && (
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-red-100 text-red-700">
                                        Favorites Only
                                        <button
                                            onClick={() => setShowFavoritesOnly(false)}
                                            className="ml-2 hover:text-red-900"
                                        >
                                            <FontAwesomeIcon icon={faTimes} />
                                        </button>
                                    </span>
                                )}
                                <button
                                    onClick={resetFilters}
                                    className="text-sm text-gray-500 hover:text-gray-700 ml-2"
                                >
                                    Reset all
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Stations Grid */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-semibold text-gray-900">
                                {filteredStations.length} {filteredStations.length === 1 ? 'Station' : 'Stations'} Found
                            </h2>
                        </div>

                        <div className="grid grid-cols-3 gap-6 sm:grid-cols-3 lg:grid-cols-6">
                            {filteredStations.map((station) => (
                                <div
                                    key={station.id}
                                    className="bg-gray-50 rounded-lg hover:shadow-lg transition-all transform hover:scale-105 overflow-hidden relative group"
                                >
                                    <Link href={`/${station.slug}`}>
                                        <div className="flex flex-col items-center py-4">
                                            <img
                                                src={station.logo || '/api/placeholder/200/200'}
                                                alt={station.name}
                                                className="w-32 h-32 object-cover rounded-full p-2 mb-4 border"
                                            />
                                            <div className="text-center px-4">
                                                <h3 className="font-semibold text-gray-900 mb-1 text-sm">{station.name}</h3>
                                                <p className="text-xs text-gray-600 flex items-center justify-center">
                                                    {station.frequency}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            toggleFavorite(station.slug);
                                        }}
                                        className={`absolute top-2 right-2 p-2 rounded-full transition-opacity ${favorites.includes(station.slug)
                                            ? 'bg-red-100 text-red-500'
                                            : 'bg-gray-100 text-gray-400'
                                            } opacity-0 group-hover:opacity-100`}
                                    >
                                        <FontAwesomeIcon icon={faHeart} className="w-6 h-6" />
                                    </button>
                                </div>
                            ))}
                        </div>

                        {filteredStations.length === 0 && (
                            <div className="text-center py-12 bg-white rounded-xl shadow-md">
                                <p className="text-gray-600">
                                    No radio stations found matching your criteria.
                                </p>
                                <button
                                    onClick={resetFilters}
                                    className="mt-4 text-blue-600 hover:text-blue-700"
                                >
                                    Clear all filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}