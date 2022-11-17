import { Routes, Route } from 'react-router-dom';
import Posts from './components/posts/Posts';
import Todo from './components/todo/Todo';
import Users from './components/users/Users';
import User from './components/user/User';
import UserAlbums from './components/useralbums/UserAlbums';
import UserTodos from './components/usertodos/UserTodos';
import UserPosts from './components/userposts/UserPosts';
import Layout from './components/layout/Layout';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Posts />} />
                <Route path="todo" element={<Todo />} />
                <Route path="users" element={<Users />} />
                <Route path="users/:id" element={<User />} />
                <Route path="users/:id/albums" element={<UserAlbums />} />
                <Route path="users/:id/todos" element={<UserTodos />} />
                <Route path="users/:id/posts" element={<UserPosts />} />
            </Route>
        </Routes>
    );
};

export default App;
