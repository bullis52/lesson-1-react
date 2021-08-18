import './App.css';
import {
  BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom"
import {User} from "./components/users";
import {Comment} from "./components/comments";
import {Post} from "./components/posts";

function App() {
  return (
      <Router>
          <div className="App">
              <ul>
                <li>
                  <Link to={'/users'}>users</Link>
                </li>
                <li>
                  <Link to={'/posts'}>posts</Link>
                </li>
                <li>
                  <Link to={'/comments'}>comments</Link>
                </li>
              </ul>
          </div>
        <Route path={'/users'} component={User}/>
        <Route path={'/posts'} component={Post}/>
        <Route path={'/comments'} component={Comment}/>
      </Router>
  );
}

export default App;
