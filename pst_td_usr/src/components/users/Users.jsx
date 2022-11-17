import { Link } from 'react-router-dom';
import { useGetUsersQuery } from '../../store/apiSlice';
import Loading from '../messages/Loading';
import Error from '../messages/Error';
import './users.sass';

const Posts = () => {
    const { data = [], isLoading, isError, isSuccess } = useGetUsersQuery();

    if (isLoading) return <Loading />;
    if (isError) return <Error />;
    if (isSuccess) {
        return (
            <div className="users">
                <ul className="users-list">
                    {data.map((item) => (
                        <Link
                            key={item.id}
                            to={`${item.id}`}
                            className="users-link"
                        >
                            <li key={item.id} className="users-item">
                                {item.name} | {item.username}
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        );
    }
};

export default Posts;
