import { useState } from 'react'
import datas from "./data.json"
import SearchBar from "./components/SearchBar.jsx"
import ProductTable from "./components/ProductTable.jsx"

function App() {
  const [productsData, setProductsData] = useState(datas)



  return (
    <div className="App">
      <div className='title'>
        <h1>IronStore</h1>
      </div>

      {/* the search bar need to access "category", "price", "inStock", "name" */}
      <SearchBar />

      {/* product table display "name" and "price" max 8 produits*/}
      <ProductTable db={productsData} />
      
    </div>
  )
}

export default App
