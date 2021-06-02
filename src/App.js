import './App.css';
import { BrowserRouter,Route, Switch, Link} from "react-router-dom";
import Main from './page/main'
import Calender from './page/Calender'
import Profile from './page/profile'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact  path="/" component={Main}></Route>
        <Route path="/about" component={Main}></Route>
        <Route path="/calender" component={Calender}></Route>
        <Route path="/profile" component={Profile}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
