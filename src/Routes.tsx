import { createBrowserRouter } from 'react-router-dom';

import Root from './pages/Root';
import Welcome from './pages/Welcome';
import Expenses from './pages/Expenses';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '/', element: <Welcome /> },
      { path: '/expenses', element: <Expenses /> },
    ],
  },
]);

export default router;
