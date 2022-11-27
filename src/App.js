import { Link } from 'react-router-dom';
import Logo from "../src/assets/images/Logo.png"
import './App.css';

function App() {
  return (
    <div className='contain'>
      <img src={Logo} alt='Bani Logo' className='logo'/>
      <div className='card'>
        <p className='header sm:text-2xl'>Log in to your account</p>
        <p className='paragraph sm:text-base'>Don't have an account? <span className='coloredParagraph'>Get Started</span></p>
        <form className='details'>
          <label className='text-sm'>
            Email
            <input type="email" placeholder='E.g: victor.onazi@getbani.co' className='inputs'/>
            </label>
          <label className='text-sm'>
            Password
            <input placeholder='Password' className='inputs'/>
            </label>
          <Link to='/dashboard'>
          <button className='btn'>Log in</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default App;
