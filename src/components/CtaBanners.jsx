import React from 'react';
import { CTA_BANNERS } from '../data/AllData';

export const CtaBanners = () => {
  return (
    <section className="container py-4 py-lg-5 mb-4">
      <div className="row g-4">
        {/* Left: Mobile App Download */}
        <div className="col-12 col-lg-7">
          <div className="card border-0 bg-body-tertiary rounded-4 overflow-hidden h-100 p-4 p-md-5">
            <div className="row align-items-center">
              <div className="col-sm-7 text-center text-sm-start mb-4 mb-sm-0">
                <h3 className="h4 fw-bold text-dark mb-4">
                  {CTA_BANNERS.app.title}
                </h3>
                <div className="d-flex flex-wrap justify-content-center justify-content-sm-start gap-2">
                  <a href="#google-play" className="btn btn-dark rounded-pill px-3 py-2 fs-xs d-flex align-items-center gap-2">
                    <i className="bi bi-google-play fs-6"></i>
                    <span>Google Play</span>
                  </a>
                  <a href="#app-store" className="btn btn-dark rounded-pill px-3 py-2 fs-xs d-flex align-items-center gap-2">
                    <i className="bi bi-apple fs-6"></i>
                    <span>App Store</span>
                  </a>
                </div>
              </div>
              <div className="col-sm-5 text-center">
                <img
                  src={CTA_BANNERS.app.image}
                  alt="Cartzilla App"
                  className="img-fluid"
                  style={{ maxHeight: '200px', objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right: Feedback */}
        <div className="col-12 col-lg-5">
          <div className="card border-0 bg-body-tertiary rounded-4 overflow-hidden h-100 p-4 p-md-5 d-flex flex-row align-items-center">
            <div style={{ width: '120px', flexShrink: 0 }}>
              <img
                src={CTA_BANNERS.feedback.image}
                alt="Feedback"
                className="img-fluid"
              />
            </div>
            <div className="ps-4">
              <h4 className="h5 fw-bold text-dark mb-2">
                {CTA_BANNERS.feedback.title}
              </h4>
              <a href="#feedback" className="btn btn-link text-decoration-none text-danger fw-bold fs-sm p-0 d-inline-flex align-items-center gap-1">
                <span>Give a feedback</span>
                <i className="bi bi-chevron-right fs-xs"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CtaBanners;
