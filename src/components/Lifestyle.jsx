import React from "react";
import { LIFESTYLE_DATA } from "../data/AllData";

export const Lifestyle = () => {
    return (
        <section className="container py-4 py-lg-5 mb-3">
            <h2 className="h3 text-center fw-bold mb-4 mb-lg-5">
                Shop by Lifestyle
            </h2>
            <div className="row g-4 justify-content-center">
                {LIFESTYLE_DATA.map((item) => (
                    <div key={item.id} className="col-6 col-md-3 text-center">
                        <a href="#catalog-all" className="text-decoration-none d-block">
                            <div
                                className={`d-inline-flex align-items-center justify-content-center rounded-circle p-4 mb-3 transition-transform ${item.bgClass}`}
                                style={{ width: '110px', height: '110px' }}
                            >
                                <i className={`${item.iconClass} fs-1`}></i>
                            </div>
                            <h3 className="h6 fw-bold text-dark mb-1 hover-red">
                                {item.name}
                            </h3>
                            <p className="fs-xs text-body-secondary mb-0">
                                {item.desc}
                            </p>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Lifestyle;