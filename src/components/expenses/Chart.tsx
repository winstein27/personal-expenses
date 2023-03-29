import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import styled from 'styled-components';

import theme from '../../styles/theme';

import Expense from './ExpenseInterface';

import Card from '../UI/Card';

const ChartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
`;

interface Props {
  expenses: Expense[];
}

const Chart = (props: Props) => {
  const data = [
    {
      name: 'Jan',
      amt: 0,
    },
    {
      name: 'Feb',
      amt: 0,
    },
    {
      name: 'Mar',
      amt: 0,
    },
    {
      name: 'Apr',
      amt: 0,
    },
    {
      name: 'May',
      amt: 0,
    },
    {
      name: 'Jun',
      amt: 0,
    },
    {
      name: 'Jul',
      amt: 0,
    },
    {
      name: 'Aug',
      amt: 0,
    },
    {
      name: 'Sep',
      amt: 0,
    },
    {
      name: 'Oct',
      amt: 0,
    },
    {
      name: 'Nov',
      amt: 0,
    },
    {
      name: 'Dec',
      amt: 0,
    },
  ];

  props.expenses.forEach((expense) => {
    data[expense.date.getMonth()].amt += expense.value;
  });

  return (
    <Card>
      <ChartContainer>
        <BarChart
          width={800}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar
            dataKey="amt"
            fill={theme.colors.action}
            background={{ fill: theme.colors.backgroud }}
            name={'Amount ($)'}
          />
        </BarChart>
      </ChartContainer>
    </Card>
  );
};

export default Chart;
