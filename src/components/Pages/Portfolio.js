import React from 'react';
import { Link } from 'react-router-dom';
 
const Portfolio = () => {
    return (
        <div>
             <div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row">
    <img src="https://625da4d972983008a7757f30--heartfelt-florentine-7e7dcf.netlify.app/images/myPhoto.jpg" alt="portfolioImg" className='w-1/2 rounded-lg'/>
    <div className='text-left mx-10'>
      <h1 class="text-5xl font-bold mb-10 text-blue-600">My Portfolio</h1>
      <div class="divider"></div> 
       <h2 className='text-2xl'><b className='text-blue-500'>Full Name: </b>Md. Fahamidul Islam</h2>
       <br />
       <h2 className='text-2xl'><b className='text-blue-500'>Email: </b>mdfahamidulislam047@gmail.com</h2>
       <br />
       <h2 className='text-2xl'><b className='text-blue-500'>Education: </b>BSc. Hons. 4th year , (Applied Mathematics), University of Dhaka</h2>
       <br />
       <h2 className='text-2xl'><b className='text-blue-500 uppercase'>Web technologies I Use: </b></h2>
       <div class="divider"></div> 
       <ul>
           <li>HTML5</li>
           <li>CSS3</li>
           <li>Javascript</li>
           <li>React</li>
           <li>Node Js</li>
           <li>Express</li>
           <li>Mongodb</li>
           <li>MySQL</li>
           <li>PHP</li>
       </ul>
    
      <h1 className='text-2xl text-blue-600 uppercase font-bold mt-5'>Three of my latest project's links</h1>
      <div class="divider"></div> 
      
      <a href="https://auto-xpress.web.app/" className='text-purple-500 text-3xl '>Auto Xpress</a>
      <br />
      <a href="https://625da4d972983008a7757f30--heartfelt-florentine-7e7dcf.netlify.app/" className='text-green-600 text-3xl'>Power Zone</a>
      <br />
      <a href="https://624b53479e66781dbd8a8f66--legendary-entremet-11e2fc.netlify.app/" className='text-orange-600 text-3xl'>Trimmer Review</a>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Portfolio;