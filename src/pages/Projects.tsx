import React, { useState } from 'react';
import Image from 'next/image';
import Project1 from '../assets/projeto1.jpg';
import Project2 from '../assets/projeto2.jpg';
import Project3 from '../assets/projeto3.jpg';
import Project4 from '../assets/projeto4.jpg';
import Project5 from '../assets/projeto5.jpg';
import Project6 from '../assets/projeto6.jpg';

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

const ProjectImages = ({ images }) => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-10">
      {images.map((image, index) => (
        <div key={index} className="rounded-md overflow-hidden">
          <Image src={image} alt={`Imagem ${index + 1}`} width={300} height={200} />
        </div>
      ))}
    </div>
  );
};

const Projects = () => {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  const projects = [
    {
      id: 1,
      label: 'Projetos pessoais',
      images: [Project1, Project2, Project3, Project4, Project5, Project6],
    },
    {
      id: 2,
      label: 'Projetos escolares',
      images: [Project6, Project5, Project4, Project3, Project2, Project1],
    },
  ];

  const activeProject = projects.find((project) => project.id === activeButton);

  return (
    <div className="flex flex-col items-center justify-center mt-20 mb-12">
      <div className="space-x-4 bg-fundo-500 w-[25rem] flex justify-center h-16 py-3 rounded-md">
        {projects.map((project) => (
          <Button
            key={project.id}
            label={project.label}
            active={project.id === activeButton}
            onClick={() => handleButtonClick(project.id)}
          />
        ))}
      </div>
      <div className="w-80 h-20 flex items-center justify-center bg-gray-800 text-white mt-10">
        <ProjectImages images={activeProject.images} />
      </div>
    </div>
  );
};

export default Projects;
