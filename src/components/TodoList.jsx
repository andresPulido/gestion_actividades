import { TodoItem } from './TodoItem';
import './css/Lista.scss';

export function TodoList({ todos, toggleTodo }) {
    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
            ))}
        </ul>
    )
}
