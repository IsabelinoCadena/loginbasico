import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { ProtectedRoute } from "../auth/ProtectedRoute";
import { Register } from "../pages/Register";
import { AuthProvider } from "../context/authContext";
import { ResetPassword } from "../pages/ResetPassword";
import LoginTemp from "../pages/LoginTemp";


const Router = () => {
    return (
        
        <div className="bg-slate-300 h-screen flex">
        <AuthProvider>
        <BrowserRouter>
        <Routes>

            <Route path="/" element={ <ProtectedRoute> <Home /> </ProtectedRoute> } />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/ResetPassword" element={<ResetPassword />} />
            <Route path="/LoginTemp" element={<LoginTemp />} />

        </Routes>
        </BrowserRouter>
        </AuthProvider>

        </div>
    )
}

export default Router