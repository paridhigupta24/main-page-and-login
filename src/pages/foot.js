import React from 'react';
import { Link } from 'react-router-dom';

function Foot() {
    return (
        <>
            <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2023 Copyright:
                <Link to="/" className="text-reset fw-bold">Ethnus Mern Project</Link>
            </div>
        </>
    );
}

export default Foot;
