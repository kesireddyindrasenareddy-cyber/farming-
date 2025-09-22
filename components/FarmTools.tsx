import React from 'react';
import { UserProfile, SoilData, PesticideCheckResult, SoilAnalysisResult, CropSuggestion, WaterRequirement, CropProductionInfo, EstimatedYield, EquipmentDealer, PesticideShop, GrassListing, CropDiseaseResult, ColdStorageCenter, CropSellingCenter } from '../types';
import PesticideChecker from './PesticideChecker';
import SoilAnalyzer from './SoilAnalyzer';
import CropSuggester from './CropSuggester';
import WaterAdvisor from './WaterAdvisor';
import CropProductionAdvisor from './CropProductionAdvisor';
import YieldEstimator from './YieldEstimator';
import EquipmentFinder from './EquipmentFinder';
import PesticideShopFinder from './PesticideShopFinder';
import GrassMarketplace from './GrassMarketplace';
import CropDiseaseDetector from './CropDiseaseDetector';
import ColdStorageFinder from './ColdStorageFinder';
import CropSellingCenterFinder from './CropSellingCenterFinder';

interface FarmToolsProps {
    userProfile: UserProfile;
    onPesticideCheck: (pesticideName: string) => void;
    pesticideResult: PesticideCheckResult | null;
    pesticideLoading: boolean;
    pesticideError: string | null;
    onSoilAnalysis: (soilData: SoilData) => void;
    soilResult: SoilAnalysisResult | null;
    soilLoading: boolean;
    soilError: string | null;
    onSuggestCrops: (soilData: SoilData) => void;
    cropSuggestions: CropSuggestion[] | null;
    cropSuggesterLoading: boolean;
    cropSuggesterError: string | null;
    onGetWaterRequirement: (cropName: string) => void;
    waterRequirement: WaterRequirement | null;
    waterRequirementLoading: boolean;
    waterRequirementError: string | null;
    onGetCropProductionTime: (cropName: string) => void;
    cropProductionInfo: CropProductionInfo | null;
    cropProductionLoading: boolean;
    cropProductionError: string | null;
    onGetEstimatedYield: (cropName: string, farmSize: number) => void;
    estimatedYield: EstimatedYield | null;
    estimatedYieldLoading: boolean;
    estimatedYieldError: string | null;
    onFindDealers: (location: string, equipmentType: string) => void;
    equipmentDealers: EquipmentDealer[] | null;
    equipmentDealersLoading: boolean;
    equipmentDealersError: string | null;
    onFindPesticideShops: (location: string) => void;
    pesticideShops: PesticideShop[] | null;
    pesticideShopsLoading: boolean;
    pesticideShopsError: string | null;
    onGetGrassListings: (location: string) => void;
    grassListings: GrassListing[] | null;
    grassListingsLoading: boolean;
    grassListingsError: string | null;
    onDetectDisease: (imageDataBase64: string, mimeType: string, cropType: string) => void;
    cropDiseaseResult: CropDiseaseResult | null;
    cropDiseaseLoading: boolean;
    cropDiseaseError: string | null;
    onFindColdStorage: (location: string) => void;
    coldStorageCenters: ColdStorageCenter[] | null;
    coldStorageLoading: boolean;
    coldStorageError: string | null;
    onFindCropSellingCenters: (location: string, crop: string) => void;
    cropSellingCenters: CropSellingCenter[] | null;
    cropSellingLoading: boolean;
    cropSellingError: string | null;
}

const FarmTools: React.FC<FarmToolsProps> = (props) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 text-brand-dark">Farm Intelligence Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <PesticideChecker 
                    onCheck={props.onPesticideCheck}
                    result={props.pesticideResult}
                    loading={props.pesticideLoading}
                    error={props.pesticideError}
                />
                <SoilAnalyzer 
                    onAnalyze={props.onSoilAnalysis}
                    result={props.soilResult}
                    loading={props.soilLoading}
                    error={props.soilError}
                />
                 <CropDiseaseDetector
                    onDetect={props.onDetectDisease}
                    result={props.cropDiseaseResult}
                    loading={props.cropDiseaseLoading}
                    error={props.cropDiseaseError}
                />
                <CropSuggester
                    onSuggest={props.onSuggestCrops}
                    suggestions={props.cropSuggestions}
                    loading={props.cropSuggesterLoading}
                    error={props.cropSuggesterError}
                />
                <WaterAdvisor
                    onGetAdvice={props.onGetWaterRequirement}
                    result={props.waterRequirement}
                    loading={props.waterRequirementLoading}
                    error={props.waterRequirementError}
                />
                <CropProductionAdvisor
                    onGetTime={props.onGetCropProductionTime}
                    result={props.cropProductionInfo}
                    loading={props.cropProductionLoading}
                    error={props.cropProductionError}
                />
                <YieldEstimator
                    onEstimate={props.onGetEstimatedYield}
                    result={props.estimatedYield}
                    loading={props.estimatedYieldLoading}
                    error={props.estimatedYieldError}
                    farmSize={props.userProfile.farmSize}
                />
                <EquipmentFinder
                    onFind={props.onFindDealers}
                    dealers={props.equipmentDealers}
                    loading={props.equipmentDealersLoading}
                    error={props.equipmentDealersError}
                    userLocation={props.userProfile.location}
                />
                <PesticideShopFinder
                    onFind={props.onFindPesticideShops}
                    shops={props.pesticideShops}
                    loading={props.pesticideShopsLoading}
                    error={props.pesticideShopsError}
                    userLocation={props.userProfile.location}
                />
                 <GrassMarketplace
                    onFind={props.onGetGrassListings}
                    listings={props.grassListings}
                    loading={props.grassListingsLoading}
                    error={props.grassListingsError}
                    userLocation={props.userProfile.location}
                />
                <ColdStorageFinder
                    onFind={props.onFindColdStorage}
                    centers={props.coldStorageCenters}
                    loading={props.coldStorageLoading}
                    error={props.coldStorageError}
                    userLocation={props.userProfile.location}
                />
                <CropSellingCenterFinder
                    onFind={props.onFindCropSellingCenters}
                    centers={props.cropSellingCenters}
                    loading={props.cropSellingLoading}
                    error={props.cropSellingError}
                    userLocation={props.userProfile.location}
                    userCrop={props.userProfile.crop}
                />
            </div>
        </div>
    );
};

export default FarmTools;