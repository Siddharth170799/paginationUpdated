import React from 'react'

const Card = ({item}) => {
  return (
    <div>
      <img style={{ width: '150px', height: '200px' }}  src={item?.thumbnail || item?.image}/>
      <div>{item?.title.slice(0,20)}</div>
      <div>hello</div>
    
    </div>
  )
}

export default Card
