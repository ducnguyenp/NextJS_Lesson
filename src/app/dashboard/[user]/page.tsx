'use client'
import React from 'react'

type Props = {
  params: { user: string }
  searchParams: any
}

const UserDetail: React.FC<Props> = ({ params: { user }, searchParams }) => {
  return <div>User detail {user}</div>
}

export default UserDetail
