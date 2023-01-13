import { HeroGalleryImg } from "./HeroGallery.styled";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { imgArray } from "../../utils/imgArray";
import { nanoid } from "nanoid";

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
      preventMovementUntilSwipeScrollTolerance={true}
      swipeScrollTolerance={20}
    >
      {imgArray.map((el) => (
        <HeroGalleryImg src={el} alt="фото" key={nanoid()} />
      ))}
    </Carousel>
  );
}
