import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CourseCategory.css'

const CourseCategory = () => {
    const [courseCategories, setCourseCategories]= useState([]);
    useEffect(()=>{
        fetch('https://xoxo-course-server-side.vercel.app/course-categories')
        .then(res=>res.json())
        .then(data => setCourseCategories(data))
    },[])
    return (
        <div className='category-container mt-3 mt-md-5'>
            {
                courseCategories.map(categories => <p key={categories.id} className='category text-center'>
                    <Link to={`/category/${categories.id}`}>{categories.name}</Link></p>)
            }
        </div>
    );
};

export default CourseCategory;