import Image, { StaticImageData } from "next/image";
import React from "react";

interface Props {
  name: string;
  major: string;
  year: string;
  image: StaticImageData;
}

export default function Board({ name, major, year, image }: Props) {
  return (
    <div className="text-center">
      <div className="bg-gray-200 w-full aspect-square mb-2">
        <Image
          src={image}
          alt={`${name}'s photo`}
          width={200}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="font-playfair text-2xl font-light mt-4">{name}</h3>
      <p className="font-roboto-flex text-lg font-light mt-2">
        {major} | '{year}
      </p>
    </div>
  );
}
