import React, { useState } from 'react';
import EmblaImage from './components/emblaimagecl/EmblaImage';
import EmblaCarousel from './components/EmblaCrousel';
import Partner from './assets/partner_img.png';

const slides = [
  { heading: "Slide 1", text: "Hello this is slide 1" },
  { heading: "Slide 2", text: "hello this is slide 2" },
  { heading: "Slide 3", text: "Hello this is slide 3" },
  { heading: "Slide 4", text: "hello this is slide 4" },
  { heading: "Slide 5", text: "hellow this is slide 5" },
];

const images = [
  { image: Partner },
  { image: Partner },
  { image: Partner },
  { image: Partner },
  { image: Partner },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handleSlideChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <EmblaImage images={images} currentIndex={currentIndex} options={{ loop: false }} />
      <EmblaCarousel slides={slides} options={{ loop: false }} onSlideChange={handleSlideChange} />
    </div>
  );
}

export default App;
