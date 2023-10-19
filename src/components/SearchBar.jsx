function SearchBar() {
    return (
        <div className="search-container">
            <form>
                <input type="text" placeholder="Search.." name="search"/>
                <button type="submit"><i className="fa fa-search"></i></button>
                <br />
                <input type="checkbox" id="stock" name="inStock" />
                <label htmlFor="inStock">Show only products in stock</label>
            </form>
        </div>
    )
}

export default SearchBar