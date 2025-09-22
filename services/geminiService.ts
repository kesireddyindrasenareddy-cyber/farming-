import { GoogleGenAI, Type } from "@google/genai";
import { Quest, UserProfile, SoilData, PesticideCheckResult, SoilAnalysisResult, CropSuggestion, WaterRequirement, DailyBriefing, CropProductionInfo, EstimatedYield, EquipmentDealer, PesticideShop, GrassListing, CropDiseaseResult, ColdStorageCenter, CropSellingCenter } from "../types";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // This is a fallback for development. In a real environment, the key would be set.
  // The UI will show a message if the key is missing.
  console.error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

const questSchema = {
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      id: {
        type: Type.STRING,
        description: "A unique slug-style identifier for the quest, e.g., 'mulch-banana-fields'.",
      },
      title: {
        type: Type.STRING,
        description: "A short, catchy title for the quest.",
      },
      description: {
        type: Type.STRING,
        description: "A one or two-sentence explanation of the task and its benefit to the farm.",
      },
      category: {
        type: Type.STRING,
        enum: ['Soil Health', 'Water Conservation', 'Pest Management', 'Biodiversity'],
        description: "The category of the sustainable practice.",
      },
      points: {
        type: Type.INTEGER,
        description: "A number between 10 and 50 representing the difficulty and positive impact.",
      },
      duration: {
        type: Type.STRING,
        description: "An estimated duration to complete the quest, e.g., '1 week', '3 days', 'This Season'.",
      },
    },
    required: ["id", "title", "description", "category", "points", "duration"],
  },
};

const pesticideSchema = {
    type: Type.OBJECT,
    properties: {
        classification: {
            type: Type.STRING,
            enum: ['Eco-Friendly', 'Use with Caution', 'Harmful'],
        },
        explanation: {
            type: Type.STRING,
            description: "A brief, 1-2 sentence explanation of the pesticide's impact."
        },
        alternatives: {
            type: Type.ARRAY,
            description: "If harmful, suggest 1-2 organic or sustainable alternatives.",
            items: {
                type: Type.STRING,
            }
        }
    },
    required: ["classification", "explanation"]
};

const soilSchema = {
    type: Type.OBJECT,
    properties: {
        summary: {
            type: Type.STRING,
            description: "A concise summary of the soil's health."
        },
        recommendations: {
            type: Type.ARRAY,
            description: "A list of 2-3 actionable recommendations to improve the soil for the user's specific crop.",
            items: {
                type: Type.STRING
            }
        }
    },
    required: ["summary", "recommendations"]
};

const cropSuggestionSchema = {
    type: Type.ARRAY,
    items: {
        type: Type.OBJECT,
        properties: {
            name: { type: Type.STRING, description: "The name of the suggested crop." },
            reason: { type: Type.STRING, description: "A brief explanation why this crop is suitable for the given soil." },
            benefits: {
                type: Type.ARRAY,
                description: "A list of 2-3 benefits of growing this crop.",
                items: { type: Type.STRING }
            }
        },
        required: ["name", "reason", "benefits"]
    }
};

const waterRequirementSchema = {
    type: Type.OBJECT,
    properties: {
        amount: {
            type: Type.STRING,
            description: "A general guideline for the amount of water needed, e.g., '1-2 inches per week' or '25-30 liters per plant'."
        },
        frequency: {
            type: Type.STRING,
            description: "A guideline for how often to water, e.g., 'Every 3-4 days' or 'Deep watering once a week'."
        },
        notes: {
            type: Type.ARRAY,
            description: "A list of 2-3 important notes or tips for watering this specific crop (e.g., 'Avoid wetting the leaves', 'More water needed during fruiting stage').",
            items: {
                type: Type.STRING
            }
        }
    },
    required: ["amount", "frequency", "notes"]
};

const dailyBriefingSchema = {
    type: Type.OBJECT,
    properties: {
        greeting: { type: Type.STRING, description: "A short, warm greeting that addresses the user by their name." },
        tip: { type: Type.STRING, description: "A single, actionable, and sustainable farming tip relevant to the user's primary crop." },
        motivation: { type: Type.STRING, description: "An uplifting and short motivational quote about farming, nature, or growth." },
    },
    required: ["greeting", "tip", "motivation"],
};

