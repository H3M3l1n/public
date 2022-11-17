import { useDispatch } from 'react-redux';
import {
    useUpdateTodoMutation,
    useDeleteTodoMutation,
} from '../../store/apiSlice';
import { toggleComplete, removeTodo } from '../../store/todoSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const TodoItem = ({ id, title, completed }) => {
    const [updateTodo] = useUpdateTodoMutation();
    const [deleteTodo] = useDeleteTodoMutation();
    const dispatch = useDispatch();

    const handleUpdate = () => {
        updateTodo({ id, completed: !completed });
        dispatch(toggleComplete({ id }));
    };

    const handleDelete = () => {
        deleteTodo({ id });
        dispatch(removeTodo({ id }));
    };

    return (
        <li className="todo-item">
            <input
                type="checkbox"
                checked={completed}
                onChange={handleUpdate}
                className="todo-item-check"
            />
            <span className="todo-item-text">{title}</span>
            <span
                onClick={handleDelete}
                className="todo-item-remove"
            >
                <FontAwesomeIcon icon={faXmark} />
            </span>
        </li>
    );
};

export default TodoItem;
