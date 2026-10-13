import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CartDrawer from './components/CartDrawar';
import DeliveryDrawer from './components/DeliveryDrawer';
import { CartProvider } from './context/CartContext';
import { DeliveryProvider } from './context/DeliveryContext';
import { AuthProvider } from './context/AuthContext';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import Footer from './components/Footer';
import AccountPage from './pages/AccountPage';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const [currentView, setCurrentView] = useState('home');
  const [catalogCategory, setCatalogCategory] = useState('All');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();

      if (
        hash === '#catalog' ||
        hash === '#catalog-all' ||
        hash.startsWith('#catalog-') ||
        hash.startsWith('#catelog') ||
        hash.startsWith('#category-')
      ) {
        const rawCategory = hash === '#catalog' || hash === '#catalog-all'
          ? 'All'
          : hash.startsWith('#catalog-')
            ? hash.replace('#catalog-', '')
            : hash.startsWith('#catelog')
              ? hash.replace('#catelog', '')
              : 'All';

        setCatalogCategory(rawCategory || 'All');
        setCurrentView('catalog');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      setCurrentView('home');
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <CartProvider>
      <DeliveryProvider>
        <AuthProvider>
          <div className='d-flex flex-column min-vh-100 bg-body'>
            <Navbar />

            <main className="flex-grow-1">
              {location.pathname === '/account' ? (
                <AccountPage />
              ) : currentView === 'catalog' ? (
                <CatalogPage key={catalogCategory} initialCategory={catalogCategory} />
              ) : (
                <HomePage />
              )}
            </main>

            <CartDrawer />
            <DeliveryDrawer />
            <Footer/>
          </div>
        </AuthProvider>
      </DeliveryProvider>
    </CartProvider>
  );
}

export default App;
