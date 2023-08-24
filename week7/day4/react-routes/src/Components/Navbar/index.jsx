import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
      </ul>
    </nav>
  );
}
 
export default Navbar;