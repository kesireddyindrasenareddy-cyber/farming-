import React, { useState } from 'react';
import { GrassListing } from '../types';
import { GrassIcon } from '../constants';
import { useTranslation } from '../hooks/useTranslation';

interface GrassMarketplaceProps {
    onFind: (location: string) => void;
    listings: GrassListing[] | null;
    loading: boolean;
    error: string | null;
    userLocation: string;
}

const GrassMarketplace: React.FC<GrassMarketplaceProps> = ({ onFind, listings, loading, error, userLocation }) => {
    const { t } = useTranslation();
    const [location, setLocation] = useState(userLocation);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (location.trim()) {
            onFind(location.trim());
        }
    };

    return (
        <div className="p-4 border border-gray-200 rounded-lg bg-gray-50/50 h-full flex flex-col">
            <h3 className="text-lg font-bold text-brand-dark flex items-center"><GrassIcon /> <span className="ml-2">{t('grassMarketplaceTitle')}</span></h3>
            <p className="text-sm text-gray-500 mt-1 mb-4">{t('grassMarketplaceDescription')}</p>
            <form onSubmit={handleSubmit} className="flex space-x-2">
                 <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder={t('enterLocationPlaceholder')}
                    className="flex-grow block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green sm:text-sm"
                    disabled={loading}
                    required
                />
                <button type="submit" className="px-4 py-2 bg-green-800 text-white font-semibold rounded-md hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-800 disabled:bg-gray-400" disabled={loading || !location}>
                    {loading ? t('findingButton') : t('findListingsButton')}
                </button>
            </form>

            <div className="mt-4 flex-grow overflow-y-auto max-h-80">
                {error && <p className="text-sm text-red-600">{error}</p>}
                {listings && (
                    <div className="space-y-3">
                        {listings.map((listing) => (
                            <div key={listing.id} className="p-3 rounded-lg bg-white border border-gray-200">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="font-bold text-md text-gray-800">{listing.grassType}</p>
                                        <p className="text-sm text-gray-600">{listing.quantity} - <span className="font-semibold">{listing.price}</span></p>
                                    </div>
                                    <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${
                                        listing.type === 'For Sale' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                                    }`}>
                                        {listing.type === 'For Sale' ? t('forSale') : t('wanted')}
                                    </span>
                                </div>
                                <div className="mt-3 pt-2 border-t border-gray-200">
                                     <p className="text-sm text-gray-700">{t('contactLabel')}: <span className="font-medium">{listing.contactName}</span></p>
                                     <p className="text-sm text-gray-700">{t('phoneLabel')}: <span className="font-medium">{listing.contactPhone}</span></p>
                                     <p className="text-xs text-gray-500 mt-1">{t('locationLabel')}: {listing.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default GrassMarketplace;
