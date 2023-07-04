'use client'
import React from 'react'

type Props = {
  params: { user: string }
}

const UserDetailWithProperty: React.FC<Props> = ({ params }) => {
  return <div>User detail {params.user}</div>
}

export default UserDetailWithProperty
