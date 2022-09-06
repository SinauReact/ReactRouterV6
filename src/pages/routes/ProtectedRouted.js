import { Navigate } from "react-router-dom";

const ProtectedRouted = (props) => {
  const fakeAuth = false;
  if (!fakeAuth) return <Navigate to="/login" />;
  return props.children;
};

export default ProtectedRouted;
