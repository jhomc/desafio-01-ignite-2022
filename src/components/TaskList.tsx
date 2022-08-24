import clipboard from '../assets/Clipboard.svg';
import styles from './TaskList.module.css';

import { TbTrash } from 'react-icons/tb' 
import { useEffect, useState } from 'react';
import { Task } from '../App';

interface TaskListProps {
  taskList: Task[];
  updateTaskStatus: (task: Task) => void;
  deleteTask: (task: Task) => void;
}

export function TaskList ({ taskList, updateTaskStatus, deleteTask }: TaskListProps) {
  const [concludedTaskCounter, setConcludedTaskCounter] = useState(0);

  useEffect(() => {
    if(localStorage.concludedTaskCounter) {
      setConcludedTaskCounter(JSON.parse(localStorage.concludedTaskCounter));
    }
  },[])

  function handleCheckBox (task: Task) {
    updateTaskStatus(task)
    if(task.taskDone) {
      setConcludedTaskCounter(concludedTaskCounter + 1)
      localStorage.concludedTaskCounter = JSON.stringify(concludedTaskCounter + 1)
    } else {
      setConcludedTaskCounter(concludedTaskCounter - 1)
      localStorage.concludedTaskCounter = JSON.stringify(concludedTaskCounter - 1)
    }
  }

  function handleDeleteTask(task: Task) {
    if (task.taskDone) {
      setConcludedTaskCounter(concludedTaskCounter - 1)
      localStorage.concludedTaskCounter = JSON.stringify(concludedTaskCounter - 1)
    }
    
    deleteTask(task)
  }

  return (
    <div className={styles.tasksContainer}>
      <div className={styles.tasksHeader}>
        <div className={styles.createdTasks}>
          <p>
            Tarefas criadas
          </p>
          <span>{taskList.length}</span>
        </div>
        <div className={styles.concludedTasks}>
          <p>
            Concluídas
          </p>
          <span>{concludedTaskCounter} {taskList.length > 0 ? `de ${taskList.length}` : ''}</span>
        </div>
      </div>

      <div className={styles.tasksBody} style={{ borderTop: taskList.length > 0 ? '' : '1px solid var(--grey-400)'}}>
        { taskList.length == 0 ? 
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
                  <input type="checkbox"  checked={task.taskDone} onChange={() => handleCheckBox(task)} />
                  <span className={styles.checkmark} ></span>
                </div>
                <label className={task.taskDone ? styles.checkedLabel : undefined }  >
                  {task.taskDescription}
                </label>
                <TbTrash onClick={() => handleDeleteTask(task)} />
              </div>
            )
          })}
        </>
        } 
      </div>
    </div>

  )
}