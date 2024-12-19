function MapFun() {
    const arr=[1,2,3,4,5];
    const numbers = [1, 2, 3, 4, 5];
    return(
        <div>
            <h1>Map function</h1>
            <ul> {numbers.map((number) => ( <li key={number}>{number}</li> ))} </ul>
        </div>
    )
}
export default MapFun;