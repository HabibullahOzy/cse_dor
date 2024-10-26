import React from 'react';
import img from '../../Assets/diu_logo.png'

const Rankings = () => {



    return (
        <div className=' w-5/6 m-auto'>
            <div className=''>
                <div className='flex justify-between m-5 border border-spacing-6 p-10 bg-sky-300 rounded-md shadow-lg'>
                    <h1 className='grid items-center'>2024</h1>
                    <div className=' grid items-baseline'>

                        <p>DIU topped among private universities & 2nd in Bangladesh and within top 1000 global universities in QS World Sustainability Rankings 2024</p>

                        <p>DIU Ranked 3rd among Private Universities and 5th in Bangladesh in QS World University Rankings 2024</p>


                        <p>DIU Ranked 3rd among Private Universities in Bangladesh in QS Asia University Rankings 2024</p>


                    </div>
                    <div className=' align-baseline'>
                        <img className='w-24' src={img} alt=''></img>
                        <img className='w-24' src={img} alt=''></img>
                        <img className='w-24' src={img} alt=''></img>

                    </div>
                </div>


                <div className='flex justify-between border border-spacing-6 m-5 p-10 bg-sky-200 rounded-md shadow-lg'>
                    <h1 className='grid items-center'>2023</h1>
                    <div className=' grid items-baseline'>

                        <p>DIU Ranked 2nd in Bangladesh and overall 401-600 in the world by THE Impact Rankings 2023</p>
                        <p>DIU has been ranked 3rd among all private Universities of Bangladesh in QS Asia Rankings-2023</p>


                        <p>DIU Ranked within Top 50 World Universities (Student Mobility and Openness) by WURI Ranking 2023</p>


                    </div>
                    <div className=' align-baseline'>
                        <img className='w-24' src={img} alt=''></img>
                        <img className='w-24' src={img} alt=''></img>
                        <img className='w-24' src={img} alt=''></img>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rankings;