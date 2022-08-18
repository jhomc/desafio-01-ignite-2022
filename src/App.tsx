import { useState } from 'react'
import { Header } from './components/Header'
import { AddTaskBox } from './components/AddTaskBox'

import styles from './App.module.css'

import './global.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />

      <main className={styles.container}>
        <AddTaskBox />
        {/* <TaskContainer /> */}
      </main>
  
    </div>
  )
}

export default App
