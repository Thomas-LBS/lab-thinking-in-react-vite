import { useState } from 'react'

function Products(props) {
    
    const productsDB = props.db
    console.log(productsDB)
    

    return (
        productsDB.map((product)=>{
            console.log(product)
            return(
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
            </tr>)
          })
    )
}

export default Products