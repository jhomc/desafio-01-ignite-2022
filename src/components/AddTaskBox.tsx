import styles from './AddTaskBox.module.css';
import { FiPlusCircle } from 'react-icons/fi';
import { Task } from '../App';
import { useState } from 'react';

interface AddTaskBoxProps {
  taskCounter: number;
  addTask: (task:Task) => void;
}

export function AddTaskBox ({ taskCounter, addTask } : AddTaskBoxProps) {
  const [task, setTask] = useState('')
  
  function handleAddTask (task: string) {
    
    let newTask = {
      id: taskCounter + 1,
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

  return (
    <div className={styles.container}>
      <input 
        className={styles.searchBox} 
        type="text" 
        placeholder='Adicione uma nova tarefa' 
        value={task} 
        onChange={(e) => setTask(e.target.value)}
      />
      <div>
        <button onClick={() => handleAddTask(task) } className={styles.createTaskButton}>
          Criar 
          <FiPlusCircle />
        </button>
      </div>
    </div>
  )
}