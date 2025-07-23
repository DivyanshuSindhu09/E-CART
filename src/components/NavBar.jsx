import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    
      <nav className='nav'>
        <NavLink to='/' className='navigate'>Home</NavLink>
        <NavLink to='/cart' className='navigate'>Cart</NavLink>
      </nav>
 
  )
}

export default NavBar