import styles from './AddTaskBox.module.css';
import { FiPlusCircle } from 'react-icons/fi';


export function AddTaskBox () {
  return (
    <div className={styles.container}>
      <input className={styles.searchBox} type="text" placeholder='Adicione uma nova tarefa'/>
      <div>
        <button className={styles.createTaskButton}>
          Criar 
          <FiPlusCircle />
        </button>
      </div>
    </div>
  )
}