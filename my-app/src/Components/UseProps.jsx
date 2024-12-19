function UseProps({name,age,Address}) {
    return (
        <div>
            {/* <h3>Name:{props.name}</h3>
            <h3>Age:{props.age}</h3>
            <h3>Address:{props.Address}</h3> */}

            {/* Dstrusturing Props */}
            <h3>Name:{name}</h3>
            <h3>Age:{age}</h3>
            <h3>Address:{Address}</h3>
        </div>
    )
}
export default UseProps