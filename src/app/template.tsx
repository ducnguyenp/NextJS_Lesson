import React, { FC } from 'react'
import './globals.css'

type TemplateProps = {
    children: React.ReactNode
}

const Template: FC<TemplateProps> = ({children }) => {
  return (
    <div className='text-red-300'>{children}</div>
  )
}

export default Template
