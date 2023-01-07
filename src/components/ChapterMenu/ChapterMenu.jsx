import { useState } from "react";

import {
  ChapterList,
  MenuContainer,
  ShowList,
  ChapterName,
} from "./ChapterMenu.styled";

const chapterArray = ["Перша глава", "Друга глава", "Третя глава"];

export function ChapterMenu() {
  const [showList, setShowList] = useState(false);

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
          {chapterArray.map((el) => (
            <ChapterName>{el}</ChapterName>
          ))}
        </ChapterList>
      )}
    </MenuContainer>
  );
}
