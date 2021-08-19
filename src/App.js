import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom"
import {Cars} from "./components/cars/cars";
function App() {
    return (
        <Router>
            <div className="App">
                <ul>
                    <li>
                        <Link to={'/'}>home</Link>
                    </li>
                    <li>
                        <Link to={'/all'}>Всі</Link>
                    </li>
                    <li>
                        <Link to={'/even'}>парні</Link>
                    </li>
                    <li>
                        <Link to={'/odd'}>не парні</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path={'/all'} render={(props)=><Cars param={props}/>}/>
                    <Route path={'/even'} render={(props)=><Cars param={props}/>}/>
                    <Route path={'/odd'} render={(props)=><Cars param={props}/>}/>

                </Switch>
            </div>

        </Router>
    );
}

export default App;