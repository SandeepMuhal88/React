function Greeting() {
    const Name="Rahul";
    var date = new Date().toLocaleDateString();

    return(
        <div >
            <h1>Good Morning {Name}</h1>
            <p> Date:-{date}</p>
        </div>
    )
}
export default Greeting;