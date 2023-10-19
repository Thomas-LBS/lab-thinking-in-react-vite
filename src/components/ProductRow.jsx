function ProductRow(props) {
    const productsDB2 = props.db2

    return (
        productsDB2.map((product) => {

            return (

                <tr key={product.id}>
                    {product.inStock ?
                        <td>{product.name}</td>
                        : <td className="red">{product.name}</td>}

                    <td>{product.price}</td>
                </tr>
            )
        })
    )
}

export default ProductRow