import heroImg from "../../img/hero.jpg";
import heroImg1 from "../../img/hero1.jpg";
import heroImg2 from "../../img/hero2.jpg";
import heroImg3 from "../../img/hero3.jpg";

import { HeroGalleryContainer, HeroGalleryImg } from "./HeroGallery.styled";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const imgArray = [heroImg, heroImg1, heroImg2, heroImg3];

export function HeroGallery() {
  return (
    <Carousel
      autoPlay={true}
      interval={3000}
      emulateTouch={true}
      infiniteLoop={true}
      showIndicators={false}
      showThumbs={false}
      showArrows={false}
      showStatus={false}
    >
      {imgArray.map((el) => (
        <HeroGalleryImg src={el} alt="фото" />
      ))}
    </Carousel>
  );
}
