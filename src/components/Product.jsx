import React from 'react'

const Product = ({data}) => {
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
            </div>
         ))}
    </section>
  ) : <h1>Loading</h1>
}

export default Product