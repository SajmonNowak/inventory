import Home from "./components/Home";
import AddPage from "./components/AddPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/add" component={AddPage}/>
      </Switch>
    </Router>
  );
}

export default App;
