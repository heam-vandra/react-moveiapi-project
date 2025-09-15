// import React from "react";

// const Video = () => {
//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       <video autoPlay loop  muted playsInline 
//         className="absolute top-0 left-0 w-full h-full object-cover"
//         src="/videos/01.mp4"
//       />
      
//     </div>
//   );
// };

// export default Video;
import React from "react";

const Video = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-[-1] ">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
        src="/videos/01.mp4"
      />
    </div>
  );
};

export default Video;


