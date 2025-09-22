import React from 'react';
import { Badge, LeaderboardEntry, Course } from './types';

// Fix: Replaced JSX with React.createElement to avoid syntax errors in a .ts file.
const LeafIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8", viewBox: "0 0 20 20", fill: "currentColor" }, React.createElement('path', { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }));
const WaterDropIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8", viewBox: "0 0 20 20", fill: "currentColor" }, React.createElement('path', { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zM6.5 9a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h2a.5.5 0 00.5-.5v-3a.5.5 0 00-.5.5h-2zM11 9a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h2z", clipRule: "evenodd" }));
const StarIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8", viewBox: "0 0 20 20", fill: "currentColor" }, React.createElement('path', { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }));
const ShieldIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8", viewBox: "0 0 20 20", fill: "currentColor" }, React.createElement('path', { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zM7 10a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z", clipRule: "evenodd" }));
const CertificateIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8", viewBox: "0 0 20 20", fill: "currentColor" }, React.createElement('path', { d: "M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" }), React.createElement('path', { fillRule: "evenodd", d: "M4 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h4a1 1 0 100-2H7zm0 4a1 1 0 100 2h4a1 1 0 100-2H7z", clipRule: "evenodd" }));
const SoilIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8", viewBox: "0 0 20 20", fill: "currentColor" }, React.createElement('path', { d: "M10 18a8 8 0 100-16 8 8 0 000 16zM9 8a1 1 0 102 0v2.586l1.293-1.293a1 1 0 10-1.414-1.414L10 8.586l-1.293-1.293a1 1 0 00-1.414 1.414L8 10.586V8z" }));
const DripIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8", viewBox: "0 0 20 20", fill: "currentColor" }, React.createElement('path', { fillRule: "evenodd", d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z", clipRule: "evenodd" }));
export const ScienceIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className:"h-6 w-6", fill:"none", viewBox:"0 0 24 24", stroke:"currentColor" }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547a2 2 0 00-.547 1.806l.477 2.387a6 6 0 00.517 3.86l.158.318a6 6 0 00.517 3.86l2.387.477a2 2 0 001.806-.547a2 2 0 00.547-1.806l-.477-2.387a6 6 0 00-.517-3.86l-.158-.318a6 6 0 00-.517-3.86l-2.387-.477a2 2 0 00-1.806.547" }));
export const SearchIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" }));
export const SproutIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 20h6M9 16v4h6v-4H9zM9 12a5 5 0 015-5v0a5 5 0 015 5v4H9v-4zM9 8a5 5 0 00-5 5v4h5v-4z" }));
export const WaterIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" }));
export const TimerIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" }));
export const FarmCompanionIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8 text-yellow-500", viewBox: "0 0 20 20", fill: "currentColor" }, React.createElement('path', { fillRule: "evenodd", d: "M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8a1 1 0 012 0v1a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v1a1 1 0 102 0V8a1 1 0 00-1-1z", clipRule: "evenodd" }));
export const YieldIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, 
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M20 12H4C2.89543 12 2 12.8954 2 14V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V14C22 12.8954 21.1046 12 20 12Z" }),
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M16 12V7C16 4.23858 13.7614 2 11 2C8.23858 2 6 4.23858 6 7V12" })
);
export const EquipmentIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, 
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" }),
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 17H9m10 0h-2M9 17H5M19 17h-2m-6-4h.01M9 13h.01M11 5l2 4h3l2-4H11z" })
);
export const PesticideShopIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" })
);
export const GrassIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 15s4 0 4 4-4 4-4 4V15zm5-2s4 0 4 4-4 4-4 4V13zm5-2s4 0 4 4-4 4-4 4V11zm5-2s4 0 4 4-4 4-4 4V9z" })
);
export const DiseaseIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z" }),
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M10 21l-5.5-5.5a8 8 0 1111 0L10 21z" })
);
export const ColdStorageIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" }),
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 14l2-2 2 2m-4 5l2-2 2 2" })
);
// Fix: Add missing MarketIcon definition
export const MarketIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" })
);


export const mockBadges: Badge[] = [
    // Fix: Replaced JSX component usage with React.createElement to avoid syntax errors.
    { id: 'b1', name: 'First Step', description: 'Complete your first quest.', icon: React.createElement(LeafIcon) },
    { id: 'b4', name: 'Eco-Starter', description: 'Complete quests in 2 different categories.', icon: React.createElement(WaterDropIcon) },
    { id: 'b2', name: 'Quest Runner', description: 'Complete 5 quests.', icon: React.createElement(StarIcon) },
    { id: 'b3', name: 'Green Thumb', description: 'Complete 10 quests.', icon: React.createElement(ShieldIcon) },
    { id: 'b5', name: 'Certified', description: 'Complete your first course.', icon: React.createElement(CertificateIcon) },
];

export const mockCourses: Course[] = [
    {
        id: 'c1',
        title: 'Organic Composting 101',
        description: 'Learn the fundamentals of creating nutrient-rich compost for healthier soil.',
        points: 150,
        certification: 'Certificate of Composting',
        icon: React.createElement(SoilIcon),
    },
    {
        id: 'c2',
        title: 'Drip Irrigation Mastery',
        description: 'Master water-efficient irrigation techniques to conserve water and boost yields.',
        points: 200,
        certification: 'Certificate of Water Conservation',
        icon: React.createElement(DripIcon),
    },
    {
        id: 'c3',
        title: 'Integrated Pest Management',
        description: 'Discover natural and effective ways to manage pests without harmful chemicals.',
        points: 180,
        certification: 'Certificate of Pest Management',
        icon: React.createElement(ShieldIcon),
    },
];


export const mockLeaderboard: LeaderboardEntry[] = [
    { id: 'user-0', name: 'You', points: 0, avatar: `https://i.pravatar.cc/150?u=alexgreen`, rank: 3 },
    { id: 'user-1', name: 'Ravi Kumar', points: 250, avatar: `https://i.pravatar.cc/150?u=ravi`, rank: 1 },
    { id: 'user-2', name: 'Priya Sharma', points: 180, avatar: `https://i.pravatar.cc/150?u=priya`, rank: 2 },
    { id: 'user-3', name: 'Sanjay Patel', points: 90, avatar: `https://i.pravatar.cc/150?u=sanjay`, rank: 4 },
    { id: 'user-4', name: 'Anjali Das', points: 50, avatar: `https://i.pravatar.cc/150?u=anjali`, rank: 5 },
].sort((a,b) => b.points - a.points).map((entry, index) => ({...entry, rank: index + 1}));