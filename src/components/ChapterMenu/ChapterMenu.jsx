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

  function handleClick(e) {
    changeChapter(e);
    setShowList((prev) => !prev);
  }

  return (
    <MenuContainer
      onClick={() => {
        setShowList((prevState) => !prevState);
      }}
    >
      Список Глав
      <ShowList className={`${showList ? "rotated" : ""}`} />
      {showList && (
        <ChapterList>
          {chapters.map((el) => (
            <ChapterName key={nanoid()} onClick={handleClick} data-id={el.id}>
              {el.name}
            </ChapterName>
          ))}
        </ChapterList>
      )}
    </MenuContainer>
  );
}
