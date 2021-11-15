import AddPage from "./components/AddPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import FoodInventory from "./components/FoodInventory";
import ClothesInventory from "./components/ClothesInventory";
import UpdatePage from "./components/UpdatePage";
import ItemModal from "./components/ItemModal";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/food" exact component={FoodInventory} />
          <Route path="/clothes" exact component={ClothesInventory} />
          <Route path="/add" component={AddPage} />
          <Route path="/update" component={UpdatePage} />
          <Route path="/food/:id" component={ItemModal} />
          <Route path="/clothes/:id" component={ItemModal} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
