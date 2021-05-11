import './App.css';
import { BrowserRouter,Route, Switch, Link} from "react-router-dom";
import Main from './page/main'
import Test from './page/test'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact  path="/" component={Main}></Route>
        <Route path="/about" component={Main}></Route>
        <Route path="/test" component={Test}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
