import React, { useEffect, useState } from 'react';
import Navbar from '../components/NavBar';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase'; 


const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productDoc = await getDoc(doc(db, 'Events', id));
        if (productDoc.exists()) {
          setProduct({ id: productDoc.id, ...productDoc.data() });
        } else {
          console.error(`Product with ID ${id} not found.`);
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleBuyClick = () => {
    alert(`Compra realizada para ${product.name}!`);
  };

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (!product) {
    return <p>Error: Producto no encontrado.</p>;
  }

  return (
    <div className="product-card-container">
      <Navbar />
      <div className="product-card">
        <h2>Detalle de Producto</h2>
        <p>ID del Producto: {product.id}</p>
        <p>Nombre: {product.name}</p>
        <p>Descripción: {product.description}</p>
        <p>Precio: ${product.price}</p>
        <p>SKU: {product.sku}</p>
        <img src={product.img} alt={product.name} />
        <button onClick={handleBuyClick}>Comprar</button>
      </div>
    </div>
  );
};

export default ProductDetail;
