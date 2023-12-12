import React from 'react'

const UserList = ({users:[users]}) => {
  return (
    <div>
        <ul>
       {users.map((item,index)=>(
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
    </div>
  )
}
export default UserList