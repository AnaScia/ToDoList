import './App.css';
import Task from './components/task';
import { useState } from 'react';

function App() {
  const [task, setTask] = useState('');
  const [toDos, setToDos] = useState([]);

  function handleChange(e) {
    const value = e.target.value;
    setTask(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newToDo = {
      id: Math.random(),
      title: task,
      completed: false,
    };
    const temp = [...toDos];
    //agregar a la lista al principio
    temp.unshift(newToDo);
    setToDos(temp);

    setTask('');
  }

  function handleUpdate(id, value) {
    const temp = [...toDos];
    const item = temp.find((item) => item.id === id);
    item.title = value;
    setToDos(temp);
  }

  function handleDelete(id) {
    const temp = toDos.filter((item) => item.id !== id);
    setToDos(temp);
  }
  return (
    <>
      <h1>To do List</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={task}></input>
        <input type="submit" onClick={handleSubmit} value="crear" />
      </form>

      <div>
        {toDos.map((item) => (
          <Task
            key={item.id}
            item={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </>
  );
}

export default App;
