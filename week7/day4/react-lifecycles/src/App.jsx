import './App.css';
import {useState} from 'react';
import Counter from './Components/Counter';
import IronBnb from './Components/Ironbnb';

function App() {
  // state variable is called 'show'
  // function that is going to update the value from this state variable is called 'setShow'

  const [show, setShow] = useState(true);

  return (
    <div>
    <button onClick={()=>setShow(!show)}>
      {show? 'Hide' : 'Show'}
    </button>

    {show && <IronBnb/>}
    
    </div>
  )
}

export default App
