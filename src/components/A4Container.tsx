import React, { ReactNode } from 'react'

interface A4ContainerProps {
  children: ReactNode;
  darkMode: boolean;
}

const A4Container: React.FC<A4ContainerProps> = ({ children, darkMode }) => {
  const containerStyle: React.CSSProperties = {
    backgroundColor: darkMode ? '#3c3c3c' : 'white',
    color: darkMode ? '#ffffff' : 'black',
  }

  return (
    <div className="a4-container" style={containerStyle}>
      {children}
    </div>
  )
}

export default A4Container