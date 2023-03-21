import { createBrowserRouter } from 'react-router-dom';

import Root from './pages/Root';
import Welcome from './pages/Welcome';
import ExpensesIndex from './pages/expenses/Index';
import NewExpense from './pages/expenses/NewExpense';

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
      { path: '/expenses/edit/:id', element: <NewExpense /> },
    ],
  },
]);

export default router;
