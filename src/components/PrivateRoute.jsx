import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element, ...rest }) => {
  const isLoggedIn = localStorage.getItem('loggeado') === 'correcto';  // Verifica si está loggeado

  return (
    <Route
      {...rest}
      element={isLoggedIn ? element : <Navigate to="/" />}
    />
  );
};

export default PrivateRoute;
