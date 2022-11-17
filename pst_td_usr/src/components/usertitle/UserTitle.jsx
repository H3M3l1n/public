import { useGetUserQuery } from '../../store/apiSlice';
import './usertitle.sass';

const UserTitle = ({ id }) => {
    const { data = [] } = useGetUserQuery(id);

    return (
        <div className="user-title">
            <p className="user-title-item">
                {data.name} | {data.username}
            </p>
        </div>
    );
};

export default UserTitle;
