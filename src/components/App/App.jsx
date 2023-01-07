import { IconContext } from "react-icons";
import { Description } from "../Description/Description";
import { Header } from "../Header/Header";
import { Hero } from "../Hero/Hero";
import { ChapterMenu } from "../ChapterMenu/ChapterMenu";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Description />
      <ChapterMenu />
    </>
  );
}

export default App;
