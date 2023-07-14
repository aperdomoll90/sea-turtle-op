import React from 'react'
import './styles.css'
import { ModelProps } from './Model.types'

export const Model: React.FC<ModelProps> = ({ tittle, content, setVisible }) => {
  return (
    <div className='model-container'>
      <h2>{tittle}</h2>
      <div className='model-content-container'>{content}</div>
      <button className='model-container-close-button' onClick={() => setVisible(false)}>
        Close
      </button>
    </div>
  )
}
