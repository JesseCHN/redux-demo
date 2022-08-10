import globalStore from '../states/index'
import { useState, useEffect } from 'react'

export default function Expenses() {
  const [state, setState] = useState(globalStore.getState().value);
  useEffect(() => {
    globalStore.subscribe(() => setState(globalStore.getState().value))
  }, [])
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Expenses { state }</h2>
    </main>
  );
}