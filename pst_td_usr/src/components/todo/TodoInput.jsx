const TodoInput = ({ inputValue, handlerOnChange, handlerOnClick }) => {
    return (
        <div className="todo-add">
            <input
                placeholder="New ToDo"
                value={inputValue}
                onChange={handlerOnChange}
                className="todo-add-input"
            />
            <button onClick={handlerOnClick} className="todo-add-button">
                Add ToDo
            </button>
        </div>
    );
};

export default TodoInput;
