import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { POPULAR_PRODUCTS, SIDEBAR_CATEGORIES, SPECIAL_OFFERS } from '../data/AllData';

export const CatalogPage = ({ initialCategory = 'All', intialCategory }) => {
    const resolvedCategory = intialCategory ?? initialCategory;
    const [selectedCategory, setSelectedCategory] = useState(resolvedCategory);
    const [searchFilter, setSearchFilter] = useState('');
    const [sortBy, setSortBy] = useState('featured');

    const allProducts = [...POPULAR_PRODUCTS, ...SPECIAL_OFFERS.products];

    const filteredProducts = allProducts
        .filter((prod) => {
            const productCategory = String(prod.category ?? '').toLowerCase();
            const matchCat = selectedCategory === 'All' || productCategory.includes(String(selectedCategory).toLowerCase());
            const matchSearch = prod.title.toLowerCase().includes(searchFilter.toLowerCase());
            return matchCat && matchSearch;
        })
        .sort((a, b) => {
            if (sortBy === 'price-low') return a.price - b.price;
            if (sortBy === 'price-high') return b.price - a.price;
            return 0;
        });

    return (
        <div className="container py-4 py-lg-5">
            <nav aria-label="breadcrumb" className="mb-4">
                <ol className="breadcrumb fs-sm">
                    <li className="breadcrumb-item"><a href="#" className="text-decoration-none text-dark">Home</a></li>
                    <li className="breadcrumb-item"><a href="#" className="text-decoration-none text-dark">Catalog</a></li>
                    <li className="breadcrumb-item active" aria-current="page">{selectedCategory}</li>
                </ol>
            </nav>

            <div className="row g-4">
                <div className="col-12 col-lg-3">
                    <div className="card border-0 bg-light-subtle rounded-4 p-4 shadow-sm">
                        <h5 className="fw-bold mb-3">Categories</h5>
                        <ul className="nav flex-column gap-2 mb-4">
                            <li
                                onClick={() => setSelectedCategory('All')}
                                className={`py-1 px-2 rounded-3 cursor-pointer fs-sm fw-semibold ${selectedCategory === 'All' ? 'bg-danger text-white' : 'text-dark hover-red'}`}
                            >
                                All Products
                            </li>

                            {SIDEBAR_CATEGORIES.map((cat) => (
                                <li
                                    key={cat.id}
                                    onClick={() => setSelectedCategory(cat.name)}
                                    className={`py-1 px-2 rounded-3 cursor-pointer fs-sm d-flex justify-content-between align-items-center ${selectedCategory === cat.name ? 'bg-danger text-white' : 'text-dark hover-red'}`}
                                >
                                    <span>{cat.name}</span>
                                    <span className="fs-xs opacity-75">{cat.count}</span>
                                </li>
                            ))}
                        </ul>

                        <h5 className="fw-bold mb-3">Search in catalog</h5>
                        <input
                            type="text"
                            value={searchFilter}
                            onChange={(e) => setSearchFilter(e.target.value)}
                            placeholder="e.g orange, milk, cheese, chicken..."
                            className="form-control rounded-pill fs-sm py-2 mb-3"
                        />
                    </div>
                </div>

                <div className="col-12 col-lg-9">
                    <div className="d-flex flex-wrap align-items-center justify-content-between border-bottom pb-3 mb-4 gap-3">
                        <div>
                            <h2 className="h4 fw-bold mb-0">{selectedCategory}</h2>
                            <span className="fs-xs text-body-secondary">Showing {filteredProducts.length} items</span>
                        </div>

                        <div className="d-flex align-items-center gap-2">
                            <label className="fs-xs text-nowrap fw-semibold text-body-secondary">Sort by:</label>
                            <select className="form-select form-select-sm rounded-pill" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                                <option value="featured">Featured</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                            </select>
                        </div>
                    </div>

                    {filteredProducts.length === 0 ? (
                        <div className="text-center py-5">
                            <i className="bi bi-search fs-1 text-body-secondary d-block mb-3"></i>
                            <h5 className="fw-bold">No product found</h5>
                            <p className="fs-sm text-body-secondary">Try searching for something else or reset filters.</p>
                            <button
                                onClick={() => {
                                    setSelectedCategory('All');
                                    setSearchFilter('');
                                }}
                                className="btn btn-outline-danger rounded-pill px-4"
                            >
                                Reset Filters
                            </button>
                        </div>
                    ) : (
                        <div className="row row-cols-2 row-cols-md-3 row-cols-xl-3 g-3 g-md-4">
                            {filteredProducts.map((product) => (
                                <div key={product.id} className="col">
                                    <ProductCard product={product} />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CatalogPage;