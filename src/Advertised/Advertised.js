import React from 'react';
import { useParams } from 'react-router-dom';

const Advertised = () => {
    const router = useParams();
    const {id} = router

    console.log(id)
    return (
        <div>
            this is advertised
        </div>
    );
};

export default Advertised;