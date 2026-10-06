import React, { useState } from 'react';
import {
  BiCart,
  BiChevronDown,
  BiGridAlt,
  BiMenu,
  BiMapPin,
  BiMoon,
  BiSearch,
  BiSun,
  BiUser,
} from 'react-icons/bi';
import { useCart } from '../context/CartContext';
import { useDelivery } from '../context/DeliveryContext';

export const Navbar = () => {
  const { totalItems, setIsCartOpen } = useCart();
  const { selectedAddress, selectedStore, mode, setIsDeliveryOpen } = useDelivery();
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.setAttribute('data-bs-theme', next ? 'dark' : 'light');
  };

  return (
    <header className="navbar navbar-expand-lg sticky-top bg-body border-bottom py-2 shadow-sm z-3">
      <div className="container py-1">
        {/* Mobile Hamburger */}
        <button
          className="navbar-toggler border-0 p-1 me-2 d-lg-none"
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          <BiMenu className="fs-2" aria-hidden="true" />
        </button>

        {/* Brand Logo */}
        <a className="navbar-brand fs-3 fw-bold pe-2 me-3" href="/">
          Cart<span className="text-danger">zilla</span>
        </a>

        {/* Desktop Categories Dropdown */}
        <div className="dropdown d-none d-lg-block position-relative me-3">
          <button
            type="button"
            className="btn btn-secondary border-0 rounded-pill px-4 py-2 d-flex align-items-center gap-2 fw-semibold"
            style={{ backgroundColor: '#f3f4f6', color: '#1f2937' }}
            onClick={() => setIsCategoryOpen(!isCategoryOpen)}
          >
            <BiGridAlt className="text-danger" aria-hidden="true" />
            Categories
            <BiChevronDown className="fs-xs ms-1" aria-hidden="true" />
          </button>

        {isCategoryOpen && (
            <div className='dropdown-menu show position-absolute rounded-4 shadow-lg p-4 border-0 mt-2 z-3' style={{ width: '480px', left: 0 }}>
              <div className='row g-3'>
                <div className='col-6'>
                  <h6 className='fw-bold fs-xs text-uppercase text-body-secondary mb-2'>Bakery & bread</h6>
                  <ul className='nav flex-column gap-1 fs-sm'>
                    <li><a className='nav-link py-1 px-0 text-body hover-red' href='#'>Shop all</a></li>
                    <li><a className='nav-link py-1 px-0 text-body hover-red' href='#'>Bread</a></li>
                    <li><a className='nav-link py-1 px-0 text-body hover-red' href='#'>Pastries</a></li>
                    <li><a className='nav-link py-1 px-0 text-body hover-red' href='#'>Bakery Cookies</a></li>
                    <li><a className='nav-link py-1 px-0 text-body hover-red' href='#'>Cupcakes</a></li>
                    <li><a className='nav-link py-1 px-0 text-body hover-red' href='#'>Buns & rolls</a></li>
                  </ul>
                </div>
                <div className='col-6'>
                  <h6 className='fw-bold fs-xs text-uppercase text-body-secondary mb-2'>Vegetables</h6>
                  <ul className='nav flex-column gap-1 fs-sm'>
                    <li><a className='nav-link py-1 px-0 text-body hover-red' href='#'>Shop all</a></li>
                    <li><a className='nav-link py-1 px-0 text-body hover-red' href='#'>Leafy greens</a></li>
                    <li><a className='nav-link py-1 px-0 text-body hover-red' href='#'>Root Vegetables</a></li>
                    <li><a className='nav-link py-1 px-0 text-body hover-red' href='#'>Allium vegetables</a></li>
                    <li><a className='nav-link py-1 px-0 text-body hover-red' href='#'>Peppers and tomatoes</a></li>
                    <li><a className='nav-link py-1 px-0 text-body hover-red' href='#'>Cruciferous</a></li>
                    <li><a className='nav-link py-1 px-0 text-body hover-red' href='#'>Seasonal squashes</a></li>
                    <li><a className='nav-link py-1 px-0 text-body hover-red' href='#'>Beans, peas & lentils</a></li>
                  </ul>
                </div>
                <div className='col-6'>
                  <h6 className='fw-bold fs-xs text-uppercase text-body-secondary mb-2'>Fresh fruits</h6>
                  <ul className='nav flex-column gap-1 fs-sm'>
                    <li><a className='nav-link py-1 px-0 text-body hover-red' href='#'>Shop all</a></li>
                    <li><a className='nav-link py-1 px-0 text-body hover-red' href='#'>Citrus fruits</a></li>
                    <li><a className='nav-link py-1 px-0 text-body hover-red' href='#'>Berries</a></li>
                    <li><a className='nav-link py-1 px-0 text-body hover-red' href='#'>Tropical fruits</a></li>
                    <li><a className='nav-link py-1 px-0 text-body hover-red' href='#'>Stone fruits</a></li>
                    <li><a className='nav-link py-1 px-0 text-body hover-red' href='#'>Exotic fruits</a></li>
                    <li><a className='nav-link py-1 px-0 text-body hover-red' href='#'>Melons</a></li>
                  </ul>
                </div>
                <div className='col-6'>
                  <h6 className='fw-bold fs-xs text-uppercase text-body-secondary mb-2'>Beverages</h6>
                  <ul className='nav flex-column gap-1 fs-sm'>
                    <li><a className='nav-link py-1 px-0 text-body hover-red' href='#'>Shop all</a></li>
                    <li><a className='nav-link py-1 px-0 text-body hover-red' href='#'>Soft drinks</a></li>
                    <li><a className='nav-link py-1 px-0 text-body hover-red' href='#'>Juices</a></li>
                    <li><a className='nav-link py-1 px-0 text-body hover-red' href='#'>Sports & energy drinks</a></li>
                    <li><a className='nav-link py-1 px-0 text-body hover-red' href='#'>Tea and Coffee</a></li>
                    <li><a className='nav-link py-1 px-0 text-body hover-red' href='#'>Alcoholic beverages</a></li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Search Bar */}
        <div className="position-relative flex-grow-1 max-w-md d-none d-md-block mx-3">
          <input
            type="search"
            className="form-control rounded-pill pe-5 py-2 fs-sm border"
            placeholder="Search for fresh fruits, vegetables, meat..."
            aria-label="Search"
          />
          <button
            type="button"
            className="btn btn-sm position-absolute top-50 end-0 translate-middle-y me-2 border-0 rounded-circle text-body-tertiary"
          >
            <BiSearch aria-hidden="true" />
          </button>
        </div>

        {/* Delivery / Store Pickup Trigger */}
        <button
          type="button"
          onClick={() => setIsDeliveryOpen(true)}
          className="btn btn-link text-start text-decoration-none d-none d-xl-flex align-items-center gap-2 px-3 py-1 me-2"
        >
          <div
            className="d-flex align-items-center justify-content-center rounded-circle bg-danger-subtle text-danger"
            style={{ width: '38px', height: '38px' }}
          >
            <BiMapPin className="fs-5" aria-hidden="true" />
          </div>
          <div>
            <div className="fs-xs text-body-secondary fw-semibold text-uppercase">
              {mode === 'delivery' ? 'Deliver to' : 'Pickup at'}
            </div>
            <div className="fs-sm fw-bold text-dark text-truncate" style={{ maxWidth: '140px' }}>
              {mode === 'delivery' ? selectedAddress?.street : selectedStore?.name}
            </div>
          </div>
          <BiChevronDown className="fs-xs text-body-secondary ms-1" aria-hidden="true" />
        </button>

        {/* Right Actions: Theme, Account, Cart */}
        <div className="d-flex align-items-center gap-2 ms-auto">
          {/* Theme Switcher */}
          <button
            type="button"
            onClick={toggleTheme}
            className="btn btn-outline-secondary border-0 rounded-circle p-2 d-flex align-items-center justify-content-center"
            style={{ width: '40px', height: '40px' }}
            aria-label="Toggle theme"
            title="Toggle Light / Dark mode"
          >
            {isDark ? (
              <BiSun className="text-warning" aria-hidden="true" />
            ) : (
              <BiMoon aria-hidden="true" />
            )}
          </button>

          {/* Account Icon */}
          <a
            href="#account"
            className="btn btn-outline-secondary border-0 rounded-circle p-2 d-none d-sm-flex align-items-center justify-content-center"
            style={{ width: '40px', height: '40px' }}
            aria-label="Account"
          >
            <BiUser className="fs-5" aria-hidden="true" />
          </a>

          {/* Shopping Cart Trigger */}
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="btn btn-outline-secondary border-0 rounded-circle p-2 position-relative d-flex align-items-center justify-content-center"
            style={{ width: '40px', height: '40px' }}
            aria-label="Shopping cart"
          >
            <BiCart className="fs-5" aria-hidden="true" />
            {totalItems > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger fs-xs">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Collapse Menu */}
      {isMobileMenuOpen && (
        <div className="d-lg-none w-100 bg-body border-top mt-2 p-3">
          <div className="mb-3">
            <input
              type="search"
              className="form-control rounded-pill py-2 fs-sm"
              placeholder="Search products..."
            />
          </div>
          <button
            onClick={() => {
              setIsDeliveryOpen(true);
              setIsMobileMenuOpen(false);
            }}
            className="btn btn-outline-danger w-100 rounded-pill mb-2 text-start d-flex align-items-center gap-2 py-2"
          >
            <BiMapPin aria-hidden="true" />
            <span>Set delivery or pickup address</span>
          </button>
        </div>
      )}
    </header>
  );
};
export default Navbar;
