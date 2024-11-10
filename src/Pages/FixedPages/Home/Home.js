import React from 'react';
import './Home.css'

import img3 from '../../Assets/World rank.jpg';
import img4 from '../../Assets/qs asia rank.jpg';
import Banner from './Banner/Banner';

const Home = () => {

    return (
        <div>
            <div>
               <Banner></Banner>
            </div>


            <div className='flex w-1/2 h-1/2'>
                <img src={img3} alt=''></img>
                <img src={img4} alt=''></img>
            </div>

        </div>
    );
};
export default Home;