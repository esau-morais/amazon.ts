import { useState } from 'react'
import CurrencyFormat from 'react-currency-format'

// Components
import { Badge } from '@material-ui/core'
import {
  LocalMallOutlined,
  ArrowBackIosRounded,
  ArrowForwardIosRounded
} from '@material-ui/icons'

// Basket
import { auth } from '../../config/firebase'
import { useCartValue } from '../../providers/cart'
import { cartTotalPrice } from '../../providers/reducer'
// Firebase auth
import { RouteLink } from '../index'
import { Nav, Row, SearchBar, Cart, CartRow, CartPrices } from './aside'

const iconStyle = {
  fontSize: '0.9rem',
  marginRight: '0.4rem'
}

const Aside = () => {
  // Define state to open/hide the side bar
  const [open, setOpen] = useState(false)
  const [{ basket, user }] = useCartValue()

  // Handle the user login in/out
  const handleUserAuth = () => {
    if (user) {
      auth.signOut()
    }
  }

  return (
    <Nav open={open}>
      {/* Logo */}
      <RouteLink to="/">
        <img className="defaultLogo" src="/images/AmazonLogo.png" alt="Amazon" />
        <img className="minimalLogo" src="/images/AmazonLogoMinimal.png" alt="Amazon" />
      </RouteLink>
      {/* Selection */}
      <Row open={open}>
        <select>
          <option>Departments</option>
        </select>

        <select>
          <option>My Amazon</option>
        </select>
      </Row>
      {/* Search bar */}
      <SearchBar open={open}>
        <label htmlFor="search">Search your products</label>
        <div>
          <input
            id="search"
            type="text"
            placeholder="What are you looking for?"
          />
        </div>
      </SearchBar>
      {/* Cart section */}
      <Cart open={open}>
        <RouteLink className="signInOut" to={!user && '/login'} onClick={handleUserAuth}>
          {user ?
            'Logout'
            :
            'Login'
          }
        </RouteLink>
        <CartRow>
          {/* If the side bar is open, return both.
              Otherwise, return just "Open"
          */}
          {open ? <p>Your total price</p> : <></>}
          <span role="button" tabIndex={0} onKeyDown={e => e.preventDefault()} onMouseDown={e => e.preventDefault()} onClick={() => setOpen(!open)}>
            {open ? (
              <>
                <ArrowBackIosRounded style={iconStyle} />
                Roll
              </>
            ) : (
              <>
                Open
                <ArrowForwardIosRounded style={iconStyle} />
              </>
            )}
          </span>
        </CartRow>
        {/* Prices section */}
        <CartPrices open={open}>
          <div>
            {/* The badge content will be/is dynamic */}
            <Badge
              badgeContent={basket.length}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
              }}
              color="primary"
            >
              <LocalMallOutlined />
            </Badge>
            {/* The total price will be/is dynamic */}
            <CurrencyFormat
              renderText={(value) => (
                <span className="totalPrice">{value}</span>
              )}
              value={cartTotalPrice(basket)}
              decimalScale={2}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'$'}
            />
          </div>

          <RouteLink to="/checkout">View my cart</RouteLink>

          <hr />
        </CartPrices>
      </Cart>
    </Nav>
  )
}

export default Aside
