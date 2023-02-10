import styled from "styled-components";

export const LeftTable = styled.p`
  font-size: 12px;
  margin-bottom: 5px;
  color: #ffffffb5;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const RightTable = styled.p`
  font-size: 12px;
  margin-bottom: 5px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const TableGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
