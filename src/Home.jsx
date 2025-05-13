import React from 'react';

import  About from './sections/About';
import PopularAreas from './sections/PopularAreas';
import Properties from './sections/Properties';
import Services  from './sections/Services';
import 'aos/dist/aos.css'; //animation css 
import Slider from './sections/Slider';


const App = () => {
  return (
    <div>
      
      <Slider />
      <About/>
      <PopularAreas/>
      <Properties/>
      <Services/>
      
      
    </div>
  )
}

export default App;
