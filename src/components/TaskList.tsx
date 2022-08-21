import clipboard from '../assets/Clipboard.svg';
import styles from './TaskList.module.css';

import { TbTrash } from 'react-icons/tb' 

export function TaskList () {
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
          <div className={styles.ckeckContainer}>
            <input type="checkbox"   />
            <span className={styles.checkmark} />
          </div>
          <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
          <TbTrash />
        </div>

      </div>
    </div>

  )
}