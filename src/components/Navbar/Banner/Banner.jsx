import React from 'react';
import Navbar from '../Navbar';
import BannerLeft from './BannerLeft';

const Banner = () => {
    return (
        <div className='container-fluid'>
            <Navbar/>
            <BannerLeft/>
        </div>
    );
}

export default Banner;
