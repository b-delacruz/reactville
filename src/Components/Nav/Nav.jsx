// Components & Assets
import Logo from '../../assets/react-logo.png'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navigation-bar">
      <NavLink id="logo"  to="/">Landing</NavLink>
      <NavLink to="/burgers">BurgerShop</NavLink>

    </nav>
  )
}

export default Nav