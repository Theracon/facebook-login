import "./App.css";

import { Link, Switch, Route } from "react-router-dom";

import Facebook from "./components/Facebook";

function App() {
  return (
    <div className="App">
      <header className="App-header">Facebook Login</header>
      <main>
        <p>
          To get started,
          <Link to="/login">
            <span> Login with Facebook.</span>
          </Link>
        </p>
        <Route exact path="/login" component={Facebook} />
      </main>
    </div>
  );
}

export default App;
