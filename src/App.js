import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Homeだ</Link>
        <br />
        <Link to="/Page1">Page1だ</Link>
        <br />
        <Link to="/Page2">Page2だ</Link>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Page1">
          <Page1 />
        </Route>
        <Route path="/Page2">
          <Page2 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
