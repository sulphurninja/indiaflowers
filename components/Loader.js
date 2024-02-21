import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center ">
      <img src='/logo.png' alt="Loading..." className="animate-spin h-32 w-32" />
      <h1 className='text-white font-bold font-serif'>Loading....</h1>
    </div>
  );
};

export default Loader;
