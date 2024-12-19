function MapObject() {
    const products = [
        {id:1,
         name:"Laptop",
         Model:"Asus",
         Price:50000,
         image:"https://m.media-amazon.com/images/I/61Zy3yfFy7L._AC_UF1000,1000_QL80_.jpg",
        },
        {
            id:2,
            name:"Mobile",
            Model:"Google",
            Price:50000,
            image:"https://m.media-amazon.com/images/I/61Zy3yfFy7L._AC_UF1000,1000_QL80_.jpg",
        },
        {
            id:3,
            name:"Mobile",
            Model:"Google",
            Price:50000,
            image:"https://m.media-amazon.com/images/I/61Zy3yfFy7L._AC_UF1000,1000_QL80_.jpg",
        }
    ]
    return (
        <div>
            <h1>Product Details</h1>
            {
                products.map((p)=>
                    <div key={p.id}>
                        <ul>
                            <li>Name : {p.name}</li>
                            <li>Model : {p.Model}</li>
                            <li>Price : {p.Price}</li>
                        </ul>
                    
                     </div>
                )
            }   
        </div>
    )
}
export default MapObject;