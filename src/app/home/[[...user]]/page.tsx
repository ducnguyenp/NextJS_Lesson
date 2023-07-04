'use client'
import React from 'react'

type Props = {
  params: {user: string}
}

const UserDetail: React.FC<Props> = ({params}) => {
  console.log(params)
  return (
    <div>This is user detail</div>
  )
}

export default UserDetail