const cropProductionSchema = {
    type: Type.OBJECT,
    properties: {
        cropName: { type: Type.STRING, description: "The common name of the crop provided." },
        totalDuration: { type: Type.STRING, description: "The typical total time from planting to the first harvest, e.g., '90-120 days'." },
        germination: { type: Type.STRING, description: "The typical time it takes for the seeds to sprout or germinate, e.g., '7-14 days'." },
        vegetative: { type: Type.STRING, description: "The typical duration of the plant's vegetative growth stage before flowering, e.g., '30-50 days'." },
        floweringToHarvest: { type: Type.STRING, description: "The typical time from when the plant starts flowering or fruiting to when the crop is ready for harvest, e.g., '50-60 days'." },
    },
    required: ["cropName", "totalDuration", "germination", "vegetative", "floweringToHarvest"],
};

const estimatedYieldSchema = {
    type: Type.OBJECT,
    properties: {
        cropName: { type: Type.STRING, description: "The common name of the crop provided." },
        estimatedYieldPerAcre: { type: Type.STRING, description: "A typical yield range for this crop per acre, e.g., '15-20 tons per acre'." },
        totalEstimatedYield: { type: Type.STRING, description: "The total estimated yield calculated for the farmer's specific farm size, e.g., '75-100 tons for your 5 acre farm'." },
        notes: { 
            type: Type.ARRAY,
            description: "A list of 2-3 important notes or disclaimers about the yield estimation.",
            items: {
                type: Type.STRING
            }
        },
    },
    required: ["cropName", "estimatedYieldPerAcre", "totalEstimatedYield", "notes"],
};

const equipmentDealerSchema = {
    type: Type.ARRAY,
    items: {
        type: Type.OBJECT,
        properties: {
            name: { type: Type.STRING, description: "The name of the dealership or service center." },
            address: { type: Type.STRING, description: "The full physical address of the dealer." },
            phone: { type: Type.STRING, description: "The primary contact phone number." },
            specialty: { type: Type.STRING, description: "A brief note on what they specialize in (e.g., 'Tractor sales and repair', 'Harvester rentals')." },
        },
        required: ["name", "address", "phone", "specialty"],
    },
};

const pesticideShopSchema = {
    type: Type.ARRAY,
    items: {
        type: Type.OBJECT,
        properties: {
            name: { type: Type.STRING, description: "The name of the pesticide shop or agricultural supply store." },
            address: { type: Type.STRING, description: "The full physical address of the shop." },
            phone: { type: Type.STRING, description: "The primary contact phone number for the shop." },
        },
        required: ["name", "address", "phone"],
    },
};

const grassListingSchema = {
    type: Type.ARRAY,
    items: {
        type: Type.OBJECT,
        properties: {
            id: { type: Type.STRING, description: "A unique identifier for the listing, e.g., 'sale-alfalfa-123'." },
            type: { type: Type.STRING, enum: ['For Sale', 'Wanted'], description: "Whether the user is selling or looking to buy." },
            grassType: { type: Type.STRING, description: "The type of grass, e.g., 'Alfalfa', 'Bermuda', 'Fescue'." },
            quantity: { type: Type.STRING, description: "The amount available or needed, e.g., '10 bales', '5 acres worth'." },
            price: { type: Type.STRING, description: "The price, e.g., '$15 per bale', 'Negotiable'." },
            contactName: { type: Type.STRING, description: "The name of the person to contact." },
            contactPhone: { type: Type.STRING, description: "The contact phone number." },
            location: { type: Type.STRING, description: "The general location of the listing." },
        },
        required: ["id", "type", "grassType", "quantity", "price", "contactName", "contactPhone", "location"],
    },
};

