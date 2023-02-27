import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuthenticated, ...props }) => {
  const organizations = ['herdsman', 'slaughter', 'retailer'];
  const organizationExists = organizations.includes(props.organization);
  console.log(isAuthenticated,organizationExists, props.organization)

  return isAuthenticated && organizationExists ? (
    <Component />
  ) : (
    <Navigate to={`/${props.organization}/signin`} replace />
  );
};

export default PrivateRoute;