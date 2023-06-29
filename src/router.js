import Home from "./routes/Home"
import MyCloset from "./routes/MyCloset"

export const RouterInfo = [
    {
        path: "/",
        element: <Home/>,
        label: 'home',
    },
    {
        path: "/MyCloset",
        element: <MyCloset/>,
        label: 'mycloset',
    },
]

