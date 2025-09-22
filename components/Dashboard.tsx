import React, { useState, useEffect, useCallback } from 'react';
import { UserProfile, Quest, LeaderboardEntry, Badge, Course, SoilData, PesticideCheckResult, SoilAnalysisResult, CropSuggestion, WaterRequirement, DailyBriefing, CropProductionInfo, EstimatedYield, EquipmentDealer, PesticideShop, GrassListing, CropDiseaseResult, ColdStorageCenter } from '../types';
import { generateQuests, checkPesticide, analyzeSoil, suggestCrops, getWaterRequirement, getDailyBriefing, getCropProductionTime, getEstimatedYield, findLocalDealers, findLocalPesticideShops, getGrassListings, detectCropDisease, findColdStorageCenters } from '../services/geminiService';
import Header from './Header';
import QuestCard from './QuestCard';
import Leaderboard from './Leaderboard';
import ProgressTracker from './ProgressTracker';
import Badges from './Badges';
import Courses from './Courses';
import FarmTools from './FarmTools';
import FarmCompanion from './FarmCompanion';
import { mockBadges, mockLeaderboard, mockCourses } from '../constants';

interface DashboardProps {
  userProfile: UserProfile;
}

const LoadingSpinner: React.FC = () => (
    <div className="flex flex-col items-center justify-center space-y-2">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-green"></div>
        <p className="text-brand-green font-medium">Generating Your Personalized Quests...</p>
    </div>
);

const ErrorDisplay: React.FC<{ message: string }> = ({ message }) => (
    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md" role="alert">
        <p className="font-bold">An Error Occurred</p>
        <p>{message}</p>
        <p className="mt-2 text-sm">Please ensure your Gemini API key is correctly configured in your environment variables and try again.</p>
    </div>
);

