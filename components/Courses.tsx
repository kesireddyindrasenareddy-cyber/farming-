
import React from 'react';
import { Course } from '../types';
import CourseCard from './CourseCard';

interface CoursesProps {
  courses: Course[];
  completedCourses: string[];
  onCompleteCourse: (id: string, points: number) => void;
}

const Courses: React.FC<CoursesProps> = ({ courses, completedCourses, onCompleteCourse }) => {
  return (
    <div>
        <h2 className="text-2xl font-bold mb-4 text-brand-dark">Learning & Certification</h2>
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
