import React from "react";
import { SIDEBAR_CATEGORIES, POPULAR_PRODUCTS } from "../data/AllData";
import {ProductCard} from './ProductCard'

export const PopularProducts = () => {
    return (
        <section className="container pb-5 mb-2 mb-sm-3 mb-lg-4 mb-xl-5">
            <div className="row g-4">

                {/* Left side Categories */}

                <div className="col-12 col-lg-3">
                    <div className="border-bottom pb-3 mb-4">
                        <h2 className="h4 fw-bold mb-0">Categories`</h2>

                    </div>

                    <div className="row g-3">
                        {SIDEBAR_CATEGORIES.map((cat) => (
                            <div key={cat.id} className="col-6 col-sm-4 col-lg-12">

                                <a href={`#category-${cat.id}`} className="d-flex align-items-centre text-decoration-none text-dark p-2 rounded-3 hover-bg-light transition">
                                    <div className="d-flex align-items-centre justify-content-centre bg-body-tertiary rounded-circle p-2 flex-shrink-0" style={{width: '52px', height: '52px'}}>

                                        <img src={cat.image} alt={cat.name} width="34" height="34" style={{objectFit: 'contain'}}/>

                                    
                                    </div>

                                    <div className="ps-3 min-w-0">
                                        <h6 className="fs-sm fw-semibold mb-0 text-truncate hover-red">
                                            {cat.name}

                                        </h6>
                                        <span className="fs-xs text-body-secondary">{cat.count} Products</span>

                                    </div>
                                </a>

                            </div>
                        ))}

                    </div>

                </div>

                {/* Right Column Popular Products Part */}

                <div className="col-12 col-lg-9">
                    <div className="d-flex align-items-centre justify-content-between border-bottom pb-3 mb-4">
                        <h2 className="h4 fw-bold mb-0">Popular Products</h2>

                        <a href="#catalog" className="text-decoration-none text-dark fs-sm fw-bold hover-red d-flex align-items-centre gap-1">
                            <span>View all</span>
                            <i className="bi bi-chevron-right fs-xs"></i>
                        </a>

                    </div>

                    <div className="row row-cols-2 row-cols-sm-3 row-cols-xl-4 g-3 g-md-4">
                        {POPULAR_PRODUCTS.map((product) => (
                            <div key={product.id} className="col">
                                <ProductCard product={product}/>

                            </div>
                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
};

export default PopularProducts;