import { Link } from 'react-router-dom';

const UserButtons = ({ id }) => {
    return (
        <div className="user-profile-buttons">
            <Link to={`/users/${id}/albums`}>
                <button className="user-button">Albums</button>
            </Link>
            <Link to={`/users/${id}/todos`}>
                <button className="user-button">ToDos</button>
            </Link>
            <Link to={`/users/${id}/Posts`}>
                <button className="user-button">Posts</button>
            </Link>
        </div>
    );
};

export default UserButtons;
