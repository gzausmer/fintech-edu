import React from "react";
import styles from "./App.module.scss";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import {bond, stock} from "./consts";

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <header>some header</header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/stocks">Stocks</Link>
            </li>
            <li>
              <Link to="/bonds">Bonds</Link>
            </li>
            <li>Options</li>
            <li>Futures</li>
            <li>Swap</li>
            <li>Forex</li>
            <li>Mutual funds</li>
            <li>ETFs</li>
            <li>Hedge Funds</li>
            <li>Fund Accounting</li>
          </ul>
        </nav>
        <Switch>
          <Route path="/stocks">
            <Screen header="Stocks" definition={stock.definition} />
          </Route>
          <Route path="/bonds">
            <Screen header="Bonds" definition={bond.definition} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Screen({
  header,
  definition,
}: {
  header: string;
  definition: string;
}) {
  return (
    <div>
      <header>{header}</header>
      <section>
        <p>{definition}</p>
      </section>
      <footer />
    </div>
  );
}

export default App;
