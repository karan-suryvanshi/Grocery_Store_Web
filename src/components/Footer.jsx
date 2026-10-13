import React from "react";
import {Newsletter} from './Newsletter';

export const Footer = () => {
    return (
        <footer className="footer bg-dark text-white-50 pt-0">

            <Newsletter/>

            <div className="container py-5">
                <div className="row g-4 pt-2 pb-4">

                    {/* Brand Info */}

                    <div className="col-12 col-lg-3 text-center text-lg-start">
                        <h4 className="fw-bold text-white mb-3">
                            Cart <span className="text-danger">Zilla</span>
                        </h4>

                        <p className="fs-sm leading-relaxed mb-4">
                            With a wide selection of fresh produce, pantry, and household essentials, we've got everything you need just a click away.

                        </p>

                        <div className="d-flex justify-content-center justify-content-lg-start gap-2">

                            <a href="#instagram" className="btn btn-outline-secondary border-0 text-white rounded-circle p-2" aria-label="Instagram">
                                <i className="bi bi-instagram fs-5"></i>
                            </a>

                            <a href="#facebook" className="btn btn-outline-secondary border-0 text-white rounded-circle p-2" aria-label="Facebook">
                                <i className="bi bi-facebook fs-5"></i>
                            </a>

                            <a href="#telegram" className="btn btn-outline-secondary border-0 text-white rounded-circle p-2" aria-label="Telegram">
                                <i className="bi bi-telegram fs-5"></i>
                            </a>

                             <a href="#whatsapp" className="btn btn-outline-secondary border-0 text-white rounded-circle p-2" aria-label="WhatsApp">
                                 <i className="bi bi-whatsapp fs-5"></i>
                             </a>

                        </div>

                    </div>

                    {/* Links Columns */}

                    <div className="col-6 col-sm-3 col-lg-2 offset-lg-1">
                        <h6 className="fw-bold text-white fs-sm text-uppercase mb-3">
                                Categories
                        </h6>

                        <ul className="list-unstyled fs-sm">
                                <li className="mb-2"><a href="#catalog-all" className="text-white-50 text-decoration-none hover-white">Weekly Sale</a></li>
                                <li className="mb-2"><a href="#catalog-all" className="text-white-50 text-decoration-none hover-white">Special Price</a></li>
                                <li className="mb-2"><a href="#catalog-all" className="text-white-50 text-decoration-none hover-white">Easter is coming</a></li>
                                <li className="mb-2"><a href="#catalog-all" className="text-white-50 text-decoration-none hover-white">Italian dinner</a></li>
                                <li className="mb-2"><a href="#catalog-all" className="text-white-50 text-decoration-none hover-white">Fresh fruits</a></li>
                                <li className="mb-2"><a href="#catalog-all" className="text-white-50 text-decoration-none hover-white">Exotic fruits</a></li>
                        </ul>

                    </div>

                    <div className="col-6 col-sm-3 col-lg-2">
                            <h6 className="fw-bold text-white fs-sm text-uppercase mb-3">
                                Company
                            </h6>
                            <ul className="list-unstyled fs-sm">
                                <li className="mb-2"><a href="#blog" className="text-white-50 text-decoration-none hover-white">Blog and news</a></li>
                                <li className="mb-2"><a href="#about" className="text-white-50 text-decoration-none hover-white">About us</a></li>
                                <li className="mb-2"><a href="#faq" className="text-white-50 text-decoration-none hover-white">FAQ page</a></li>
                                <li className="mb-2"><a href="#contact" className="text-white-50 text-decoration-none hover-white">Contact us</a></li>
                                <li className="mb-2"><a href="#careers" className="text-white-50 text-decoration-none hover-white">Careers</a></li>
                            </ul>
                    </div>

                    <div className="col-6 col-sm-3 col-lg-2">
                        <h6 className="fw-bold text-white fs-sm text-uppercase mb-3">Account</h6>
                        <ul className="list-unstyled fs-sm">
                            <li className="mb-2"><a href="#payment" className="text-white-50 text-decoration-none hover-white">Payment methods</a></li>
                            <li className="mb-2"><a href="#guarantee" className="text-white-50 text-decoration-none hover-white">Money back guarantee</a></li>
                            <li className="mb-2"><a href="#border" className="text-white-50 text-decoration-none hover-white">Order tracking</a></li>
                            <li className="mb-2"><a href="#support" className="text-white-50 text-decoration-none hover-white">Support centre</a></li>

                        </ul>

                    </div>

                     <div className="col-6 col-sm-3 col-lg-2">
            <h6 className="fw-bold text-white fs-sm text-uppercase mb-3">Customer care</h6>
            <ul className="list-unstyled fs-sm space-y-2">
              <li className="mb-2"><a href="#payment" className="text-white-50 text-decoration-none hover-white">Payment methods</a></li>
              <li className="mb-2"><a href="#guarantee" className="text-white-50 text-decoration-none hover-white">Money back guarantee</a></li>
              <li className="mb-2"><a href="#order" className="text-white-50 text-decoration-none hover-white">Order tracking</a></li>
              <li className="mb-2"><a href="#support" className="text-white-50 text-decoration-none hover-white">Support center</a></li>
            </ul>
          </div>

          </div>

                {/* copyright */}

                <div className="border-top border-secondary pt-4 mt-2 text-center text-lg-start fs-xs">
                    <p className="mb-0">
                         © 2026 All rights reserved. Cartzilla Grocery Store React implementation.
                    </p>

                </div>

            </div>

        </footer>
    );
};

export default Footer;