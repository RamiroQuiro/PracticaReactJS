import React from 'react'
import { useState } from 'react';

function ItemsSelectTools() {
    const [active, setActive] = useState(false);

    const handleDownBox = () => {
      setActive(!active);
    };
    return (
      <div
      className={`
      } w-full md:w-2/5 flex-auto  ${active?'border-blue-500/70 shadow-blue-500/50 shadow ':'border-neutral-700'} border hover:border-blue-500/70  duration-150 overflow-hidden  p-5 rounded-lg`}
    >
      <div
        onClick={handleDownBox}
        className="w-full flex items-center duration-300 cursor-pointer justify-between "
      >
     
        <i className={`${active ? "rotate-180 text-blue-400" : "rotate-45"} text-lg hover:text-xl duration-300  `}>🗙</i>{" "}
      </div>
        
    </div>
    )
}

export default ItemsSelectTools