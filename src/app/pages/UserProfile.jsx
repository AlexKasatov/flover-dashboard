import { useAuth } from '../../context/AuthContext';

const UserProfile = () => {
        const { currentUser } = useAuth();

        return currentUser && <div style={{ marginBottom: '10rem' }}>{currentUser?.email}</div>;
};

export default UserProfile;
