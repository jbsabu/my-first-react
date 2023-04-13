import { useState } from "react"

export default function Counter () {
  let [count,setCount] = useState(0) // first is always state var, second is always the 'setter function'
  return (

    <> 
    <h1>Counter: {count}</h1>
    
    <button onClick={()=>setCount(count*2)}>+1</button> 
    </> 
    )
  }