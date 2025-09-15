// import React, { useState } from "react";

// function Counter() {
//   // count is the balloon 🎈
//   // setCount is the pump ⬆️⬇️ to change it
//   const [count, setCount] = useState(0); // start at 0

//   return (
//     <div className="flex flex-col items-center gap-4 p-6 bg-white shadow rounded w-64">
//       <h2 className="text-2xl font-bold">Counter</h2>
//       <p className="text-xl">Current: {count}</p>

//       <div className="flex gap-4">
//         <button
//           onClick={() => setCount(count - 1)}
//           className="px-4 py-2 bg-red-500 text-white rounded"
//         >
//           -
//         </button>

//         <button
//           onClick={() => setCount(count + 1)}
//           className="px-4 py-2 bg-green-500 text-white rounded"
//         >
//           +
//         </button>
//       </div>

//       {/* 👇 Conditional rendering again */}
//       {count % 2 === 0 ? (
//         <p className="text-blue-500">Even Number ✨</p>
//       ) : (
//         <p className="text-purple-500">Odd Number 🎉</p>
//       )}
//     </div>
//   );
// }

// export default Counter;
