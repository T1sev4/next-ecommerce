'use client';
import Image from 'next/image';
import React, { useState } from 'react';

const images = [
  {
    id: 1,
    url: 'https://images.pexels.com/photos/28118819/pexels-photo-28118819.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
  },
  {
    id: 2,
    url: 'https://images.pexels.com/photos/27893233/pexels-photo-27893233.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
  },
  {
    id: 3,
    url: 'https://images.pexels.com/photos/22944804/pexels-photo-22944804.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
  },
  {
    id: 4,
    url: 'https://images.pexels.com/photos/14661896/pexels-photo-14661896.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
  },
];

const ProductImages = () => {
  const [index, setIndex] = useState<number>(0);
  return (
    <div>
      <div className="h-[500px] relative">
        <Image
          src={images[index].url}
          alt=""
          className="object-cover rounded-md"
          fill
          sizes="50vw"
        />
      </div>
      <div className="flex justify-between gap-4 mt-8">
        {images.map((img, i) => (
          <div
            className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
            key={img.id}
            onClick={() => setIndex(i)}
          >
            <Image
              src={img.url}
              alt=""
              className="object-cover rounded-md"
              fill
              sizes="30vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
