// import React from "react";

// const Cards = () => {
//   return (
//     <div className="flex flex-wrap m-4 sm:m-6 md:m-8 lg:m-10 xl:m-12">
//       <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 m-2 sm:m-4 ">
//         {/* img */}
//         <div className="flex align-middle justify-center bg-slate-700">
//           <img
//             className="w-full h-64 object-cover"
//             src="Images/product-1.jpg"
//             alt="placeholder"
//           />
//         </div>
//         {/* data */}
//         <div className="w-full flex flex-col flex-wrap items-center bg-blue-200">
//           <h1 className="text-3xl">Heading</h1>
//           <p>lorem lorem lorem lorem lorem lorem</p>
//           <h2 className="text-2xl">Price:500$</h2>
//           <button className="bg-blue-400 w-full h-11 hover:bg-blue-300 hover:font-bold">
//             SHOP NOW
//           </button>
//         </div>
//       </div>
//       <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 m-2 sm:m-4 ">
//         {/* img */}
//         <div className="flex align-middle justify-center bg-slate-700">
//           <img
//             className="w-full h-64 object-cover"
//             src="Images/product-2.jpg"
//             alt="placeholder"
//           />
//         </div>
//         {/* data */}
//         <div className="w-full flex flex-col flex-wrap items-center bg-blue-200">
//           <h1 className="text-3xl">Heading</h1>
//           <p>lorem lorem lorem lorem lorem lorem</p>
//           <h2 className="text-2xl">Price:500$</h2>
//           <button className="bg-blue-400 w-full h-11 hover:bg-blue-300 hover:font-bold">
//             SHOP NOW
//           </button>
//         </div>
//       </div>
//       <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 m-2 sm:m-4 ">
//         {/* img */}
//         <div className="flex align-middle justify-center bg-slate-700">
//           <img
//             className="w-full h-64 object-cover"
//             src="Images/product-3.jpg"
//             alt="placeholder"
//           />
//         </div>
//         {/* data */}
//         <div className="w-full flex flex-col flex-wrap items-center bg-blue-200">
//           <h1 className="text-3xl">Heading</h1>
//           <p>lorem lorem lorem lorem lorem lorem</p>
//           <h2 className="text-2xl">Price:500$</h2>
//           <button className="bg-blue-400 w-full h-11 hover:bg-blue-300hover:font-bold">
//             SHOP NOW
//           </button>
//         </div>
//       </div>
//       <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 m-2 sm:m-4 ">
//         {/* img */}
//         <div className="flex align-middle justify-center bg-slate-700">
//           <img
//             className="w-full h-64 object-cover"
//             src="Images/product-2.jpg"
//             alt="placeholder"
//           />
//         </div>
//         {/* data */}
//         <div className="w-full flex flex-col flex-wrap items-center bg-blue-200">
//           <h1 className="text-3xl">Heading</h1>
//           <p>lorem lorem lorem lorem lorem lorem</p>
//           <h2 className="text-2xl">Price:500$</h2>
//           <button className="bg-blue-400 w-full h-11 hover:bg-blue-300 hover:font-bold">
//             SHOP NOW
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cards;


"use client"
import React, { useState } from 'react';

const Cards = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e, index) => {
    if (hoveredIndex === index) {
      const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 100;
      const y = ((e.clientY - top) / height) * 100;
      setCoords({ x, y });
    }
  };

  const handleMouseEnter = (index) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  return (
    <div className="flex flex-wrap justify-center items-center m-4 sm:m-6 md:m-8 lg:m-10 xl:m-12">
      {['product-1.jpg', 'product-2.jpg', 'product-3.jpg', 'product-2.jpg'].map((image, index) => (
        <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 m-2 sm:m-4">
          <div className="flex align-middle justify-center bg-slate-700 overflow-hidden relative">
            <img
              className={`w-full h-64 object-cover transform transition-transform duration-300 ${
                hoveredIndex === index ? 'scale-150' : 'scale-100'
              }`}
              src={`Images/${image}`}
              alt="placeholder"
              style={{
                transformOrigin: `${coords.x}% ${coords.y}%`,
              }}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            />
          </div>
          <div className="w-full flex flex-col flex-wrap items-center bg-blue-200">
            <h1 className="text-3xl">Heading</h1>
            <p>lorem lorem lorem lorem lorem lorem</p>
            <h2 className="text-2xl">Price: 500$</h2>
            <button className="bg-blue-400 w-full h-11 hover:bg-blue-300 hover:font-bold">
              SHOP NOW
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
