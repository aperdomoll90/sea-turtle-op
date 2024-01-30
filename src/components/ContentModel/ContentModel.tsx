import React from 'react'
import './styles.css'
import { ModelProps } from './ContentModel.types'
import CloseButton from '../closeButton/CloseButton'

export const ContentModel: React.FC<ModelProps> = ({ title, content, setVisible }) => {
  return (
    <div className='model-container'>
      {title && <h2>{title}</h2>}
      <div className='model-content-container'>{content}</div>
      <CloseButton label='Close' customClass='model-content-button' setVisible={() => setVisible()} />
    </div>
  )
}
