import clipboard from '../assets/Clipboard.svg';
import styles from './TaskList.module.css';

import { TbTrash } from 'react-icons/tb' 
import { useState } from 'react';
import { Task } from '../App';

interface TaskListProps {
  taskCounter: number;
  concludedTaskCounter: number;
  taskList: Task[];
}

export function TaskList ({ taskCounter, concludedTaskCounter, taskList }: TaskListProps) {
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
        <>
          {taskList.map(task => {
            return (
              <div key={task.id} className={styles.hasTasks}>
          <div className={styles.checkContainer}>
            <input type="checkbox"  checked={isCheked} onChange={handleCheckBox} />
            <span className={styles.checkmark} ></span>
          </div>
          <label className={task.taskDone ? styles.checkedLabel : undefined }  >
            {task.taskDescription}
          </label>
          <TbTrash />
          </div>
            )
          })}
        </>
        } 

       

      </div>
    </div>

  )
}