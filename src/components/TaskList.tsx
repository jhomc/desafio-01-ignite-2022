import clipboard from '../assets/Clipboard.svg';
import styles from './TaskList.module.css';

import { TbTrash } from 'react-icons/tb' 
import { useState } from 'react';

interface TaskListProps {
  taskCounter: number;
  concludedTaskCounter: number;
}

export function TaskList ({ taskCounter, concludedTaskCounter }: TaskListProps) {
  const  [isCheked, setIsCheked] = useState(false)

  function handleCheckBox () {
    setIsCheked(!isCheked)
  }

  return (
    <div className={styles.tasksContainer}>
      <div className={styles.tasksHeader}>
        <div className={styles.createdTasks}>
          <p>
            Tarefas criadas
          </p>
          <span>{taskCounter}</span>
        </div>
        <div className={styles.concludedTasks}>
          <p>
            Concluídas
          </p>
          <span>{concludedTaskCounter}</span>
        </div>
      </div>

      <div className={styles.tasksBody}>
        { taskCounter == 0 ? 
          <div className={styles.noTasks}>
          <img src={clipboard} />
          <strong>Você ainda não tem tarefas cadastradas </strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div> :
          <div className={styles.hasTasks}>
          <div className={styles.checkContainer}>
            <input type="checkbox"  checked={isCheked} onChange={handleCheckBox} />
            <span className={styles.checkmark} ></span>
          </div>
          <label className={isCheked ? styles.checkedLabel : undefined }  >
            Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
          </label>
          <TbTrash />
          </div>
        } 

       

      </div>
    </div>

  )
}