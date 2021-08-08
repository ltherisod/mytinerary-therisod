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
  id: 'japan',
  name: 'Osaka Japan',
},
{
  src: './assets/Cities/CapeTown.jpg',
  id: 'southAfrica',
  name: 'Cape Town South Africa'
},
{
  src: './assets/Cities/DarwinAustralia.jpg',
  id: 'australia',
  name: 'Darwin Australia'
},
{
  src: './assets/Cities/HuayinWeinánChina.jpg',
  id: 'china',
  name: 'Huayin China',
},
],
 [ {
  src: './assets/Cities/AucklandNewZeland.jpg',
  id: 'newzeland',
  name: 'Auckland New Zeland',
},
{
  src: './assets/Cities/MunichGermany.jpg',
  id: 'germany',
  name: 'Munich Germany'
},
{
  src: './assets/Cities/PhilippinesCoron.jpg',
  id: 'philippines',
  name: 'Coron Philippines'
},
{
  src: './assets/Cities/ShintoJapan.jpg',
  id: 'shinto',
  name: 'Shinto Japan',
},],
 [ {
  src: './assets/Cities/SukhothaiThailand.jpg',
  id: 'thailand',
  name: 'Sukhothain Thailand',
},
{
  src: './assets/Cities/TulumMexico.jpg',
  id: 'mexico',
  name: 'Tulum Mexico'
},
{
  src: './assets/Cities/VolcanThrihnukagigur.jpg',
  id: 'island',
  name: 'Hafnarfjordur Island'
},
{
  src: './assets/Cities/ChaltenArgentinajpg.jpg',
  id: 'argentina',
  name: 'El Chalten Argentina',
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

  const slides = items.map((item, index) => {
    return (
          <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={index}
        >
        
          <div className= "boxPhoto">
          {item.map((data)=>
          <div key= {data.id} className="cityPhoto" style={{backgroundImage: `url('${data.src}')`}}><p className="photoTitle">{data.name}</p></div>
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
      <CarouselIndicators items={slides} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default CitiesCarousel;