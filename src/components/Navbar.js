import { Link } from 'react-router-dom';
import './styles.css';

const Nav = () => (
  <nav className="navbar">
    <h1 className="logo">Math Magicians</h1>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/calculator">Calculator</Link></li>
      <li><Link to="/quote">Quote</Link></li>
    </ul>
  </nav>
);

export default Nav;
