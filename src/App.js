import "./styles/App.css";
import { Switch, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Read from "./components/read/read";
import Create from "./components/create/create";
import Update from "./components/update/update";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Curd from "./pages/Crud";
import HookForm from "./pages/HookForm";
import TodoImmer from "./pages/TodoImmer";
import ReactHookForm from "./pages/ReactHookForm";
import Paginated from "./pages/Pagination";
import TeaCollection from "./pages/TeaCollection";
import PulseLoader from "react-spinners/PulseLoader";
import styled from "styled-components";

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {loading ? (
        <Center>
          <PulseLoader loading={loading} />
        </Center>
      ) : (
        <>
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
              <Route path="/immer" component={TodoImmer} />
              <Route path="/pagination" component={Paginated} />
              <Route path="/teacollection" component={TeaCollection} />
            </Switch>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
