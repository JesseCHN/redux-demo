import globalStore from '../states/index'
import { useState,useEffect } from 'react'

export default function Invoices() {
  const [state, setState] = useState(globalStore.getState().value);
  useEffect(() => { 
    globalStore.subscribe(() => setState(globalStore.getState().value))
  },[])
  


  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Invoices {state}</h2>
      <button onClick={() => globalStore.dispatch({ type: 'counter/incremented' })}>加1</button>
      <button onClick={() => globalStore.dispatch({ type: 'counter/decremented' })}>减1</button>
    </main>
  );
}