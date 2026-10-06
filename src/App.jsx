import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CartDrawer from './components/CartDrawar';
import DeliveryDrawer from './components/DeliveryDrawer';
import { CartProvider } from './context/CartContext';
import { DeliveryProvider } from './context/DeliveryContext';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';

function App() {
  const [currentView] = useState('home');
  const [catalogCategory] = useState('All');

  return (
    <CartProvider>
      <DeliveryProvider>
        <div className='d-flex flex-column min-vh-100 bg-body'>
          <Navbar />

          <main className="flex-grow-1">
            {currentView === 'catalog' ? (
              <CatalogPage intialCategory={catalogCategory}/>
            ) : (
                 <HomePage />
            )}
          </main>

          <CartDrawer />
          <DeliveryDrawer />
        </div>
      </DeliveryProvider>
    </CartProvider>
  );
}

export default App;
