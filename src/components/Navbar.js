import { Link } from 'react-router-dom';
import './Navbar.css';
import SearchBar from './SearchBar';
import { useTheme } from '../hooks/useTheme';
const Navbar = () => {
  const { backgroundColor } = useTheme();
  return (
    <div className='navbar' style={{ backgroundColor: backgroundColor }}>
      <nav>
        <Link to='/' className='brand'>
          <i className='fa-brands fa-blogger' id='blogger'></i>
          <h1>BLOPP</h1>
        </Link>
        <SearchBar />
        <Link to='/create'>Create a blog</Link>
      </nav>
    </div>
  );
};

export default Navbar;
