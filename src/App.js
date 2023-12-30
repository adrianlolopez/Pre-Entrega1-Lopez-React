import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className='principal-text'>
      <NavBar />
      <ItemListContainer greeting="¡Welcome to our Digital Store!" />
      {/* Otros componentes o secciones de tu aplicación */}
    </div>
  );
}

export default App;
