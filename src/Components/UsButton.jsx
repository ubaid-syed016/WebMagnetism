import React from 'react';

const UsButton = ({ imgUrl, label, desc }) => {
  return (
    <div className=' max-sm:w-[280px] max-lg:w-[350px]  lg:w-[310px]  rounded-lg flex flex-col gap-4 bg-[#FeFeFE] p-4  max-sm:p-3'>
        <div className=' flex items-center tracking-[1px] gap-4'>
      <img src={imgUrl} className=' h-[50px] w-[50px]' alt={label} />
        <div className='  font-inter font-semibold text-[18px] max-sm:text-[17px]'>{label}</div>
        </div>
      <div>
        <div className=' font-inter text-text-color text-[15px]'>{desc}</div>
      </div>
    </div>
  );
};

export default UsButton;