const cropDiseaseSchema = {
    type: Type.OBJECT,
    properties: {
        diseaseName: { 
            type: Type.STRING, 
            description: "The common name of the most likely disease identified. If no disease is clear, state 'Healthy' or 'Indeterminate'." 
        },
        confidence: { 
            type: Type.STRING, 
            enum: ['High', 'Medium', 'Low'],
            description: "Your confidence level in this diagnosis."
        },
        description: { 
            type: Type.STRING, 
            description: "A brief, 2-3 sentence description of the disease, its symptoms, and causes." 
        },
        treatmentSuggestions: {
            type: Type.ARRAY,
            description: "A list of 2-3 actionable, sustainable or organic treatment suggestions. Focus on practical advice.",
            items: {
                type: Type.STRING
            }
        }
    },
    required: ["diseaseName", "confidence", "description", "treatmentSuggestions"],
};

const coldStorageSchema = {
    type: Type.ARRAY,
    items: {
        type: Type.OBJECT,
        properties: {
            name: { type: Type.STRING, description: "The name of the cold storage facility." },
            address: { type: Type.STRING, description: "The full physical address." },
            phone: { type: Type.STRING, description: "The contact phone number." },
            capacity: { type: Type.STRING, description: "A general idea of its capacity, e.g., '5000 MT'." },
        },
        required: ["name", "address", "phone", "capacity"],
    },
};

const cropSellingCenterSchema = {
    type: Type.ARRAY,
    items: {
        type: Type.OBJECT,
        properties: {
            name: { type: Type.STRING, description: "The name of the market or mandi (e.g., 'APMC Market')." },
            address: { type: Type.STRING, description: "The full physical address." },
            phone: { type: Type.STRING, description: "A contact phone number for the market office." },
            majorCrops: { type: Type.STRING, description: "A brief list of major crops traded here." },
        },
        required: ["name", "address", "phone", "majorCrops"],
    },
};


