import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Register } from "./components/Register";
import { AuthProvider } from "./context/authContext";



const App = () => {
    return (
        
        <AuthProvider>
        <BrowserRouter>
        <Routes>

            <Route path="/" element={ <ProtectedRoute> <Home /> </ProtectedRoute> } />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />

        </Routes>
        </BrowserRouter>
        </AuthProvider>
    )
}

export default App