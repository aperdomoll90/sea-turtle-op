import React, { useEffect } from 'react'
import './styles.css'
import { ModelProps } from './ContentModel.types'
import CloseButton from '../closeButton/CloseButton'
import { preventScrolling } from '@/utils/preventScrolling'

export const ContentModel: React.FC<ModelProps> = ({ title, content, setVisible, visible }) => {
  useEffect(() => {
    if (visible) {
      preventScrolling(true)
    }
  }, [visible])
  return (
    <div className='model-container' data-visible={visible} aria-hidden={!visible} > 
      {title && <h2>{title}</h2>}
      <div className='model-content-container'>{content}</div>
      <CloseButton
        label='Close'
        customClass='model-content-button'
        setVisible={() => {
          preventScrolling(false)
          setVisible(false)
        }}
      />
    </div>
  )
}