const Dashboard: React.FC<DashboardProps> = ({ userProfile: initialProfile }) => {
  const [userProfile, setUserProfile] = useState<UserProfile>(initialProfile);
  const [quests, setQuests] = useState<Quest[]>([]);
  const [completedQuests, setCompletedQuests] = useState<string[]>([]);
  const [courses] = useState<Course[]>(mockCourses);
  const [completedCourses, setCompletedCourses] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>(mockLeaderboard);
  const [badges] = useState<Badge[]>(mockBadges);

  // State for Farm Companion
  const [dailyBriefing, setDailyBriefing] = useState<DailyBriefing | null>(null);
  const [briefingLoading, setBriefingLoading] = useState(true);
  const [briefingError, setBriefingError] = useState<string | null>(null);

  // State for Farm Tools
  const [pesticideResult, setPesticideResult] = useState<PesticideCheckResult | null>(null);
  const [pesticideLoading, setPesticideLoading] = useState(false);
  const [pesticideError, setPesticideError] = useState<string | null>(null);
  const [soilResult, setSoilResult] = useState<SoilAnalysisResult | null>(null);
  const [soilLoading, setSoilLoading] = useState(false);
  const [soilError, setSoilError] = useState<string | null>(null);
  const [cropSuggestions, setCropSuggestions] = useState<CropSuggestion[] | null>(null);
  const [cropSuggesterLoading, setCropSuggesterLoading] = useState(false);
  const [cropSuggesterError, setCropSuggesterError] = useState<string | null>(null);
  const [waterRequirement, setWaterRequirement] = useState<WaterRequirement | null>(null);
  const [waterRequirementLoading, setWaterRequirementLoading] = useState(false);
  const [waterRequirementError, setWaterRequirementError] = useState<string | null>(null);
  const [cropProductionInfo, setCropProductionInfo] = useState<CropProductionInfo | null>(null);
  const [cropProductionLoading, setCropProductionLoading] = useState(false);
  const [cropProductionError, setCropProductionError] = useState<string | null>(null);
  const [estimatedYield, setEstimatedYield] = useState<EstimatedYield | null>(null);
  const [estimatedYieldLoading, setEstimatedYieldLoading] = useState(false);
  const [estimatedYieldError, setEstimatedYieldError] = useState<string | null>(null);
  const [equipmentDealers, setEquipmentDealers] = useState<EquipmentDealer[] | null>(null);
  const [equipmentDealersLoading, setEquipmentDealersLoading] = useState(false);
  const [equipmentDealersError, setEquipmentDealersError] = useState<string | null>(null);
  const [pesticideShops, setPesticideShops] = useState<PesticideShop[] | null>(null);
  const [pesticideShopsLoading, setPesticideShopsLoading] = useState(false);
  const [pesticideShopsError, setPesticideShopsError] = useState<string | null>(null);
  const [grassListings, setGrassListings] = useState<GrassListing[] | null>(null);
  const [grassListingsLoading, setGrassListingsLoading] = useState(false);
  const [grassListingsError, setGrassListingsError] = useState<string | null>(null);
  const [cropDiseaseResult, setCropDiseaseResult] = useState<CropDiseaseResult | null>(null);
  const [cropDiseaseLoading, setCropDiseaseLoading] = useState(false);
  const [cropDiseaseError, setCropDiseaseError] = useState<string | null>(null);
  const [coldStorageCenters, setColdStorageCenters] = useState<ColdStorageCenter[] | null>(null);
  const [coldStorageLoading, setColdStorageLoading] = useState(false);
  const [coldStorageError, setColdStorageError] = useState<string | null>(null);


  const fetchQuests = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const fetchedQuests = await generateQuests(userProfile);
      setQuests(fetchedQuests);
    } catch (err: any) {
      setError(err.message || "An unknown error occurred.");
    } finally {
      setLoading(false);
    }
  }, [userProfile]);

  const fetchBriefing = useCallback(async () => {
    setBriefingLoading(true);
    setBriefingError(null);
    try {
      const briefing = await getDailyBriefing(userProfile, completedQuests.length);
      setDailyBriefing(briefing);
    } catch (err: any) {
      setBriefingError(err.message);
    } finally {
      setBriefingLoading(false);
    }
  }, [userProfile, completedQuests.length]);

  useEffect(() => {
    fetchQuests();
    fetchBriefing();
  }, [fetchQuests, fetchBriefing]);

  const addPoints = (points: number) => {
    setUserProfile(prev => {
        const newPoints = prev.points + points;
        const newLevel = Math.floor(newPoints / 100) + 1;
        
        setLeaderboard(prevLeaderboard => prevLeaderboard.map(entry => 
            entry.id === 'user-0' ? { ...entry, points: newPoints } : entry
        ).sort((a,b) => b.points - a.points).map((entry, index) => ({...entry, rank: index + 1})));

        return {...prev, points: newPoints, level: newLevel };
    });
  }

  const handleCompleteQuest = (questId: string, points: number) => {
    if (completedQuests.includes(questId)) return;
    setCompletedQuests(prev => [...prev, questId]);
    addPoints(points);
  };

  const handleCompleteCourse = (courseId: string, points: number) => {
    if (completedCourses.includes(courseId)) return;
    setCompletedCourses(prev => [...prev, courseId]);
    addPoints(points);
  };

  const handlePesticideCheck = async (pesticideName: string) => {
    setPesticideLoading(true);
    setPesticideError(null);
    setPesticideResult(null);
    try {
        const result = await checkPesticide(pesticideName);
        setPesticideResult(result);
        addPoints(10); // Award points for checking
    } catch (err: any) {
        setPesticideError(err.message);
    } finally {
        setPesticideLoading(false);
    }
  };

  const handleSoilAnalysis = async (soilData: SoilData) => {
    setSoilLoading(true);
    setSoilError(null);
    setSoilResult(null);
    try {
        const result = await analyzeSoil(soilData, userProfile);
        setSoilResult(result);
        addPoints(25); // Award points for analyzing
    } catch (err: any) {
        setSoilError(err.message);
    } finally {
        setSoilLoading(false);
    }
  };

  const handleSuggestCrops = async (soilData: SoilData) => {
    setCropSuggesterLoading(true);
    setCropSuggesterError(null);
    setCropSuggestions(null);
    try {
        const result = await suggestCrops(soilData);
        setCropSuggestions(result);
        addPoints(20); // Award points for using the suggester
    } catch (err: any) {
        setCropSuggesterError(err.message);
    } finally {
        setCropSuggesterLoading(false);
    }
  };

  const handleGetWaterRequirement = async (cropName: string) => {
    setWaterRequirementLoading(true);
    setWaterRequirementError(null);
    setWaterRequirement(null);
    try {
        const result = await getWaterRequirement(cropName);
        setWaterRequirement(result);
        addPoints(15); // Award points for checking water usage
    } catch (err: any) {
        setWaterRequirementError(err.message);
    } finally {
        setWaterRequirementLoading(false);
    }
  };

  const handleGetCropProductionTime = async (cropName: string) => {
    setCropProductionLoading(true);
    setCropProductionError(null);
    setCropProductionInfo(null);
    try {
        const result = await getCropProductionTime(cropName);
        setCropProductionInfo(result);
        addPoints(15); // Award points for checking
    } catch (err: any) {
        setCropProductionError(err.message);
    } finally {
        setCropProductionLoading(false);
    }
  };

  const handleGetEstimatedYield = async (cropName: string, farmSize: number) => {
    setEstimatedYieldLoading(true);
    setEstimatedYieldError(null);
    setEstimatedYield(null);
    try {
        const result = await getEstimatedYield(cropName, farmSize);
        setEstimatedYield(result);
        addPoints(15); // Award points for checking
    } catch (err: any) {
        setEstimatedYieldError(err.message);
    } finally {
        setEstimatedYieldLoading(false);
    }
  };

  const handleFindDealers = async (location: string, equipmentType: string) => {
    setEquipmentDealersLoading(true);
    setEquipmentDealersError(null);
    setEquipmentDealers(null);
    try {
        const result = await findLocalDealers(location, equipmentType);
        setEquipmentDealers(result);
        addPoints(10); // Award points for finding dealers
    } catch (err: any) {
        setEquipmentDealersError(err.message);
    } finally {
        setEquipmentDealersLoading(false);
    }
  };

  const handleFindPesticideShops = async (location: string) => {
    setPesticideShopsLoading(true);
    setPesticideShopsError(null);
    setPesticideShops(null);
    try {
        const result = await findLocalPesticideShops(location);
        setPesticideShops(result);
        addPoints(10); // Award points for finding shops
    } catch (err: any) {
        setPesticideShopsError(err.message);
    } finally {
        setPesticideShopsLoading(false);
    }
  };

  const handleGetGrassListings = async (location: string) => {
    setGrassListingsLoading(true);
    setGrassListingsError(null);
    setGrassListings(null);
    try {
        const result = await getGrassListings(location);
        setGrassListings(result);
        addPoints(5); // Award points for checking marketplace
    } catch (err: any) {
        setGrassListingsError(err.message);
    } finally {
        setGrassListingsLoading(false);
    }
  };

  const handleDetectDisease = async (imageDataBase64: string, mimeType: string, cropType: string) => {
    setCropDiseaseLoading(true);
    setCropDiseaseError(null);
    setCropDiseaseResult(null);
    try {
        const result = await detectCropDisease(imageDataBase64, mimeType, cropType);
        setCropDiseaseResult(result);
        addPoints(30); // Award points for using this advanced tool
    } catch (err: any) {
        setCropDiseaseError(err.message);
    } finally {
        setCropDiseaseLoading(false);
    }
  };

  const handleFindColdStorage = async (location: string) => {
    setColdStorageLoading(true);
    setColdStorageError(null);
    setColdStorageCenters(null);
    try {
        const result = await findColdStorageCenters(location);
        setColdStorageCenters(result);
        addPoints(10);
    } catch (err: any) {
        setColdStorageError(err.message);
    } finally {
        setColdStorageLoading(false);
    }
  };

  const activeQuests = quests.filter(q => !completedQuests.includes(q.id));

  return (
    <div className="bg-brand-light-gray min-h-screen">
      <Header userProfile={userProfile} />
      <main className="p-4 md:p-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content area */}
          <div className="lg:col-span-2 space-y-8">
            <FarmCompanion
              briefing={dailyBriefing}
              loading={briefingLoading}
              error={briefingError}
              onRefresh={fetchBriefing}
            />
            <ProgressTracker userProfile={userProfile} completedQuestsCount={completedQuests.length} totalQuestsCount={quests.length} />
            
            <FarmTools 
                userProfile={userProfile}
                onPesticideCheck={handlePesticideCheck}
                pesticideResult={pesticideResult}
                pesticideLoading={pesticideLoading}
                pesticideError={pesticideError}
                onSoilAnalysis={handleSoilAnalysis}
                soilResult={soilResult}
                soilLoading={soilLoading}
                soilError={soilError}
                onSuggestCrops={handleSuggestCrops}
                cropSuggestions={cropSuggestions}
                cropSuggesterLoading={cropSuggesterLoading}
                cropSuggesterError={cropSuggesterError}
                onGetWaterRequirement={handleGetWaterRequirement}
                waterRequirement={waterRequirement}
                waterRequirementLoading={waterRequirementLoading}
                waterRequirementError={waterRequirementError}
                onGetCropProductionTime={handleGetCropProductionTime}
                cropProductionInfo={cropProductionInfo}
                cropProductionLoading={cropProductionLoading}
                cropProductionError={cropProductionError}
                onGetEstimatedYield={handleGetEstimatedYield}
                estimatedYield={estimatedYield}
                estimatedYieldLoading={estimatedYieldLoading}
                estimatedYieldError={estimatedYieldError}
                onFindDealers={handleFindDealers}
                equipmentDealers={equipmentDealers}
                equipmentDealersLoading={equipmentDealersLoading}
                equipmentDealersError={equipmentDealersError}
                onFindPesticideShops={handleFindPesticideShops}
                pesticideShops={pesticideShops}
                pesticideShopsLoading={pesticideShopsLoading}
                pesticideShopsError={pesticideShopsError}
                onGetGrassListings={handleGetGrassListings}
                grassListings={grassListings}
                grassListingsLoading={grassListingsLoading}
                grassListingsError={grassListingsError}
                onDetectDisease={handleDetectDisease}
                cropDiseaseResult={cropDiseaseResult}
                cropDiseaseLoading={cropDiseaseLoading}
                cropDiseaseError={cropDiseaseError}
                onFindColdStorage={handleFindColdStorage}
                coldStorageCenters={coldStorageCenters}
                coldStorageLoading={coldStorageLoading}
                coldStorageError={coldStorageError}
            />

            <div>
              <h2 className="text-2xl font-bold mb-4 text-brand-dark">Your Active Quests</h2>
              {loading && <LoadingSpinner />}
              {error && <ErrorDisplay message={error} />}
              {!loading && !error && activeQuests.length > 0 && (
                <div className="space-y-4">
                  {activeQuests.map(quest => (
                    <QuestCard key={quest.id} quest={quest} onComplete={handleCompleteQuest} />
                  ))}
                </div>
              )}
               {!loading && !error && activeQuests.length === 0 && (
                <div className="text-center py-12 bg-white rounded-lg shadow">
                    <p className="text-gray-500">You've completed all available quests!</p>
                    <button onClick={fetchQuests} className="mt-4 px-4 py-2 bg-brand-green text-white rounded-md hover:bg-green-600 transition-colors">
                        Generate New Quests
                    </button>
                </div>
               )}
            </div>
            
            <Courses
                courses={courses}
                completedCourses={completedCourses}
                onCompleteCourse={handleCompleteCourse}
            />

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <Badges badges={badges} completedQuestsCount={completedQuests.length} completedCoursesCount={completedCourses.length} />
            <Leaderboard leaderboardData={leaderboard} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;