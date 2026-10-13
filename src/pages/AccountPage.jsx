import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiArrowBack, BiUser } from 'react-icons/bi';
import { useAuth } from '../context/useAuth';

const emptyForm = { name: '', email: '', password: '' };

export const AccountPage = () => {
    const { currentUser, register, login, logout } = useAuth();
    const navigate = useNavigate();
    const [mode, setMode] = useState('login');
    const [form, setForm] = useState(emptyForm);
    const [error, setError] = useState('');

    const changeMode = (nextMode) => {
        setMode(nextMode);
        setForm(emptyForm);
        setError('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const result = mode === 'register'
            ? register(form)
            : login(form);

        if (!result.success) {
            setError(result.error);
            return;
        }

        setForm(emptyForm);
        setError('');
        navigate('/');
    };

    return (
        <div className="container py-4 py-lg-5">
            <Link to="/" className="d-inline-flex align-items-center gap-2 text-decoration-none text-body-secondary mb-4">
                <BiArrowBack aria-hidden="true" />
                Back to shopping
            </Link>

            <div className="row justify-content-center align-items-stretch g-0 account-page-card mx-auto overflow-hidden rounded-4 shadow-lg">
                <section className="col-12 col-lg-5 account-page-intro text-white p-4 p-md-5 d-flex flex-column justify-content-between">
                    <div>
                        <Link to="/" className="navbar-brand fs-3 fw-bold text-white text-decoration-none">
                            Cart<span className="text-warning">zilla</span>
                        </Link>
                        <p className="text-white-50 mt-4 mb-0">Fresh groceries, easy shopping, all in one place.</p>
                    </div>
                    <div className="d-none d-lg-block mt-5">
                        <div className="rounded-circle bg-white bg-opacity-10 d-inline-flex align-items-center justify-content-center mb-3" style={{ width: 56, height: 56 }}>
                            <BiUser className="fs-3" aria-hidden="true" />
                        </div>
                        <h2 className="h3 fw-bold">Your grocery account</h2>
                        <p className="text-white-50 mb-0">Sign in or create an account to continue.</p>
                    </div>
                </section>

                <section className="col-12 col-lg-7 bg-body p-4 p-md-5 d-flex align-items-center">
                    <div className="w-100 mx-auto" style={{ maxWidth: 440 }}>
                        {currentUser ? (
                            <>
                                <span className="text-danger fw-semibold text-uppercase small">Account</span>
                                <h1 className="h2 fw-bold mt-2">Welcome, {currentUser.name}</h1>
                                <p className="text-body-secondary">You are signed in as {currentUser.email}.</p>
                                <button
                                    type="button"
                                    className="btn btn-danger rounded-pill px-4"
                                    onClick={logout}
                                >
                                    Log out
                                </button>
                            </>
                        ) : (
                            <>
                                <span className="text-danger fw-semibold text-uppercase small">Cartzilla Grocery</span>
                                <h1 className="h2 fw-bold mt-2">
                                    {mode === 'register' ? 'Create your account' : 'Welcome back'}
                                </h1>
                                <p className="text-body-secondary mb-4">
                                    {mode === 'register'
                                        ? 'Join us for a smoother grocery shopping experience.'
                                        : 'Log in to your browser demo account.'}
                                </p>

                                <form onSubmit={handleSubmit}>
                                    {mode === 'register' && (
                                        <div className="mb-3">
                                            <label htmlFor="account-page-name" className="form-label fw-semibold">Full name</label>
                                            <input
                                                id="account-page-name"
                                                type="text"
                                                className="form-control form-control-lg rounded-3"
                                                autoComplete="name"
                                                value={form.name}
                                                onChange={(event) => setForm({ ...form, name: event.target.value })}
                                                required
                                            />
                                        </div>
                                    )}
                                    <div className="mb-3">
                                        <label htmlFor="account-page-email" className="form-label fw-semibold">Email address</label>
                                        <input
                                            id="account-page-email"
                                            type="email"
                                            className="form-control form-control-lg rounded-3"
                                            autoComplete="email"
                                            value={form.email}
                                            onChange={(event) => setForm({ ...form, email: event.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="account-page-password" className="form-label fw-semibold">Password</label>
                                        <input
                                            id="account-page-password"
                                            type="password"
                                            className="form-control form-control-lg rounded-3"
                                            autoComplete={mode === 'register' ? 'new-password' : 'current-password'}
                                            minLength={8}
                                            value={form.password}
                                            onChange={(event) => setForm({ ...form, password: event.target.value })}
                                            required
                                        />
                                        {mode === 'register' && <div className="form-text">Use at least 8 characters.</div>}
                                    </div>

                                    {error && <div className="alert alert-danger py-2" role="alert">{error}</div>}
                                    <button type="submit" className="btn btn-danger btn-lg rounded-pill w-100 fw-semibold">
                                        {mode === 'register' ? 'Create account' : 'Log in'}
                                    </button>
                                </form>

                                <p className="text-center text-body-secondary mt-4 mb-0">
                                    {mode === 'register' ? 'Already have an account?' : 'New to Cartzilla?'}{' '}
                                    <button
                                        type="button"
                                        className="btn btn-link p-0 text-danger text-decoration-none fw-semibold"
                                        onClick={() => changeMode(mode === 'register' ? 'login' : 'register')}
                                    >
                                        {mode === 'register' ? 'Log in' : 'Create an account'}
                                    </button>
                                </p>
                            </>
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AccountPage;
