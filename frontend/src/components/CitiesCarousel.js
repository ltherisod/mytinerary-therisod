import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';

const items = [
[ {
  src: './assets/Cities/OsakaJapan.jpg',
  altText: 'Slide 1',
  caption: 'Slide 1',
},
{
  src: './assets/Cities/CapeTown.jpg',
  altText: 'Slide 2',
  caption: 'Slide 2'
},
{
  src: './assets/Cities/DarwinAustralia.jpg',
  altText: 'Slide 3',
  caption: 'Slide 3'
},
{
  src: './assets/Cities/HuayinWeinánChina.jpg',
  altText: 'Slide 4',
  caption: 'Slide 4',
},
],
 [ {
  src: './assets/Cities/AucklandNewZeland.jpg',
  altText: 'Slide 1',
  caption: 'Slide 1',
},
{
  src: './assets/Cities/MunichGermany.jpg',
  altText: 'Slide 2',
  caption: 'Slide 2'
},
{
  src: './assets/Cities/PhilippinesCoron.jpg',
  altText: 'Slide 3',
  caption: 'Slide 3'
},
{
  src: './assets/Cities/ShintoJapan.jpg',
  altText: 'Slide 4',
  caption: 'Slide 4',
},],
 [ {
  src: './assets/Cities/SukhothaiThailand.jpg',
  altText: 'Slide 1',
  caption: 'Slide 1',
},
{
  src: './assets/Cities/TulumMexico.jpg',
  altText: 'Slide 2',
  caption: 'Slide 2'
},
{
  src: './assets/Cities/VolcanThrihnukagigur.jpg',
  altText: 'Slide 3',
  caption: 'Slide 3'
},
{
  src: './assets/Cities/ChaltenArgentinajpg.jpg',
  altText: 'Slide 4',
  caption: 'Slide 4',
},]
];

const CitiesCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <div className= "cajafotito">
        {item.map((data)=>
        <div className="fotito" style={{backgroundImage: `url('${data.src}')`}}></div>
        // <img src={data.src}/>
        )}
        </div>
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default CitiesCarousel;