import styles from './Header.module.css';
import todoLogo from '../assets/logo-todo.png';

export function Header () {
  return(
    <header className={styles.header}>
      <img className={styles.logo} src={todoLogo} alt="desenho de foguete com escrita todo ao lado"/>
    </header>
  )
}