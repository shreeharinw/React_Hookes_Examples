import React, {useState} from 'react'

function HookCounter() {
    const initialValue = 0;
    const [count, setCount] = useState(initialValue);

    return (
        <div>
           <button onClick={()=> setCount(prevState=> prevState+1)}>Counter {count}</button>
        </div>
    )
}

export default HookCounter
