import React from 'react';
import { UserProfile } from '../types';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { useTranslation } from '../hooks/useTranslation';

interface ProgressTrackerProps {
  userProfile: UserProfile;
  completedQuestsCount: number;
  totalQuestsCount: number;
}

const COLORS = ['#4CAF50', '#E0E0E0'];

const ProgressTracker: React.FC<ProgressTrackerProps> = ({ userProfile, completedQuestsCount, totalQuestsCount }) => {
  const { t } = useTranslation();
  const sustainabilityScore = totalQuestsCount > 0 ? Math.round((completedQuestsCount / totalQuestsCount) * 100) : 0;
  
  const data = [
    { name: t('completedLabel'), value: completedQuestsCount },
    { name: t('remainingLabel'), value: totalQuestsCount - completedQuestsCount },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4 text-brand-dark">{t('progressTitle')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        
        <div className="flex flex-col items-center justify-center p-4 bg-brand-light-green rounded-lg">
          <p className="text-sm font-medium text-brand-brown">{t('sustainabilityScore')}</p>
          <p className="text-5xl font-bold text-brand-green">{sustainabilityScore}%</p>
        </div>

        <div className="space-y-4">
            <div className="text-center">
                <p className="text-lg font-semibold text-brand-dark">{t('levelLabel')} {userProfile.level}</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                    <div className="bg-brand-green h-2.5 rounded-full" style={{ width: `${(userProfile.points % 100)}%` }}></div>
                </div>
                <p className="text-sm text-gray-500 mt-1">{userProfile.points % 100} / 100 {t('pointsToNextLevel')}</p>
            </div>
            <div className="text-center">
                <p className="text-lg font-semibold text-brand-dark">{t('questsCompletedTitle')}</p>
                <p className="text-2xl font-bold text-gray-700">{completedQuestsCount} <span className="text-base font-normal">/ {totalQuestsCount}</span></p>
            </div>
        </div>

        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={70}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value, name) => [`${value} ${t('questsLabel')}`, name]} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;
