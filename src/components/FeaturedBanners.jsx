import React from "react";
import { FEATURED_CATEGORIES } from "../data/AllData";

export const FeaturedBanners = () => {
    return (
        <section className="container py-4 py-lg-5">
            <div className="row g-4">
                {FEATURED_CATEGORIES.map((banner) => (
                    <div key={banner.id} className="col-12 col-md-6 col-lg-4">
                        <div
                            className={`card border-0 rounded-4 overflow-hidden position-relative h-100 p-4 shadow-sm ${banner.bgClass}`}
                            style={{ minHeight: '200px' }}
                        >
                            <div className="d-flex justify-content-between align-items-center h-100">
                                <div className="z-1 pe-3" style={{ maxWidth: '60%' }}>
                                    <span className="fs-xs text-body-secondary fw-semibold mb-1 d-block">
                                        {banner.count}
                                    </span>
                                    <h3 className="h5 fw-bold text-dark mb-3 lh-sm">
                                        {banner.title}
                                    </h3>
                                    <a href="#" className="btn btn-link text-decoration-none text-dark p-0 fs-sm fw-bold d-inline-flex align-items-center gap-1 hover-red">
                                        <span>Shop now</span>
                                        <i className="bi bi-chevron-right fs-xs"></i>
                                    </a>
                                </div>

                                <div className="text-end" style={{ width: '130px', height: '130px' }}>
                                    <img src={banner.image} alt={banner.title} className="img-fluid h-100 object-fit-contain" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default FeaturedBanners;