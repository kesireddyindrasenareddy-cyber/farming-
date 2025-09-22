import React, { useState } from 'react';
import { UserProfile } from '../types';
import { useTranslation } from '../hooks/useTranslation';

interface ProfileSetupProps {
  onProfileSetup: (profile: Omit<UserProfile, 'level' | 'points' | 'avatar'>) => void;
}

const LeafIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66C7.23 18.06 9 13 17 11V8M21 6h-4V2h-2v4h-4v2h4v4h2V8h4V6z" />
    </svg>
);


const ProfileSetup: React.FC<ProfileSetupProps> = ({ onProfileSetup }) => {
  const [name, setName] = useState('');
  const [crop, setCrop] = useState('');
  const [location, setLocation] = useState('');
  const [farmSize, setFarmSize] = useState<number>(1);
  const [farmingExperience, setFarmingExperience] = useState<UserProfile['farmingExperience']>('Beginner');
  const [primaryGoal, setPrimaryGoal] = useState<UserProfile['primaryGoal']>('Increase Yield');
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && crop && location && farmSize > 0) {
      onProfileSetup({ name, crop, location, farmSize, farmingExperience, primaryGoal });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center p-4" style={{ backgroundImage: "url('https://picsum.photos/1600/900?image=1078')" }}>
      <div className="bg-white/90 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-2xl max-w-lg w-full border border-gray-200">
        <div className="text-center mb-6">
            <LeafIcon className="w-16 h-16 text-brand-green mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-brand-dark">{t('welcomeMessage')}</h1>
            <p className="text-gray-600 mt-2">{t('welcomeSubheading')}</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">{t('yourNameLabel')}</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t('yourNamePlaceholder')}
              className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green sm:text-sm"
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="crop" className="block text-sm font-medium text-gray-700">{t('primaryCropLabel')}</label>
              <input
                type="text"
                id="crop"
                value={crop}
                onChange={(e) => setCrop(e.target.value)}
                placeholder={t('primaryCropPlaceholder')}
                className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">{t('locationLabel')}</label>
              <input
                type="text"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder={t('locationPlaceholder')}
                className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green sm:text-sm"
                required
              />
            </div>
          </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="farmingExperience" className="block text-sm font-medium text-gray-700">{t('experienceLabel')}</label>
              <select
                id="farmingExperience"
                value={farmingExperience}
                onChange={(e) => setFarmingExperience(e.target.value as UserProfile['farmingExperience'])}
                className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green sm:text-sm"
              >
                <option value="Beginner">{t('beginnerOption')}</option>
                <option value="Intermediate">{t('intermediateOption')}</option>
                <option value="Expert">{t('expertOption')}</option>
              </select>
            </div>
             <div>
                <label htmlFor="farmSize" className="block text-sm font-medium text-gray-700">{t('farmSizeLabel')}</label>
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
           </div>
          <div>
            <label htmlFor="primaryGoal" className="block text-sm font-medium text-gray-700">{t('mainGoalLabel')}</label>
            <select
              id="primaryGoal"
              value={primaryGoal}
              onChange={(e) => setPrimaryGoal(e.target.value as UserProfile['primaryGoal'])}
              className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green sm:text-sm"
            >
              <option value="Increase Yield">{t('increaseYieldOption')}</option>
              <option value="Improve Soil Health">{t('improveSoilHealthOption')}</option>
              <option value="Reduce Water Usage">{t('reduceWaterUsageOption')}</option>
              <option value="Go Organic">{t('goOrganicOption')}</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-green hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-300"
          >
            {t('startJourneyButton')}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileSetup;