import React, {useState} from "react";

export const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email) {
            setIsSubmitted(true);
        }
    };

    return (
        <div className="border-bottom py-5 bg-dark text-white">
            <div className="container py-2 text-center">
                <div className="mx-auto" style={{maxWidth: '580px'}}>

                    <h3 className="fs-sm text-white-50 mb-4">Stay in touch with us</h3>
                    <p className="fs-sm text-white-50 mb-4">Receive the latest updates about our products & promotions</p>

                    {isSubmitted ? (
                        <div className="alert alert-success rounded-pill py-2 fs-sm">
                            🎉 Thank you for subscribing to Cartzilla Grocery updates!
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="d-flex flex-column flex-sm-row gap-2 justify-content-center">
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your email address"
                                aria-label="Your email address"
                                autoComplete="email"
                                className="form-control form-control-lg rounded-pill px-4 fs-sm bg-dark text-white border-secondary"
                            />

                            <button type="submit" className="btn btn-danger btn-lg rounded-pill px-4 fs-sm fw-bold flex-shrink-0">
                                    Subscribe
                            </button>
                        </form>
                    )}

                </div>

            </div>

        </div>
    );
};

export default Newsletter;