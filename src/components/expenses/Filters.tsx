import styled from 'styled-components';

import theme from '../../styles/theme';

import Card from '../../components/UI/Card';

const YearFilter = styled.select`
  display: block;
  padding: 0.5rem 1.5rem;
  border: 2px solid ${theme.colors.border};
  border-radius: 8px;
  margin: 0.5rem 0;
  text-align: center;
  width: 100%;

  @media (min-width: ${theme.sizes.tablet}) {
    display: inline-block;
    margin-right: 2rem;
    padding: 1rem;
    width: max-content;
  }
`;

const SearchInput = styled.input`
  padding: 1rem;
  border: 2px solid ${theme.colors.border};
  border-radius: 8px;
  width: 100%;
  display: block;

  @media (min-width: ${theme.sizes.tablet}) {
    display: inline-block;
    width: max-content;
  }
`;

interface Props {
  year: string;
  yearChangedHandler: (changedYear: string) => void;
  yearsList: string[];
  text: string;
  textChangedHandler: (inputedText: string) => void;
}

const Filters = (props: Props) => {
  const years = props.yearsList.sort((a, b) =>
    Number.parseInt(a) < Number.parseInt(b) ? 1 : -1
  );

  return (
    <Card>
      <YearFilter
        value={props.year}
        onChange={(event) => props.yearChangedHandler(event.target.value)}
      >
        <option value="0" key="0">
          All
        </option>
        {years.map((year) => (
          <option value={year} key={year}>
            {year}
          </option>
        ))}
      </YearFilter>
      <SearchInput
        type="text"
        placeholder="Search..."
        value={props.text}
        onChange={(event) => props.textChangedHandler(event.target.value)}
      />
    </Card>
  );
};

export default Filters;
