import {useState, useEffect} from 'react';

function Counter(){
    const [count, setCount] = useState(0);

    useEffect(()=>{
    console.log('Component Mounting');
    const countId = setInterval(()=>{
        setCount((prevCount)=> prevCount + 1);
    }, 1000);
    return ()=> {
        console.log('component being unmounted');
        clearInterval(countId);
        document.title = 'hello';
    }
    }, []); // [] -> means that we want to run code in the moment that the component is rendered initially.

    useEffect(()=>{
        document.title = count;
    }, [count]);

    return(
        <div>
            <h3>{count}</h3>
        </div>
    )

}

export default Counter; 