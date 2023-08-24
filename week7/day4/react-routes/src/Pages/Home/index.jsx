const imgURL = "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/react-routing/home.gif";

import {useState} from 'react';
import {Navigate} from 'react-router-dom';
 
function HomePage() {
  // State declaration
  const [show, setShow] = useState(true);

  // if show is false
  // ... then redirect to error page
  if(!show){
    return <Navigate to="/error"/>
  }
  return (
    <div>
      <h1>Home</h1>
      <button onClick={()=>setShow(!show)}>
        {show? 'Hide': 'Show'}
      </button>
      <img src={imgURL} alt="home gif" className="page-img" />
    </div>
  );
}
 
export default HomePage;