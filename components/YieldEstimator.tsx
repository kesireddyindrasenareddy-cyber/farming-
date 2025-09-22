import React, { useState } from 'react';
import { EstimatedYield } from '../types';
import { YieldIcon } from '../constants';

interface YieldEstimatorProps {
    onEstimate: (cropName: string, farmSize: number) => void;
    result: EstimatedYield | null;
    loading: boolean;
    error: string | null;
    farmSize: number;
}

const YieldEstimator: React.FC<YieldEstimatorProps> = ({ onEstimate, result, loading, error, farmSize: initialFarmSize }) => {
    const [cropName, setCropName] = useState('');
    const [farmSize, setFarmSize] = useState<number>(initialFarmSize);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (cropName.trim() && farmSize > 0) {
            onEstimate(cropName.trim(), farmSize);
        }
    };

    return (
        <div className="p-4 border border-gray-200 rounded-lg bg-gray-50/50 h-full flex flex-col">
            <h3 className="text-lg font-bold text-brand-dark flex items-center"><YieldIcon /> <span className="ml-2">Yield Estimator</span></h3>
            <p className="text-sm text-gray-500 mt-1 mb-4">Estimate potential yield for a crop. (+15 PTS)</p>
            <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label className="block text-xs font-medium text-gray-700">Crop Name</label>
                        <input
                            type="text"
                            value={cropName}
                            onChange={(e) => setCropName(e.target.value)}
                            placeholder="e.g., Potato"
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green sm:text-sm"
                            disabled={loading}
                            required
                        />
                    </div>
                     <div>
                        <label className="block text-xs font-medium text-gray-700">Farm Size (acres)</label>
                        <input
                            type="number"
                            value={farmSize}
                            onChange={(e) => setFarmSize(Number(e.target.value))}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green sm:text-sm"
                            min="0.1"
                            step="0.1"
                            disabled={loading}
                            required
                        />
                    </div>
                </div>
                <button type="submit" className="w-full px-4 py-2 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:bg-gray-400" disabled={loading || !cropName || farmSize <= 0}>
                    {loading ? 'Estimating...' : 'Estimate Yield'}
                </button>
            </form>
            
            <div className="mt-4 flex-grow">
                {error && <p className="text-sm text-red-600">{error}</p>}
                {result && (
                    <div className="p-3 rounded-lg bg-orange-50 border-l-4 border-orange-500 space-y-3">
                        <div>
                             <p className="text-sm font-bold text-orange-800">Estimated Yield for {result.cropName}</p>
                             <p className="text-2xl font-bold text-gray-800">{result.totalEstimatedYield}</p>
                             <p className="text-md font-medium text-gray-600">({result.estimatedYieldPerAcre})</p>
                        </div>
                        {result.notes && result.notes.length > 0 && (
                            <div>
                                <p className="text-xs font-semibold text-orange-800 uppercase">Important Notes</p>
                                <ul className="list-disc list-inside text-sm text-gray-700 mt-1 space-y-1">
                                    {result.notes.map((note, i) => <li key={i}>{note}</li>)}
                                </ul>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default YieldEstimator;
