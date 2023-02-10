import {
  HeroButton,
  HeroContainer,
  HeroHeading,
  HeroSubheading,
  HeroText,
} from "./Hero.styled";

import { HeroGallery } from "../HeroGallery/HeroGallery";

export function Hero({ click }) {
  return (
    <HeroContainer>
      <HeroGallery />
      <HeroText>
        Переклад українською: Агро-тюлька
        <br />
        Телеграм: Небесне Благословення українською
      </HeroText>
      <HeroHeading>Небесне Благословення</HeroHeading>
      <HeroButton onClick={click}>Читати маньхуа</HeroButton>
      <HeroSubheading>
        За однойменною новелою Мосян Тунсю <br />
        Ілюстратор: StaRember
      </HeroSubheading>
    </HeroContainer>
  );
}
