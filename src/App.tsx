import React from "react";
import styles from "./App.module.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { financialAssets, res } from "./consts";
import { NavBar } from "./NavBar/NavBar";
import { DropdownMenu } from "./Dropdown/DropdownMenu";
import { DropdownListItem } from "./Dropdown/DropdownListItem";

function App() {
  console.log({ res });
  const assetDropdownOptions = financialAssets.map((asset) => ({
    id: asset.id,
    value: (
      <DropdownListItem title={asset.title} navigateLink={`/${asset.id}`} />
    ),
  }));

  return (
    <Router>
      <div className={styles.App}>
        <NavBar>
          <DropdownMenu options={assetDropdownOptions} title={"assets"} />
          <DropdownMenu options={assetDropdownOptions} title={"terms"} />
          <div>portfolio</div>
          <div>trade</div>
          <div>user</div>
        </NavBar>
        <Switch>
          {financialAssets.map((asset) => (
            <Route path={`/${asset.id}`}>
              <Screen header={asset.title} definition={asset.definition} />
            </Route>
          ))}
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
