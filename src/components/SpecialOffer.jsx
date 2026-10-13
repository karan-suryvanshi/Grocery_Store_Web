import React from "react";
import { SPECIAL_OFFERS } from "../data/AllData";
import ProductCard from './ProductCard';

export const SpecialOffers = () => {
    return (
        <section className="container py-4 py-lg-5 mb-2 mb-sm-3 mb-lg mb-xl-5 ">
            <div className="row g-4">

                {/* Left BreakFast Card */}

                <div className="col-12 col-md-4 col-lg-3">

                    <div className="rounded-4 overflow-hidden h-100 d-flex flex-column justify-content-between p-4 shadow-sm" style={{backgroundColor: '#a6cddc'}}>

                        <div>
                            <h4 className="fw-bold text-dark mb-3">
                                {SPECIAL_OFFERS.banner.title}
                            </h4>
                            <a href="#catalog-all" className="btn btn-link text-decoration-none text-dark p-0 fs-sm fw-bold d-inline-flex align-items-center gap-1 hover-red">
                                <span>Shop Now</span>
                                <i className="bi bi-chevron-right fs-xs"></i>
                            </a>
                        </div>

                        <div className="mt-3 text-center">
                            <img src={SPECIAL_OFFERS.banner.image} alt={SPECIAL_OFFERS.banner.title}
                            className="img-fluid rounded-3" style={{maxHeight: '200px', objectFit: 'cover'}}/>

                        </div>

                    </div>

                </div>

                {/* Right Special Product  */}

                <div className="col-12 col-md-8 col-lg-9">
                    <div className="d-flex align-items-center justify-content-between pb-3 mb-4 gap-3">
                            <h2 className="h4 fw-bold mb-0">Special Products</h2>

                            <a href="#catalog-all" className="text-decoration-none text-dark fs-sm fw-bold hover-red d-flex align-items-center gap-1">
                                <span>View all</span>
                                <i className="bi bi-chevron-right fs-xs"></i>
                            </a>
                    </div>

                    <div className="row row-cols-2 row-cols-sm-2 row-cols-lg-4 g-3 g-md-4">
                        {SPECIAL_OFFERS.products.map((product) => (
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

export default SpecialOffers;