export const generateQuests = async (profile: UserProfile): Promise<Quest[]> => {
  if (!API_KEY) {
    throw new Error("Gemini API key is not configured.");
  }

  const prompt = `
    You are an expert in sustainable agriculture and gamification. Your task is to act as a game designer and create personalized, engaging quests for a farmer.

    The farmer's profile is:
    - Crop: ${profile.crop}
    - Location: ${profile.location}
    - Farm Size: ${profile.farmSize} acres

    Generate a JSON array of 5 unique quests tailored to this profile. Each quest must be a practical, sustainable farming practice. The quests should be actionable, have a clear goal, and sound encouraging. Do not repeat quests.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: questSchema,
      },
    });

    const jsonText = response.text.trim();
    return JSON.parse(jsonText) as Quest[];
  } catch (error) {
    console.error("Error generating quests from Gemini API:", error);
    throw new Error("Failed to generate personalized quests. Please check your setup.");
  }
};


export const checkPesticide = async (pesticideName: string): Promise<PesticideCheckResult> => {
    if (!API_KEY) {
      throw new Error("Gemini API key is not configured.");
    }
  
    const prompt = `
      You are an agricultural expert specializing in sustainable farming. A farmer wants to know if the pesticide "${pesticideName}" is sustainable and safe for the environment. 
      
      Please provide the following in JSON format:
      1. A 'classification' which can be one of: 'Eco-Friendly', 'Use with Caution', or 'Harmful'.
      2. A brief 'explanation' (1-2 sentences) of its impact.
      3. If it's 'Harmful', provide a list of 1-2 'alternatives' that are organic or sustainable.
    `;
  
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: pesticideSchema,
        },
      });
  
      const jsonText = response.text.trim();
      return JSON.parse(jsonText) as PesticideCheckResult;
    } catch (error) {
      console.error("Error checking pesticide from Gemini API:", error);
      throw new Error(`Failed to analyze "${pesticideName}". Please try again.`);
    }
  };
  
  export const analyzeSoil = async (soilData: SoilData, profile: UserProfile): Promise<SoilAnalysisResult> => {
    if (!API_KEY) {
      throw new Error("Gemini API key is not configured.");
    }
  
    const prompt = `
      You are a soil scientist. A farmer growing "${profile.crop}" in "${profile.location}" has provided their soil data:
      - pH: ${soilData.ph}
      - Nitrogen: ${soilData.nitrogen}
      - Phosphorus: ${soilData.phosphorus}
      - Potassium: ${soilData.potassium}
      - Soil Type: ${soilData.type}
  
      Please provide the following in JSON format:
      1. A concise 'summary' of their soil's health.
      2. A list of 2-3 actionable 'recommendations' to improve the soil specifically for growing "${profile.crop}".
    `;
  
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: soilSchema,
        },
      });
  
      const jsonText = response.text.trim();
      return JSON.parse(jsonText) as SoilAnalysisResult;
    } catch (error) {
      console.error("Error analyzing soil from Gemini API:", error);
      throw new Error("Failed to analyze soil data. Please try again.");
    }
  };

  export const suggestCrops = async (soilData: SoilData): Promise<CropSuggestion[]> => {
    if (!API_KEY) {
      throw new Error("Gemini API key is not configured.");
    }
  
    const prompt = `
      You are an agricultural expert and botanist. Based on the following soil data:
      - pH: ${soilData.ph}
      - Nitrogen: ${soilData.nitrogen}
      - Phosphorus: ${soilData.phosphorus}
      - Potassium: ${soilData.potassium}
      - Soil Type: ${soilData.type}
  
      Please suggest 3 suitable crops. For each crop, provide the following in JSON format within an array:
      1. 'name': The common name of the crop.
      2. 'reason': A brief, one-sentence explanation of why it's suitable for this soil.
      3. 'benefits': A list of 2-3 key benefits of growing this crop (e.g., nitrogen-fixing, drought-resistant, high-yield).
    `;
  
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: cropSuggestionSchema,
        },
      });
  
      const jsonText = response.text.trim();
      return JSON.parse(jsonText) as CropSuggestion[];
    } catch (error) {
      console.error("Error suggesting crops from Gemini API:", error);
      throw new Error("Failed to suggest crops. Please try again.");
    }
  };

  export const getWaterRequirement = async (cropName: string): Promise<WaterRequirement> => {
    if (!API_KEY) {
      throw new Error("Gemini API key is not configured.");
    }
  
    const prompt = `
      You are an agricultural hydrologist. A farmer wants to know the typical water requirements for growing "${cropName}".

      Please provide the following in JSON format:
      1. 'amount': A general guideline for the amount of water needed (e.g., '1-2 inches per week').
      2. 'frequency': A guideline for how often to water (e.g., 'Every 3-4 days').
      3. 'notes': A list of 2-3 important tips for watering this crop.
    `;
  
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: waterRequirementSchema,
        },
      });
  
      const jsonText = response.text.trim();
      return JSON.parse(jsonText) as WaterRequirement;
    } catch (error) {
      console.error("Error getting water requirement from Gemini API:", error);
      throw new Error(`Failed to get water advice for "${cropName}". Please try again.`);
    }
  };

  export const getDailyBriefing = async (profile: UserProfile, completedQuestsCount: number): Promise<DailyBriefing> => {
    if (!API_KEY) {
      throw new Error("Gemini API key is not configured.");
    }
    const prompt = `You are Agri, a cheerful and encouraging AI farm companion. Your goal is to motivate and help a farmer.
      Farmer's profile:
      - Name: ${profile.name}
      - Primary Crop: ${profile.crop}
      - Level: ${profile.level}
      - Quests Completed: ${completedQuestsCount}
  
      Generate a short, personalized daily briefing for ${profile.name} in a friendly tone.
      The response must be in JSON format.
      - The greeting should be warm and mention their name.
      - The tip must be a simple, actionable sustainable farming tip for their crop, '${profile.crop}'.
      - The motivation should be a short, inspiring quote about farming or nature. Do not make it too long.
    `;
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: dailyBriefingSchema,
        },
      });
      const jsonText = response.text.trim();
      return JSON.parse(jsonText) as DailyBriefing;
    } catch (error) {
      console.error("Error generating daily briefing from Gemini API:", error);
      throw new Error("Failed to get your daily briefing. Please try again later.");
    }
  };

  export const getCropProductionTime = async (cropName: string): Promise<CropProductionInfo> => {
    if (!API_KEY) {
      throw new Error("Gemini API key is not configured.");
    }
  
    const prompt = `
      You are an agronomist providing information to a farmer. The farmer wants to know the production timeline for "${cropName}".

      Please provide the following typical timeline details in JSON format:
      1. 'cropName': The name of the crop.
      2. 'totalDuration': The total estimated time from planting to first harvest.
      3. 'germination': The time it takes for the seeds to germinate.
      4. 'vegetative': The duration of the vegetative growth stage.
      5. 'floweringToHarvest': The time from flowering/fruiting to harvest.
    `;
  
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: cropProductionSchema,
        },
      });
  
      const jsonText = response.text.trim();
      return JSON.parse(jsonText) as CropProductionInfo;
    } catch (error) {
      console.error("Error getting crop production time from Gemini API:", error);
      throw new Error(`Failed to get production timeline for "${cropName}". Please try again.`);
    }
  };

  export const getEstimatedYield = async (cropName: string, farmSize: number): Promise<EstimatedYield> => {
    if (!API_KEY) {
      throw new Error("Gemini API key is not configured.");
    }
  
    const prompt = `
      You are an agricultural economist. A farmer wants to know the estimated yield for "${cropName}" on their ${farmSize} acre farm.

      Please provide the following typical yield estimates in JSON format:
      1. 'cropName': The name of the crop.
      2. 'estimatedYieldPerAcre': The typical yield for this crop per acre.
      3. 'totalEstimatedYield': The calculated total estimated yield for a ${farmSize} acre farm.
      4. 'notes': A list of 2-3 important notes, mentioning that this is an estimate and can be affected by various factors.
    `;
  
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: estimatedYieldSchema,
        },
      });
  
      const jsonText = response.text.trim();
      return JSON.parse(jsonText) as EstimatedYield;
    } catch (error) {
      console.error("Error getting estimated yield from Gemini API:", error);
      throw new Error(`Failed to get yield estimate for "${cropName}". Please try again.`);
    }
  };

  export const findLocalDealers = async (location: string, equipmentType: string): Promise<EquipmentDealer[]> => {
    if (!API_KEY) {
      throw new Error("Gemini API key is not configured.");
    }
  
    const prompt = `
      You are an expert local business directory assistant for farmers. A farmer in "${location}" is looking for dealers or service centers for "${equipmentType}".

      Please provide a list of 2-3 fictional but realistic-sounding local dealers in or very near that location.

      Provide the following details for each dealer in a JSON array:
      1. 'name': The business name.
      2. 'address': Their full address.
      3. 'phone': A contact phone number.
      4. 'specialty': A short description of their services (e.g., sales, repairs, rentals).
    `;
  
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: equipmentDealerSchema,
        },
      });
  
      const jsonText = response.text.trim();
      return JSON.parse(jsonText) as EquipmentDealer[];
    } catch (error) {
      console.error("Error finding local dealers from Gemini API:", error);
      throw new Error(`Failed to find dealers for "${equipmentType}" near "${location}". Please try again.`);
    }
  };

  export const findLocalPesticideShops = async (location: string): Promise<PesticideShop[]> => {
    if (!API_KEY) {
      throw new Error("Gemini API key is not configured.");
    }
  
    const prompt = `
      You are an expert local business directory assistant for farmers. A farmer in "${location}" is looking for shops that sell pesticides and other agricultural supplies.

      Please provide a list of 2-3 fictional but realistic-sounding local shops in or very near that location.

      Provide the following details for each shop in a JSON array:
      1. 'name': The business name (e.g., "Kisan Agri Center", "GreenField Supplies").
      2. 'address': Their full address.
      3. 'phone': A contact phone number.
    `;
  
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: pesticideShopSchema,
        },
      });
  
      const jsonText = response.text.trim();
      return JSON.parse(jsonText) as PesticideShop[];
    } catch (error) {
      console.error("Error finding local pesticide shops from Gemini API:", error);
      throw new Error(`Failed to find pesticide shops near "${location}". Please try again.`);
    }
  };

  export const getGrassListings = async (location: string): Promise<GrassListing[]> => {
    if (!API_KEY) {
      throw new Error("Gemini API key is not configured.");
    }
  
    const prompt = `
      You are an agricultural marketplace assistant. A farmer in "${location}" is looking for local listings to buy or sell field grass.

      Please provide a list of 3-4 fictional but realistic-sounding local listings for both buying and selling field grass in or near that location.

      Provide the following details for each listing in a JSON array:
      1. 'id': A unique identifier string.
      2. 'type': Either 'For Sale' or 'Wanted'.
      3. 'grassType': The type of grass.
      4. 'quantity': The amount.
      5. 'price': The price.
      6. 'contactName': The contact's name.
      7. 'contactPhone': A contact phone number.
      8. 'location': The general location of the listing.
    `;
  
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: grassListingSchema,
        },
      });
  
      const jsonText = response.text.trim();
      return JSON.parse(jsonText) as GrassListing[];
    } catch (error) {
      console.error("Error finding grass listings from Gemini API:", error);
      throw new Error(`Failed to find grass listings near "${location}". Please try again.`);
    }
  };

  export const detectCropDisease = async (imageDataBase64: string, mimeType: string, cropType: string): Promise<CropDiseaseResult> => {
    if (!API_KEY) {
      throw new Error("Gemini API key is not configured.");
    }
  
    const imagePart = {
      inlineData: {
        data: imageDataBase64,
        mimeType,
      },
    };
  
    const textPart = {
      text: `You are an expert plant pathologist. Analyze this image of a ${cropType} plant. Identify the most likely disease, your confidence level, describe it, and suggest 2-3 sustainable or organic treatments. If the plant appears healthy, state that clearly.`,
    };
  
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: { parts: [imagePart, textPart] },
        config: {
            responseMimeType: "application/json",
            responseSchema: cropDiseaseSchema,
        },
      });
  
      const jsonText = response.text.trim();
      return JSON.parse(jsonText) as CropDiseaseResult;
    } catch (error) {
      console.error("Error detecting crop disease from Gemini API:", error);
      throw new Error(`Failed to analyze the image for "${cropType}" disease. Please try again.`);
    }
  };

  export const findColdStorageCenters = async (location: string): Promise<ColdStorageCenter[]> => {
    if (!API_KEY) {
      throw new Error("Gemini API key is not configured.");
    }
  
    const prompt = `
      You are a local agricultural logistics expert. A farmer in "${location}" is looking for cold storage facilities.
      Please provide a list of 2-3 fictional but realistic-sounding cold storage centers in or very near that location.
      Provide the following details for each center in a JSON array:
      1. 'name': The business name.
      2. 'address': Their full address.
      3. 'phone': A contact phone number.
      4. 'capacity': An estimated capacity (e.g., "5000 MT", "10000 MT").
    `;
  
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: coldStorageSchema,
        },
      });
  
      const jsonText = response.text.trim();
      return JSON.parse(jsonText) as ColdStorageCenter[];
    } catch (error) {
      console.error("Error finding cold storage centers from Gemini API:", error);
      throw new Error(`Failed to find cold storage near "${location}". Please try again.`);
    }
};

export const findCropSellingCenters = async (location: string, crop: string): Promise<CropSellingCenter[]> => {
    if (!API_KEY) {
      throw new Error("Gemini API key is not configured.");
    }
  
    const prompt = `
      You are a local agricultural market expert. A farmer in "${location}" wants to sell their "${crop}".
      Please provide a list of 2-3 fictional but realistic-sounding crop selling centers (like Mandis, APMC markets, or wholesale markets) in or near that location where they could sell their produce.
      Provide the following details for each center in a JSON array:
      1. 'name': The name of the market.
      2. 'address': Its full address.
      3. 'phone': A contact phone number.
      4. 'majorCrops': A short description of the major crops traded, mentioning "${crop}".
    `;
  
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: cropSellingCenterSchema,
        },
      });
  
      const jsonText = response.text.trim();
      return JSON.parse(jsonText) as CropSellingCenter[];
    } catch (error) {
      console.error("Error finding crop selling centers from Gemini API:", error);
      throw new Error(`Failed to find markets near "${location}" for "${crop}". Please try again.`);
    }
};