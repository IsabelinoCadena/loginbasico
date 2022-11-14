import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { Alert } from "../components/Alert";
import GoogleButton from 'react-google-button';
import 'antd/dist/antd.css';
import { message } from 'antd';

export const Login = () => {

  const [user, setUser] = useState({ email: '', password: '' });
  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

    const handleGoogleSignin = async () => {
     try {
      await loginWithGoogle()
      navigate('/');
     } catch (error) {
      setError(error.message)
     }
    };

  const handleSumit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(user.email, user.password);
      navigate('/');
    } catch (error) {
      mensajeError()
    }
  };
 

  const mensajeError=()=>{
    message.error('Contraseña y/o Usuario Invalido', 1);
  }
  
  return (
    
    <div className="w-full max-w-xs m-auto">
      
      {error && <Alert message={error} />}

      <form onSubmit={handleSumit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      
      <div className="mb-4">
        <div className="block text-gray-700 text-sm font-bold text-center my-2"> ¡Hola de Nuevo! </div>
      </div>

        <div className="mb-4">
        <label htmlFor='email' className="block text-sm font-bold mb-2"> Email </label>
        <input type='email' name='email' placeholder='ejemplo@gmail.com' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange}/>
        </div>
 
        <div className="mb-4">
        <label htmlFor='password' className="block text-sm font-bold mb-2"> Password </label>
        <input type='password' name='password' id='password' placeholder="*******" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange}/>
        </div>
      <div className="flex items-center justify-between"> 

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"> Login </button>

         <Link to='/ResetPassword'> ¿Olvidaste tu Contraseña? </Link>
      </div>

      </form>
      <p className="my-4 text-sm flex justify-between px-3"> ¿No tienes una cuenta? <Link to='/Register'> Registrar </Link></p>

      <div className="px-10 flex items-center justify-between">
      
      {/* <button onClick={handleGoogleSignin} className="bg-slate-50 hover:bg-slate-200 text-black shadow-md rounded border-2 border-gray-300 py-2 px-4 w-full"> Acceder con Google </button> */}
      <GoogleButton onClick={handleGoogleSignin}/>
      </div>
      



    </div>

  )
}
