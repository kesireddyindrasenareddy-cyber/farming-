import React from 'react';
import { Quest, QuestCategory } from '../types';
import { useTranslation } from '../hooks/useTranslation';

interface QuestCardProps {
  quest: Quest;
  onComplete: (id: string, points: number) => void;
}

const categoryColors: Record<QuestCategory, string> = {
  [QuestCategory.SoilHealth]: 'bg-yellow-100 text-yellow-800 border-yellow-300',
  [QuestCategory.WaterConservation]: 'bg-blue-100 text-blue-800 border-blue-300',
  [QuestCategory.PestManagement]: 'bg-red-100 text-red-800 border-red-300',
  [QuestCategory.Biodiversity]: 'bg-purple-100 text-purple-800 border-purple-300',
};

const QuestCard: React.FC<QuestCardProps> = ({ quest, onComplete }) => {
  const { t } = useTranslation();
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-brand-green transition-all hover:shadow-lg hover:scale-[1.01]">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-bold text-brand-dark">{quest.title}</h3>
          <p className="text-gray-600 mt-1">{quest.description}</p>
        </div>
        <div className="text-right ml-4 flex-shrink-0">
          <p className="text-2xl font-bold text-brand-green">+{quest.points} {t('pointsLabel')}</p>
          <p className="text-sm text-gray-500">{quest.duration}</p>
        </div>
      </div>
      <div className="flex justify-between items-end mt-4">
         <span className={`px-3 py-1 text-xs font-medium rounded-full border ${categoryColors[quest.category]}`}>
            {quest.category}
         </span>
        <button
          onClick={() => onComplete(quest.id, quest.points)}
          className="px-6 py-2 bg-brand-green text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-transform transform hover:scale-105"
        >
          {t('completeButton')}
        </button>
      </div>
    </div>
  );
};

export default QuestCard;
