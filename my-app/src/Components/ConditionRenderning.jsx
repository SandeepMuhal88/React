function ConditionRenderning({Timeofday}) {
    return (
        <div>
            <h1>Condition Renderning</h1>
            {
                Timeofday==="morning"?<h1>Good Morning</h1>:<h1>Good Evening</h1>}
        </div>
    )
}
export default ConditionRenderning;