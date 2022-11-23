import './css/Item.scss';

export function TodoItem({ todo, toggleTodo }) {
    const { id, task, completed } = todo;
    const handleTodoClick = () => {
        toggleTodo(id);
    }
    return (
        <li>
            <label>{task}
                <input type="checkbox" checked={completed} onChange={handleTodoClick} />
                <span></span>
            </label>
        </li>
    )
}