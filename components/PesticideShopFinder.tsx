import React, { useState } from 'react';
import { PesticideShop } from '../types';
import { PesticideShopIcon } from '../constants';

interface PesticideShopFinderProps {
    onFind: (location: string) => void;
    shops: PesticideShop[] | null;
    loading: boolean;
    error: string | null;
    userLocation: string;
}

const PesticideShopFinder: React.FC<PesticideShopFinderProps> = ({ onFind, shops, loading, error, userLocation }) => {
    const [location, setLocation] = useState(userLocation);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (location.trim()) {
            onFind(location.trim());
        }
    };

    return (
        <div className="p-4 border border-gray-200 rounded-lg bg-gray-50/50 h-full flex flex-col">
            <h3 className="text-lg font-bold text-brand-dark flex items-center"><PesticideShopIcon /> <span className="ml-2">Pesticide Shop Finder</span></h3>
            <p className="text-sm text-gray-500 mt-1 mb-4">Find local agricultural supply shops. (+10 PTS)</p>
            <form onSubmit={handleSubmit} className="flex space-x-2">
                <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter your location"
                    className="flex-grow block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green sm:text-sm"
                    disabled={loading}
                    required
                />
                <button type="submit" className="px-4 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:bg-gray-400" disabled={loading || !location}>
                    {loading ? 'Searching...' : 'Find Shops'}
                </button>
            </form>

            <div className="mt-4 flex-grow overflow-y-auto">
                {error && <p className="text-sm text-red-600">{error}</p>}
                {shops && (
                    <div className="space-y-3">
                        <h4 className="font-bold text-md text-gray-800">Found {shops.length} shops:</h4>
                        {shops.map((shop, index) => (
                            <div key={index} className="p-3 rounded-lg bg-red-50 border-l-4 border-red-500">
                                <p className="font-bold text-md text-red-800">{shop.name}</p>
                                <p className="text-sm text-gray-600 mt-2">{shop.address}</p>
                                <p className="text-sm font-semibold text-gray-800 mt-1">{shop.phone}</p>
                                <a
                                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(shop.address)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-blue-600 hover:underline mt-2 inline-block"
                                >
                                    View on Map &rarr;
                                </a>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default PesticideShopFinder;
