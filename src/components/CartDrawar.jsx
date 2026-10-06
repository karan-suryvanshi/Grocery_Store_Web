import React from 'react';
import { useCart } from '../context/CartContext';

export const CartDrawer = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    updateQuantity,
    removeFromCart,
    subtotal,
    freeDeliveryQualified,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fade show modal-backdrop"
        style={{ zIndex: 1045 }}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Offcanvas Drawer */}
      <div
        className="offcanvas offcanvas-end show border-0 shadow-lg d-flex flex-column"
        style={{
          visibility: 'visible',
          zIndex: 1050,
          width: '480px',
          maxWidth: '100vw',
        }}
        tabIndex="-1"
      >
        {/* Header */}
        <div className="offcanvas-header flex-column align-items-start border-bottom pb-3">
          <div className="d-flex align-items-center justify-content-between w-100 mb-3">
            <h5 className="offcanvas-title fw-bold">Shopping cart</h5>
            <button
              type="button"
              className="btn-close"
              onClick={() => setIsCartOpen(false)}
              aria-label="Close"
            />
          </div>

          {/* Free Shipping Alert Box */}
          <div
            className={`alert w-100 mb-0 border-0 rounded-4 py-2 px-3 fs-xs ${
              freeDeliveryQualified
                ? 'alert-success text-success-emphasis'
                : 'alert-warning text-warning-emphasis'
            }`}
          >
            {freeDeliveryQualified ? (
              <span>
                🎉 Congratulations! You have added more than <strong>$100</strong> to your cart. <strong>Delivery is free</strong> for you!
              </span>
            ) : (
              <div>
                <span>
                  Add <strong>${(50 - subtotal).toFixed(2)}</strong> more to get <strong>Free Delivery</strong>!
                </span>
                <div className="progress mt-2" style={{ height: '5px' }}>
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: `${Math.min((subtotal / 50) * 100, 100)}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Body (Items List) */}
        <div className="offcanvas-body flex-grow-1 overflow-y-auto p-4 d-flex flex-column gap-3">
          {cart.length === 0 ? (
            <div className="text-center py-5 text-body-secondary my-auto">
              <i className="bi bi-cart-x fs-1 d-block mb-3 opacity-50"></i>
              <h6 className="fw-bold mb-1">Your cart is empty</h6>
              <p className="fs-xs mb-0">Browse our grocery store and add items!</p>
            </div>
          ) : (
            cart.map(({ product, quantity }) => (
              <div key={product.id} className="d-flex align-items-center gap-3 pb-3 border-bottom">
                {product.image && (
                  <div
                    className="rounded-3 bg-light p-2 flex-shrink-0 text-center"
                    style={{ width: '85px', height: '85px' }}
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="img-fluid h-100 object-fit-contain"
                    />
                  </div>
                )}
                <div className="flex-grow-1 min-w-0">
                  <h6 className="fs-sm fw-semibold mb-1 text-truncate hover-red">
                    <a href="#product" className="text-decoration-none text-dark">
                      {product.title}
                    </a>
                  </h6>
                  <div className="fs-xs text-body-secondary mb-2">{product.weightOrUnit ?? product.weight}</div>
                  <div className="d-flex align-items-center justify-content-between">
                    <span className="fw-bold fs-sm text-dark">
                      ${(product.price * quantity).toFixed(2)}
                    </span>

                    {/* Quantity Counter */}
                    <div className="d-flex align-items-center border rounded-pill px-1 py-0 bg-white">
                      <button
                        type="button"
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                        className="btn btn-sm btn-link p-1 text-dark text-decoration-none"
                      >
                        <i className="bi bi-dash fs-xs"></i>
                      </button>
                      <span className="px-2 fs-xs fw-bold">{quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                        className="btn btn-sm btn-link p-1 text-dark text-decoration-none"
                      >
                        <i className="bi bi-plus fs-xs"></i>
                      </button>
                    </div>

                    {/* Remove Button */}
                    <button
                      type="button"
                      onClick={() => removeFromCart(product.id)}
                      className="btn btn-link text-body-tertiary hover-red p-0 ms-2"
                      title="Remove"
                    >
                      <i className="bi bi-trash3 fs-6"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="offcanvas-footer border-top p-4 bg-body">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-body-secondary fs-sm">Subtotal:</span>
              <span className="h5 mb-0 fw-bold">${subtotal.toFixed(2)}</span>
            </div>
            <div className="d-flex gap-2">
              <button
                type="button"
                className="btn btn-secondary w-50 rounded-pill py-2 fs-sm fw-semibold"
                onClick={() => setIsCartOpen(false)}
              >
                View cart
              </button>
              <button
                type="button"
                className="btn btn-danger w-50 rounded-pill py-2 fs-sm fw-semibold"
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default CartDrawer;
