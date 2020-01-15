import React from 'react'
import data from './data'

function Products() {
  //console.log(data.products)
  return (
    <div className="flexContainer">
      <h1>Product List ({data.products.length})</h1>
      {data.products.map((product) => {
        return (
          <div className="body">
            <div>
              <h5>{product.name}</h5>
              <p>made from {product.material}</p>
            </div>
          </div>
        )
      })
      }
    </div>)
}

export default Products
