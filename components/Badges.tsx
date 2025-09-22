
import React from 'react';
import { Badge } from '../types';

interface BadgesProps {
    badges: Badge[];
    completedQuestsCount: number;
    completedCoursesCount: number;
}

const Badges: React.FC<BadgesProps> = ({ badges, completedQuestsCount, completedCoursesCount }) => {
    
    // Simple logic to "unlock" badges based on quest count
    const getIsUnlocked = (badgeId: string) => {
        switch(badgeId) {
            case 'b1': return completedQuestsCount >= 1;
            case 'b2': return completedQuestsCount >= 5;
            case 'b3': return completedQuestsCount >= 10;
            case 'b4': return completedQuestsCount >= 2;
            case 'b5': return completedCoursesCount >= 1;
            default: return false;
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4 text-brand-dark">Your Badges</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                {badges.map(badge => {
                    const isUnlocked = getIsUnlocked(badge.id);
                    return (
                        <div key={badge.id} className="flex flex-col items-center text-center group relative">
                            <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${isUnlocked ? 'bg-brand-green text-white' : 'bg-gray-200 text-gray-400'}`}>
                                {badge.icon}
                            </div>
                            <p className={`text-xs font-medium mt-2 ${isUnlocked ? 'text-brand-dark' : 'text-gray-500'}`}>{badge.name}</p>
                            <div className="absolute bottom-full mb-2 w-48 bg-gray-800 text-white text-xs rounded py-1 px-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                {badge.description}
                                {!isUnlocked && <span className="block font-bold">LOCKED</span>}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Badges;
