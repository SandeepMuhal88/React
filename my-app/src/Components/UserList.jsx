function UserList() {
    const products = [
        { id: 1, name: "Phone", price: "$699" },
        { id: 2, name: "Laptop", price: "$1200" },
        { id: 3, name: "Headphones", price: "$199" },];
    const users = [
        { id: 1, name: "Alice", age: 25 },
        { id: 2, name: "Bob", age: 30 },
        { id: 3, name: "Charlie", age: 22 },
        { id: 4, name: "David", age: 28 }, ];
    return(
        <div>
            <h1>User List</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        Name: {user.name}, Age: {user.age}
                    </li>
                ))}
            </ul>
            <h1>Product List</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        Name: {product.name}, Price: {product.price}
                    </li>
                ))}
            </ul>
        </div>
        
    )
}
export default UserList;