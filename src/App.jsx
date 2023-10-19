import { useState } from 'react'
import datas from "./data.json"
import SearchBar from "./components/SearchBar.jsx"
import Products from "./components/Products.jsx"

function App() {
  const [productsData, setProductsData] = useState(datas)
 


  return (
    <div className="App">
      <div className='title'>
        <h1>IronStore</h1>
      </div>

      {/* the search bar need to access "category", "price", "inStock", "name" */}
      <SearchBar/>

      {/* product table display "name" and "price" max 8 produits*/}
      <div>
      <table>
        <thead>
        <tr>
          <th className='title1'>Name</th>
          <th className='title2'>Price</th>
        </tr>
        </thead>
        
        <tbody>
          <Products db={productsData}/>

          {/*{productsData.map((product)=>{
            console.log(product)
            return(
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
            </tr>)
          })}*/}
        </tbody>

      </table>
      </div>

    </div>
  )
}

export default App
