import { useSelector } from 'react-redux';
import PostsForm from './PostsForm';
import PostsFormik from './PostsFormik';
import { useGetPostsQuery } from '../../store/apiSlice';
import Loading from '../messages/Loading';
import Error from '../messages/Error';
import './posts.sass';

const Posts = () => {
    const posts = useSelector((state) => state.posts.posts);
    const { data = [], isLoading, isError, isSuccess } = useGetPostsQuery();

    if (isLoading) return <Loading />;
    if (isError) return <Error />;
    if (isSuccess) {
        return (
            <div className="posts">
                <PostsForm />
                <PostsFormik />
                <ul className="posts-list">
                    {posts.map((item) => (
                        <li key={item.id} className="posts-item">
                            {item.body}
                        </li>
                    ))}
                    {data.map((item) => (
                        <li key={item.id} className="posts-item">
                            {item.body}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
};

export default Posts;
