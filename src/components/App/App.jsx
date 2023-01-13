import { Description } from "../Description/Description";
import { Header } from "../Header/Header";
import { Hero } from "../Hero/Hero";
import { ChapterMenu } from "../ChapterMenu/ChapterMenu";
import Chapter from "../Chapter/Chapter";
import { useState } from "react";
import { chapters } from "../../utils/chapters";

function App() {
  const [currentChapter, setCurrentChapter] = useState("Вступ");
  const imgArr = chapters[currentChapter];

  function changeChapter(e) {
    setCurrentChapter(e.target.textContent);
  }

  return (
    <>
      <Header />
      <Hero />
      <Description />
      <ChapterMenu changeChapter={(e) => changeChapter(e)} />
      <Chapter arr={imgArr} />
    </>
  );
}

export default App;
