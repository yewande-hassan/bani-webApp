import React from 'react';

const Button = ({action, className, image, alt, width, height}) => {
  return (
    <button className={`${className} group flex items-center rounded-md text-sm font-medium pl-2 pr-3 py-2 shadow-sm`}>
    <img src={image} alt={alt} width={width} height={height} className="mr-2"/>
    {action}
  </button>
  );
};

export default Button;