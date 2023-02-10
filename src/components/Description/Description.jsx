import { useState } from "react";
import { Table } from "../Table/Table";
import {
  DescriptionHeading,
  DescriptionSubheading,
  DetailsButton,
  Disclosure,
  Paragraph,
  Tags,
  DescriptionContainer,
  InfoIcon,
} from "./Description.styled";

export function Description() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <DescriptionContainer>
      <DescriptionHeading>
        <InfoIcon size={20} />
        Небесне Благословення
      </DescriptionHeading>
      <DescriptionSubheading>Heaven Official's Blessing</DescriptionSubheading>
      <Disclosure>
        Просимо не використовувати та не перепубліковувати наш переклад
      </Disclosure>
      <Table />
      <Paragraph>
        Маньхва за мотивами однойменної новели. Немає такого божества, який би
        не знав про Се Ляня - відомої на всі три сфери мішені для насміхань. Се
        Лянь, Його Висотність наслідний принц
        {showDetails ? (
          <>
            <p>Деталі</p>
            <DetailsButton onClick={() => setShowDetails(false)}>
              Згорнути
            </DetailsButton>
          </>
        ) : (
          <DetailsButton onClick={() => setShowDetails(true)}>
            Детальніше...
          </DetailsButton>
        )}
      </Paragraph>
      <Tags />
    </DescriptionContainer>
  );
}
