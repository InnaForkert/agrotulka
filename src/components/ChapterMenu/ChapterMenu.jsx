import { useState } from "react";

import {
  ChapterList,
  MenuContainer,
  ShowList,
  ChapterName,
} from "./ChapterMenu.styled";
import { chapters } from "../../utils/chapters";
import { nanoid } from "nanoid";

export function ChapterMenu({ changeChapter }) {
  const [showList, setShowList] = useState(false);

  const chapterNames = Object.keys(chapters);

  function handleClick(e) {
    changeChapter(e);
    setShowList((prev) => !prev);
  }

  return (
    <MenuContainer>
      Список Глав
      <ShowList
        onClick={() => {
          setShowList((prevState) => !prevState);
        }}
        className={`${showList ? "rotated" : ""}`}
      />
      {showList && (
        <ChapterList>
          {chapterNames.map((el) => (
            <ChapterName key={nanoid()} onClick={handleClick}>
              {el}
            </ChapterName>
          ))}
        </ChapterList>
      )}
    </MenuContainer>
  );
}
