"use client";

import React from "react";
import { Image } from "@nextui-org/image";
import { Share, Heart } from "lucide-react";

interface ImageGalleryProps {
  data: any;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ data }) => {
  
  const images = [
   `http://localhost:3000${data.images[0]}`,
    `http://localhost:3000${data.rooms[0].images[3]}`,
    `http://localhost:3000${data.rooms[0].images[1]}`,
    `http://localhost:3000${data.rooms[0].images[2]}`,
    `http://localhost:3000${data.rooms[0].images[3]}`,
    `http://localhost:3000${data.rooms[0].images[4]}`,
    `http://localhost:3000${data.rooms[0].images[5]}`,
    `http://localhost:3000${data.rooms[0].images[6]}`,

  ];
 //console.log(data.images[0]);
 console.log(data.rooms[0].images[0])


  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        {/* Back Link */}
        <a href="#" className="text-blue-600 hover:underline">← See all properties</a>

        {/* Share and Love Buttons */}
        <div className="flex gap-4">
          <button className="flex items-center gap-2 p-2 border rounded hover:bg-gray-100">
            <Share size={18} /> Share
          </button>
          <button className="flex items-center gap-2 p-2 border rounded hover:bg-gray-100">
            <Heart size={18} /> Love
          </button>
        </div>
      </div>

      <div className="flex gap-1">
        <div className="flex-1 flex justify-center items-center h-full">
          <Image src={images[0]} alt="Main Image" width={600} height={400} />
        </div>

        <div className="flex-1 grid grid-rows-3 grid-cols-2 gap-1">
          {images.slice(0).map((src, index) => (
            <div key={index} className="flex justify-center items-center relative">
              <Image src={src}  width={360} height={130} className="object-cover" />
              {index === 5 && (  // Last image of the right column
                <div className="view-more absolute bottom-2 right-2 z-10 cursor-pointer bg-black bg-opacity-50 p-2 rounded-lg text-white" >
                  <strong>30+</strong>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>

  );
};

export default ImageGallery;
