import React from 'react'

const Cart = ({name,phone,debt , deleteHendle}) => {
  return (
    <div className='alert bg-secondary cart'>
      <div>
        <h3>{name}</h3>
        <p>{phone}</p>
      </div>
      <div>
        {debt}$
      </div>
      <div>
        <button  className='btn btn-primary me-2'>Edit</button>
        <button onClick={()=>deleteHendle(name)} className='btn btn-warning'>Delete</button>
      </div>
    </div>
  )
}

export default Cart