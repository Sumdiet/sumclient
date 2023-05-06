import { createBrowserRouter} from 'react-router-dom';
import Login from '../Template/Login';
import Questionnaire from '../Template/Questionnaire';
import Home from '../Template/Home';

const router = createBrowserRouter([
    {
      path: '/',
      element: <Login/>
    },
    {
      path: '/questionario',
      element: <Questionnaire/>
    },
    {
      path: '/home',
      element: <Home/>
    }
])

export default router;