import Home from "./components/Home";
import AddPage from "./components/AddPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UpdatePage from "./components/UpdatePage";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/add" component={AddPage} />
          <Route oath="/update" component={UpdatePage} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
