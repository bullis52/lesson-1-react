
import './App.css';
import {useReducer} from "react";
const reducer = (state = {a:0,b:0},action)=>{
    if (action.obj ==='1'&& action.diya === '+'){
      return {...state, a:state.a+10}
    }
    if (action.obj ==='1'&& action.diya === '-'){
      return {...state, a:state.a-2}
    }

}
function App() {
  let [state,dispatch] = useReducer(reducer,{a:0,b:0})
  let {a,b} = state;
  console.log(state)
  return (
    <div className="App">
        <h1>state1-{a}</h1>
      <button onClick={() => dispatch({obj:'1',diya:"+"})}>increment</button>
      <button onClick={()=> dispatch({obj:'1',diya:"-"})}>decrement</button>
    </div>
  );
}

export default App;
