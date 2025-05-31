// Imports
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HomePage() {

  return (
    <Container >
      <Row>
        <Col className='text-center'>
          <h2>Hi, welcome to the 🏠 page!</h2>
          <p><Link to="/product">Browse</Link> and shop for all the latest goods!</p>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;