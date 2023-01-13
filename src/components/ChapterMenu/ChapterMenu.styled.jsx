import styled from "styled-components";
import { AiFillCaretDown } from "react-icons/ai";

export const MenuContainer = styled.div`
  position: fixed;
  top: 5px;
  left: 50%;
  transform: translateX(-50%);

  max-width: 480px;
  width: 95%;
  background-color: #3c1b1b;
  color: white;
  border-radius: 15px;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const ShowList = styled(AiFillCaretDown)`
  vertical-align: middle;
  margin-left: 5px;
  transition: transform 250ms;
  cursor: pointer;

  &.rotated {
    transform: scale(-1);
  }
`;

export const ChapterList = styled.ul`
  background-color: white;
  color: black;
  border-radius: 14px;
  padding: 8px;
`;

export const ChapterName = styled.li`
  font-size: 14px;
  padding: 2px;
  border-bottom: 1px dashed black;
  cursor: pointer;

  &:hover,
  &:focus {
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
      rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  }
`;
