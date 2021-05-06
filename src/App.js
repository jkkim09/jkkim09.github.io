import './App.css';
import { BrowserRouter,Route, Switch, Link} from "react-router-dom";
import Main from './page/main'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Main}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
