import React, { useState } from 'react';
import Image from 'next/image';
import ModalSkills from './ModalSkills'

import cssIcon from '../assets/css-icon.png';
import figmaIcon from '../assets/figma-icon.png';
import gitIcon from '../assets/git-icon.png';
import githubIcon from '../assets/github-icon.png';
import htmlIcon from '../assets/html-icon.png';
import javascriptIcon from '../assets/javascript-icon.png';
import miroIcon from '../assets/miro-icon.png';
import reactIcon from '../assets/react-icon.png';
import tailwindIcon from '../assets/tailwind-icon2.png';
import trelloIcon from '../assets/trello-icon.png';
import typescriptIcon from '../assets/typescript-icon.png';
import rigthArrow from '../assets/rigth-arrow.png';
import leftArrow from '../assets/left-arrow.png';



const Skills = () => {
  const carouselItems = [
    { id: 1, image: cssIcon, alt: 'CSS' },
    { id: 2, image: figmaIcon, alt: 'Figma' },
    { id: 3, image: gitIcon, alt: 'Git' },
    { id: 4, image: githubIcon, alt: 'GitHub' },
    { id: 5, image: htmlIcon, alt: 'HTML' },
    { id: 6, image: javascriptIcon, alt: 'JavaScript' },
    { id: 7, image: miroIcon, alt: 'Miro' },
    { id: 8, image: reactIcon, alt: 'React' },
    { id: 9, image: tailwindIcon, alt: 'Tailwind CSS' },
    { id: 10, image: trelloIcon, alt: 'Trello' },
    { id: 11, image: typescriptIcon, alt: 'TypeScript' }
  ];

  const numVisibleItems = 4;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handlePrevClick = () => {
    setCurrentIndex(prevIndex =>
      prevIndex > 0 ? prevIndex - 1 : carouselItems.length - numVisibleItems
    );
  };

  const handleNextClick = () => {
    setCurrentIndex(prevIndex =>
      prevIndex < carouselItems.length - numVisibleItems ? prevIndex + 1 : 0
    );
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className='mt-20 max-w-[600px] mx-auto'>
    <div className="flex justify-evenly mb-4">
      <h2 className='text-gray-400 mr-12 text-xl'>Skills</h2>
      <a className='text-purple-500 hover:text-purple-700 ml-12 text-lg' onClick={() => setShowModal(true)}>See all</a>
      {showModal && <ModalSkills closeModal={closeModal} />}
    </div>
   
    
    <div className="flex justify-center items-center space-x-4">
      <button className="text-gray-500" onClick={handlePrevClick}>
        <Image src={leftArrow} alt='seta da esquerda' width={20} height={20} />
      </button>
      <div className="flex overflow-hidden space-x-4 ">
        {carouselItems.slice(currentIndex, currentIndex + numVisibleItems).map(item => (
          <div
            key={item.id}
            className="w-20 h-20 flex items-center justify-center rounded-full bg-fundo-500"
            style={{ minWidth: '80px' }}
          >
            <Image src={item.image} alt={item.alt} width={40} height={40} />
          </div>
        ))}
      </div>
      <button className="text-gray-500" onClick={handleNextClick}>
        <Image src={rigthArrow} alt='seta da direita' width={20} height={20} />
      </button>
    </div>

   
  </div>

  );
};


export default Skills;
