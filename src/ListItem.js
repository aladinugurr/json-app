import React from 'react'

const ListItem = ({item}) => {
  return (
    <div>
         <p>{JSON.stringify(item)}</p> 
    </div>
  )
}

export default ListItem