import { useParams } from 'react-router-dom';
import { useGetUserAlbumsQuery } from '../../store/apiSlice';
import Loading from '../messages/Loading';
import Error from '../messages/Error';
import UserAlbumsList from './UserAlbumsList';
import './useralbums.sass';
import BackButton from '../backbutton/BackButton';
import UserTitle from '../usertitle/UserTitle';

const UserAlbums = () => {
    const { id } = useParams();
    const {
        data = [],
        isLoading,
        isError,
        isSuccess,
    } = useGetUserAlbumsQuery(id);
    console.log(data);

    if (isLoading) return <Loading />;
    if (isError) return <Error />;
    if (isSuccess) {
        return (
            <div className="user-albums">
                <BackButton />
                <UserTitle id={id} />
                <h1 className="user-albums-name">Albums list</h1>
                <ul className="user-albums-list">
                    {data.map((item) => (
                        <UserAlbumsList key={item.id} title={item.title} />
                    ))}
                </ul>
            </div>
        );
    }
};

export default UserAlbums;
