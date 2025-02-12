import './App.css'
import LandingPage from './Components/LandingPage'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import Login from './Components/pages/login/Login'
import Card from './Components/Body/Card.jsx'
import Shop from './Components/pages/shop/Shop.jsx'
import Productdetails from './Components/pages/productDetail/Productdetails.jsx'

function App() {

const router = createBrowserRouter([
  {
    path: "",
    element: <LandingPage />,
    children: [
      {
        path: "/",
        element: <Card />
      },

      {
        path: "/shop/:product_type",
        element: <Shop />
      },

      {
        path: "/productdetails/:product_name",
        element: <Productdetails />
      }
    ]
  },


  {
    path: "/login",
    element: <Login />
  }

])

  return (
      <RouterProvider router={router} />
  )
}

export default App
