function Product({name,price,Model}) {
    return (
        <div>
            <h3>Item deatils</h3>
            <ul>
                <li>Name:{name}</li>
                <li>Price:{price}</li>
                <li>Model:{Model}</li>  
            </ul>
        </div>
    )
}
export default Product;