import React, { useState } from 'react';
import { SoilData, SoilAnalysisResult } from '../types';
import { ScienceIcon } from '../constants';
import { useTranslation } from '../hooks/useTranslation';

interface SoilAnalyzerProps {
    onAnalyze: (soilData: SoilData) => void;
    result: SoilAnalysisResult | null;
    loading: boolean;
    error: string | null;
}

const SoilAnalyzer: React.FC<SoilAnalyzerProps> = ({ onAnalyze, result, loading, error }) => {
    const { t } = useTranslation();
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
            onAnalyze(soilData);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setSoilData(prev => ({ ...prev, [name]: name === 'ph' ? parseFloat(value) : value }));
    }

    return (
        <div className="p-4 border border-gray-200 rounded-lg bg-gray-50/50">
            <h3 className="text-lg font-bold text-brand-dark flex items-center"><ScienceIcon /> <span className="ml-2">{t('soilAnalyzerTitle')}</span></h3>
            <p className="text-sm text-gray-500 mt-1 mb-4">{t('soilAnalyzerDescription')}</p>
            <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label className="block text-xs font-medium text-gray-700">{t('phLevelLabel')}</label>
                        <input type="number" name="ph" value={soilData.ph} onChange={handleInputChange} step="0.1" min="0" max="14" className="mt-1 w-full text-sm p-2 border rounded-md"/>
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-gray-700">{t('soilTypeLabel')}</label>
                        <input type="text" name="type" value={soilData.type} onChange={handleInputChange} placeholder={t('soilTypePlaceholder')} className="mt-1 w-full text-sm p-2 border rounded-md" required/>
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-gray-700">{t('nitrogenLabel')}</label>
                        <select name="nitrogen" value={soilData.nitrogen} onChange={handleInputChange} className="mt-1 w-full text-sm p-2 border rounded-md bg-white">
                            <option>{t('lowOption')}</option>
                            <option>{t('mediumOption')}</option>
                            <option>{t('highOption')}</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-gray-700">{t('phosphorusLabel')}</label>
                        <select name="phosphorus" value={soilData.phosphorus} onChange={handleInputChange} className="mt-1 w-full text-sm p-2 border rounded-md bg-white">
                            <option>{t('lowOption')}</option>
                            <option>{t('mediumOption')}</option>
                            <option>{t('highOption')}</option>
                        </select>
                    </div>
                </div>
                <button type="submit" className="w-full px-4 py-2 bg-brand-brown text-white font-semibold rounded-md hover:bg-brand-brown/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-brown disabled:bg-gray-400" disabled={loading || !soilData.type}>
                    {loading ? t('analyzingButton') : t('analyzeSoilButton')}
                </button>
            </form>
            <div className="mt-4 min-h-[120px]">
                {error && <p className="text-sm text-red-600">{error}</p>}
                {result && (
                    <div className="p-3 rounded-lg bg-blue-50 border-l-4 border-blue-500">
                        <p className="font-bold text-md text-blue-800">{t('analysisSummaryTitle')}</p>
                        <p className="text-sm text-gray-700 mt-1">{result.summary}</p>
                        <div className="mt-2">
                            <p className="text-sm font-semibold text-gray-800">{t('recommendationsLabel')}:</p>
                            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                                {result.recommendations.map((rec, i) => <li key={i}>{rec}</li>)}
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SoilAnalyzer;
