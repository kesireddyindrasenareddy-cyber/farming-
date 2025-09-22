import React, { useState } from 'react';
import { CropProductionInfo } from '../types';
import { TimerIcon } from '../constants';

interface CropProductionAdvisorProps {
    onGetTime: (cropName: string) => void;
    result: CropProductionInfo | null;
    loading: boolean;
    error: string | null;
}

const CropProductionAdvisor: React.FC<CropProductionAdvisorProps> = ({ onGetTime, result, loading, error }) => {
    const [cropName, setCropName] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (cropName.trim()) {
            onGetTime(cropName.trim());
        }
    };

    return (
        <div className="p-4 border border-gray-200 rounded-lg bg-gray-50/50 h-full flex flex-col">
            <h3 className="text-lg font-bold text-brand-dark flex items-center"><TimerIcon /> <span className="ml-2">Crop Production Timeline</span></h3>
            <p className="text-sm text-gray-500 mt-1 mb-4">Estimate the time from planting to harvest. (+15 PTS)</p>
            <form onSubmit={handleSubmit} className="flex space-x-2">
                <input
                    type="text"
                    value={cropName}
                    onChange={(e) => setCropName(e.target.value)}
                    placeholder="e.g., Wheat"
                    className="flex-grow block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green sm:text-sm"
                    disabled={loading}
                />
                <button type="submit" className="px-4 py-2 bg-purple-500 text-white font-semibold rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:bg-gray-400" disabled={loading || !cropName}>
                    {loading ? 'Estimating...' : 'Get Timeline'}
                </button>
            </form>
            
            <div className="mt-4 flex-grow">
                {error && <p className="text-sm text-red-600">{error}</p>}
                {result && (
                    <div className="p-3 rounded-lg bg-purple-50 border-l-4 border-purple-500 space-y-3">
                        <div>
                             <p className="text-sm font-bold text-purple-800">Total Duration for {result.cropName}</p>
                             <p className="text-2xl font-bold text-gray-800">{result.totalDuration}</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center">
                             <div>
                                <p className="text-xs font-semibold text-purple-800 uppercase">Germination</p>
                                <p className="text-md font-medium text-gray-800">{result.germination}</p>
                            </div>
                            <div>
                                <p className="text-xs font-semibold text-purple-800 uppercase">Vegetative Growth</p>
                                <p className="text-md font-medium text-gray-800">{result.vegetative}</p>
                            </div>
                             <div>
                                <p className="text-xs font-semibold text-purple-800 uppercase">Flowering to Harvest</p>
                                <p className="text-md font-medium text-gray-800">{result.floweringToHarvest}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CropProductionAdvisor;