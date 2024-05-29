import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { HomePage } from "./pages/home-page";
import { Header } from "./components/header";

function App() {
  return (
    <Provider store={ store }>
      <Router>
        <div className="App">
          <Header/>
          <Switch>
            <Route path="/">
              <HomePage/>
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;