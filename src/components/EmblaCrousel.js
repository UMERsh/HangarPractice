import React from 'react';
import { DotButton, useDotButton } from './EmblaCrouselDotButtons';
import { PrevButton, NextButton, usePrevNextButtons } from './EmblaCrouselArrowButtons';
import useEmblaCarousel from 'embla-carousel-react';
import './embla.css';

const EmblaCarousel = ({slides, onSlideChange, options}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);


  
  const handleSelectIndex = (index) => {
    onSlideChange(index);
  };


  React.useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
        handleSelectIndex(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((item, index) => (
            
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">{item.heading}</div>
              <div className="embla__text">{item.text}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
