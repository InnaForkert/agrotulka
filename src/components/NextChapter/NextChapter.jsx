import { Button } from "./NextChapter.styled";

function NextChapter({ handleClick }) {
  return <Button onClick={handleClick}>Наступна глава</Button>;
}

export default NextChapter;
