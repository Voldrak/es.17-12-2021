import { useEffect } from "react";
import { useReducer} from 'react';
import './App.css';
import Facts from "./components/Facts.jsx";


const INIT_STATE = {
texts: "{texts}",
permalinks: "{permalinks}"
}

const reducer = (state, action) => {
  switch(action.type){
    case "add":
      return{...state, texts: "ciao" };
  
    default:
      return state;
};
}

function App() {

   
  useEffect(() => {
  fetch("https://uselessfacts.jsph.pl/random.json?language=en")
  .then (response => response.json())
  .then ((data) => (data));
}, [])

  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  return (
    <div className="App">

      <Facts texts={state.texts} />
      <button onClick={() => dispatch({type: "add" })}> Aggiungi </button>
      <button onClick={() => dispatch({type:"remove"})}> Rimuovi </button>
    </div>
  );
}

export default App;
