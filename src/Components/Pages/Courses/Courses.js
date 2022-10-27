import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCardsShort from './CourseCardSummary/CourseCardsShort';
import CourseCategory from './CourseCategory/CourseCategory';

const Courses = () => {
    const courseData = useLoaderData();
    console.log(courseData)
    return (
        <div>
            <div className="row">
                <div className="col-md-3">
                    <CourseCategory></CourseCategory>
                </div>
                <div className="col-md-9 p-5">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {courseData.map(course => <CourseCardsShort key={course._id} course={course}></CourseCardsShort>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;