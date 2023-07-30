import React from 'react';
import Modal from 'react-modal';

import Image from "next/image"; 

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

import CustomBox from '../pages/CustomBox';


// Interface para as propriedades do componente
interface ModalSkillsProps {
  closeModal: () => void;
}

const items = [
  { image: cssIcon, name: "CSS" },
  { image: figmaIcon, name: "Figma" },
  { image: gitIcon, name: "Git" },
  { image: githubIcon, name: "Github" },
  { image: htmlIcon, name: "HTML" },
  { image: javascriptIcon , name: "Javascript" },
  { image: miroIcon ,name: "Miro" },
  { image: reactIcon ,name: "React.js" },
  { image: tailwindIcon, name: "Tailwind" },
  { image: trelloIcon, name: "Trello" },
  { image: typescriptIcon, name: "Typescript" },
];

// Componente do modal
const ModalSkills: React.FC<ModalSkillsProps> = ({ closeModal }) => {
  return (
    <Modal
    isOpen={true}
    onRequestClose={closeModal}
    className="fixed inset-0 flex items-center justify-center"
    contentLabel="Modal"
    overlayClassName="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center"
  >
    <div className="bg-fundo-700 w-[55%] h-[75%] p-4 rounded-lg relative">
    
      <button
        className="absolute top-2 right-2 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        onClick={closeModal}
      >
        Fechar
      </button>
      <div className="grid grid-cols-3 gap-4">
        {items.map((item, index) => (
          <CustomBox key={index} image={item.image} name={item.name} />
        ))}
      </div>
    </div>
  </Modal>
  );
};



export default ModalSkills;
