import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const Home: React.FC = () => (
  <Container>
    <h1>Home</h1>
    <Link to="details">Go to Details</Link>
  </Container>
);

export default Home;
