// Home.jsx
import React, { useEffect, useState } from 'react';
import Navbar from '../components/NavBar';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase'; 

import ProductCard from '../components/ProductCard';
import "../App.css";

const Home = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const eventsCollection = collection(db, 'Events');
      const eventsSnapshot = await getDocs(eventsCollection);
      const eventsData = eventsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setEvents(eventsData);
    };

    fetchEvents();
  }, []);

  return (
    <div className="product-card-container">
      <div className='nav'>
        <Navbar />
      </div>
      {events.map((event) => (
        <ProductCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default Home;
