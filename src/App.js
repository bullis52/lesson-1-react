
import './App.css';
import {useReducer} from "react";
const reducer = (state = {a:0,b:0},action)=>{
    if (action.obj ==='1'&& action.diya === '+'){
      return {...state, a:state.a+10}
    }
    if (action.obj ==='1'&& action.diya === '-'){
      return {...state, a:state.a-2}
    }
    if (action.obj ==='2'&& action.diya === '+'){
        return {...state, b:state.a+20}
    }
    if (action.obj ==='2'&& action.diya === '-'){
        return {...state, b:state.a-10}
    }
    if (action.obj ==='3'&& action.diya === '+'){
        return {...state, c:state.a+15}
    }
    if (action.obj ==='3'&& action.diya === '-'){
        return {...state, c:state.a-5}
    }
}
function App() {
  let [state,dispatch] = useReducer(reducer,{a:0,b:0,c:0})
  let {a,b,c} = state;
  console.log(state)
  return (
    <div className="App">
        <h1>state1-{a}</h1>
      <button onClick={() => dispatch({obj:'1',diya:"+"})}>increment</button>
      <button onClick={()=> dispatch({obj:'1',diya:"-"})}>decrement</button>
        <h1>state1-{b}</h1>
        <button onClick={() => dispatch({obj:'2',diya:"+"})}>increment</button>
        <button onClick={()=> dispatch({obj:'2',diya:"-"})}>decrement</button>
        <h1>state1-{c}</h1>
        <button onClick={() => dispatch({obj:'3',diya:"+"})}>increment</button>
        <button onClick={()=> dispatch({obj:'3',diya:"-"})}>decrement</button>
    </div>
  );
}

export default App;
