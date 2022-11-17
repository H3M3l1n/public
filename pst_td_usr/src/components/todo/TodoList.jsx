import Loading from '../messages/Loading';
import Error from '../messages/Error';
import TodoItem from './TodoItem';

const TodoList = ({ isLoading, isError, isSuccess, todos, data }) => {
    if (isLoading) return <Loading />;
    if (isError) return <Error />;
    if (isSuccess) {
        return (
            <ul className="todo-list">
                {todos.map((item) => (
                    <TodoItem key={item.id} {...item} />
                ))}
                {data.map((item) => (
                    <TodoItem key={item.id} {...item} />
                ))}
            </ul>
        );
    }
};

export default TodoList;
