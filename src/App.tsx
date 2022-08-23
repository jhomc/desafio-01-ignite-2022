import { useState } from 'react'
import { Header } from './components/Header'
import { AddTaskBox } from './components/AddTaskBox'
import { TaskList } from './components/TaskList'

import styles from './App.module.css'

import './global.css'

export interface Task {
  id: number;
  taskDescription: string;
  taskDone: boolean;
}


function App() {
  const [taskCounter, setTaskCounter] = useState(0);
  const [taskList, setTaskList] = useState<Task[]>([]);

  function updateTaskStatus (task: Task) {
    let updatedTaskList = taskList.map(t => {
      if (t.id === task.id) {
         t.taskDone = !task.taskDone
      }
      return t
    })

    setTaskList(updatedTaskList)
  }

  function addTask (task: Task) {
    let newTaskList = [...taskList, task]

    setTaskList(newTaskList);
    setTaskCounter(taskCounter + 1);
    console.log(taskList);
  }

  return (
    <div>
      <Header />

      <main className={styles.container}>
        <AddTaskBox 
          taskCounter={taskCounter} 
          addTask={addTask}
        />
        <TaskList
          taskList= {taskList} 
          taskCounter={taskCounter} 
          updateTaskStatus={updateTaskStatus} 
        />
      </main>
  
    </div>
  )
}

export default App
