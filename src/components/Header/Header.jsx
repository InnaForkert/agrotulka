import headerImg from "../../img/header.jpg";
import { HeaderHeading, HeaderImg, HeaderContainer } from "./Header.styled";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderImg src={headerImg} alt="хедер" />
      <HeaderHeading>Небесне Благословення українською</HeaderHeading>
    </HeaderContainer>
  );
}
