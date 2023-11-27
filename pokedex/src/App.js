import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Main from "./pages/Main/Main";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <Router>
        <Route path="/" exact component={Home} />
        <Route path="/main" component={Main} />
    </Router>
  );
};

export default App;
