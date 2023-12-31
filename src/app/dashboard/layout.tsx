import React from 'react'

type Props = {
    children: React.ReactNode
}

export const metadata = {
  title: 'User detail',
  description: 'Generated by create next app',
}

const DashboardLayout: React.FC<Props> = ({children}) => {
  return (
    <div className='bg-green-200'>{children}</div>
  )
}

export default DashboardLayout
