import './App.css';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import TailwindChat from './TailwindChat'
import ReactChatElements from './ReactChatElements'

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <nav style={{ padding: "20px 0", backgroundColor: "#F2F2F2", marginBottom: "20px"}}>
            <NavLink activeClassName="active" to="tailwind" style={{color: "blue", marginRight: "20px", display: "inline-block"}}>tailwind chat</NavLink>
            <NavLink activeClassName="active" to="elements" style={{color: "blue", display: "inline-box"}}>react chat elements</NavLink>
            {/*
            <a href="/tailwind">tailwind</a>
            <a href="/elements">elements</a>
             */}
          </nav>
        </header>
        <Switch>
          <Route path="/tailwind">
            <TailwindChat />
          </Route>
          <Route path="/elements">
            <ReactChatElements />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
