import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../redux/Slices/cartSlice'

const Product = ({data}) => {
  const {cart} = useSelector((state) => state)
  const dispatch = useDispatch()

  // const addItem = () => {
  //   dispatch(add(data))
  // }

  // const removeItem = () => {
  //   dispatch(remove(data.id))
  // }

    console.log(data)
    console.log(data[0].id)
  return data ? (
    <section>
        {data.map((product, id)=>( 
            <div className='product' key={product.id}>
                <p>{product.title}</p>
                <p>{product.description}</p>
                <img src={product.image} alt="" />
                <p> {product.price} $ </p>
                { cart.some((p)=> p.id == product.id) ? <button onClick={() => dispatch(remove(product.id))}>Remove From Cart</button> : <button onClick={() => dispatch(add(product))}>Add To Cart</button> }
            </div>
         ))}
    </section>
  ) : <h1>Loading</h1>
}

export default Product