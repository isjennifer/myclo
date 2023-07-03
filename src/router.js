import Home from "./routes/Home"
import MyCloset from "./routes/MyCloset"
import Login from "./routes/Login"

export const RouterInfo = [
    {
        path: "/",
        element: <Home/>,
        label: 'home',
    },
    {
        path: "/mycloset",
        element: <MyCloset/>,
        label: 'mycloset',
    },
    {
        path: "/login",
        element: <Login/>,
        label: 'login',
    },
]

