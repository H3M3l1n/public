import { useParams } from 'react-router-dom';
import { useGetUserPostsQuery } from '../../store/apiSlice';
import Loading from '../messages/Loading';
import Error from '../messages/Error';
import UserPostsList from './UserPostsList';
import './userposts.sass';
import BackButton from '../backbutton/BackButton';
import UserTitle from '../usertitle/UserTitle';

const UserPosts = () => {
    const { id } = useParams();
    const {
        data = [],
        isLoading,
        isError,
        isSuccess,
    } = useGetUserPostsQuery(id);

    if (isLoading) return <Loading />;
    if (isError) return <Error />;
    if (isSuccess) {
        return (
            <div className="user-posts">
                <BackButton />
                <UserTitle id={id} />
                <h1 className="user-posts-name">Posts list</h1>
                <ul className="user-posts-list">
                    {data.map((item) => (
                        <UserPostsList key={item.id} title={item.title} />
                    ))}
                </ul>
            </div>
        );
    }
};

export default UserPosts;
