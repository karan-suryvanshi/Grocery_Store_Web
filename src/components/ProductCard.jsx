import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

export const ProductCard = ({ product }) => {
    const { getItemQuantity, updateQuantity, addToCart } = useCart();
    const [isWishlist, setIsWishlist] = useState(false);
    const quantity = getItemQuantity(product.id);

    return (
        <div className="card h-100 product-card border-0 bg-transparent shadow-none">
            <div className="position-relative rounded-4 p-2 bg-light-subtle overflow-hidden">
                {product.discountPercentage && (
                    <span className="badge text-bg-danger position-absolute top-0 start-0 z-2 m-2">
                        -{product.discountPercentage}%
                    </span>
                )}

                <button
                    type="button"
                    onClick={() => setIsWishlist(!isWishlist)}
                    className={`btn btn-sm position-absolute top-0 end-0 z-2 m-2 rounded-circle d-flex align-items-center justify-content-center p-2 shadow-sm ${
                        isWishlist ? 'btn-danger text-white' : 'btn-light text-body-tertiary'
                    }`}
                    style={{ width: '34px', height: '34px' }}
                    aria-label="Add to wishlist"
                    aria-pressed={isWishlist}
                >
                    <i className={`bi ${isWishlist ? 'bi-heart-fill' : 'bi-heart'}`} />
                </button>

                <a href="#" className="d-block p-2 text-center">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="img-fluid product-card-image"
                        style={{ maxWidth: '160px', objectFit: 'contain' }}
                        loading="lazy"
                    />
                </a>

                <div className="position-absolute bottom-0 end-0 m-2 z-2">
                    {quantity === 0 ? (
                        <button
                            type="button"
                            onClick={() => addToCart(product)}
                            className="btn btn-sm btn-light border shadow-sm d-flex align-items-center justify-content-center rounded-circle"
                            style={{ width: '36px', height: '36px' }}
                            aria-label="Add to cart"
                        >
                            <i className="bi bi-plus-lg fs-6 text-dark" />
                        </button>
                    ) : (
                        <div className="d-flex align-items-center bg-danger text-white rounded-pill px-1 py-1 shadow-sm">
                            <button
                                type="button"
                                onClick={() => updateQuantity(product.id, quantity - 1)}
                                className="btn btn-sm btn-link text-white p-0 px-2 text-decoration-none"
                                aria-label="Decrease quantity"
                            >
                                <i className="bi bi-dash" />
                            </button>
                            <span className="px-1 fw-bold fs-sm user-select-none" style={{ minWidth: '20px', textAlign: 'center' }}>
                                {quantity}
                            </span>
                            <button
                                type="button"
                                onClick={() => updateQuantity(product.id, quantity + 1)}
                                className="btn btn-sm btn-link text-white p-0 px-2 text-decoration-none"
                                aria-label="Increase quantity"
                            >
                                <i className="bi bi-plus" />
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <div className="card-body px-1 pt-3 pb-0">
                <div className="d-flex align-items-baseline mb-1">
                    <span className="h6 mb-0 fw-bold text-dark">${product.price.toFixed(2)}</span>
                    {product.originalPrice && (
                        <del className="text-body-tertiary fs-sm ms-2">
                            ${product.originalPrice.toFixed(2)}
                        </del>
                    )}
                </div>
                <h6 className="card-title fs-sm mb-1 line-clamp-2">
                    <a href="#product" className="text-decoration-none text-dark hover-underline">
                        {product.title}
                    </a>
                </h6>
                <span className="fs-xs text-body-secondary">{product.weightOrUnit}</span>
            </div>
        </div>
    );
};

export default ProductCard;
