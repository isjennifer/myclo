import Home from "./routes/Home"
import MyCloset from "./routes/MyCloset"
import Login from "./routes/Login"
import SignUp from "./routes/SignUp"
import User from "./routes/User"


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
    {
        path: "/signup",
        element: <SignUp/>,
        label: 'signup',
    },
    {
        path: "/user",
        element: <User/>,
        label: 'user',
    },
]

