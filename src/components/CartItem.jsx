import React from 'react'

const CartItem = ({item, itemIndex}) => {
  return (
    <div>
        <img src={item.image} alt="" />
        {item.title}
        {item.description}
        {item.price}
        <button>Delete</button>
    </div>
  )
}

export default CartItem