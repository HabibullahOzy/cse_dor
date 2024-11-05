import React from 'react';
import "./CseLab.css"

const CseSLab = () => {
    return (
        <div className=''>
            <h1 className='text-2xl font-bold text-center mt-10'>CSE Specialized Lab</h1>


            <table className='w-1/2 mx-auto border-2 border-t-8 mt-5 border-sky-700'>
                <tbody className='p-4'>
                    <tr className=' border-b-2'>
                        <td>
                            Embedded System Lab
                        </td>
                    </tr>


                    <tr>
                        <td>
                            IoT Lab
                        </td>
                    </tr>

                    <tr>
                        <td>
                            Fab Lab
                        </td>
                    </tr>


                    <tr>
                        <td>
                           <a href='https://nlp.daffodilvarsity.edu.bd/'>NLP & ML Research Lab</a> 
                        </td>
                    </tr>

                    <tr>

                        <td>
                            Health Informatics Research Lab
                        </td>
                    </tr>


                    <tr>
                        <td>
                            MARS Lab
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href='https://riseuplabs.com/ar-vr-and-game-development-training/' target="_blank" >AR-VR & Game Development Lab</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Quantum Computing Lab
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Blockchain Technology
                        </td>
                    </tr>
                    <tr>
                        <td>
                            DIU Space Science
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CseSLab;