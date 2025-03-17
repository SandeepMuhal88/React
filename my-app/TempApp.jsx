// import ConditionRenderning from "./Components/ConditionRenderning";
// import Weather from "./Components/Weather";
// import UserStatus from "./Components/UserStatus";
import Greeting from "./Components/Greeting";
function App() {
  return (
    <div>
      <h1>React App</h1>
      {/* <ConditionRenderning TimeofDay="Morning"/> */}
      {/* <Weather Temperature="30"/> */}
      {/* <UserStatus isLoggedIn={true} isAdmin={false}/> */}
      <Greeting TImeofDay="Morning"/>


    </div>
  )
}
export default App;