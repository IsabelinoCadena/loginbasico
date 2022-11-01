import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { Alert } from "./Alert";



export const Login = () => {

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  const handleSumit = async e => {
    e.preventDefault();
    setError('');
    
    try {
      await login(user.email, user.password);
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignin = async () => {
   try {
    await loginWithGoogle()
    navigate('/');
   } catch (error) {
    setError(error.message)
   }
  };

  return (

    <div>
      <br/> <br/>
      <form onSubmit={handleSumit}>
        <div> Login </div>

        <label htmlFor='email'> Email </label>
        <input type='email' name='email' placeholder='youremail@company.ltd' onChange={handleChange} />

        <label htmlFor='password'> Password </label>
        <input type='password' name='password' id='password' placeholder="*******" onChange={handleChange} />

        <button> Login </button>

      </form>

      <button onClick={handleGoogleSignin}> Con Google </button>

      {error && <Alert message={error} />}

    </div>

  )
}
