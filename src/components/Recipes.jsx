import React from "react";
import { RECIPES_DATA } from "../data/AllData";

export const Recipes = () => {
    const {recipes, cookbook} = RECIPES_DATA;

    return (
        <section className="container py-4 py-lg-5 mb-2 mb-sm-3 mb-lg-4">
            <h2 className="h3 fw-bold mb-4">Recipes</h2>

            <div className="row g-4 align-items-center">

                {/* Left Side 3 Card */}

                <div className="col-12 col-lg-5">
                        <div className="d-flex flex-column gap-3">
                            {recipes.map((recipe) => (
                                <div key={recipe.id} className="d-flex align-items-center gap-3 p-2 rounded-3 hover-bg-light transition">

                                    <div style={{width: '130px', height: '90px', flexShrink: 0}}>
                                        <img src={recipe.image} alt={recipe.title} className="w-100 h-100 rounded-3" style={{objectFit: 'cover'}} />

                                    </div>

                                    <div>
                                        <h6 className="fs-sm fw-semibold mb-2 line-clamp-2 hover-red">
                                            <a href="#recipe" className="text-decoration-none text-dark">
                                                {recipe.title}
                                            </a>
                                        </h6>

                                        <div className="d-flex gap-3 fs-xs text-body-secondary">
                                            <span><i className="bi bi-clock me-1"></i>{recipe.time}</span>
                                            <span><i className="bi bi-lightning-charge me-1"></i>{recipe.difficulty}</span>
                                            <span><i className="bi bi-people me-1"></i>{recipe.servings}</span>

                                        </div>
                                    </div>

                                </div>
                            ))}

                            <div>
                                <a href="#recipes" className="btn btn-link text-decoration-none text-danger fw-bold fs-sm p-0 d-inline-flex align-items-center gap-1">
                                    <span>View All Recipes</span>
                                    <i className="bi bi-chevron-right fs-xs"></i>
                                </a>
                            </div>

                        </div>
                </div>


                {/* Right CookBook card */}

                <div className="col-12 col-lg-7">
                    <div className="card border rounded-4 p-4 shadow-sm bg-body">
                        <div className="row g-4 align-items-center">
                            <div className="col-sm-5 text-center">
                                <img src={cookbook.image} alt={cookbook.title} className="img-fluid rounded-4 shadow-sm" style={{maxHeight: '200px', objectFit: 'cover'}} />

                            </div>

                            <div className="col-sm-7">
                                <span className="badge bg-secondary-subtle text-secondary-emphasis rounded-pill px-3 py-1 mb-2 fs-xs fw-bold">
                                    Cookbook
                                </span>
                                <h3 className="h4 fw-bold text-dark mb-1">{cookbook.title}</h3>

                                <div className="fs-xs text-body-secondary mb-3">
                                    Author: <strong className="text-dark">{cookbook.author}</strong>

                                </div>

                                <p className="fs-sm text-body-secondary mb-4 leading-relaxed">
                                    {cookbook.description}
                                </p>

                                <div className="d-flex align-items-center gap-3">
                                    <span className="h4 mb-0 fw-bold text-dark">
                                        ${cookbook.price.toFixed(0)}

                                    </span>

                                    <a href="#buy-book" className="btn btn-dark rounded-pill px-4 fs-sm fw-semibold">
                                        Shop book <i className="bi bi-chevron-right fs-xs ms-1"></i>
                                    </a>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </div>

        </section>
    );
};

export default Recipes;