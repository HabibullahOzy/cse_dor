import React from 'react';
import img from '../../Assets/world.png'
import img1 from '../../Assets/Wuri.png'
import img2 from '../../Assets/sirank.png'
import img3 from '../../Assets/uni rank.png'
import img4 from '../../Assets/qs24.png'
import img5 from '../../Assets/qs242.jpg'
import img6 from '../../Assets/qs asia rank.jpg'
import img7 from '../../Assets/qsWorld25.png'


const Rankings = () => {



    return (
        <div className=' w-5/6 m-auto'>
            <div className=''>

                <div className='flex justify-between border border-spacing-6 m-5 p-10 bg-sky-400 rounded-md shadow-lg'>
                    <h1 className='grid items-center font-bold font-serif'>2025</h1>
                    <div className=' grid items-center'>

                        <a href='https://www.topuniversities.com/world-university-rankings?countries=bd' target='_blank' rel='search' className='font-semibold text-blue-800'><p>DIU ranks 3rd among private universities and 5th among all universities in Bangladesh</p></a>
                        


                    </div>
                    <div className=' align-baseline'>
                        <a href='https://www.topuniversities.com/world-university-rankings?countries=bd' target='_blank' rel='search'><img className='w-40' src={img7} alt=''></img></a>
                        

                    </div>
                </div>

                <div className='flex justify-between m-5 border border-spacing-6 p-10 bg-sky-300 rounded-md shadow-lg'>
                    <h1 className='grid items-center font-bold serif'>2024</h1>
                    <div className=' grid items-baseline'>

                        <a href='https://www.timeshighereducation.com/impactrankings#!/length/25/locations/BGD/sort_by/rank/sort_order/asc' rel='help' target='_blank' className='m-5 text-blue-600'>DIU ranks 1st in Bangladesh and 301-400 in the World</a>

                        <a href='https://www.timeshighereducation.com/impactrankings#!/length/25/locations/BGD/sort_by/rank/sort_order/asc' rel='' target='_blank' className='m-5 text-blue-600'>DIU ranks 22nd in the world in SDG 4 (Quality Education)</a>

                        <a href='https://www.wuri.world/wuri-ranking-2024' target='_blank' rel='search' className='m-5 text-blue-600'>DIU ranks 3rd in the world in Student Mobility and Openness Category</a>
                        <a href='https://www.wuri.world/wuri-ranking-2024' target='_blank' rel='' className='m-5 text-blue-600'>DIU ranks 3rd in the world in Innovation in Funding Category</a>
                        <a href='https://www.scimagoir.com/rankings.php?sector=Higher+educ.&country=BGD#google_vignette' target='_blank' className='m-5 text-blue-600'>DIU ranks under Q1 Research Publications category in SCIMAGO Institutions Rankings</a>
                        <a href='https://www.4icu.org/bd/' target='_blank' className='m-5 text-blue-600'>DIU ranks 3rd among private universities in Bangladesh</a>
                        <a href='https://www.topuniversities.com/sustainability-rankings?countries=bd' target='_blank' className='m-5 text-blue-600'>DIU topped among private universities & 2nd in Bangladesh and within top 1000 global <br /> universities in QS World Sustainability Rankings 2024</a>
                        <a href='https://www.topuniversities.com/universities/daffodil-international-university' target='_blank' className='m-5 text-blue-600'>DIU Ranked 3rd among Private Universities and 5th in Bangladesh in QS World University Rankings 2024</a>
                        <a href='https://www.topuniversities.com/asia-university-rankings?countries=bd' target='_blank' className='m-5 text-blue-600'>DIU Ranked 3rd among Private Universities in Bangladesh in QS Asia University Rankings 2024</a>


                    </div>
                    <div className=' align-baseline'>
                        <a href='https://www.timeshighereducation.com/impactrankings#!/length/25/locations/BGD/sort_by/rank/sort_order/asc' target='_blank' className=''><img className='w-56 m-5' src={img} alt=''></img></a>
                        <a href='https://www.timeshighereducation.com/impactrankings#!/length/25/locations/BGD/sort_by/rank/sort_order/asc' target='_blank' className=''><img className='w-56 m-5' src={img} alt=''></img></a>
                        <a href='https://www.wuri.world/wuri-ranking-2024' target='_blank' rel='search'><img className='w-56 m-5 bg-white' src={img1} alt=''></img></a>
                        <a href='https://www.wuri.world/wuri-ranking-2024' target='_blank' rel='search'><img className='w-56 m-5 bg-white' src={img1} alt=''></img></a>
                        <a href='https://www.scimagoir.com/rankings.php?sector=Higher+educ.&country=BGD#google_vignette' target='_blank'><img className='w-24 m-5 bg-white' src={img2} alt=''></img></a>
                        <a href='https://www.4icu.org/bd/' target='_blank'><img className='w-24 m-5 bg-white' src={img3} alt=''></img></a>
                        <a href='https://www.topuniversities.com/sustainability-rankings?countries=bd' target='_blank'><img className='w-36 m-5 bg-white' src={img4} alt=''></img></a>
                        <a href='https://www.topuniversities.com/universities/daffodil-international-university' target='_blank'><img className='w-56 m-5 bg-white' src={img5} alt=''></img></a>
                        <a href='https://www.topuniversities.com/asia-university-rankings?countries=bd' target='_blank'><img className='w-36 m-5 bg-white' src={img6} alt=''></img></a>

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