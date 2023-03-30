# Personal Expenses

This project allows users to monitor their expenses by providing a financial controller that enables them to view and add new transactions.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See the expenses list
- See a chart by year
- FIlter expenses by year and free text
- Add/Remove/Edit/See expense
- See warning for invalid inputs
- See hover and focus states for all interactive elements on the page
- Use the software on any device

### Screenshot

![](./screenshoots/01.png)
![](./screenshoots/02.png)
![](./screenshoots/03.png)
![](./screenshoots/04.png)
![](./screenshoots/05.png)
![](./screenshoots/06.png)
![](./screenshoots/07.png)

### Links

- Live Site URL: [Add live site URL here](https://personal-expenses-sand.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Mobile-first workflow
- React
- React Router
- TypeScript
- Styled Components
- Recharts
- Vite
- Firebase - BaaS

### What I learned

React hook to fetch data from firebase:

```ts
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null);

const sendRequest = useCallback(
  async (requestConfig: Config, loadData: (data: any) => void) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(URL, {
        method: requestConfig.method ? requestConfig.method : 'GET',
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error('Request failed.');
      }

      const data = await response.json();
      loadData(data);
    } catch (error: unknown) {
      console.log(error);
    }

    setIsLoading(false);
  },
  []
);

return { isLoading, error, sendRequest };
```

React hook to validate inputs:

```ts
const useInput = (validation: (value: string) => boolean) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [valueTouched, setValueTouched] = useState(false);

  const valueHasError = validation(enteredValue);

  const valueChangedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredValue(event.target.value);
  };

  const valueBlurHandler = () => {
    setValueTouched(true);
  };

  const updateValue = (value: string) => {
    setEnteredValue(value);
  };

  return {
    value: enteredValue,
    valueTouched,
    valueHasError,
    valueChangedHandler,
    valueBlurHandler,
    updateValue,
  };
};
```

React router routes:

```ts
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '/', element: <Welcome /> },
      {
        path: '/expenses',
        element: <ExpensesIndex />,
      },
      { path: '/expenses/new-expense', element: <NewExpense /> },
    ],
  },
]);
```

Custom component in Styled Components:

```ts
const NewExpense = styled(Link)`
  border-radius: 12px;
  padding: 0.5rem;
  cursor: pointer;
  text-decoration: none;
  color: black;

  &:hover,
  :active {
    text-decoration: underline;
    color: ${theme.colors.e};
  }
`;
```

Building a chart using Recharts:

```ts
<ChartContainer>
  <BarChart
    width={700}
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
    <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
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
```

### Useful resources

- [CSS Variables for React Devs](https://www.joshwcomeau.com/css/css-variables-for-react-devs/) - This helped to set up global style variables in styled components.
- [Box-shadow examples](https://getcssscan.com/css-box-shadow-examples) - This is a page with multiple examples of box-shadow usage.

## Author

- LinkedIn - [Winstein Martins](https://www.linkedin.com/in/winstein-martins/)
