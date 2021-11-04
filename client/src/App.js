import Home from "./components/Home";
import AddPage from "./components/AddPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import FoodInventory from "./components/FoodInventory";
import ClothesInventory from "./components/ClothesInventory";
import UpdatePage from "./components/UpdatePage";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/food" exact component={FoodInventory} />
          <Route path="/clothes" component={ClothesInventory} />
          <Route path="/add" component={AddPage} />
          <Route path="/update" component={UpdatePage} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
