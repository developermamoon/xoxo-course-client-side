import React from 'react';
import { Image } from 'react-bootstrap';
import banner from '../../../Images/404 banners.jpg'

const Page404 = () => {
    return (
        <div className='text-center'>
            <Image src={banner}></Image>
        </div>
    );
};

export default Page404;