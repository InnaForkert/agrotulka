import { nanoid } from "nanoid";
import { ChapterContainer, ChapterImg } from "./Chapter.styled";

function Chapter({ arr }) {
  return (
    <>
      {arr.map((el) => (
        <ChapterContainer key={nanoid()}>
          <ChapterImg src={el} alt="маньхуа" />
        </ChapterContainer>
      ))}
    </>
  );
}

export default Chapter;
