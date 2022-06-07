import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const RequireAuth = ({ children }) => {
        const location = useLocation();
        console.log();
        const { curentUser } = useAuth();

        if (!curentUser.leng) {
                return <Navigate to="/login" state={{ from: location }} />;
        }

        return children;
};

export default RequireAuth;
