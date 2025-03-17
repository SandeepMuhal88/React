// function Person(props) {
function Person({name,age,Address}) {
    return (
        <div>
            {/* <h2>Name:{props.name}</h2>
            <p>Age:{props.age}</p>
            <p>Address:{props.Address}</p> */}

            <h2>Name:{name}</h2>
            <p>Age:{age}</p>
            <p>Address:{Address}</p>
        </div>
    )
}
export default Person;