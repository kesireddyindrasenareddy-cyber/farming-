import React, { useState } from 'react';
import { ColdStorageCenter } from '../types';
import { ColdStorageIcon } from '../constants';

interface ColdStorageFinderProps {
    onFind: (location: string) => void;
    centers: ColdStorageCenter[] | null;
    loading: boolean;
    error: string | null;
    userLocation: string;
}

const ColdStorageFinder: React.FC<ColdStorageFinderProps> = ({ onFind, centers, loading, error, userLocation }) => {
    const [location, setLocation] = useState(userLocation);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (location.trim()) {
            onFind(location.trim());
        }
    };

    return (
        <div className="p-4 border border-gray-200 rounded-lg bg-gray-50/50 h-full flex flex-col">
            <h3 className="text-lg font-bold text-brand-dark flex items-center"><ColdStorageIcon /> <span className="ml-2">Cold Storage Finder</span></h3>
            <p className="text-sm text-gray-500 mt-1 mb-4">Find nearby cold storage facilities. (+10 PTS)</p>
            <form onSubmit={handleSubmit} className="flex space-x-2">
                <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter location"
                    className="flex-grow block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green sm:text-sm"
                    disabled={loading}
                    required
                />
                <button type="submit" className="px-4 py-2 bg-cyan-500 text-white font-semibold rounded-md hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 disabled:bg-gray-400" disabled={loading || !location}>
                    {loading ? 'Searching...' : 'Find'}
                </button>
            </form>

            <div className="mt-4 flex-grow overflow-y-auto max-h-80">
                {error && <p className="text-sm text-red-600">{error}</p>}
                {centers && (
                    <div className="space-y-3">
                        <h4 className="font-bold text-md text-gray-800">Found {centers.length} centers:</h4>
                        {centers.map((center, index) => (
                            <div key={index} className="p-3 rounded-lg bg-cyan-50 border-l-4 border-cyan-500">
                                <p className="font-bold text-md text-cyan-800">{center.name}</p>
                                <p className="text-sm text-gray-700 mt-1">Capacity: <span className="font-medium">{center.capacity}</span></p>
                                <p className="text-sm text-gray-600 mt-2">{center.address}</p>
                                <p className="text-sm font-semibold text-gray-800 mt-1">{center.phone}</p>
                                <a
                                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(center.address)}`}
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

export default ColdStorageFinder;