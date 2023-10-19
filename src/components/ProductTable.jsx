import ProductRow from "./ProductRow.jsx"

function ProductTable(props) {
  const productsDB = props.db

   return (<div>
    <table>
      <thead>
        <tr>
          <th className='title1'>Name</th>
          <th className='title2'>Price</th>
        </tr>
      </thead>
      
      <tbody> 
      <ProductRow db2={productsDB}/>
      </tbody> 

    </table>
  </div>)
}

export default ProductTable