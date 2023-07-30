// components/CustomBox.js
import React from "react";
import Image from "next/image"; 

const CustomBox = ({ image, name, boxStyle = "", imageStyle = "", nameStyle = "" }) => {
  return (
    <div className={`rounded-lg shadow-lg bg-fundo-700 border border-stone-600 p-4 ${boxStyle} flex flex-col items-center`}>
      <Image
        src={image as any}
        alt={name}
        width={40}
        height={40}
        className={`rounded-full ${imageStyle}`}
      />

      <span className={`text-white mt-4 text-lg ${nameStyle}`}>{name}</span>
    </div>
  );
};

export default CustomBox;
