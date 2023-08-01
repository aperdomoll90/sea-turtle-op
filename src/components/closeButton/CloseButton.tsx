import React from 'react'
import './styles.css'
interface ButtonProps {
  label: string
  setVisible: any
  customClass?: string
}

const CloseButton: React.FC<ButtonProps> = ({ setVisible, label, customClass }) => {
  const classArray = customClass ? `action-button ${customClass}` : 'action-button'
  return (
    <button className={classArray} onClick={() => setVisible(false)}>
      {label}
    </button>
  )
}
export default CloseButton
