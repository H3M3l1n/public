import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import CustomLink from '../customlink/CustomLink';
import './layout.sass';

const Layout = () => {
    const [image, setBackgroundImage] = useState('./img/post.jpg');
    const handlerChangeBackgound = (event) => {
        console.log(event);
        switch (event.target.innerText) {
            case 'Posts':
                setBackgroundImage('./img/post.jpg');
                break;
            case 'ToDos':
                setBackgroundImage('./img/todo.jpg');
                break;
            case 'Users':
                setBackgroundImage('./img/user.jpg');
                break;
            default:
                return;
        }
    };
    return (
        <>
            <header className="header">
                <CustomLink to="/" handler={handlerChangeBackgound}>
                    Posts
                </CustomLink>
                <CustomLink to="/todo" handler={handlerChangeBackgound}>
                    ToDos
                </CustomLink>
                <CustomLink to="/users" handler={handlerChangeBackgound}>
                    Users
                </CustomLink>
            </header>
            <main className="main" style={{ backgroundImage: `url(${image})` }}>
                <Outlet />
            </main>
        </>
    );
};

export default Layout;
