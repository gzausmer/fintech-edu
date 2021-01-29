import React from "react";
import styles from "./App.module.scss";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

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
            <li>Bonds</li>
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
            <Stocks />
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

function Card({ header, definition }: { header: string; definition: string }) {
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

function Stocks() {
  const definition =
    "Companies issue stocks as a security to represent a share in the company. These stocks (or `shares`) can be issued internally within the company's founders and employees or via an IPO - enabling the publicto buy a stake in the company.By selling stock to the public, the company in effect raises capital in return for shares.";
  return <Card header="Stocks" definition={definition} />;
}

export default App;
