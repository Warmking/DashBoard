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
    <div style={{backgroundColor:bgColor}} className={`p-3 m-4 rounded-xl w-full`}>
      <span style={{backgroundColor:iconColor}} className={`p-1 px-2 mt-1 rounded-full inline-block`}>
        <i className={`uil ${iconClass} text-white`}></i>
      </span>
      <p className=" mt-2 text-[#151D48] text-[1rem] font-bold">{quantity}</p>
      <p className="mb-1 text-[0.55rem] text-[#425166]">{status}</p>
      <p className="text-[0.45rem] text-[#4079ED]">{`+${percentage}% from yesterday`}</p>
    </div>
  );
};

export default OrderBox;
