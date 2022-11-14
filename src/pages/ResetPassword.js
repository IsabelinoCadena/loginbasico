import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { Alert } from '../components/Alert';


export const ResetPassword = () => {

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const { signup, resetPassword  } = useAuth('');
  const navigate = useNavigate('');
  const [error, setError] = useState('');

  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  const handleSumit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signup(user.email, user.password);
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleResetPassword = async () => {
    if (!user.email) return setError( 'Porfavor coloca tu Email');
    try {
      await resetPassword(user.email);
      setError('Se ha enviado un enlace a su Email para cambiar su contraseña')
    } catch (error) {
      setError(error.message)
    }
  };

  return (

    <div className="w-full max-w-xs m-auto">
      
      {error && <Alert message={error} />}

      <form onSubmit={handleSumit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
       
        <div className="mb-4">
        <div className="block text-gray-700 text-sm font-bold text-center my-2">Recuperar Contraseña</div>
        </div>

        <div className="mb-4">
        <label htmlFor='email' className="block text-gray-700 text-sm font-bold my-2"> Email </label>
        <input type='email' name='email' placeholder='email@company.com' onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>

        <div className="flex items-center justify-between"> 

        <a href="#!" onClick={handleResetPassword} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"> Recuperar Contraseña </a>

        </div>

      </form>

      <p className="my-4 text-sm  flex justify-between px-3"> ¿Has recordado tu contraseña? <Link to='/Login'> Login </Link></p>


      
    </div>

  )
}
