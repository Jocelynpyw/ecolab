// import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeScreens from "./Screens/HomeScreens";

import NosValeursScreens from "./Screens/NosValeursScreens";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeScreens} />

          <Route path="/nos-valeurs" component={NosValeursScreens}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
