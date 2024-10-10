import React,{useState} from "react";
import Slider from "react-slick";
import Logo from "../assets/image_1.png";
import MapImage from "../assets/map_img.png";

const slides3 = [
    { image: '/images/partner_img.png', heading: 'Heading 1', text: 'Description 1' },
    { image: 'path/to/image2.jpg', heading: 'Heading 2', text: 'Description 2' },
    { image: 'path/to/image3.jpg', heading: 'Heading 3', text: 'Description 3' },
    { image: 'path/to/image3.jpg', heading: 'Heading 3', text: 'Description 3' },
    { image: 'path/to/image3.jpg', heading: 'Heading 3', text: 'Description 3' },
    // Add more slides as needed
  ];
  

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



export default function SimpleSlider() {

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const goToNext = () => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };
  
    const goToPrev = () => {
      setCurrentSlideIndex(
        (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
      );
    };
  
  var settings = {
    dots: false ,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <div className="">

    <Slider {...settings} arrows={true}>
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
</Slider>

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

    <Slider
      {...settings}
      arrows={true}
      afterChange={index => setCurrentSlideIndex(index)}
    >
      {slides3.map((slide, index) => (
        <div className="flex justify-center" key={index}>
          <img src={MapImage} width={1000} height={600} alt={slide.heading} />
        </div>
      ))}
    </Slider>

</div>
  );
}
