import './App.css'
import Counter from './Components/Counter'; 
import {useState} from 'react';

function App() {
  const [theme, setTheme] = useState('light');
  return (
   <div className={'app ' + theme}>
    <Counter/>
    <select onChange={e => setTheme(e.target.value)}>
      <option value="light"> Light </option>
      <option value="dark"> Dark </option>
    </select>
   </div>
  )
}

export default App
