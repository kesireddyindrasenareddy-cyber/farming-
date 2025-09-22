import React, { useState } from 'react';
import { CropSellingCenter } from '../types';
import { MarketIcon } from '../constants';
import { useTranslation } from '../hooks/useTranslation';

interface CropSellingCenterFinderProps {
    onFind: (location: string, crop: string) => void;
    centers: CropSellingCenter[] | null;
    loading: boolean;
    error: string | null;
    userLocation: string;
    userCrop: string;
}

const CropSellingCenterFinder: React.FC<CropSellingCenterFinderProps> = ({ onFind, centers, loading, error, userLocation, userCrop }) => {
    const { t } = useTranslation();
    const [location, setLocation] = useState(userLocation);
    const [crop, setCrop] = useState(userCrop);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (location.trim() && crop.trim()) {
            onFind(location.trim(), crop.trim());
        }
    };

    return (
        <div className="p-4 border border-gray-200 rounded-lg bg-gray-50/50 h-full flex flex-col">
            <h3 className="text-lg font-bold text-brand-dark flex items-center"><MarketIcon /> <span className="ml-2">{t('cropSellingCenterFinderTitle')}</span></h3>
            <p className="text-sm text-gray-500 mt-1 mb-4">{t('cropSellingCenterFinderDescription')}</p>
            <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label className="block text-xs font-medium text-gray-700">{t('cropToSellLabel')}</label>
                        <input
                            type="text"
                            value={crop}
                            onChange={(e) => setCrop(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green sm:text-sm"
                            disabled={loading}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-gray-700">{t('nearLocationLabel')}</label>
                        <input
                            type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green sm:text-sm"
                            disabled={loading}
                            required
                        />
                    </div>
                </div>
                <button type="submit" className="w-full px-4 py-2 bg-lime-600 text-white font-semibold rounded-md hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-600 disabled:bg-gray-400" disabled={loading || !location || !crop}>
                    {loading ? t('searchingButton') : t('findMarketsButton')}
                </button>
            </form>

            <div className="mt-4 flex-grow overflow-y-auto max-h-80">
                {error && <p className="text-sm text-red-600">{error}</p>}
                {centers && (
                    <div className="space-y-3">
                        <h4 className="font-bold text-md text-gray-800">{t('foundMarkets', { count: centers.length })}:</h4>
                        {centers.map((center, index) => (
                            <div key={index} className="p-3 rounded-lg bg-lime-50 border-l-4 border-lime-500">
                                <p className="font-bold text-md text-lime-800">{center.name}</p>
                                <p className="text-sm text-gray-700 mt-1">{t('specializesInLabel')}: <span className="font-medium">{center.majorCrops}</span></p>
                                <p className="text-sm text-gray-600 mt-2">{center.address}</p>
                                <p className="text-sm font-semibold text-gray-800 mt-1">{center.phone}</p>
                                <a
                                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(center.address)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-blue-600 hover:underline mt-2 inline-block"
                                >
                                    {t('viewOnMapLink')} &rarr;
                                </a>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CropSellingCenterFinder;
