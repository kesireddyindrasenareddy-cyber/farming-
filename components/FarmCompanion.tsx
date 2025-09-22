import React from 'react';
import { DailyBriefing } from '../types';
import { FarmCompanionIcon } from '../constants';

interface FarmCompanionProps {
    briefing: DailyBriefing | null;
    loading: boolean;
    error: string | null;
    onRefresh: () => void;
}

const LoadingState: React.FC = () => (
    <div className="flex items-center space-x-3">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-500"></div>
        <p className="text-gray-600">Your farm companion is waking up...</p>
    </div>
);

const ErrorState: React.FC<{ message: string; onRetry: () => void }> = ({ message, onRetry }) => (
    <div className="text-center">
        <p className="text-red-600 font-medium">Oops! Could not get your daily tip.</p>
        <p className="text-sm text-red-500">{message}</p>
        <button onClick={onRetry} className="mt-3 px-4 py-1.5 bg-red-500 text-white text-sm rounded-md hover:bg-red-600">
            Try Again
        </button>
    </div>
);

const FarmCompanion: React.FC<FarmCompanionProps> = ({ briefing, loading, error, onRefresh }) => {
    return (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg shadow-md p-6 relative">
            <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                    <FarmCompanionIcon />
                </div>
                <div className="flex-grow">
                    {loading && <LoadingState />}
                    {error && <ErrorState message={error} onRetry={onRefresh} />}
                    {briefing && !loading && !error && (
                        <div>
                            <h2 className="text-xl font-bold text-gray-800">{briefing.greeting}</h2>
                            <p className="text-gray-700 mt-2">{briefing.tip}</p>
                            <p className="text-sm text-gray-500 italic mt-3">"{briefing.motivation}"</p>
                        </div>
                    )}
                </div>
            </div>
             <button
                onClick={onRefresh}
                disabled={loading}
                className="absolute top-3 right-3 p-1.5 rounded-full text-gray-500 hover:bg-yellow-200 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 disabled:opacity-50"
                aria-label="Get new tip"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 110 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                </svg>
            </button>
        </div>
    );
};

export default FarmCompanion;