import { useEffect, useState } from 'react'
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
  const [taskList, setTaskList] = useState<Task[]>([]);

  useEffect(() => {
    if(localStorage.taskList) {
      setTaskList(JSON.parse(localStorage.taskList))
    }
  }, []);

  function deleteTask (task: Task) {
    let newTaskList = taskList.filter(t => {
      return t.id != task.id
    })

    setTaskList(newTaskList);
    localStorage.taskList = JSON.stringify(newTaskList)
  }

  function updateTaskStatus (task: Task) {
    let updatedTaskList = taskList.map(t => {
      if (t.id === task.id) {
         t.taskDone = !task.taskDone
      }
      return t
    })

    setTaskList(updatedTaskList)
    localStorage.taskList = JSON.stringify(updatedTaskList)
  }

  function addTask (task: Task) {
    let newTaskList = [...taskList, task]

    setTaskList(newTaskList);
    localStorage.taskList = JSON.stringify(newTaskList)
  }

  return (
    <div>
      <Header />

      <main className={styles.container}>
        <AddTaskBox 
          addTask={addTask}
        />
        <TaskList
          taskList= {taskList} 
          updateTaskStatus={updateTaskStatus} 
          deleteTask={deleteTask}
        />
      </main>
  
    </div>
  )
}

export default App
