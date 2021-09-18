import './App.css';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import TailwindChat from './TailwindChat'

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <nav style={{ padding: "20px 0", backgroundColor: "#F2F2F2", marginBottom: "20px"}}>
            <NavLink activeClassName="active" to="tailwind">tailwind chat</NavLink>
          </nav>
        </header>
        <Switch>
          <Route path="/tailwind">
            <TailwindChat />
          </Route>
        </Switch>
     </div>
    </BrowserRouter>
  );
}

export default App;
