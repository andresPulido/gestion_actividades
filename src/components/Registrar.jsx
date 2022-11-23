import './css/Registrar.scss';

export function Registrar({ todoTaskRef, handleTodoAdd, handleClearAll }) {
    return (
        <div class="registrar">
            <input ref={todoTaskRef} type="text" placeholder='Nueva Tarea' />
            <button onClick={handleTodoAdd}>add ➕</button>
            <button onClick={handleClearAll}>Delete 🗑</button>
        </div>)
}
