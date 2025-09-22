import React, { useState, useRef } from 'react';
import { CropDiseaseResult } from '../types';
import { DiseaseIcon } from '../constants';

interface CropDiseaseDetectorProps {
    onDetect: (imageDataBase64: string, mimeType: string, cropType: string) => void;
    result: CropDiseaseResult | null;
    loading: boolean;
    error: string | null;
}

const fileToGenerativePart = async (file: File) => {
    const base64EncodedDataPromise = new Promise<string>((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve((reader.result as string).split(',')[1]);
      reader.readAsDataURL(file);
    });
    return {
      inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
    };
};

const CropDiseaseDetector: React.FC<CropDiseaseDetectorProps> = ({ onDetect, result, loading, error }) => {
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [cropType, setCropType] = useState('');
    const [componentError, setComponentError] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 4 * 1024 * 1024) { // 4MB limit
                setComponentError("Image size should be less than 4MB.");
                return;
            }
            setImageFile(file);
            setImagePreview(URL.createObjectURL(file));
            setComponentError(null);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (imageFile && cropType.trim()) {
            try {
                const { inlineData } = await fileToGenerativePart(imageFile);
                onDetect(inlineData.data, inlineData.mimeType, cropType);
            } catch (err) {
                setComponentError("Failed to process image. Please try again.");
            }
        }
    };
    
    const confidenceStyles = {
        High: 'bg-green-100 text-green-800',
        Medium: 'bg-yellow-100 text-yellow-800',
        Low: 'bg-orange-100 text-orange-800',
    };

    return (
        <div className="p-4 border border-gray-200 rounded-lg bg-gray-50/50 h-full flex flex-col">
            <h3 className="text-lg font-bold text-brand-dark flex items-center"><DiseaseIcon /> <span className="ml-2">Crop Disease Detector</span></h3>
            <p className="text-sm text-gray-500 mt-1 mb-4">Upload an image to detect diseases. (+30 PTS)</p>
            
            <form onSubmit={handleSubmit} className="space-y-3">
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    accept="image/*"
                    capture="environment"
                    className="hidden"
                />
                <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={loading}
                    className="w-full text-center py-3 px-4 border-2 border-dashed border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:border-brand-green hover:bg-green-50 transition-colors"
                >
                    {imagePreview ? 'Change Image' : 'Upload or Take Photo'}
                </button>

                {imagePreview && (
                    <div className="mt-2 flex justify-center">
                        <img src={imagePreview} alt="Crop preview" className="max-h-40 rounded-md shadow-sm" />
                    </div>
                )}
                
                <input
                    type="text"
                    value={cropType}
                    onChange={(e) => setCropType(e.target.value)}
                    placeholder="Enter crop type (e.g., Tomato)"
                    className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green sm:text-sm"
                    disabled={loading}
                    required
                />

                <button type="submit" className="w-full px-4 py-2 bg-indigo-500 text-white font-semibold rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-400" disabled={loading || !imageFile || !cropType}>
                    {loading ? 'Detecting...' : 'Detect Disease'}
                </button>
            </form>

            <div className="mt-4 flex-grow overflow-y-auto">
                {componentError && <p className="text-sm text-red-600">{componentError}</p>}
                {error && <p className="text-sm text-red-600">{error}</p>}
                {result && (
                    <div className="p-3 rounded-lg bg-indigo-50 border-l-4 border-indigo-500">
                        <div className="flex justify-between items-center">
                            <p className="font-bold text-md text-indigo-800">{result.diseaseName}</p>
                            <span className={`px-2 py-1 text-xs font-semibold rounded-full ${confidenceStyles[result.confidence] || 'bg-gray-100 text-gray-800'}`}>
                                {result.confidence} Confidence
                            </span>
                        </div>
                        <p className="text-sm text-gray-700 mt-2">{result.description}</p>
                         <div className="mt-3">
                            <p className="text-sm font-semibold text-gray-800">Treatment Suggestions:</p>
                            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mt-1">
                                {result.treatmentSuggestions.map((rec, i) => <li key={i}>{rec}</li>)}
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CropDiseaseDetector;