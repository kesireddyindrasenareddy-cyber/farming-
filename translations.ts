export const translations = {
  en: {
    name: 'English',
    // Header
    appName: 'AgriQuest',
    levelLabel: 'Level',
    pointsLabel: 'PTS',

    // Profile Setup
    welcomeMessage: 'Welcome to AgriQuest!',
    welcomeSubheading: "Let's personalize your sustainable farming journey.",
    yourNameLabel: 'Your Name',
    yourNamePlaceholder: 'e.g., Alex Green',
    primaryCropLabel: 'Primary Crop',
    primaryCropPlaceholder: 'e.g., Banana, Wheat, Cotton',
    locationLabel: 'Your Location (Region/State)',
    locationPlaceholder: 'e.g., Punjab, Maharashtra',
    farmSizeLabel: 'Farm Size (in acres)',
    experienceLabel: 'Farming Experience',
    beginnerOption: 'Beginner (0-2 years)',
    intermediateOption: 'Intermediate (2-5 years)',
    expertOption: 'Expert (5+ years)',
    mainGoalLabel: "What's your main goal?",
    increaseYieldOption: 'Increase Yield',
    improveSoilHealthOption: 'Improve Soil Health',
    reduceWaterUsageOption: 'Reduce Water Usage',
    goOrganicOption: 'Go Organic',
    startJourneyButton: 'Start Your Journey',

    // Dashboard
    loadingQuests: 'Generating Your Personalized Quests...',
    errorOccurred: 'An Error Occurred',
    errorCheckAPIKey: 'Please ensure your Gemini API key is correctly configured in your environment variables and try again.',
    activeQuestsTitle: 'Your Active Quests',
    allQuestsCompleted: "You've completed all available quests!",
    generateNewQuests: 'Generate New Quests',

    // Quest Card
    completeButton: 'Complete',

    // Progress Tracker
    progressTitle: 'Your Progress',
    sustainabilityScore: 'Sustainability Score',
    pointsToNextLevel: 'PTS to next level',
    questsCompletedTitle: 'Quests Completed',
    completedLabel: 'Completed',
    remainingLabel: 'Remaining',
    questsLabel: 'quests',

    // Leaderboard
    leaderboardTitle: 'Community Leaderboard',
    youLabel: 'You',

    // Badges
    badgesTitle: 'Your Badges',
    lockedStatus: 'LOCKED',

    // Courses
    coursesTitle: 'Learning & Certification',
    certifiedButton: 'Certified!',
    completeCourseButton: 'Complete Course',

    // Farm Tools
    farmToolsTitle: 'Farm Intelligence Tools',
    
    // Pesticide Checker
    pesticideCheckerTitle: 'Pesticide Checker',
    pesticideCheckerDescription: 'Check if a pesticide is sustainable. (+10 PTS)',
    pesticideCheckerPlaceholder: 'e.g., Chlorpyrifos',
    checkingButton: 'Checking...',
    checkButton: 'Check',
    alternativesLabel: 'Alternatives',

    // Soil Analyzer
    soilAnalyzerTitle: 'Soil Analyzer',
    soilAnalyzerDescription: 'Get soil health recommendations. (+25 PTS)',
    phLevelLabel: 'pH Level',
    soilTypeLabel: 'Soil Type',
    soilTypePlaceholder: 'e.g., Loamy, Clay',
    nitrogenLabel: 'Nitrogen (N)',
    phosphorusLabel: 'Phosphorus (P)',
    potassiumLabel: 'Potassium (K)',
    lowOption: 'Low',
    mediumOption: 'Medium',
    highOption: 'High',
    analyzingButton: 'Analyzing...',
    analyzeSoilButton: 'Analyze Soil',
    analysisSummaryTitle: 'Analysis Summary',
    recommendationsLabel: 'Recommendations',

    // Crop Suggester
    cropSuggesterTitle: 'Crop Suggester',
    cropSuggesterDescription: 'Get crop ideas for your soil. (+20 PTS)',
    suggestingButton: 'Suggesting...',
    suggestCropsButton: 'Suggest Crops',
    benefitsLabel: 'Benefits',

    // Water Advisor
    waterAdvisorTitle: 'Water-Use Advisor',
    waterAdvisorDescription: 'Get water usage advice for a crop. (+15 PTS)',
    waterAdvisorPlaceholder: 'e.g., Tomato',
    gettingButton: 'Getting...',
    getAdviceButton: 'Get Advice',
    amountLabel: 'Amount',
    frequencyLabel: 'Frequency',
    notesLabel: 'Notes',

    // Farm Companion
    farmCompanionLoading: 'Your farm companion is waking up...',
    farmCompanionError: 'Oops! Could not get your daily tip.',
    tryAgainButton: 'Try Again',
    refreshTipAria: 'Get new tip',

    // Crop Production Advisor
    cropProductionTitle: 'Crop Production Timeline',
    cropProductionDescription: 'Estimate the time from planting to harvest. (+15 PTS)',
    cropProductionPlaceholder: 'e.g., Wheat',
    estimatingButton: 'Estimating...',
    getTimelineButton: 'Get Timeline',
    totalDurationFor: 'Total Duration for',
    germinationLabel: 'Germination',
    vegetativeGrowthLabel: 'Vegetative Growth',
    floweringToHarvestLabel: 'Flowering to Harvest',

    // Yield Estimator
    yieldEstimatorTitle: 'Yield Estimator',
    yieldEstimatorDescription: 'Estimate potential yield for a crop. (+15 PTS)',
    cropNameLabel: 'Crop Name',
    yieldEstimatorPlaceholder: 'e.g., Potato',
    farmSizeAcresLabel: 'Farm Size (acres)',
    estimateYieldButton: 'Estimate Yield',
    estimatedYieldFor: 'Estimated Yield for',
    importantNotesLabel: 'Important Notes',

    // Equipment Finder
    equipmentFinderTitle: 'Equipment Dealer Finder',
    equipmentFinderDescription: 'Find local tractor & harvester dealers. (+10 PTS)',
    equipmentLabel: 'Equipment',
    tractorsOption: 'Tractors',
    harvestersOption: 'Harvesters',
    nearLocationLabel: 'Near Location',
    searchingButton: 'Searching...',
    findDealersButton: 'Find Dealers',
    foundDealers: 'Found {{count}} dealers',
    viewOnMapLink: 'View on Map',

    // Pesticide Shop Finder
    pesticideShopFinderTitle: 'Pesticide Shop Finder',
    pesticideShopFinderDescription: 'Find local agricultural supply shops. (+10 PTS)',
    enterLocationPlaceholder: 'Enter your location',
    findShopsButton: 'Find Shops',
    foundShops: 'Found {{count}} shops',

    // Grass Marketplace
    grassMarketplaceTitle: 'Grass Marketplace',
    grassMarketplaceDescription: 'Buy or sell field grass in your area. (+5 PTS)',
    findingButton: 'Finding...',
    findListingsButton: 'Find Listings',
    forSale: 'For Sale',
    wanted: 'Wanted',
    contactLabel: 'Contact',
    phoneLabel: 'Phone',

    // Disease Detector
    diseaseDetectorTitle: 'Crop Disease Detector',
    diseaseDetectorDescription: 'Upload an image to detect diseases. (+30 PTS)',
    imageSizeError: 'Image size should be less than 4MB.',
    imageProcessError: 'Failed to process image. Please try again.',
    changeImageButton: 'Change Image',
    uploadImageButton: 'Upload or Take Photo',
    cropPreviewAlt: 'Crop preview',
    cropTypePlaceholder: 'Enter crop type (e.g., Tomato)',
    detectingButton: 'Detecting...',
    detectDiseaseButton: 'Detect Disease',
    confidenceLabel: 'Confidence',
    treatmentSuggestionsLabel: 'Treatment Suggestions',

    // Cold Storage Finder
    coldStorageFinderTitle: 'Cold Storage Finder',
    coldStorageFinderDescription: 'Find nearby cold storage facilities. (+10 PTS)',
    findButton: 'Find',
    foundCenters: 'Found {{count}} centers',
    capacityLabel: 'Capacity',

    // Crop Selling Center Finder
    cropSellingCenterFinderTitle: 'Crop Selling Center Finder',
    cropSellingCenterFinderDescription: 'Find local markets (Mandis) to sell your crops. (+10 PTS)',
    cropToSellLabel: 'Crop to Sell',
    findMarketsButton: 'Find Markets',
    foundMarkets: 'Found {{count}} markets',
    specializesInLabel: 'Specializes in',

  },
  hi: {
    name: 'हिन्दी',
    // Header
    appName: 'एग्रीक्वेस्ट',
    levelLabel: 'स्तर',
    pointsLabel: 'अंक',

    // Profile Setup
    welcomeMessage: 'एग्रीक्वेस्ट में आपका स्वागत है!',
    welcomeSubheading: 'आइए आपकी टिकाऊ खेती की यात्रा को व्यक्तिगत बनाएं।',
    yourNameLabel: 'आपका नाम',
    yourNamePlaceholder: 'जैसे, एलेक्स ग्रीन',
    primaryCropLabel: 'मुख्य फसल',
    primaryCropPlaceholder: 'जैसे, केला, गेहूं, कपास',
    locationLabel: 'आपका स्थान (क्षेत्र/राज्य)',
    locationPlaceholder: 'जैसे, पंजाब, महाराष्ट्र',
    farmSizeLabel: 'खेत का आकार (एकड़ में)',
    experienceLabel: 'खेती का अनुभव',
    beginnerOption: 'शुरुआती (0-2 वर्ष)',
    intermediateOption: 'मध्यम (2-5 वर्ष)',
    expertOption: 'विशेषज्ञ (5+ वर्ष)',
    mainGoalLabel: 'आपका मुख्य लक्ष्य क्या है?',
    increaseYieldOption: 'उपज बढ़ाना',
    improveSoilHealthOption: 'मिट्टी का स्वास्थ्य सुधारना',
    reduceWaterUsageOption: 'पानी का उपयोग कम करना',
    goOrganicOption: 'जैविक खेती करना',
    startJourneyButton: 'अपनी यात्रा शुरू करें',

    // Dashboard
    loadingQuests: 'आपके व्यक्तिगत खोज तैयार किए जा रहे हैं...',
    errorOccurred: 'एक त्रुटि हुई',
    errorCheckAPIKey: 'कृपया सुनिश्चित करें कि आपकी Gemini API कुंजी आपके पर्यावरण चर में सही ढंग से कॉन्फ़िगर है और पुनः प्रयास करें।',
    activeQuestsTitle: 'आपकी सक्रिय खोजें',
    allQuestsCompleted: 'आपने सभी उपलब्ध खोजों को पूरा कर लिया है!',
    generateNewQuests: 'नई खोजें उत्पन्न करें',
    
    // Quest Card
    completeButton: 'पूर्ण करें',

    // Progress Tracker
    progressTitle: 'आपकी प्रगति',
    sustainabilityScore: 'स्थिरता स्कोर',
    pointsToNextLevel: 'अगले स्तर के लिए अंक',
    questsCompletedTitle: 'पूरी की गई खोजें',
    completedLabel: 'पूर्ण',
    remainingLabel: 'शेष',
    questsLabel: 'खोजें',

    // Leaderboard
    leaderboardTitle: 'सामुदायिक लीडरबोर्ड',
    youLabel: 'आप',

    // Badges
    badgesTitle: 'आपके बैज',
    lockedStatus: 'बंद',

    // Courses
    coursesTitle: 'सीखना और प्रमाणन',
    certifiedButton: 'प्रमाणित!',
    completeCourseButton: 'कोर्स पूरा करें',

    // Farm Tools
    farmToolsTitle: 'फार्म इंटेलिजेंस टूल्स',
    
    // Pesticide Checker
    pesticideCheckerTitle: 'कीटनाशक चेकर',
    pesticideCheckerDescription: 'जांचें कि क्या कोई कीटनाशक टिकाऊ है। (+10 अंक)',
    pesticideCheckerPlaceholder: 'जैसे, क्लोरपाइरीफोस',
    checkingButton: 'जाँच हो रही है...',
    checkButton: 'जांचें',
    alternativesLabel: 'विकल्प',

    // Soil Analyzer
    soilAnalyzerTitle: 'मृदा विश्लेषक',
    soilAnalyzerDescription: 'मिट्टी के स्वास्थ्य की सिफारिशें प्राप्त करें। (+25 अंक)',
    phLevelLabel: 'पीएच स्तर',
    soilTypeLabel: 'मिट्टी का प्रकार',
    soilTypePlaceholder: 'जैसे, दोमट, चिकनी',
    nitrogenLabel: 'नाइट्रोजन (N)',
    phosphorusLabel: 'फॉस्फोरस (P)',
    potassiumLabel: 'पोटेशियम (K)',
    lowOption: 'कम',
    mediumOption: 'मध्यम',
    highOption: 'उच्च',
    analyzingButton: 'विश्लेषण हो रहा है...',
    analyzeSoilButton: 'मिट्टी का विश्लेषण करें',
    analysisSummaryTitle: 'विश्लेषण सारांश',
    recommendationsLabel: 'सिफारिशें',

    // Crop Suggester
    cropSuggesterTitle: 'फसल सुझावक',
    cropSuggesterDescription: 'अपनी मिट्टी के लिए फसल विचार प्राप्त करें। (+20 अंक)',
    suggestingButton: 'सुझाव दे रहे हैं...',
    suggestCropsButton: 'फसलें सुझाएं',
    benefitsLabel: 'लाभ',

    // Water Advisor
    waterAdvisorTitle: 'जल-उपयोग सलाहकार',
    waterAdvisorDescription: 'एक फसल के लिए जल उपयोग की सलाह लें। (+15 अंक)',
    waterAdvisorPlaceholder: 'जैसे, टमाटर',
    gettingButton: 'प्राप्त हो रहा है...',
    getAdviceButton: 'सलाह लें',
    amountLabel: 'मात्रा',
    frequencyLabel: 'आवृत्ति',
    notesLabel: 'टिप्पणियाँ',

    // Farm Companion
    farmCompanionLoading: 'आपका फार्म साथी जाग रहा है...',
    farmCompanionError: 'उफ़! आपकी दैनिक टिप नहीं मिल सकी।',
    tryAgainButton: 'पुनः प्रयास करें',
    refreshTipAria: 'नई टिप पाएं',

    // Crop Production Advisor
    cropProductionTitle: 'फसल उत्पादन समयरेखा',
    cropProductionDescription: 'रोपण से कटाई तक के समय का अनुमान लगाएं। (+15 अंक)',
    cropProductionPlaceholder: 'जैसे, गेहूँ',
    estimatingButton: 'अनुमान लगाया जा रहा है...',
    getTimelineButton: 'समयरेखा प्राप्त करें',
    totalDurationFor: 'के लिए कुल अवधि',
    germinationLabel: 'अंकुरण',
    vegetativeGrowthLabel: 'वानस्पतिक वृद्धि',
    floweringToHarvestLabel: 'फूल आने से कटाई तक',

    // Yield Estimator
    yieldEstimatorTitle: 'उपज अनुमानक',
    yieldEstimatorDescription: 'एक फसल के लिए संभावित उपज का अनुमान लगाएं। (+15 अंक)',
    cropNameLabel: 'फसल का नाम',
    yieldEstimatorPlaceholder: 'जैसे, आलू',
    farmSizeAcresLabel: 'खेत का आकार (एकड़)',
    estimateYieldButton: 'उपज का अनुमान लगाएं',
    estimatedYieldFor: 'के लिए अनुमानित उपज',
    importantNotesLabel: 'महत्वपूर्ण टिप्पणियाँ',

    // Equipment Finder
    equipmentFinderTitle: 'उपकरण डीलर खोजक',
    equipmentFinderDescription: 'स्थानीय ट्रैक्टर और हार्वेस्टर डीलर खोजें। (+10 अंक)',
    equipmentLabel: 'उपकरण',
    tractorsOption: 'ट्रैक्टर',
    harvestersOption: 'हार्वेस्टर',
    nearLocationLabel: 'स्थान के पास',
    searchingButton: 'खोज हो रही है...',
    findDealersButton: 'डीलर खोजें',
    foundDealers: '{{count}} डीलर मिले',
    viewOnMapLink: 'मानचित्र पर देखें',

    // Pesticide Shop Finder
    pesticideShopFinderTitle: 'कीटनाशक दुकान खोजक',
    pesticideShopFinderDescription: 'स्थानीय कृषि आपूर्ति की दुकानें खोजें। (+10 अंक)',
    enterLocationPlaceholder: 'अपना स्थान दर्ज करें',
    findShopsButton: 'दुकानें खोजें',
    foundShops: '{{count}} दुकानें मिलीं',

    // Grass Marketplace
    grassMarketplaceTitle: 'घास बाज़ार',
    grassMarketplaceDescription: 'अपने क्षेत्र में खेत की घास खरीदें या बेचें। (+5 अंक)',
    findingButton: 'खोजा जा रहा है...',
    findListingsButton: 'लिस्टिंग खोजें',
    forSale: 'बिक्री के लिए',
    wanted: 'चाहिए',
    contactLabel: 'संपर्क',
    phoneLabel: 'फ़ोन',

    // Disease Detector
    diseaseDetectorTitle: 'फसल रोग डिटेक्टर',
    diseaseDetectorDescription: 'बीमारियों का पता लगाने के लिए एक छवि अपलोड करें। (+30 अंक)',
    imageSizeError: 'छवि का आकार 4MB से कम होना चाहिए।',
    imageProcessError: 'छवि को संसाधित करने में विफल। कृपया पुन: प्रयास करें।',
    changeImageButton: 'छवि बदलें',
    uploadImageButton: 'फोटो अपलोड करें या लें',
    cropPreviewAlt: 'फसल पूर्वावलोकन',
    cropTypePlaceholder: 'फसल का प्रकार दर्ज करें (जैसे, टमाटर)',
    detectingButton: 'पता लगाया जा रहा है...',
    detectDiseaseButton: 'रोग का पता लगाएं',
    confidenceLabel: 'आत्मविश्वास',
    treatmentSuggestionsLabel: 'उपचार के सुझाव',

    // Cold Storage Finder
    coldStorageFinderTitle: 'कोल्ड स्टोरेज खोजक',
    coldStorageFinderDescription: 'आस-पास की कोल्ड स्टोरेज सुविधाएं खोजें। (+10 अंक)',
    findButton: 'खोजें',
    foundCenters: '{{count}} केंद्र मिले',
    capacityLabel: 'क्षमता',

    // Crop Selling Center Finder
    cropSellingCenterFinderTitle: 'फसल बिक्री केंद्र खोजक',
    cropSellingCenterFinderDescription: 'अपनी फसलें बेचने के लिए स्थानीय बाजार (मंडी) खोजें। (+10 अंक)',
    cropToSellLabel: 'बेचने के लिए फसल',
    findMarketsButton: 'बाजार खोजें',
    foundMarkets: '{{count}} बाजार मिले',
    specializesInLabel: 'इसमें विशेषज्ञता',
  },
  es: {
    name: 'Español',
    // Header
    appName: 'AgriQuest',
    levelLabel: 'Nivel',
    pointsLabel: 'PTS',

    // Profile Setup
    welcomeMessage: '¡Bienvenido a AgriQuest!',
    welcomeSubheading: 'Personalicemos su viaje hacia la agricultura sostenible.',
    yourNameLabel: 'Tu Nombre',
    yourNamePlaceholder: 'Ej: Alex Verde',
    primaryCropLabel: 'Cultivo Principal',
    primaryCropPlaceholder: 'Ej: Plátano, Trigo, Algodón',
    locationLabel: 'Su Ubicación (Región/Estado)',
    locationPlaceholder: 'Ej: Andalucía, Cataluña',
    farmSizeLabel: 'Tamaño de la Granja (en acres)',
    experienceLabel: 'Experiencia Agrícola',
    beginnerOption: 'Principiante (0-2 años)',
    intermediateOption: 'Intermedio (2-5 años)',
    expertOption: 'Experto (5+ años)',
    mainGoalLabel: '¿Cuál es tu objetivo principal?',
    increaseYieldOption: 'Aumentar el Rendimiento',
    improveSoilHealthOption: 'Mejorar la Salud del Suelo',
    reduceWaterUsageOption: 'Reducir el Uso de Agua',
    goOrganicOption: 'Hacerse Orgánico',
    startJourneyButton: 'Comience Su Viaje',

    // Dashboard
    loadingQuests: 'Generando tus misiones personalizadas...',
    errorOccurred: 'Ocurrió un Error',
    errorCheckAPIKey: 'Asegúrese de que su clave de API de Gemini esté configurada correctamente en sus variables de entorno e inténtelo de nuevo.',
    activeQuestsTitle: 'Tus Misiones Activas',
    allQuestsCompleted: '¡Has completado todas las misiones disponibles!',
    generateNewQuests: 'Generar Nuevas Misiones',

    // Quest Card
    completeButton: 'Completar',
    
    // Progress Tracker
    progressTitle: 'Tu Progreso',
    sustainabilityScore: 'Puntuación de Sostenibilidad',
    pointsToNextLevel: 'PTS para el siguiente nivel',
    questsCompletedTitle: 'Misiones Completadas',
    completedLabel: 'Completadas',
    remainingLabel: 'Restantes',
    questsLabel: 'misiones',

    // Leaderboard
    leaderboardTitle: 'Tabla de Clasificación de la Comunidad',
    youLabel: 'Tú',

    // Badges
    badgesTitle: 'Tus Insignias',
    lockedStatus: 'BLOQUEADO',

    // Courses
    coursesTitle: 'Aprendizaje y Certificación',
    certifiedButton: '¡Certificado!',
    completeCourseButton: 'Completar Curso',

    // Farm Tools
    farmToolsTitle: 'Herramientas de Inteligencia Agrícola',

    // Pesticide Checker
    pesticideCheckerTitle: 'Verificador de Pesticidas',
    pesticideCheckerDescription: 'Compruebe si un pesticida es sostenible. (+10 PTS)',
    pesticideCheckerPlaceholder: 'Ej: Clorpirifos',
    checkingButton: 'Verificando...',
    checkButton: 'Verificar',
    alternativesLabel: 'Alternativas',

    // Soil Analyzer
    soilAnalyzerTitle: 'Analizador de Suelo',
    soilAnalyzerDescription: 'Obtenga recomendaciones sobre la salud del suelo. (+25 PTS)',
    phLevelLabel: 'Nivel de pH',
    soilTypeLabel: 'Tipo de Suelo',
    soilTypePlaceholder: 'Ej: Franco, Arcilloso',
    nitrogenLabel: 'Nitrógeno (N)',
    phosphorusLabel: 'Fósforo (P)',
    potassiumLabel: 'Potasio (K)',
    lowOption: 'Bajo',
    mediumOption: 'Medio',
    highOption: 'Alto',
    analyzingButton: 'Analizando...',
    analyzeSoilButton: 'Analizar Suelo',
    analysisSummaryTitle: 'Resumen del Análisis',
    recommendationsLabel: 'Recomendaciones',

    // Crop Suggester
    cropSuggesterTitle: 'Sugeridor de Cultivos',
    cropSuggesterDescription: 'Obtenga ideas de cultivos para su suelo. (+20 PTS)',
    suggestingButton: 'Sugiriendo...',
    suggestCropsButton: 'Sugerir Cultivos',
    benefitsLabel: 'Beneficios',

    // Water Advisor
    waterAdvisorTitle: 'Asesor de Uso de Agua',
    waterAdvisorDescription: 'Obtenga consejos sobre el uso de agua para un cultivo. (+15 PTS)',
    waterAdvisorPlaceholder: 'Ej: Tomate',
    gettingButton: 'Obteniendo...',
    getAdviceButton: 'Obtener Consejo',
    amountLabel: 'Cantidad',
    frequencyLabel: 'Frecuencia',
    notesLabel: 'Notas',

    // Farm Companion
    farmCompanionLoading: 'Tu compañero de granja se está despertando...',
    farmCompanionError: '¡Ups! No se pudo obtener tu consejo diario.',
    tryAgainButton: 'Intentar de Nuevo',
    refreshTipAria: 'Obtener nuevo consejo',

    // Crop Production Advisor
    cropProductionTitle: 'Cronograma de Producción de Cultivos',
    cropProductionDescription: 'Estime el tiempo desde la siembra hasta la cosecha. (+15 PTS)',
    cropProductionPlaceholder: 'Ej: Trigo',
    estimatingButton: 'Estimando...',
    getTimelineButton: 'Obtener Cronograma',
    totalDurationFor: 'Duración Total para',
    germinationLabel: 'Germinación',
    vegetativeGrowthLabel: 'Crecimiento Vegetativo',
    floweringToHarvestLabel: 'Floración a Cosecha',

    // Yield Estimator
    yieldEstimatorTitle: 'Estimador de Rendimiento',
    yieldEstimatorDescription: 'Estime el rendimiento potencial de un cultivo. (+15 PTS)',
    cropNameLabel: 'Nombre del Cultivo',
    yieldEstimatorPlaceholder: 'Ej: Patata',
    farmSizeAcresLabel: 'Tamaño de la Granja (acres)',
    estimateYieldButton: 'Estimar Rendimiento',
    estimatedYieldFor: 'Rendimiento Estimado para',
    importantNotesLabel: 'Notas Importantes',

    // Equipment Finder
    equipmentFinderTitle: 'Buscador de Distribuidores de Equipos',
    equipmentFinderDescription: 'Encuentre distribuidores locales de tractores y cosechadoras. (+10 PTS)',
    equipmentLabel: 'Equipo',
    tractorsOption: 'Tractores',
    harvestersOption: 'Cosechadoras',
    nearLocationLabel: 'Cerca de la Ubicación',
    searchingButton: 'Buscando...',
    findDealersButton: 'Encontrar Distribuidores',
    foundDealers: 'Se encontraron {{count}} distribuidores',
    viewOnMapLink: 'Ver en el Mapa',

    // Pesticide Shop Finder
    pesticideShopFinderTitle: 'Buscador de Tiendas de Pesticidas',
    pesticideShopFinderDescription: 'Encuentre tiendas locales de suministros agrícolas. (+10 PTS)',
    enterLocationPlaceholder: 'Ingrese su ubicación',
    findShopsButton: 'Encontrar Tiendas',
    foundShops: 'Se encontraron {{count}} tiendas',

    // Grass Marketplace
    grassMarketplaceTitle: 'Mercado de Pasto',
    grassMarketplaceDescription: 'Compre o venda pasto de campo en su área. (+5 PTS)',
    findingButton: 'Buscando...',
    findListingsButton: 'Buscar Anuncios',
    forSale: 'En Venta',
    wanted: 'Se Busca',
    contactLabel: 'Contacto',
    phoneLabel: 'Teléfono',

    // Disease Detector
    diseaseDetectorTitle: 'Detector de Enfermedades de Cultivos',
    diseaseDetectorDescription: 'Suba una imagen para detectar enfermedades. (+30 PTS)',
    imageSizeError: 'El tamaño de la imagen debe ser inferior a 4 MB.',
    imageProcessError: 'Error al procesar la imagen. Inténtelo de nuevo.',
    changeImageButton: 'Cambiar Imagen',
    uploadImageButton: 'Subir o Tomar Foto',
    cropPreviewAlt: 'Vista previa del cultivo',
    cropTypePlaceholder: 'Ingrese el tipo de cultivo (ej: Tomate)',
    detectingButton: 'Detectando...',
    detectDiseaseButton: 'Detectar Enfermedad',
    confidenceLabel: 'Confianza',
    treatmentSuggestionsLabel: 'Sugerencias de Tratamiento',

    // Cold Storage Finder
    coldStorageFinderTitle: 'Buscador de Almacenes Frigoríficos',
    coldStorageFinderDescription: 'Encuentre instalaciones de almacenamiento en frío cercanas. (+10 PTS)',
    findButton: 'Buscar',
    foundCenters: 'Se encontraron {{count}} centros',
    capacityLabel: 'Capacidad',

    // Crop Selling Center Finder
    cropSellingCenterFinderTitle: 'Buscador de Centros de Venta de Cultivos',
    cropSellingCenterFinderDescription: 'Encuentre mercados locales (Mandis) para vender sus cultivos. (+10 PTS)',
    cropToSellLabel: 'Cultivo a Vender',
    findMarketsButton: 'Buscar Mercados',
    foundMarkets: 'Se encontraron {{count}} mercados',
    specializesInLabel: 'Se especializa en',
  },
};