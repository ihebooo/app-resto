import React from 'react';
import '../index.css';
import homeImg from '../assets/cover2.jpg';

function Home() {
  return (
    <div>
      <div style={{ 
          backgroundImage: `url(${homeImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '600px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <div style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center'
        }}>
          <h1 style={{ color: 'white', fontSize: '48px' }}>Bienvenue chez Aquaresto !</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
