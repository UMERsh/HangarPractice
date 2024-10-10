import React, { useState } from "react";
import Image from "next/image";
import ImageCarousel from './ImageCarousel'
import Slider from "react-slick";
import Logo from "../assets/image_1.png";
import MapImage from "../assets/map_img.png";

import { text } from "micro";
const TextCarousel = () => {
  const slides = [
    {
      heading: "Smoke House Pilot",
      text: "Lorem ipsum dolor sit amet consectetur. Nunc et amet malesuada euismod libero tellus. Et hendrerit ac pretium arcu ut. Sagittis malesuada laoreet vel adipiscing habitasse in interdum diam vitae. Enim ut ullamcorper vulputate eu velit mattis. Pellentesque dictumst eget magnis est aliquam elementum. Mattis justo elementum feugiat varius. Lacus eu commodo sem ipsum aenean nibh. Eget arcu vitae sed lacus vitae adipiscing sem nec.",
    },
    {
      heading: "Explore Various",
      text: "Hangar Options Available",
    },
    {
      heading: "Discover Affordable",
      text: "Hangar Rentals",
    },
    {
      heading: "Check Out Hangars",
      text: "for Sale Today",
    },
    {
      heading: "Your Ideal Hangar",
      text: "Awaits",
    },
  ];

  const slides1 = [
    {
      heading: "Smoke House Pilot",
      text: "Lorem ipsum dolor sit amet consectetur. Nunc et amet malesuada euismod libero tellus. Et hendrerit ac pretium arcu ut. Sagittis malesuada laoreet vel adipiscing habitasse in interdum diam vitae. Enim ut ullamcorper vulputate eu velit mattis. Pellentesque dictumst eget magnis est aliquam elementum. Mattis justo elementum feugiat varius. Lacus eu commodo sem ipsum aenean nibh. Eget arcu vitae sed lacus vitae adipiscing sem nec.",
    },
    {
      heading: "Explore Various",
      text: "Hangar Options Available",
    },
    {
      heading: "Discover Affordable",
      text: "Hangar Rentals",
    },
    {
      heading: "Check Out Hangars",
      text: "for Sale Today",
    },
    {
      heading: "Your Ideal Hangar",
      text: "Awaits",
    },
  ];

  var settings = {
    dots: false ,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
  };

  const images = [
    {
      src: "/images/partner_img.png",
      text: "Helo",
      width: 100,
      height: 100,
      borderClass: "border-[#F0F0F0]",
      additionalClasses: "pt-3 md:mt-2 md:w-[100px] md:h-[55px] w-[60px] h-[32px] lg:w-[120px]",
    },
    {
      src: "/images/partner_img.png",
      width: 160,
      height: 76,
      borderClass: "border-[#F0F0F0]",
      additionalClasses: "w-[190px] pt-3",
    },
    {
      src: "/images/partner_img.png",
      width: 180,
      height: 98,
      borderClass: "border-[#00AEEF]",
      additionalClasses: "pt-7",
    },
    {
      src: "/images/partner_img.png",
      width: 160,
      height: 76,
      borderClass: "border-[#F0F0F0]",
      additionalClasses: "w-[190px] pt-5",
    },
    {
      src: "/images/partner_img.png",
      width: 100,
      height: 100,
      borderClass: "border-[#F0F0F0]",
      additionalClasses: "pt-3 md:mt-2 md:w-[100px] md:h-[55px] w-[120px]",
    },
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const goToNext = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrev = () => {
    setCurrentSlideIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="flex flex-col items-center mt-28 w-full relative px-4">




 

         <ImageCarousel />


      
      <div className="flex justify-between items-center w-full max-w-full">
        

      <Slider {...settings} arrows={true}>
  <div className="flex justify-center">
    <img src={MapImage} width={1000} height={600} alt="Description for image 1" />
  </div>
  <div className="flex justify-center">
    <img src={MapImage} width={1000} height={600} alt="Description for image 2" />
  </div>
  <div className="flex justify-center">
    <img src={MapImage} width={1000} height={600} alt="Description for image 3" />
  </div>
  <div className="flex justify-center">
    <img src={MapImage} width={1000} height={600} alt="Description for image 4" />
  </div>
  <div className="flex justify-center">
    <img src={MapImage} width={1000} height={600} alt="Description for image 5" />
    <p className="text-center">Description for image 5</p>
  </div>
  <div className="flex justify-center">
    <h3>6</h3>
  </div>
</Slider>

       
      </div>

   {/* <div className="flex mx-auto mt-8 gap-1 md:gap-6 lg:gap-8 relative md:left-0 -left-10 lg:pt-4">
    {images.map((image,index)=>{
       <div
        key={index}
        className={`border md:w-[100px] md:h-[100px] w-[60px] rounded-full ${image.borderClass}` }
       >
        <Image 
        className={image.additionalClasses}
        src={image.src}
        width={image.width}
        height={image.height}
        alt={`Partner Image ${index + 1}`}
        />

       </div>
    })}
     
   </div> */}

{/* <div className="flex mx-auto mt-8 gap-1 md:gap-6 lg:gap-8 relative md:left-0 -left-10 lg:pt-4">
      {images.map((image, index) => (
        <div
          key={index}
          className={border md:w-[100px] md:h-[100px] w-[60px] h-[60px] rounded-full ${image.borderClass}}
        >
          <Image
            className={image.additionalClasses}
            src={image.src}
            width={image.width}
            height={image.height}
            alt={Partner Image ${index + 1}}
          />
        </div>
      ))}
    </div> */}

      <div className="flex justify-between items-center w-full max-w-full">
        <button
          onClick={goToPrev}
          className="bg-[#00AEEF] w-10 h-10 p-2 rounded-full text-white"
        >
          &lt;
        </button>

        <div className="flex flex-col items-center flex-grow text-center mx-4">
          <h2 className="font-bold text-lg md:text-2xl text-[#282828]">
            {slides[currentSlideIndex].heading}
          </h2>
          <p className="font-normal text-sm md:text-base text-[#686868] px-2">
            {slides[currentSlideIndex].text}
          </p>
        </div>

        <button
          onClick={goToNext}
          className="bg-[#00AEEF] w-10 h-10 p-2 rounded-full text-white"
        >
          &gt;
        </button>
      </div>

      {/* Dots positioned below the carousel text */}
      {/* <div className="flex mt-4 absolute top-96">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full mx-1 ${
              currentSlideIndex === index ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div> */}
    </div>
  );
};

export default TextCarousel;
