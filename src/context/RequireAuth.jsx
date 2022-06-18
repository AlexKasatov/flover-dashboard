import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const RequireAuth = ({ children }) => {
        const location = useLocation();

        const { tokenAuth } = useAuth();

        if (!tokenAuth) {
                return <Navigate to="/login" state={{ from: location }} />;
        }

        return children;
};

export default RequireAuth;
