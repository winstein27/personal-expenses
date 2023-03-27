import styled from 'styled-components';

import theme from '../../styles/theme';

const YearFilter = styled.select`
  display: block;
  padding: 0.5rem 1.5rem;
  border: 2px solid ${theme.colors.border};
  border-radius: 8px;
  margin: 0.5rem 0;
  text-align: center;
`;

interface Props {
  year: string;
  yearChangedHandler: (changedYear: string) => void;
  yearsList: string[];
}

const Filters = (props: Props) => {
  const years = props.yearsList.sort((a, b) =>
    Number.parseInt(a) < Number.parseInt(b) ? 1 : -1
  );

  return (
    <YearFilter
      value={props.year}
      onChange={(event) => props.yearChangedHandler(event.target.value)}
    >
      <option value="0">All</option>
      {years.map((year) => (
        <option value={year}>{year}</option>
      ))}
    </YearFilter>
  );
};

export default Filters;
