import React from 'react';
import { Course } from '../types';
import { useTranslation } from '../hooks/useTranslation';

interface CourseCardProps {
  course: Course;
  onComplete: (id: string, points: number) => void;
  isCompleted: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onComplete, isCompleted }) => {
  const { t } = useTranslation();
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 border-l-4 ${isCompleted ? 'border-gray-400 bg-gray-50' : 'border-brand-brown'} transition-all`}>
      <div className="flex items-start space-x-4">
        <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${isCompleted ? 'bg-gray-300' : 'bg-brand-brown/10'}`}>
          <span className={`h-8 w-8 ${isCompleted ? 'text-gray-500' : 'text-brand-brown'}`}>{course.icon}</span>
        </div>
        <div>
          <h3 className={`text-lg font-bold ${isCompleted ? 'text-gray-500' : 'text-brand-dark'}`}>{course.title}</h3>
          <p className="text-gray-600 mt-1 text-sm">{course.description}</p>
        </div>
      </div>
      <div className="flex justify-between items-end mt-4">
        <div>
          <p className={`text-lg font-bold ${isCompleted ? 'text-gray-400' : 'text-brand-brown'}`}>+{course.points} {t('pointsLabel')}</p>
          <p className="text-xs text-gray-500">{course.certification}</p>
        </div>
        <button
          onClick={() => onComplete(course.id, course.points)}
          disabled={isCompleted}
          className={`px-6 py-2 font-semibold rounded-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            isCompleted
              ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
              : 'bg-brand-brown text-white hover:bg-brand-brown/80 focus:ring-brand-brown'
          }`}
        >
          {isCompleted ? t('certifiedButton') : t('completeCourseButton')}
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
