import bannerImg from "../assets/banner-img.png"
import Image from 'next/image';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

const Banner = () => {
  return (
    <div className="flex items-center justify-start flex-col h-screen">
    {/*Profile*/}
    <div className="flex items-center justify-center mt-24">
      <div className="rounded-full border-solid border-4 border-purple-600">
        <Image src={bannerImg} alt="Minha imagem" width={150} height={150} className="rounded-full border-solid border-6 border-purple-600" />
      </div>
      <div className="ml-8 flex flex-col items-start space-y-4 pr-20">
        <h1 className="text-4xl font-bold text-white">Riany Mello</h1>
        <p className="text-lg text-gray-400 mb-4">Front-end developer</p>
        <div className="flex">
          <AiFillGithub className="text-gray-400 text-2xl" />
          <div className="w-4"></div>
          <AiFillLinkedin className="text-gray-400 text-2xl" />
        </div>
      </div>
    </div>

    {/*Profile dados*/}
      <div className="flex justify-between gap-20 mt-[26px]">
        <p className="text-base text-gray-400 text-center">
          <span className="block">4+</span>
          <span className="block">years of</span>
          <span className="block">studies</span>
        </p>
        <p className="text-base text-gray-400 text-center">
          <span className="block">150+</span>
          <span className="block">commits</span>
          <span className="block">in the last year</span>
        </p>
        <p className="text-base text-gray-400 text-center">
          <span className="block">20+</span>
          <span className="block">Built</span>
          <span className="block">projects</span>
        </p>
  </div>

      {/*Profile buttons*/}
      <div className="flex flex-row mt-[38px]">
        <a href="#www.google.com" className="bg-purple-500 text-gray-900 py-4 px-10 rounded-md ml-4">
          See my github
        </a>
        <a href="#contact" className="bg-gray-500 text-gray-400 py-4 px-10 rounded-md ml-4">
          See my projects
        </a>
      </div>


      </div>
  );
  };

export default Banner;
