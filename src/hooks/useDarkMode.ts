import { useState, useEffect } from 'react'
import { UseDarkModeReturn } from '../types'

const useDarkMode = (): UseDarkModeReturn => {
  const [darkMode, setDarkMode] = useState<boolean>(false)

  useEffect(() => {
    // Verifica se há preferência salva no localStorage
    const savedDarkMode = localStorage.getItem('darkMode')
    if (savedDarkMode) {
      setDarkMode(JSON.parse(savedDarkMode))
    }

    // Aplica o modo escuro no body
    if (darkMode) {
      document.body.style.background = '#2c2c2c'
    } else {
      document.body.style.background = '#ffff'
    }
  }, [darkMode])

  const toggleDarkMode = (): void => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    
    // Salva a preferência no localStorage
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode))
  }

  return [darkMode, toggleDarkMode]
}

export default useDarkMode