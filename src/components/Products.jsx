import React from 'react'

const Products = () => {
    const products = [
        {
            "id": 1,
            "name": "Macbook Laptop",
            "description": "This is a good laptop for developers"
        },
        {
            "id": 2,
            "name": "HP Laptop",
            "description": "This is a good laptop for students"
        }
    ]
  return (
    <>
        <h1>Products List</h1>
        {products.map((product) => {
        return <div key={product.id}>
            <p>Name: {product.name}</p> 
            <p>Name: {product.description}</p> 
            <hr/>
        </div>
    })}
    </>
  )
}

export default Products