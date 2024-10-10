import React, { useState } from 'react';

const TextCarousel = () => {
  const slides = [
    {
      heading: "Find Hangar Spaces",
      text: "That Suit Your Aircraft"
    },
    {
      heading: "Explore Various",
      text: "Hangar Options Available"
    },
    {
      heading: "Discover Affordable",
      text: "Hangar Rentals"
    },
    {
      heading: "Check Out Hangars",
      text: "for Sale Today"
    },
    {
      heading: "Your Ideal Hangar",
      text: "Awaits"
    }
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const goToNext = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrev = () => {
    setCurrentSlideIndex((prevIndex) => 
      (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="flex flex-col items-center h-screen w-full relative">
      <div className="flex justify-between items-center w-full max-w-full px-4 absolute top-1/2 transform -translate-y-1/2">
        <button onClick={goToPrev} className="bg-gray-300 p-2 rounded-full">
          &lt;
        </button>

        <div className="flex flex-col items-center flex-grow text-center">
          <h2 className="font-bold text-2xl text-[#282828]">{slides[currentSlideIndex].heading}</h2>
          <p className="font-bold text-4xl text-[#282828]">{slides[currentSlideIndex].text}</p>
        </div>

        <button onClick={goToNext} className="bg-gray-300 p-2 rounded-full">
          &gt;
        </button>
      </div>

      {/* Dots positioned below the carousel text */}
      {/* <div className="flex mt-4">
        {slides.map((_, index) => (
          <span 
            key={index} 
            className={`h-2 w-2 rounded-full mx-1 ${currentSlideIndex === index ? 'bg-blue-500' : 'bg-gray-300'}`} 
          />
        ))}
      </div> */}
    </div>
  );
};

export default TextCarousel;
