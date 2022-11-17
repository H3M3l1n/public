import { useDispatch } from 'react-redux';
import {
    useUpdateUserTodoMutation,
    useDeleteUserTodoMutation,
} from '../../store/apiSlice';
import {
    toggleCompleteUserTodo,
    removeUserTodo,
} from '../../store/userTodoSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const UserTodosItem = ({ userId, id, title, completed }) => {
    const [updateUserTodo] = useUpdateUserTodoMutation();
    const [deleteUserTodo] = useDeleteUserTodoMutation();
    const dispatch = useDispatch();

    const handleUpdate = () => {
        updateUserTodo({ userId, id, completed: !completed });
        dispatch(toggleCompleteUserTodo({ id }));
    };

    const handleDelete = () => {
        deleteUserTodo({ userId, id });
        dispatch(removeUserTodo({ id }));
    };

    return (
        <li className="user-todos-item">
            <input
                type="checkbox"
                checked={completed}
                onChange={() => handleUpdate()}
                className="user-todos-item-check"
            />
            <span className="user-todos-item-text">{title}</span>
            <span
                onClick={() => handleDelete()}
                className="user-todos-item-remove"
            >
                <FontAwesomeIcon icon={faXmark} />
            </span>
        </li>
    );
};

export default UserTodosItem;
