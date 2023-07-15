import bannerImg from "../assets/banner-img.png";
import Image from 'next/image';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

const Banner = () => {
  return (
    <div className="flex items-center justify-start flex-col w-[600px] mx-auto">
      {/* Perfil */}
      <div className="flex items-center justify-center mt-24">
        <div className="rounded-full border-solid border-4 border-purple-600">
          <Image src={bannerImg} alt="Minha imagem" width={150} height={150} className="rounded-full border-solid border-6 border-purple-600" />
        </div>
        <div className="ml-8 flex flex-col items-start space-y-4 pr-24">
          <h1 className="text-4xl font-bold text-white">Riany Mello</h1>
          <p className="text-lg font-normal text-gray-400 mb-4">Front-end Developer</p>
          <div className="flex">
            <AiFillGithub className="text-gray-400 text-3xl" />
            <div className="w-6"></div>
            <AiFillLinkedin className="text-gray-400 text-3xl" />
          </div>
        </div>
      </div>

      {/* Dados do Perfil e Botões */}
      <div className="flex flex-col justify-between gap-16 mt-[32px]">
        <div className="flex justify-between">
          <p className="text-lg font-normal text-gray-400 text-center flex-grow-0 min-w-[150px]">
            <span className="block">4+</span>
            <span className="block">anos de</span>
            <span className="block">estudos</span>
          </p>
          <p className="text-lg font-normal text-gray-400 text-center flex-grow-0 min-w-[150px]">
            <span className="block">150+</span>
            <span className="block">commits</span>
            <span className="block">no último ano</span>
          </p>
          <p className="text-lg font-normal text-gray-400 text-center flex-grow-0 min-w-[150px]">
            <span className="block">20+</span>
            <span className="block">projetos</span>
            <span className="block">desenvolvidos</span>
          </p>
        </div>

        <div className="flex flex-row justify-between">
          <a href="https://github.com/rianymello" target="_blank" rel="noopener noreferrer" className="bg-purple-500 text-gray-900 py-4 px-10 rounded-md font-normal">
            Ver meu GitHub
          </a>
          <a href="#Projects" className="bg-fundo-500 text-gray-400 py-4 px-10 rounded-md font-normal">
            Ver meus projetos
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
