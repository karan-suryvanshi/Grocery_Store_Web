import React from 'react';
import { BiUser } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/useAuth';

export const Account = () => {
    const navigate = useNavigate();
    const { currentUser } = useAuth();

    return (
        <button
            type="button"
            onClick={() => navigate('/account')}
            className="btn btn-outline-secondary border-0 rounded-circle p-2 d-flex align-items-center justify-content-center"
            style={{ width: '40px', height: '40px' }}
            aria-label={currentUser ? `Account: ${currentUser.name}` : 'Open account'}
            title={currentUser ? `Signed in as ${currentUser.name}` : 'Account'}
        >
            <BiUser className="fs-5" aria-hidden="true" />
        </button>
    );
};

export default Account;
