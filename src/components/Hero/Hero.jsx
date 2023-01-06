import {
  HeroContainer,
  HeroGallery,
  HeroHeading,
  HeroSubheading,
  HeroText,
} from "./Hero.styled";

import heroImg from "../../img/hero.jpg";

export function Hero() {
  return (
    <HeroContainer>
      <HeroGallery src={heroImg} alt="hero" />
      <HeroText>
        Переклад українською: Агро-тюлька Телеграм: Небесне Благословення
        українською
      </HeroText>
      <HeroHeading>Небесне Благословення</HeroHeading>
      <HeroSubheading>
        Зо однойменною новелою Мосян Тунсю Ілюстратор: StaRember
      </HeroSubheading>
    </HeroContainer>
  );
}
