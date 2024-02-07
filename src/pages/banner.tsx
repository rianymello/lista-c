import React from 'react';
import Image from 'next/image';

import Jare from './../assets/jare.png'

const Home = () => {
    return (
        
      <div>
        <Image
        src={Jare}
        alt="Descrição da imagem"
        width={500} 
        height={300}       />

     </div>
     
    );
  }
  
  export default Home;