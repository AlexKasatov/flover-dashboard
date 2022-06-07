import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const RequireAuth = ({ children }) => {
        const location = useLocation();
        const { curentUser } = useAuth();

        if (!curentUser) {
                return <Navigate to="/login" state={{ from: location }} />;
        }

        return children;
};

export default RequireAuth;
