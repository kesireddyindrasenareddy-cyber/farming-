import React, { useState } from 'react';
import { UserProfile } from './types';
import ProfileSetup from './components/ProfileSetup';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  const handleProfileSetup = (profile: Omit<UserProfile, 'level' | 'points' | 'avatar'>) => {
    setUserProfile({
      ...profile,
      level: 1,
      points: 0,
      avatar: `https://i.pravatar.cc/150?u=${profile.name.replace(/\s/g, '').toLowerCase()}`
    });
  };

  return (
    <div className="min-h-screen bg-brand-light-gray font-sans text-brand-dark">
      {userProfile ? (
        <Dashboard userProfile={userProfile} />
      ) : (
        <ProfileSetup onProfileSetup={handleProfileSetup} />
      )}
    </div>
  );
};

export default App;