import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
    <div className="nav-bar">
      <Link to={'/'} className='brand'>eCommerce</Link>
      <div className=''>
        <input type="text" placeholder='search product' />
      </div>
      <Link to={'/cart'} className='cart'>Cart</Link>
      </div>

      <div className="nav-bar-wrapper">
        <div className="items">Filter by {"->"}</div>
        <div className="items">No Filter</div>
        <div className="items">Mobile</div>
        <div className="items">Laptops</div>
        <div className="items">Tablets</div>
        <div className="items">{"->"}29999</div>
        <div className="items">{"->"}£39999</div>
        <div className="items">{"->"}£49999</div>
        <div className="items">{"->"}£59999</div>
      
      </div>
    </header>
  )
}

export default Navbar
