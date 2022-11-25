import React from 'react';

const PrimaryButton = ({ children, classes, handler }) => {
    return (
        <div>
            <button
      onClick={handler}
      className={`hover:text-gray-100 bg-indigo-500 from-emerald-500 to-lime-500 p-2 text-white ${classes}`}
    >
      {children}
    </button>
        </div>
    );
};

export default PrimaryButton;