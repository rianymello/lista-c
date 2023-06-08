import React, { useState } from 'react';
import Image from 'next/image';

import cssIcon from '../assets/css-icon.png';
import figmaIcon from '../assets/figma-icon.png';
import gitIcon from '../assets/git-icon.png';
import githubIcon from '../assets/github-icon.png';
import htmlIcon from '../assets/html-icon.png';
import javascriptIcon from '../assets/javascript-icon.png';
import miroIcon from '../assets/miro-icon.png';
import reactIcon from '../assets/react-icon.png';
import tailwindIcon from '../assets/tailwind-icon.png';
import trelloIcon from '../assets/trello-icon.png';
import typescriptIcon from '../assets/typescript-icon.png';

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

  return (
    <div className='mt-12'>
    <div className="text-gray-400 flex justify-center">
        <h1>Skills</h1>
    </div>
    <div className="flex justify-center items-center space-x-4">
      <button className="text-gray-500" onClick={handlePrevClick}>
        &lt;
      </button>
      <div className="flex overflow-hidden space-x-4">
        {carouselItems.slice(currentIndex, currentIndex + numVisibleItems).map(item => (
          <div
            key={item.id}
            className="w-20 h-20 flex items-center justify-center rounded-full bg-fundo-500 transition-transform duration-500"
            style={{ minWidth: '80px' }}
          >
            <Image src={item.image} alt={item.alt} width={40} height={40} />
          </div>
        ))}
      </div>
      <button className="text-gray-500" onClick={handleNextClick}>
        &gt;
      </button>
    </div>
    </div>
  );
};

export default Skills;
