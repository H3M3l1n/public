const TodoInput = ({ inputValue, handlerAddUserTodo, handlerSetNewUserTodo }) => {
    return (
        <div className="user-todos-add">
            <input
                placeholder="New ToDo"
                value={inputValue}
                onChange={handlerSetNewUserTodo}
                className="user-todos-add-input"
            />
            <button onClick={handlerAddUserTodo} className="user-todos-add-button">
                Add ToDo
            </button>
        </div>
    );
};

export default TodoInput;
