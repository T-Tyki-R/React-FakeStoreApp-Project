// Imports
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HomePage() {

  return (
    <Container >
      <Row>
        <Col className='text-center'>
          <h2>Hi, welcome to the Fake Shop homepage!</h2>
          <p><Link to="/product">Browse</Link> and shop for all the latest goods!</p> {/* Link to Product */}
        </Col>
      </Row>
      <Row>
        <Col className='text-center'>
          <button className='btn shop-btn mt-3 bg-secondary text-light border-0'>
          <Link to="/product" className="link-light link-underline-opacity-0">Shop Now</Link> {/* Button to Product */}
        </button>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;