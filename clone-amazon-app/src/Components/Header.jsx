import React from 'react'
import"./Styles/Header.css"

const Header = () => {
  return (
    <div className='header'>

    <div className="header__logo">eShop</div>
    <div className="header__search">
      <input type="text" placeholder='search items' className='header__searchInput' />
    </div>
    <div className="header__nav">
      <div className="nav__item">
        <span className="nav__itemLineOne">Hello Guest</span>
        <span className="nav__itemLineTwo">Sign In</span>
      </div>
      <div className="nav__item">
        <span className="nav__itemLineOne">Your</span>
        <span className="nav__itemLineTwo">Shop</span>
      </div>
      <div className="nav__item">
        <span className='nav__itemLineOne'>Shopping</span>
        <span className="nav__itemLineTwo">0</span>
      </div>
  
    </div>
      
    </div>
  )
}

export default Header
