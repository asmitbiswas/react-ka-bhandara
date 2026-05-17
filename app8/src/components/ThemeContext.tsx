import { useState } from 'react'
import styles from './ThemeSwitcher.module.css'
import { Themecontext } from '../context'

export function ThemeSwitcher() {
  const [theme, setTheme] = useState('light')

  return (
    <Themecontext.Provider value={theme}>
      <div className={styles.switcher} style={{
        background: theme === 'light' ? 'white' : '#333',
        color: theme === 'light' ? 'black' : 'white'
      }}>
        <h1>Current Theme: {theme}</h1>
        
        <button onClick={() => setTheme('light')}>
          Light
        </button>
        
        <button onClick={() => setTheme('dark')}>
          Dark
        </button>
        
        <ChildComponent />
      </div>
    </Themecontext.Provider>
  )
}

function ChildComponent() {
  const theme = useContext(Themecontext)
  
  return (
    <p>Child sees theme: {theme}</p>
  )
}