function SearchBar() {
    return (
        <div className="search-container">
            <form action="">
                <input type="text" placeholder="Search.." name="search" />
                <button type="submit"><i class="fa fa-search"></i></button>
                <br />
                <input type="checkbox" id="stock" name="inStock" />
                <label for="inStock">Show only products in stock</label>
            </form>
        </div>
    )
}

export default SearchBar