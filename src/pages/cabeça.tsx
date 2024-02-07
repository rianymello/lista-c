import React from 'react';

const Cabeca = () => {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1 style={{ margin: 0 }}>Meu Cabeçalho</h1>
      <nav>
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex' }}>
          <li style={{ marginRight: '10px' }}><a href="#">Item 1</a></li>
          <li style={{ marginRight: '10px' }}><a href="#">Item 2</a></li>
          <li><a href="#">Item 3</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Cabeca;
