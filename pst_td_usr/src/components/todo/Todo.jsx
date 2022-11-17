import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useGetTodosQuery, useAddTodoMutation } from '../../store/apiSlice';
import { renderTodo } from '../../store/todoSlice';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import './todo.sass';

const Todo = () => {
    const todos = useSelector((state) => state.todos.todos);
    const { data = [], isLoading, isError, isSuccess } = useGetTodosQuery();

    const [addTodo] = useAddTodoMutation();
    const [newTodo, setNewTodo] = useState('');
    const dispatch = useDispatch();

    const handlerSetNewTodo = (event) => {
        setNewTodo(event.target.value);
    };

    const handlerAddTodo = () => {
        if (newTodo.trim().length) {
            dispatch(renderTodo({ newTodo }));
        }
        addTodo({ title: newTodo, completed: false });
        setNewTodo('');
    };

    return (
        <div className="todo">
            <TodoInput
                inputValue={newTodo}
                setNewTodo={setNewTodo}
                handlerOnChange={handlerSetNewTodo}
                handlerOnClick={handlerAddTodo}
            />
            <TodoList
                todos={todos}
                data={data}
                isLoading={isLoading}
                isError={isError}
                isSuccess={isSuccess}
            />
        </div>
    );
};

export default Todo;
