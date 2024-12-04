import React from "react";

const OrderBox = ({
  quantity = 0,
  status = "Total Orders",
  percentage = 0,
  bgColor = "",
  iconColor='',
  iconClass = ''

}) => {
  return (
    <div style={{backgroundColor:bgColor}} className={`p-3 m-4 rounded-xl w-full hover:scale-125`}>
      <span style={{backgroundColor:iconColor}} className={`p-1 px-2 mt-1 rounded-full inline-block`}>
        <i className={`uil ${iconClass} text-white text-sm`}></i>
      </span>
      <p className=" mt-2 text-[#151D48] text-[0.9rem] font-bold">{quantity}</p>
      <p className="mb-1 text-[0.55rem] font-semibold text-[#425166]">{status}</p>
      <p className="text-[0.5rem]  font-semibold text-[#4079ED]">{`+${percentage}% from yesterday`}</p>
    </div>
  );
};

export default OrderBox;
