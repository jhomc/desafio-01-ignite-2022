import { useState } from 'react'
import { Header } from './components/Header'
import { AddTaskBox } from './components/AddTaskBox'
import { TaskList } from './components/TaskList'

import styles from './App.module.css'

import './global.css'

function App() {
  const [taskCounter, setTaskCounter] = useState(0)
  const [concludedTaskCounter, setConcludedTaskCounter] = useState(0)

  return (
    <div>
      <Header />

      <main className={styles.container}>
        <AddTaskBox taskCounter={taskCounter} setTaskCounter={setTaskCounter} />
        <TaskList taskCounter={taskCounter} concludedTaskCounter={concludedTaskCounter} />
      </main>
  
    </div>
  )
}

export default App
