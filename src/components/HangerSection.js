import React from 'react';
import Image from '../assets/image_.png'
import Location from '../assets/location.png'
import Map from '../assets/map.png'

const HangarSection = () => {
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
      image: Image,
    },
    {
      id: 3,
      name: "Skyport Executive Hangar",
      keyFeatures: "10,000 sq. ft., accommodates large jets, climate-controlled, 24/7 security.",
      price: "$1.5 Million.",
      availability: "Available for immediate purchase.",
      location: "Atlanta Aviation Hub.",
      image: Image,
    },
    {
      id: 4,
      name: "Skyport Executive Hangar",
      keyFeatures: "10,000 sq. ft., accommodates large jets, climate-controlled, 24/7 security.",
      price: "$1.5 Million.",
      availability: "Available for immediate purchase.",
      location: "Atlanta Aviation Hub.",
      image: Image,
    },
  ];

  return (
    <section className="py-12">
    <div className="flex flex-col md:flex-row ">
      <div className="flex flex-wrap ml-4 justify-between lg:h-[400px] w-full md:w-2/3">
        {hangars.map((hangar) => (
         <div key={hangar.id} className="w-full lg:w-[250]  md:w-[48%] border-2 rounded-2xl  mx-auto mt-4">
         <div>
           <img className="w-full lg:w-[550px] h-[90%]  rounded-2xl" src={hangar.image} alt={hangar.name} />
         </div>
         <div className="p-4">
           <p className="font-bold text-lg text-[#282828]">{hangar.name}</p>
           <p className="font-bold text-[#00AEEF] text-sm pt-4">
             Key Features:
             <span className="text-[#9D9D9D] text-sm ml-1">{hangar.keyFeatures}</span>
           </p>
           <p className="font-bold text-[#00AEEF] text-sm pt-2">
             Price:
             <span className="text-[#9D9D9D] text-sm ml-1">{hangar.price}</span>
           </p>
           <p className="font-bold text-[#00AEEF] text-sm pt-2">
             Availability:
             <span className="text-[#9D9D9D] text-sm ml-1">{hangar.availability}</span>
           </p>
           <div className="flex items-center pt-2">
             <img className="mr-1" src={Location} width="12px" alt="Location Icon" />
             <span className="text-[#9D9D9D] text-sm font-medium">{hangar.location}</span>
           </div>
           <button className="border-[#00AEEF] rounded-2xl border-2 flex mt-4 items-center justify-center w-[100px] h-[34px] mx-auto">
             <span className="text-center text-[#00AEEF] text-sm">View Details</span>
           </button>
         </div>
       </div>
       
        ))}
      </div>
      <div className="w-full  lg:w-[700px] lg:h-[1000px] ml-3 md:w-[350px] pt-6 pr-12">
        <img className="w-full sm:w-full pl-8 lg:pl-0 md:pl-0 md:w-full h-full  rounded-2xl" src={Map} alt="Map" />
      </div>
    </div>
  </section>
  );
};

export default HangarSection;
