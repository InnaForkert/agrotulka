import styled from "styled-components";

export const Button = styled.button`
  display: block;
  margin-inline: auto;
  margin-block: 20px;
  appearance: none;
  background-color: #fff;
  border-radius: 24px;
  border-style: none;
  box-shadow: rgba(0, 0, 0, 0.2) 0 3px 5px -1px,
    rgba(0, 0, 0, 0.14) 0 6px 10px 0, rgba(0, 0, 0, 0.12) 0 1px 18px 0;
  cursor: pointer;
  font-size: 12px;
  justify-content: center;
  overflow: visible;
  padding: 10px 20px;
  text-align: center;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 15ms linear 30ms, transform 270ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  will-change: transform, opacity;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  &:hover,
  &:focus {
    background: #fef6f6;
    color: #e87575;

    &:active {
      box-shadow: 0 4px 4px 0 rgb(60 64 67 / 30%),
        0 8px 12px 6px rgb(60 64 67 / 15%);
      outline: none;
    }
  }
`;
