import React, { useState } from 'react';
import { EquipmentDealer } from '../types';
import { EquipmentIcon } from '../constants';
import { useTranslation } from '../hooks/useTranslation';

interface EquipmentFinderProps {
    onFind: (location: string, equipmentType: string) => void;
    dealers: EquipmentDealer[] | null;
    loading: boolean;
    error: string | null;
    userLocation: string;
}

const EquipmentFinder: React.FC<EquipmentFinderProps> = ({ onFind, dealers, loading, error, userLocation }) => {
    const { t } = useTranslation();
    const [location, setLocation] = useState(userLocation);
    const [equipmentType, setEquipmentType] = useState<'Tractors' | 'Harvesters'>('Tractors');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (location.trim()) {
            onFind(location.trim(), equipmentType);
        }
    };

    return (
        <div className="p-4 border border-gray-200 rounded-lg bg-gray-50/50 h-full flex flex-col">
            <h3 className="text-lg font-bold text-brand-dark flex items-center"><EquipmentIcon /> <span className="ml-2">{t('equipmentFinderTitle')}</span></h3>
            <p className="text-sm text-gray-500 mt-1 mb-4">{t('equipmentFinderDescription')}</p>
            <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label className="block text-xs font-medium text-gray-700">{t('equipmentLabel')}</label>
                        <select
                            value={equipmentType}
                            onChange={(e) => setEquipmentType(e.target.value as 'Tractors' | 'Harvesters')}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green sm:text-sm"
                            disabled={loading}
                        >
                            <option>{t('tractorsOption')}</option>
                            <option>{t('harvestersOption')}</option>
                        </select>
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
                <button type="submit" className="w-full px-4 py-2 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:bg-gray-400" disabled={loading || !location}>
                    {loading ? t('searchingButton') : t('findDealersButton')}
                </button>
            </form>

            <div className="mt-4 flex-grow">
                {error && <p className="text-sm text-red-600">{error}</p>}
                {dealers && (
                    <div className="space-y-3">
                        <h4 className="font-bold text-md text-gray-800">{t('foundDealers', { count: dealers.length })}:</h4>
                        {dealers.map((dealer, index) => (
                            <div key={index} className="p-3 rounded-lg bg-teal-50 border-l-4 border-teal-500">
                                <p className="font-bold text-md text-teal-800">{dealer.name}</p>
                                <p className="text-sm text-gray-700 mt-1">{dealer.specialty}</p>
                                <p className="text-sm text-gray-600 mt-2">{dealer.address}</p>
                                <p className="text-sm font-semibold text-gray-800 mt-1">{dealer.phone}</p>
                                <a
                                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(dealer.address)}`}
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

export default EquipmentFinder;
