import { Login } from "./Auth/Login";
import Signup from "./Auth/Signup";
import {BrowserRouter as Router,  Route, Routes } from 'react-router-dom'
import { UserProfile } from "./UserProfile/UserProfile";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={  <Signup/> }/>
          <Route path="/login" element={  <Login/> }/>
          <Route path="/profile" element={  <UserProfile/> }/>
        </Routes>
      </Router>

   
   
    </div>
  );
}

export default App;
