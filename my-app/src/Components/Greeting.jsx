function Greeting({TImeofDay}) {
    return (
        <div>
            <h1>Hello World</h1>
            {
                TImeofDay==="morning"?<h1>Good Morning</h1>:<h1>Good Evening</h1>
            }
        </div>
    )
}
export default Greeting