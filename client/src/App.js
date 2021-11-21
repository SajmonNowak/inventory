import AddPage from "./components/AddPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import FoodInventory from "./components/FoodInventory";
import ClothesInventory from "./components/ClothesInventory";
import UpdatePage from "./components/UpdatePage";
import ItemModal from "./components/ItemModal";
import StatisticsPage from "./components/StatisticsPage";


function App() {
  return (
    <Router>
      <Layout>
        <Switch>
        <Route path="/" exact component={FoodInventory} />
          <Route path="/food" exact component={FoodInventory} />
          <Route path="/clothes" exact component={ClothesInventory} />
          <Route path="/add" component={AddPage} />
          <Route path="/statistics" component={StatisticsPage} />
          <Route path="/update/:collection/:id" component={UpdatePage} />
          <Route path="/food/:id" component={ItemModal} />
          <Route path="/clothes/:id" component={ItemModal} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
