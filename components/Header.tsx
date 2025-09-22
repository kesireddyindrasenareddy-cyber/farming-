import React from 'react';
import { UserProfile } from '../types';
import { useTranslation } from '../hooks/useTranslation';

const Header: React.FC<{ userProfile: UserProfile }> = ({ userProfile }) => {
  const { t, language, setLanguage, availableLanguages } = useTranslation();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-green" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                <path d="M15.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L13.586 11H10a1 1 0 110-2h3.586l-2.293-2.293a1 1 0 011.414-1.414l4 4z" />
            </svg>
           <h1 className="text-2xl font-bold text-brand-dark">{t('appName')}</h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <select
              value={language}
              onChange={handleLanguageChange}
              className="bg-white border border-gray-300 rounded-md shadow-sm py-1.5 px-2 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-brand-green"
            >
              {Object.keys(availableLanguages).map(langCode => (
                <option key={langCode} value={langCode}>
                  {availableLanguages[langCode].name}
                </option>
              ))}
            </select>
          </div>
          <div className="text-right">
            <p className="font-semibold text-brand-dark">{userProfile.name}</p>
            <p className="text-sm text-gray-500">{t('levelLabel')} {userProfile.level} | {userProfile.points} {t('pointsLabel')}</p>
          </div>
          <img
            src={userProfile.avatar}
            alt={userProfile.name}
            className="w-12 h-12 rounded-full border-2 border-brand-green"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
