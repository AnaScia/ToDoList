import { useState } from 'react';

/* eslint-disable react/prop-types */
function Task({ item, onUpdate, onDelete }) {
  const [edit, setEdit] = useState(false);

  function FormEdit() {
    const [newValue, setNewValue] = useState(item.title);

    function handleSubmit(e) {
      e.preventDefault();
    }
    function handleChange(e) {
      const value = e.target.value;
      setNewValue(value);
    }

    function handleClickUpdate() {
      onUpdate(item.id, newValue);
      setEdit(false);
    }

    return (
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newValue} />
        <button onClick={handleClickUpdate}>Actualizar</button>
      </form>
    );
  }

  function ToDoElement() {
    return (
      <div>
        <h3>{item.title}</h3>
        <button onClick={() => setEdit(true)}>Editar</button>
        <button onClick={() => onDelete(item.id)}>Eliminar</button>
      </div>
    );
  }

  return (
    <div>{edit ? <FormEdit></FormEdit> : <ToDoElement></ToDoElement>}</div>
  );
}
export default Task;
