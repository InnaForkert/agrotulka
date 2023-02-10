import { Description } from "../Description/Description";
import { Header } from "../Header/Header";
import { Hero } from "../Hero/Hero";
import { ChapterMenu } from "../ChapterMenu/ChapterMenu";
import Chapter from "../Chapter/Chapter";
import { useRef, useState } from "react";
import { chapters } from "../../utils/chapters";
import NextChapter from "../NextChapter/NextChapter";

function App() {
  const [currentChapter, setCurrentChapter] = useState(0);
  const imgArr = chapters[currentChapter].imgs;
  const chapRef = useRef(null);

  function scrollToStart() {
    chapRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function changeChapter(e) {
    setCurrentChapter(e.target.dataset.id);
    scrollToStart();
  }

  function nextChapter() {
    setCurrentChapter((prev) => prev + 1);
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
      <NextChapter handleClick={nextChapter} />
    </>
  );
}

export default App;
