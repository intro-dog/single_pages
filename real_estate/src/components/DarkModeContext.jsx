import React, { createContext, useContext, useEffect, useState } from "react"

const DarkModeContext = createContext()

const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    localStorage.setItem("darkMode", !darkMode)
  }

  useEffect(() => {
    const darkMode = localStorage.getItem("darkMode")
    if (darkMode) {
      setDarkMode(JSON.parse(darkMode))
    } else {
      setDarkMode(false)
    }
  }, [])

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}

const useDarkMode = () => {
  const context = useContext(DarkModeContext)
  if (!context) {
    throw new Error("useDarkMode must be used within a DarkModeProvider")
  }
  return context
}

export { DarkModeProvider, useDarkMode }
