import AddPage from "./components/AddPage";
import { HashRouter, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import FoodInventory from "./components/FoodInventory";
import ClothesInventory from "./components/ClothesInventory";
import UpdatePage from "./components/UpdatePage";
import ItemModal from "./components/ItemModal";

function App() {
  return (
    <HashRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={FoodInventory} />
          <Route path="/food" exact component={FoodInventory} />
          <Route path="/clothes" exact component={ClothesInventory} />
          <Route path="/add" component={AddPage} />
          <Route path="/update/:collection/:id" component={UpdatePage} />
          <Route path="/food/:id" component={ItemModal} />
          <Route path="/clothes/:id" component={ItemModal} />
        </Switch>
      </Layout>
    </HashRouter>
  );
}

export default App;
