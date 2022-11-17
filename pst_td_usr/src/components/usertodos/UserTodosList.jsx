import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
    useGetUserTodosQuery,
    useAddUserTodoMutation,
} from '../../store/apiSlice';
import { renderUserTodo } from '../../store/userTodoSlice';
import Loading from '../messages/Loading';
import Error from '../messages/Error';
import BackButton from '../backbutton/BackButton';
import UserTitle from '../usertitle/UserTitle';
import UserTodoTitle from './UserTodoTitle';
import UserTodoInput from './UserTodosInput';
import UserTodosItem from './UserTodosItem';

const UserTodosList = () => {
    const { id } = useParams();

    const userTodos = useSelector((state) => state.userTodos.userTodos);
    const {
        data = [],
        isLoading,
        isError,
        isSuccess,
    } = useGetUserTodosQuery(id);

    const [addUserTodo] = useAddUserTodoMutation();
    const [newUserTodo, setNewUserTodo] = useState('');
    const dispatch = useDispatch();

    const handlerSetNewUserTodo = (event) => {
        setNewUserTodo(event.target.value);
    };

    const handlerAddUserTodo = () => {
        if (newUserTodo.trim().length) {
            dispatch(renderUserTodo({ id, newUserTodo }));
        }
        addUserTodo({ userId: id, title: newUserTodo, completed: false });
        setNewUserTodo('');
    };

    if (isLoading) return <Loading />;
    if (isError) return <Error />;
    if (isSuccess) {
        return (
            <>
                <BackButton />
                <UserTitle id={id} />
                <UserTodoTitle />
                <UserTodoInput
                    inputValue={newUserTodo}
                    handlerSetNewUserTodo={handlerSetNewUserTodo}
                    handlerAddUserTodo={handlerAddUserTodo}
                />
                <ul className="user-todos-list">
                    {userTodos
                        .filter((item) => item.userId === id)
                        .map((item) => (
                            <UserTodosItem key={item.id} {...item} />
                        ))}
                    {data.map((item) => (
                        <UserTodosItem key={item.id} {...item} />
                    ))}
                </ul>
            </>
        );
    }
};

export default UserTodosList;
