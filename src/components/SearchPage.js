import React from 'react';
import Image from '../assets/image_.png';
import Location from '../assets/location.png';
import Image2 from '../assets/image_1.png';
import Image3 from '../assets/image_2.png';
import Image4 from '../assets/image_3.png';
import Image5 from '../assets/image_4.png';
import Image6 from '../assets/image_5.png';
import Image7 from '../assets/image_6.png';
import Image8 from '../assets/image_7.png';
const SearchPage = () => {
  const hangars = [
    {
      id: 1,
      name: "Skyport Executive Hangar",
      keyFeatures: "10,000 sq. ft., accommodates large jets, climate-controlled, 24/7 security.",
      price: "$1.5 Million.",
      availability: "Available for immediate purchase.",
      location: "Atlanta Aviation Hub.",
      image: Image,
    },
    {
      id: 2,
      name: "Skyport Executive Hangar",
      keyFeatures: "10,000 sq. ft., accommodates large jets, climate-controlled, 24/7 security.",
      price: "$1.5 Million.",
      availability: "Available for immediate purchase.",
      location: "Atlanta Aviation Hub.",
      image: Image2,
    },
    {
      id: 3,
      name: "Skyport Executive Hangar",
      keyFeatures: "10,000 sq. ft., accommodates large jets, climate-controlled, 24/7 security.",
      price: "$1.5 Million.",
      availability: "Available for immediate purchase.",
      location: "Atlanta Aviation Hub.",
      image: Image3,
    },
    {
      id: 4,
      name: "Skyport Executive Hangar",
      keyFeatures: "10,000 sq. ft., accommodates large jets, climate-controlled, 24/7 security.",
      price: "$1.5 Million.",
      availability: "Available for immediate purchase.",
      location: "Atlanta Aviation Hub.",
      image: Image4,
    },
    {
      id: 5,
      name: "Skyport Executive Hangar",
      keyFeatures: "10,000 sq. ft., accommodates large jets, climate-controlled, 24/7 security.",
      price: "$1.5 Million.",
      availability: "Available for immediate purchase.",
      location: "Atlanta Aviation Hub.",
      image: Image5,
    },
    {
      id: 6,
      name: "Skyport Executive Hangar",
      keyFeatures: "10,000 sq. ft., accommodates large jets, climate-controlled, 24/7 security.",
      price: "$1.5 Million.",
      availability: "Available for immediate purchase.",
      location: "Atlanta Aviation Hub.",
      image: Image6,
    },
    {
      id: 7,
      name: "Skyport Executive Hangar",
      keyFeatures: "10,000 sq. ft., accommodates large jets, climate-controlled, 24/7 security.",
      price: "$1.5 Million.",
      availability: "Available for immediate purchase.",
      location: "Atlanta Aviation Hub.",
      image: Image2,
    },
    {
      id: 8,
      name: "Skyport Executive Hangar",
      keyFeatures: "10,000 sq. ft., accommodates large jets, climate-controlled, 24/7 security.",
      price: "$1.5 Million.",
      availability: "Available for immediate purchase.",
      location: "Atlanta Aviation Hub.",
      image: Image7,
    },
    {
        id: 9,
        name: "Skyport Executive Hangar",
        keyFeatures: "10,000 sq. ft., accommodates large jets, climate-controlled, 24/7 security.",
        price: "$1.5 Million.",
        availability: "Available for immediate purchase.",
        location: "Atlanta Aviation Hub.",
        image: Image3,
      },
      {
        id: 10,
        name: "Skyport Executive Hangar",
        keyFeatures: "10,000 sq. ft., accommodates large jets, climate-controlled, 24/7 security.",
        price: "$1.5 Million.",
        availability: "Available for immediate purchase.",
        location: "Atlanta Aviation Hub.",
        image: Image8,
      },
      {
        id: 11,
        name: "Skyport Executive Hangar",
        keyFeatures: "10,000 sq. ft., accommodates large jets, climate-controlled, 24/7 security.",
        price: "$1.5 Million.",
        availability: "Available for immediate purchase.",
        location: "Atlanta Aviation Hub.",
        image: Image5,
      },
      {
        id: 12,
        name: "Skyport Executive Hangar",
        keyFeatures: "10,000 sq. ft., accommodates large jets, climate-controlled, 24/7 security.",
        price: "$1.5 Million.",
        availability: "Available for immediate purchase.",
        location: "Atlanta Aviation Hub.",
        image: Image5,
      },
     
  ];

  return (
    <section className="py-12 justify-center">
  <div className="flex flex-wrap justify-between w-full pl-12 pr-12">
    {hangars.map((hangar) => (
      <div key={hangar.id} className="w-full sm:w-[48%] md:w-[48%] lg:w-[24%] lg:h-[460px] md:h-[450px] sm:h-[450px] border-2 rounded-2xl h-[490px] mx-auto mt-4">
        <div>
          <img className="w-full h-[200px] rounded-2xl" src={hangar.image} alt={hangar.name} />
        </div>
        <div className="p-4">
          <p className="font-bold text-xl">{hangar.name}</p>
          <p className="font-bold text-[#00AEEF] text-xs pt-4">
            Key Features:
            <span className="text-[#9D9D9D] text-xs ml-1">{hangar.keyFeatures}</span>
          </p>
          <p className="font-bold text-[#00AEEF] text-xs pt-2">
            Price:
            <span className="text-[#9D9D9D] text-xs ml-1">{hangar.price}</span>
          </p>
          <p className="font-bold text-[#00AEEF] text-xs pt-2">
            Availability:
            <span className="text-[#9D9D9D] text-xs ml-1">{hangar.availability}</span>
          </p>
          <div className="flex items-center pt-2">
            <img className="mr-1" src={Location} width="12px" alt="Location Icon" />
            <span className="text-[#9D9D9D] text-xs">{hangar.location}</span>
          </div>
          <button className="border-[#00AEEF] rounded-2xl border-2 flex mt-4 items-center justify-center w-[100px] h-[34px] mx-auto">
            <span className="text-center text-[#00AEEF] text-xs">View Details</span>
          </button>
        </div>
      </div>
    ))}
  </div>
</section>

  );
};

export default SearchPage;
