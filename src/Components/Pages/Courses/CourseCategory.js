import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CourseCategory.css'

const CourseCategory = () => {
    const [courseCategories, setCourseCategories]= useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/course-categories')
        .then(res=>res.json())
        .then(data => setCourseCategories(data))
    },[])
    return (
        <div className='category-container mt-3 mt-md-5'>
            {
                courseCategories.map(categories => <p className='category my-md-4 text-center'>
                    <Link to={`/category/${categories.id}`}>{categories.name}</Link></p>)
            }
        </div>
    );
};

export default CourseCategory;