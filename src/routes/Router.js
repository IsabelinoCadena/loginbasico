import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../components/Login";
import { Home } from "../components/Home";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { Register } from "../components/Register";
import { AuthProvider } from "../context/authContext";
import LoginTemp from "../pages/LoginTemp";


const Router = () => {
    return (
        
        <AuthProvider>
        <BrowserRouter>
        <Routes>

            <Route path="/" element={ <ProtectedRoute> <Home /> </ProtectedRoute> } />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/LoginTemp" element={<LoginTemp />} />

        </Routes>
        </BrowserRouter>
        </AuthProvider>
    )
}

export default Router