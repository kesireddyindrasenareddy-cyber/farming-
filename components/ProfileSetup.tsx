
import React, { useState } from 'react';
import { UserProfile } from '../types';

interface ProfileSetupProps {
  onProfileSetup: (profile: Omit<UserProfile, 'name' | 'level' | 'points' | 'avatar'>) => void;
}

const LeafIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66C7.23 18.06 9 13 17 11V8M21 6h-4V2h-2v4h-4v2h4v4h2V8h4V6z" />
    </svg>
);


const ProfileSetup: React.FC<ProfileSetupProps> = ({ onProfileSetup }) => {
  const [crop, setCrop] = useState('');
  const [location, setLocation] = useState('');
  const [farmSize, setFarmSize] = useState<number>(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (crop && location && farmSize > 0) {
      onProfileSetup({ crop, location, farmSize });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1600/900?image=1078')" }}>
      <div className="bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-2xl max-w-md w-full border border-gray-200">
        <div className="text-center mb-8">
            <LeafIcon className="w-16 h-16 text-brand-green mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-brand-dark">Welcome to AgriQuest!</h1>
            <p className="text-gray-600 mt-2">Let's personalize your sustainable farming journey.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="crop" className="block text-sm font-medium text-gray-700">Primary Crop</label>
            <input
              type="text"
              id="crop"
              value={crop}
              onChange={(e) => setCrop(e.target.value)}
              placeholder="e.g., Banana, Wheat, Cotton"
              className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">Your Location (Region/State)</label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g., Punjab, Maharashtra"
              className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="farmSize" className="block text-sm font-medium text-gray-700">Farm Size (in acres)</label>
            <input
              type="number"
              id="farmSize"
              value={farmSize}
              onChange={(e) => setFarmSize(Number(e.target.value))}
              className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green sm:text-sm"
              min="0.1"
              step="0.1"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-green hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-300"
          >
            Start Your Journey
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileSetup;
   