import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'

const Cart = () => {
  const {cart} = useSelector((state) => state)
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
    </>
  )
}

export default Cart