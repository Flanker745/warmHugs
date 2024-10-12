import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Confirmation = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Redirect to home page after 3 seconds
        const timer = setTimeout(() => {
            navigate('/'); // Redirect to the home page
        }, 3000); // 3000 milliseconds = 3 seconds

        // Cleanup the timer on component unmount
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="confirmation p-8">
            <h2 className="text-3xl font-semibold">Thank You for Your Order!</h2>
            <p className="mt-4">Your order has been placed successfully and is on the way!</p>
            <p className="mt-2">You will be redirected to the home page shortly...</p>
        </div>
    );
};

export default Confirmation;
