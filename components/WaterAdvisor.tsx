import React, { useState } from 'react';
import { WaterRequirement } from '../types';
import { WaterIcon } from '../constants';
import { useTranslation } from '../hooks/useTranslation';

interface WaterAdvisorProps {
    onGetAdvice: (cropName: string) => void;
    result: WaterRequirement | null;
    loading: boolean;
    error: string | null;
}

const WaterAdvisor: React.FC<WaterAdvisorProps> = ({ onGetAdvice, result, loading, error }) => {
    const [cropName, setCropName] = useState('');
    const { t } = useTranslation();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (cropName.trim()) {
            onGetAdvice(cropName.trim());
        }
    };

    return (
        <div className="p-4 border border-gray-200 rounded-lg bg-gray-50/50 h-full flex flex-col">
            <h3 className="text-lg font-bold text-brand-dark flex items-center"><WaterIcon /> <span className="ml-2">{t('waterAdvisorTitle')}</span></h3>
            <p className="text-sm text-gray-500 mt-1 mb-4">{t('waterAdvisorDescription')}</p>
            <form onSubmit={handleSubmit} className="flex space-x-2">
                <input
                    type="text"
                    value={cropName}
                    onChange={(e) => setCropName(e.target.value)}
                    placeholder={t('waterAdvisorPlaceholder')}
                    className="flex-grow block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green sm:text-sm"
                    disabled={loading}
                />
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400" disabled={loading || !cropName}>
                    {loading ? t('gettingButton') : t('getAdviceButton')}
                </button>
            </form>
            
            <div className="mt-4 flex-grow">
                {error && <p className="text-sm text-red-600">{error}</p>}
                {result && (
                    <div className="p-3 rounded-lg bg-blue-50 border-l-4 border-blue-500 space-y-2">
                        <div>
                            <p className="text-xs font-semibold text-blue-800 uppercase">{t('amountLabel')}</p>
                            <p className="text-md font-medium text-gray-800">{result.amount}</p>
                        </div>
                         <div>
                            <p className="text-xs font-semibold text-blue-800 uppercase">{t('frequencyLabel')}</p>
                            <p className="text-md font-medium text-gray-800">{result.frequency}</p>
                        </div>
                        {result.notes && result.notes.length > 0 && (
                            <div>
                                <p className="text-xs font-semibold text-blue-800 uppercase">{t('notesLabel')}</p>
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

export default WaterAdvisor;
