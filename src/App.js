//Import Bootstrap styles
import 'bootstrap/dist/css/bootstrap.min.css';
//Import Swiper styles
import 'swiper/css';
import './App.css';
import Header from "../src/pages/Header"
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import SignIn from './components/SignIn';
import Home from './pages/Home';
import SignUp from './components/SignUp';

function App() {
  const Layout=()=>{
    return(
      <div>
        <Outlet/>
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path:"/home",
          element:<Home/>
        },
        {
          path:"/SignIn",
          element:<SignIn/>
        },
        {
          path:"/SignUp",
          element:<SignUp/>
        }
      ],
    },
  ]);
  return (
    <div>
     <RouterProvider router={router} />
   </div>
  );
}

export default App;
