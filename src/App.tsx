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
  const [taskList, setTaskList] = useState<Task[]>([]);
  console.log(taskList)

  function deleteTask (task: Task) {
    let newTaskList = taskList.filter(t => {
      return t.id != task.id
    })

    setTaskList(newTaskList);
  }

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
  }

  return (
    <div>
      <Header />

      <main className={styles.container}>
        <AddTaskBox 
          taskCounter={taskList.length} 
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
