import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'

const Cart = () => {
  const {cart} = useSelector((state) => state)
  const [totalAmount, setTotalAmount] = useState(0)

  useEffect(()=>{
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price , 0 ) )
  },[cart])
  
  return (
    <>
    <div>
      {
        cart.length > 0 ? 
        ( <div> 
            {
              cart.map((item , index)=>(
                <CartItem key={item.id} item={item} itemIndex={index} />
              ))
            }
          </div> ) :
        ( <div className='empty '>No item in your cart</div> )
      }
    </div>
    <div className='empty'>
      Your cart summary
      <span>Total Items : { cart.length }</span>
      <p>Total amount : {totalAmount} </p>
    </div>
    </>
  )
}

export default Cart