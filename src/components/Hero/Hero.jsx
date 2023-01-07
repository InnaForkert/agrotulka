import {
  HeroButton,
  HeroContainer,
  HeroHeading,
  HeroSubheading,
  HeroText,
} from "./Hero.styled";

import { HeroGallery } from "../HeroGallery/HeroGallery";

export function Hero() {
  return (
    <HeroContainer>
      <HeroGallery />
      <HeroText>
        Переклад українською: Агро-тюлька Телеграм: Небесне Благословення
        українською
      </HeroText>
      <HeroHeading>Небесне Благословення</HeroHeading>
      <HeroButton>Читати маньхуа</HeroButton>
      <HeroSubheading>
        За однойменною новелою Мосян Тунсю Ілюстратор: StaRember
      </HeroSubheading>
    </HeroContainer>
  );
}
