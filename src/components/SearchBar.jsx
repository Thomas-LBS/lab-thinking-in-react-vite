import { useState } from 'react'


function SearchBar({ productsData, setProductsData }) {
    const productsDataCopy = [...productsData]   

    /* search filter function*/
    function searchFilter(event) {
        console.log(event.target.value)
        const productsSearch = productsDataCopy.filter((product)=> {
            product            
        })
        setProductsData(productsSearch)
      }
       


    /* toggle instock function */
    const [checked, setChecked] = useState(false)      
    const productsInStock = productsDataCopy.filter((product)=> product.inStock)
   
    const stockFilter = () => {          
        setChecked(!checked)
        setProductsData(productsInStock)
    } 

    return (
        <div className="search-container">
            <form>
                <div className='position'>
                    <input type="text" placeholder="Search..." name="search" onChange={searchFilter} />
                    <label className='search'><i className="fa fa-search"></i></label>
                </div>
                <label>
                    <input type="checkbox" checked={checked} onChange={stockFilter}/>
                    {!checked ?
                    <span>Show only products in stock</span>
                    : <span>Uncheck to show all products</span>}
                </label>
            </form>
        </div>
    )
}

export default SearchBar