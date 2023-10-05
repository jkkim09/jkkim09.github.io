import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./page/main";
import Calender from "./page/Calender";
import Profile from "./page/profile";
import MyPage from "./page/myPage"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Main}></Route>
        <Route path="/about" component={Main}></Route>
        <Route path="/calender" component={Calender}></Route>
        <Route path="/test" component={Profile}></Route>
        <Route path="/profile" component={MyPage}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
