// Components & Assets
import Logo from '../../assets/react-logo.png'
import { NavLink } from 'react-router-dom'
import Wallet from './Wallet'

const Nav = (props) => {
  return (
    <nav className="navigation-bar">
      <NavLink id="logo"  to="/">Landing</NavLink>
      <NavLink to="/burgers">BurgerShop</NavLink>
      <NavLink to="/market">SuperMarket</NavLink>
      <NavLink to="/wallet">Cash: ${props.cash}</NavLink>

    </nav>
  )
}

export default Nav