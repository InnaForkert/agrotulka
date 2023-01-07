import { tableArray } from "../../utils/tableArray";
import { LeftTable, RightTable, TableGrid } from "./Table.styled";

export function Table() {
  const left = tableArray.map((el) => Object.keys(el)[0]);

  return (
    <TableGrid>
      {tableArray.map((el, i) => (
        <>
          <LeftTable>{left[i]}: </LeftTable>
          <RightTable>{el[left[i]]}</RightTable>
        </>
      ))}
    </TableGrid>
  );
}
