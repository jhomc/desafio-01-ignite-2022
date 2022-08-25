import styles from './AddTaskBox.module.css';
import { FiPlusCircle } from 'react-icons/fi';
import { Task } from '../App';
import { useState } from 'react';

interface AddTaskBoxProps {
  addTask: (task:Task) => void;
}

if(localStorage.taskList) {
  let localTasks = JSON.parse(localStorage.taskList)
  var id = localTasks.length
} else {
   id = 0
}

export function AddTaskBox ({ addTask } : AddTaskBoxProps) {
  const [task, setTask] = useState('')

  function handleAddTask (task: string) {
    id = id + 1;
    let newTask = {
      id: id,
      taskDescription: task,
      taskDone: false
    }

    if(task == '') {
      window.alert('É necessário preencher uma descrição!')
      return
    }
    addTask(newTask);
    setTask('');
  }

  function handleAddTaskKeyPress (e: any, task:string) {
    if (e.keyCode === 13) {
      handleAddTask(task);
    }
  }

  return (
    <div className={styles.container}>
      <input 
        className={styles.searchBox} 
        type="text" 
        placeholder='Adicione uma nova tarefa' 
        value={task} 
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => handleAddTaskKeyPress(e, task)}
      />
      <div>
        <button onClick={() => handleAddTask(task) }  className={styles.createTaskButton}>
          Criar 
          <FiPlusCircle />
        </button>
      </div>
    </div>
  )
}