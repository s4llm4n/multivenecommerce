import { lazy } from "react";
const Login = lazy(() => import("../../views/auth/Login"))
const Register = lazy(() => import("../../views/auth/Register"))
const AdminLogin = lazy(() => import("../../views/auth/AdminLogin"))
const Home = lazy(() => import('../../views/Home'))
const UnAuthorized = lazy(() => import('../../views/UnAuthorized'))

const publicRoutes = [
    {
        path: '/',
        element: <Home/>,
        ability : ['admin','seller']
    },
    {
        path : '/login',
        element : <Login/>
    },
    {
        path : '/register',
        element : <Register/>
    },
    {
        path : '/admin/login',
        element : <AdminLogin/>
    },
    {
        path : '/unauthorized',
        element : <UnAuthorized/>
    },
]

export default publicRoutes