import { Route, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types'; // Importa PropTypes

const PrivateRoute = ({ element, ...rest }) => {
  const isLoggedIn = localStorage.getItem('loggeado') === 'correcto';  // Verifica si está loggeado

  return (
    <Route
      {...rest}
      element={isLoggedIn ? element : <Navigate to="/" />}
    />
  );
};

// Definición de PropTypes para el componente PrivateRoute
PrivateRoute.propTypes = {
  element: PropTypes.element.isRequired,  // 'element' debe ser un componente React y es requerido
  rest: PropTypes.object, // 'rest' puede ser cualquier objeto con las propiedades adicionales (como 'path', 'exact', etc.)
};

export default PrivateRoute;