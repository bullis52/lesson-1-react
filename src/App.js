import Users from "./components/Users";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import Posts from "./components/Posts";

export default function App() {
    return (
        <Router>
            <div>
                <Link to={'/users'}>users page</Link>
                <Link to={'/posts'}>posts page</Link>
                <div>
                    <Switch>
                        <Route path={'/users'} component={Users}/>
                        <Route path={'/posts'} component={Posts}/>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}