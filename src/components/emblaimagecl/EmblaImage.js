import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import './embla.css';

const EmblaImage = ({ images, currentIndex, options }) => {
  const [emblaRef] = useEmblaCarousel(options);

  if (!images || images.length === 0) {
    return <div>No images to display</div>; // Handle empty images gracefully
  }

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {images.map((item, index) => (
            <div className="embla__slide3" key={index}>
            
              <img
                className={`embla__img1 ${index  === currentIndex  ? 'highlight' : ''}`}
                src={item.image}
                alt={`Slide ${index}`}
              />
               <img
                className={`embla__img2 ${index === currentIndex - 1 ? 'highlight' : ''}`}
                src={item.image}
                alt={`Slide ${index}`}
              />
               <img
                className={`embla__img3 ${index === currentIndex -2 ? 'highlight' : ''}`}
                src={item.image}
                alt={`Slide ${index}`}
              />
               <img
                className={`embla__img2 ${index === currentIndex - 3? 'highlight' : ''}`}
                src={item.image}
                alt={`Slide ${index}`}
              />
               <img
                className={`embla__img5 ${index === currentIndex -4 ? 'highlight' : ''}`}
                src={item.image}
                alt={`Slide ${index}`}
              />
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaImage;
