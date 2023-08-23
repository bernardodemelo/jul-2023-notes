import {useState} from 'react';

function Counter(){
    // count is a variable that stores state's data of the counter;
    // setCount is a function that updates the count's value;
    // useState creates and Updates State Data

    // useState is a React Hook, it "hooks" into a React Action or Feature.
    // In this case, it "hooks" into the State React Feature :) 
    const [count, setCount] = useState(0);

    return(
    <div className="counter">
        <h2>Counter</h2>
        <p>You clicked {count} times</p>
        <button onClick = {()=> setCount(count+1)}>+</button>
        <button onClick= {()=> setCount(count-1)}>-</button>
    </div>)
}
export default Counter;