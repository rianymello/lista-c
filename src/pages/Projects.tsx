import React, { useState } from 'react';
import Image from 'next/image';
import Project1 from '../assets/projeto1.png';
import Project2 from '../assets/projeto2.png';
import Project3 from '../assets/projeto3.png';
import Project4 from '../assets/projeto4.png';
import Project5 from '../assets/projeto5.png';
import Project6 from '../assets/projeto6.png';
import Project7 from '../assets/projeto7.png';
import Project8 from '../assets/projeto8.png';

const Button = ({ label, active, onClick }) => {
  const buttonClasses = active
    ? 'px-4 py-3 rounded-md bg-fundo-700 text-white'
    : 'px-4 py-3 rounded-md bg-fundo-500 text-white';

  return (
    <button className={buttonClasses} onClick={onClick}>
      {label}
    </button>
  );
};

const Projects = () => {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  const project1Images = [
    Project1,
    Project2,
    Project3,
    Project4,

  ];

  const project2Images = [
    Project5,
    Project6,
    Project7,
    Project8,

  ];

  const projects = [
    {
      id: 1,
      label: 'Projetos pessoais',
      images: project1Images,
    },
    {
      id: 2,
      label: 'Projetos escolares',
      images: project2Images,
    },
  ];

  const activeProject = projects.find((project) => project.id === activeButton);

  return (
    <div className="flex flex-col items-center justify-center mt-20 mb-12">
      <div className="space-x-4 bg-fundo-500 w-96 flex justify-center h-16 py-3 rounded-md">
        {projects.map((project) => (
          <Button
            key={project.id}
            label={project.label}
            active={project.id === activeButton}
            onClick={() => handleButtonClick(project.id)}
          />
        ))}
      </div>
      <div className=" flex items-center justify-center text-white mt-10">
        <div className="grid grid-cols-2 gap-4 ">
          {activeProject.images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Imagem ${index + 1}`}
              className="rounded-md w-[300px] h-[200px]	object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
