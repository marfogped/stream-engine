import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className='w-full h-screen grid place-content-center'>
      <div className="relative w-10 h-10">
        <div className="square bg-black w-2.5 h-2.5 absolute top-1/2 left-1/2 mt-[-1.25rem] ml-[-1.25rem] animate-loader1"></div>
        <div className="square bg-black w-2.5 h-2.5 absolute top-1/2 left-1/2 mt-[-1.25rem] animate-loader2"></div>
        <div className="square bg-black w-2.5 h-2.5 absolute top-1/2 left-1/2 mt-[-1.25rem] ml-[15px] animate-loader3"></div>
        <div className="square bg-black w-2.5 h-2.5 absolute top-1/2 left-1/2 ml-[-1.25rem] animate-loader4"></div>
        <div className="square bg-black w-2.5 h-2.5 absolute top-1/2 left-1/2 animate-loader5"></div>
        <div className="square bg-black w-2.5 h-2.5 absolute top-1/2 left-1/2 ml-[15px] animate-loader6"></div>
        <div className="square bg-black w-2.5 h-2.5 absolute top-1/2 left-1/2 mt-[15px] ml-[-1.25rem] animate-loader7"></div>
        <div className="square bg-black w-2.5 h-2.5 absolute top-1/2 left-1/2 mt-[15px] animate-loader8"></div>
        <div className="square bg-black w-2.5 h-2.5 absolute top-1/2 left-1/2 mt-[15px] ml-[15px] animate-loader9"></div>
      </div>
    </div>
  );
};

export default Loader;
