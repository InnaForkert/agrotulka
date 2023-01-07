import styled from "styled-components";
import { AiOutlineInfoCircle } from "react-icons/ai";

export const DescriptionContainer = styled.div`
  max-width: 480px;
  padding: 10px;
  margin: 0 auto;
  background-color: #3a3131;
  color: white;
`;

export const DescriptionHeading = styled.h2`
  font-size: 16px;
  text-align: center;
  margin-top: 15px;
`;

export const InfoIcon = styled(AiOutlineInfoCircle)`
  vertical-align: top;
  color: #ffffffa6;
  margin-right: 5px;
`;

export const DescriptionSubheading = styled.h3`
  font-size: 10px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 10px;
`;

export const Disclosure = styled.p`
  font-size: 10px;
  text-align: center;
  border: 1px dashed white;
  font-style: italic;
  padding: 5px;
  margin-bottom: 5px;
`;

export const DetailsButton = styled.span`
  color: #e87575;
  margin-left: 5px;
`;

export const Tags = styled.span``;

export const Paragraph = styled.p`
  font-size: 12px;
  line-height: 1.4;
`;
