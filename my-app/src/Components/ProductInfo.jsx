function ProductInfo() {
    const product ={
        id:1,
        name:"Laptop",
        price:50000,
        availablility:"In Stock"
    }
    return(
        <div>
            <h1>Product Info</h1>
            <p>Id:{product.id}</p><p>Name:{product.name}</p><p>Price:{product.price}</p><p>Availability:{product.availablility}</p>
            {/* <p>Product information</p>
            <ol>
                <li>Id:{product.id}</li>
                <li>Name:{product.name}</li>
                <li>Price:{product.price}</li>
                <li>Availability:{product.availablility}</li>
            </ol> */}
        </div>
    )
}
export default ProductInfo;