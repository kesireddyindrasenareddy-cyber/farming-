
import React from 'react';
import { LeaderboardEntry } from '../types';

interface LeaderboardProps {
  leaderboardData: LeaderboardEntry[];
}

const Leaderboard: React.FC<LeaderboardProps> = ({ leaderboardData }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold mb-4 text-brand-dark">Community Leaderboard</h3>
      <ul className="space-y-4">
        {leaderboardData.map((entry, index) => (
          <li key={entry.id} className={`flex items-center p-3 rounded-lg ${entry.id === 'user-0' ? 'bg-brand-light-green border border-brand-green' : ''}`}>
            <span className="font-bold text-lg text-brand-brown w-8">{entry.rank}.</span>
            <img src={entry.avatar} alt={entry.name} className="w-10 h-10 rounded-full mx-3" />
            <span className="font-medium text-gray-800 flex-grow">{entry.name}</span>
            <span className="font-bold text-brand-green">{entry.points} PTS</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
   