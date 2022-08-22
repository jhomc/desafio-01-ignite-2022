import clipboard from '../assets/Clipboard.svg';
import styles from './TaskList.module.css';

import { TbTrash } from 'react-icons/tb' 
import { useState } from 'react';

export function TaskList () {
  const  [isCheked, setIsCheked ] = useState(false)

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
          <span>0</span>
        </div>
        <div className={styles.concludedTasks}>
          <p>
            Concluídas
          </p>
          <span>0</span>
        </div>
      </div>

      <div className={styles.tasksBody}>
        <div className={styles.noTasks}>
          <img src={clipboard} />
          <strong>Você ainda não tem tarefas cadastradas </strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>

        <div className={styles.hasTasks}>
          <div className={styles.checkContainer}>
            <input type="checkbox"  checked={isCheked} onChange={handleCheckBox} />
            <span className={styles.checkmark} ></span>
          </div>
          <label>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</label>
          <TbTrash />
        </div>

      </div>
    </div>

  )
}