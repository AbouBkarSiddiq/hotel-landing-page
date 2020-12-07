import React from 'react'
import reactangle from '../../images/reactangle.png'
import Rectangle170 from '../../images/Rectangle170.png'
import Polygon1 from '../../images/Polygon1.png';
import Rectangle171 from '../../images/Rectangle171.png';
import twitter from '../../images/twitter.svg'
import instagram from '../../images/instagram.svg'
import facebook1 from '../../images/facebook1.svg'
import Rectangle173 from '../../images/Rectangle173.png';
import Ellipse77 from '../../images/Ellipse77.png';
import Ellipse76 from '../../images/Ellipse76.png';
import Ellipse75 from '../../images/Ellipse75.png';
const Home = () => {
    return (
        <div>
            <div className='flex mt-20 mx-40'>
                <img src={reactangle} className='z-50' />
              <div flex>
                 <h1 className='text-xl font-bold text-yellow-500 mx-20'>Work Space</h1>
                 <br />
                 <h1 className='text-4xl font-bold mx-20'>Modern Design Work Space</h1>
                 <br />
                 <br />
                 <img src={Rectangle170} className='mx-20' />
                 <br />
                 <p className='mx-20 justify-center'>Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit.Donec velit sapien, consequat 
                    vitae velit dignissim, elementum convallis nunc. Duis mattis orci
                    consectetur quam facilisis 
                    ullamcorper quis vitae neque. 
                  </p>
                  <br />
                  <br />
                  <span className=''>
                    <div className='border-2 rounded-full h-20 ml-20 mr-96 bg-blue-400 '></div>
                      <img src={Polygon1} className='-my-14 mx-28 m-32'/>
                      <div className='mx-48 my-8 font-bold'>Watch Video</div>
                      <span className='flex my-32 mb-20 ml-0 sm:ml-0 md:ml-0 lg:ml-24 xl:ml-48'>
                        <img src={Ellipse77} className='my-4 -mx-2'/>
                        <img src={Ellipse76} className='my-4 -mx-2'/>
                        <img src={Ellipse75} className='my-4 -mx-2'/>
                        <h1 className='mx-4 my-8 text-white font-bold'>235+</h1>
                        <h1 className='my-8 text-white -mx-4'>Client</h1>
                      </span>
                  </span>  
              </div>
              <div>
                <img src={Rectangle171} className='h-64 absolute'/>
                <br />
                <img src={twitter} className='absolute my-64' />
                <br />
                <img src={instagram} className='absolute my-64 ' />
                <br />
                <img src={Rectangle173} className='absolute my-64 w-6' />
                <img src={facebook1} className='relative m-2 my-64' />
              </div>
            </div>
            <div className='border-8 h-32 border-blue-400 bg-blue-400 -mt-48 '> 
            </div>   
             
        </div>
        
    )
}
export default Home;
