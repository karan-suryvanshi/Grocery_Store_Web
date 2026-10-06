import React from "react";
import { LIFESTYLE_DATA } from "../data/AllData";

export const Lifestyle = () => {
    return (
        <section className="commtainer py-4 py-lg-5 mb-3">
            <h2 className="h3  text--centre fw-bold mb-4 mb-lg-5">
                    Shop by Lifestyle
            </h2>
                <div className=""row g-4 jusTify-content-centre>
                    {LIFESTYLE_DATA.map((item) => (
                        <div key={item.id} className="col-6 col-md-3 text-centre">
                            <a href="#catalog#" className=""></a>
                        </div>
                    ))}

                </div>
        </section>
    )
}