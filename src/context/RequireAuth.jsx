import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const RequireAuth = ({ children }) => {
        const location = useLocation();

        const { currentUser } = useAuth();

        if (!currentUser) {
                return <Navigate to="/login" state={{ from: location }} />;
        }

        return children;
};

export default RequireAuth;
