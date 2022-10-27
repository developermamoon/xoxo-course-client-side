import React from 'react';
import CourseCategory from './CourseCategory';

const Courses = () => {
    
    return (
        <div>
            <div className="row">
                <div className="col-md-4 bg-primary">
                    <CourseCategory></CourseCategory>
                </div>
                <div className="col-md-8"></div>
            </div>
        </div>
    );
};

export default Courses;