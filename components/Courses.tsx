import React from 'react';
import { Course } from '../types';
import CourseCard from './CourseCard';
import { useTranslation } from '../hooks/useTranslation';

interface CoursesProps {
  courses: Course[];
  completedCourses: string[];
  onCompleteCourse: (id: string, points: number) => void;
}

const Courses: React.FC<CoursesProps> = ({ courses, completedCourses, onCompleteCourse }) => {
  const { t } = useTranslation();
  return (
    <div>
        <h2 className="text-2xl font-bold mb-4 text-brand-dark">{t('coursesTitle')}</h2>
        <div className="space-y-4">
            {courses.map(course => (
                <CourseCard 
                    key={course.id} 
                    course={course} 
                    onComplete={onCompleteCourse} 
                    isCompleted={completedCourses.includes(course.id)} 
                />
            ))}
        </div>
    </div>
  );
};

export default Courses;
