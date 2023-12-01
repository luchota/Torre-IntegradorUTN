// ProductCard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductCard = ({ event }) => {
  const price = parseFloat(event.price.replace('$', ''));

  return (
    <div className="product-card">
      <h3>{event.name}</h3>
      <p>Precio: ${price}</p>
      <p>SKU: {event.sku}</p>
      <p>{event.description}</p>
      <img src={event.img} alt={event.name} />
      <Link to={`/detalles/${event.id}`}>Detalles</Link>
    </div>
  );
};

ProductCard.propTypes = {
  event: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    sku: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
