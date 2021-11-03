import "./App.css";
import { Switch, Route } from "react-router-dom";
import Read from "./components/read/read";
import Create from "./components/create/create";
import Update from "./components/update/update";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Curd from "./pages/Crud";
import HookForm from "./pages/HookForm"
import ReactHookForm from "./pages/ReactHookForm"
function App() {
  return (
    <div> 
      <Nav />
      <div className="main"> 
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Curd" component={Curd} />
          <Route path="/create" component={Create} />
          <Route path="/read" component={Read} />
          <Route path="/update" component={Update} />
          <Route path="/form" component={HookForm} />
          <Route path="/reacthookform" component={ReactHookForm} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
