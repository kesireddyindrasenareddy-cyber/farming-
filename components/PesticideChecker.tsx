import React, { useState } from 'react';
import { PesticideCheckResult, PesticideClassification } from '../types';
import { SearchIcon } from '../constants';

interface PesticideCheckerProps {
    onCheck: (pesticideName: string) => void;
    result: PesticideCheckResult | null;
    loading: boolean;
    error: string | null;
}

const classificationStyles: Record<PesticideClassification, { bg: string, text: string, border: string }> = {
    'Eco-Friendly': { bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-500' },
    'Use with Caution': { bg: 'bg-yellow-100', text: 'text-yellow-800', border: 'border-yellow-500' },
    'Harmful': { bg: 'bg-red-100', text: 'text-red-800', border: 'border-red-500' },
};

const PesticideChecker: React.FC<PesticideCheckerProps> = ({ onCheck, result, loading, error }) => {
    const [pesticideName, setPesticideName] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (pesticideName.trim()) {
            onCheck(pesticideName.trim());
        }
    };

    return (
        <div className="p-4 border border-gray-200 rounded-lg bg-gray-50/50">
            <h3 className="text-lg font-bold text-brand-dark flex items-center"><SearchIcon /> <span className="ml-2">Pesticide Checker</span></h3>
            <p className="text-sm text-gray-500 mt-1 mb-4">Check if a pesticide is sustainable. (+10 PTS)</p>
            <form onSubmit={handleSubmit} className="flex space-x-2">
                <input
                    type="text"
                    value={pesticideName}
                    onChange={(e) => setPesticideName(e.target.value)}
                    placeholder="e.g., Chlorpyrifos"
                    className="flex-grow block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green sm:text-sm"
                    disabled={loading}
                />
                <button type="submit" className="px-4 py-2 bg-brand-green text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:bg-gray-400" disabled={loading || !pesticideName}>
                    {loading ? 'Checking...' : 'Check'}
                </button>
            </form>
            
            <div className="mt-4 min-h-[120px]">
                {error && <p className="text-sm text-red-600">{error}</p>}
                {result && (
                    <div className={`p-3 rounded-lg border-l-4 ${classificationStyles[result.classification].bg} ${classificationStyles[result.classification].border}`}>
                        <p className={`font-bold text-md ${classificationStyles[result.classification].text}`}>{result.classification}</p>
                        <p className="text-sm text-gray-700 mt-1">{result.explanation}</p>
                        {result.alternatives && result.alternatives.length > 0 && (
                            <div className="mt-2">
                                <p className="text-sm font-semibold text-gray-800">Alternatives:</p>
                                <ul className="list-disc list-inside text-sm text-gray-600">
                                    {result.alternatives.map((alt, i) => <li key={i}>{alt}</li>)}
                                </ul>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default PesticideChecker;
