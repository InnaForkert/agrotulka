import { Description } from "../Description/Description";
import { Header } from "../Header/Header";
import { Hero } from "../Hero/Hero";
import { ChapterMenu } from "../ChapterMenu/ChapterMenu";
import Chapter from "../Chapter/Chapter";
import { useRef, useState } from "react";
import { chapters } from "../../utils/chapters";

function App() {
  const [currentChapter, setCurrentChapter] = useState("Вступ");
  const imgArr = chapters[currentChapter];
  const chapRef = useRef(null);

  function scrollToStart() {
    chapRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function changeChapter(e) {
    setCurrentChapter(e.target.textContent);
    scrollToStart();
  }

  return (
    <>
      <Header />
      <Hero click={scrollToStart} />
      <Description />
      <ChapterMenu changeChapter={(e) => changeChapter(e)} />
      <span ref={chapRef}></span>
      <Chapter arr={imgArr} />
    </>
  );
}

export default App;
