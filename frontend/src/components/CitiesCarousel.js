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
  name: 'Osaka',
},
{
  src: './assets/Cities/CapeTown.jpg',
  id: 'southAfrica',
  name: 'Cape Town'
},
{
  src: './assets/Cities/DarwinAustralia.jpg',
  id: 'australia',
  name: 'Darwin'
},
{
  src: './assets/Cities/HuayinWeinánChina.jpg',
  id: 'china',
  name: 'Huayin',
},
],
 [ {
  src: './assets/Cities/AucklandNewZeland.jpg',
  id: 'newzeland',
  name: 'Auckland',
},
{
  src: './assets/Cities/MunichGermany.jpg',
  id: 'germany',
  name: 'Munich'
},
{
  src: './assets/Cities/PhilippinesCoron.jpg',
  id: 'philippines',
  name: 'Coron'
},
{
  src: './assets/Cities/ShintoJapan.jpg',
  id: 'shinto',
  name: 'Shinto',
},],
 [ {
  src: './assets/Cities/SukhothaiThailand.jpg',
  id: 'thailand',
  name: 'Sukhothain',
},
{
  src: './assets/Cities/TulumMexico.jpg',
  id: 'mexico',
  name: 'Tulum'
},
{
  src: './assets/Cities/VolcanThrihnukagigur.jpg',
  id: 'island',
  name: 'Hafnarfjordur'
},
{
  src: './assets/Cities/ChaltenArgentinajpg.jpg',
  id: 'argentina',
  name: 'El Chalten',
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
        
          <div className= "row boxPhoto">
          {item.map((data)=>
          <div key= {data.id} className="col-sm-12 col-md-4 cityPhoto" style={{backgroundImage: `url('${data.src}')`}}><p className="photoTitle">{data.name}</p></div>
          )}
          </div>
        </CarouselItem>
      
    );
  });

  return (
    <div className="container-fluid">
    <div className="carouselTitles"> 
    <h2>POPULAR MYTINERARIES</h2>
    {/* <h3><span>Popular</span> Mytineraries</h3> */}
    <div className="textDeco"></div>
    </div>
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
    </div>
  );
}

export default CitiesCarousel;