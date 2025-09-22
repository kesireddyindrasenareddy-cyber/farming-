import React, { useState } from 'react';
import { SoilData, CropSuggestion } from '../types';
import { SproutIcon } from '../constants';

interface CropSuggesterProps {
    onSuggest: (soilData: SoilData) => void;
    suggestions: CropSuggestion[] | null;
    loading: boolean;
    error: string | null;
}

const CropSuggester: React.FC<CropSuggesterProps> = ({ onSuggest, suggestions, loading, error }) => {
    const [soilData, setSoilData] = useState<SoilData>({
        ph: 7.0,
        nitrogen: 'Medium',
        phosphorus: 'Medium',
        potassium: 'Medium',
        type: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (soilData.type.trim()) {
            onSuggest(soilData);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setSoilData(prev => ({ ...prev, [name]: name === 'ph' ? parseFloat(value) : value }));
    }

    return (
        <div className="p-4 border border-gray-200 rounded-lg bg-gray-50/50 h-full flex flex-col">
            <h3 className="text-lg font-bold text-brand-dark flex items-center"><SproutIcon /> <span className="ml-2">Crop Suggester</span></h3>
            <p className="text-sm text-gray-500 mt-1 mb-4">Get crop ideas for your soil. (+20 PTS)</p>
            <form onSubmit={handleSubmit} className="space-y-3">
                 <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label className="block text-xs font-medium text-gray-700">pH Level</label>
                        <input type="number" name="ph" value={soilData.ph} onChange={handleInputChange} step="0.1" min="0" max="14" className="mt-1 w-full text-sm p-2 border rounded-md"/>
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-gray-700">Soil Type</label>
                        <input type="text" name="type" value={soilData.type} onChange={handleInputChange} placeholder="e.g., Loamy, Clay" className="mt-1 w-full text-sm p-2 border rounded-md" required/>
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-gray-700">Nitrogen (N)</label>
                        <select name="nitrogen" value={soilData.nitrogen} onChange={handleInputChange} className="mt-1 w-full text-sm p-2 border rounded-md bg-white">
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-gray-700">Phosphorus (P)</label>
                        <select name="phosphorus" value={soilData.phosphorus} onChange={handleInputChange} className="mt-1 w-full text-sm p-2 border rounded-md bg-white">
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                        </select>
                    </div>
                </div>
                <button type="submit" className="w-full px-4 py-2 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:bg-gray-400" disabled={loading || !soilData.type}>
                    {loading ? 'Suggesting...' : 'Suggest Crops'}
                </button>
            </form>
            <div className="mt-4 flex-grow">
                {error && <p className="text-sm text-red-600">{error}</p>}
                {suggestions && (
                    <div className="space-y-3">
                        {suggestions.map((crop, index) => (
                             <div key={index} className="p-3 rounded-lg bg-green-50 border-l-4 border-green-500">
                                <p className="font-bold text-md text-green-800">{crop.name}</p>
                                <p className="text-sm text-gray-700 mt-1 italic">"{crop.reason}"</p>
                                <div className="mt-2">
                                    <p className="text-xs font-semibold text-gray-800 uppercase">Benefits:</p>
                                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                                        {crop.benefits.map((benefit, i) => <li key={i}>{benefit}</li>)}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CropSuggester;