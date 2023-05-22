// const [isHovered, setIsHovered] = useState(false);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   return (
//     <div
//       className={`icon-container ${isHovered ? 'hovered' : ''}`}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <i className="icon"></i>
//     </div>

// .icon-container {
//     position: relative;
//     width: 50px;
//     height: 50px;
//   }
  
//   .icon {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     opacity: 0;
//     transition: opacity 0.3s ease;
//   }
  
//   .icon-container.hovered .icon {
//     opacity: 1;
//   }


// 000000000000000000000000000000000

{/* <div className="icon-container">
<i className="icon"></i>
</div>
.icon-container {
    position: relative;
    width: 50px;
    height: 50px;
}

.icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    animation: fade 2s ease infinite;
}

@keyframes fade {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
} */}

// 0000000000000000000000000000000000
// .icon-container {
//     position: relative;
//     width: 50px;
//     height: 50px;
//   }
  
//   .icon {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     opacity: 0;
//     animation: fade 2s ease infinite alternate;
//   }
  
//   @keyframes fade {
//     0% {
//       opacity: 0;
//     }
//     50% {
//       opacity: 1;
//     }
//     100% {
//       opacity: 0;
//     }
//   }
  

// 111111111111111111111111111111111111111111111111
// import React, { useState } from 'react';
// import './Icon.css'; // Import the CSS file for the component

// const Icon = () => {
//   const [isHovered, setIsHovered] = useState(false);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   return (
//     <div
//       className="icon-container"
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <i className={`icon ${isHovered ? 'fade-in' : 'fade-out'}`}></i>
//     </div>
//   );
// };

// export default Icon;

// .icon-container {
//     position: relative;
//     width: 50px;
//     height: 50px;
//   }
  
//   .icon {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     opacity: 0;
//     transition: opacity 0.3s ease;
//   }
  
//   .fade-in {
//     opacity: 1;
//   }
  
//   .fade-out {
//     opacity: 0;
//   }
  
