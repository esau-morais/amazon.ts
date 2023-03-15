// Components
import { Container, RouteLink } from '../index'
import { ProductsList, Row } from './main'
// Products
import Product from './products'

const Main = () => {
  return (
    /* Main */
    <Container>
      <Row>
        <p>Recommended deals: 12 Days of Deals</p>
        <RouteLink to="/">See all</RouteLink>
      </Row>
      <ProductsList>
        <Product id="1" product="Travel Hiking Camping" image="/images/Product1.jpeg" price={34.47} />
        <Product id="2" product="Hippih Classic Unisex" image="/images/Product2.jpeg" price={8.99} />
        <Product id="3" product="Amazon Cloud Cam Indoor" image="/images/Product3.jpeg" price={89.99} />
        <Product id="4" product="CoolBELL 15.6 Inch Nylon" image="/images/Product4.jpeg" price={29.99} />
        <Product id="5" product="Medical Ear Thermometer" image="/images/Product5.jpeg" price={7.69} />
        <Product id="6" product="Mutuw Desk Lamp" image="/images/Product6.jpeg" price={36.99} />
      </ProductsList>
    </Container>
  )
}

export default Main
