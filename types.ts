// Fix: Import React to use React.ReactNode
import React from 'react';

export interface UserProfile {
  name: string;
  level: number;
  points: number;
  avatar: string;
  crop: string;
  location: string;
  farmSize: number;
}

export enum QuestCategory {
  SoilHealth = 'Soil Health',
  WaterConservation = 'Water Conservation',
  PestManagement = 'Pest Management',
  Biodiversity = 'Biodiversity',
}

export interface Quest {
  id: string;
  title: string;
  description: string;
  category: QuestCategory;
  points: number;
  duration: string;
}

export interface Badge {
  id:string;
  name: string;
  description: string;
  icon: React.ReactNode;
}

export interface LeaderboardEntry {
  id: string;
  name: string;
  points: number;
  avatar: string;
  rank: number;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  points: number;
  certification: string;
  icon: React.ReactNode;
}

// New types for Farm Intelligence Tools
export interface SoilData {
  ph: number;
  nitrogen: 'Low' | 'Medium' | 'High';
  phosphorus: 'Low' | 'Medium' | 'High';
  potassium: 'Low' | 'Medium' | 'High';
  type: string;
}

export type PesticideClassification = 'Eco-Friendly' | 'Use with Caution' | 'Harmful';

export interface PesticideCheckResult {
  classification: PesticideClassification;
  explanation: string;
  alternatives?: string[];
}

export interface SoilAnalysisResult {
    summary: string;
    recommendations: string[];
}

export interface CropSuggestion {
  name: string;
  reason: string;
  benefits: string[];
}

export interface WaterRequirement {
  amount: string;
  frequency: string;
  notes: string[];
}

export interface DailyBriefing {
  greeting: string;
  tip: string;
  motivation: string;
}

export interface CropProductionInfo {
  cropName: string;
  totalDuration: string;
  germination: string;
  vegetative: string;
  floweringToHarvest: string;
}

export interface EstimatedYield {
  cropName: string;
  estimatedYieldPerAcre: string;
  totalEstimatedYield: string;
  notes: string[];
}

export interface EquipmentDealer {
  name: string;
  address: string;
  phone: string;
  specialty: string;
}

export interface PesticideShop {
  name: string;
  address: string;
  phone: string;
}

export interface GrassListing {
    id: string;
    type: 'For Sale' | 'Wanted';
    grassType: string;
    quantity: string;
    price: string;
    contactName: string;
    contactPhone: string;
    location: string;
}

export interface CropDiseaseResult {
  diseaseName: string;
  confidence: 'High' | 'Medium' | 'Low';
  description: string;
  treatmentSuggestions: string[];
}

export interface ColdStorageCenter {
  name: string;
  address: string;
  phone: string;
  capacity: string;
}

export interface CropSellingCenter {
  name: string;
  address: string;
  phone: string;
  majorCrops: string;
}