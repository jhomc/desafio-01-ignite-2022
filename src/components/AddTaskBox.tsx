import styles from './AddTaskBox.module.css';
import { FiPlusCircle } from 'react-icons/fi';

interface AddTaskBoxProps {
  taskCounter: number;
  setTaskCounter: (taskCounter: number) => void;
}

export function AddTaskBox ({ taskCounter, setTaskCounter } : AddTaskBoxProps) {
  function handleAddTask () {
    setTaskCounter(taskCounter + 1);
  }

  return (
    <div className={styles.container}>
      <input className={styles.searchBox} type="text" placeholder='Adicione uma nova tarefa'/>
      <div>
        <button onClick={handleAddTask} className={styles.createTaskButton}>
          Criar 
          <FiPlusCircle />
        </button>
      </div>
    </div>
  )
}