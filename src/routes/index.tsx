import { createBrowserRouter } from 'react-router-dom';
import SignIn from 'src/pages/Auth/SignIn';
import SignUp from 'src/pages/Auth/SignUp';
import Home from 'src/pages/Home';
import PrivateRoute from './PrivateRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
  },
  {
    path: '/sign-in',
    element: <SignIn />,
  },
  {
    path: '/sign-up',
    element: <SignUp />,
  },
]);
