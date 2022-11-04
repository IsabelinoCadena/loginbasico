import { useAuth } from "../context/authContext"


export const Home = () => {

  const {user, logout, loading} = useAuth();

  console.log(user);

  const handleLogout = async () => {
    try {
    await logout();
    } catch (error) {
      console.log(error.message);
    }

  };

  if (loading) return <h1> Cargando </h1>
  
  return (
    <div>
      <h1> Bienvenido!!! {user.displayName || user.email} </h1>

      <button onClick={handleLogout}> Salir </button>
    </div>

  )
}
