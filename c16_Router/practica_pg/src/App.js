import React from "react";
import { Home, Main, Article, Faq, About } from "./index.js";
import { Router, Route, browserHistory } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home}>
          <Route path="/main" component={Main} />
          <Route path="/faq" component={Faq} />
          <Route path="/about" component={About} />
        </Route>
      </Router>
    );
  }
}
export default App;
