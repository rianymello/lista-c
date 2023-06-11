import React, { useState } from 'react';

const Projects = () => {
  const [activeButton, setActiveButton] = useState<number | null>(1);

  const handleButtonClick = (buttonId: number) => {
    setActiveButton(buttonId);
  };

  const contentMap = {
    1: <p>Conteúdo do Projeto 1</p>,
    2: <p>Conteúdo do Projeto 2</p>,
  };

  const renderContent = () => {
    return activeButton ? contentMap[activeButton] : null;
  };

  return (
    <div className="flex flex-col items-center justify-center mt-20 mb-12 ">
      <div className="space-x-4">
        <button
          className={`px-4 py-2 rounded-md ${
            activeButton === 1 ? 'bg-fundo-500 text-white' : 'bg-fundo-700'
          }`}
          onClick={() => handleButtonClick(1)}
        >
          Projeto 1
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            activeButton === 2 ? 'bg-fundo-500 text-white' : 'bg-fundo-700'
          }`}
          onClick={() => handleButtonClick(2)}
        >
          Projeto 2
        </button>
      </div>
      <div className="w-80 h-20 flex items-center justify-center bg-gray-800 text-white">
        {renderContent()}
      </div>
    </div>
  );
};

export default Projects;
