import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const Details: React.FC = () => (
  <Container>
    <h1>Details</h1>
    <Link to="/">Go to Home</Link>
  </Container>
);

export default Details;
