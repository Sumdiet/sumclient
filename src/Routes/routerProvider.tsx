import { RouterProvider } from 'react-router-dom';
import router from './routes';
export default function RouterProviderComponent() {
    return (
        <RouterProvider router={router}/>
    )
}