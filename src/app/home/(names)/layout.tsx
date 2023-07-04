import React from 'react'

type Props = {
    children: React.ReactNode
}

const DashboardLayout: React.FC<Props> = ({children}) => {
  return (
    <div className='bg-green-200'>{children}</div>
  )
}

export default DashboardLayout
