// import React , { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

// export default function ProductCard() {
//   useEffect(() => {
//     const leftArrows = document.querySelectorAll('.fa-arrow-left');
//     const rightArrows = document.querySelectorAll('.bt');

//     rightArrows.forEach((btn) => {
//       btn.addEventListener('click', () => {
//         const group = document.getElementById(btn.dataset.group);
//         group.scrollLeft += 450;
//       });
//     });

//     leftArrows.forEach((btn) => {
//       btn.addEventListener('click', () => {
//         const group = document.getElementById(btn.dataset.group);
//         group.scrollLeft -= 450;
//       });
//     });

//     // Clean up listeners on unmount
//     return () => {
//       leftArrows.forEach((btn) =>
//         btn.removeEventListener('click', () => {})
//       );
//       rightArrows.forEach((btn) =>
//         btn.removeEventListener('click', () => {})
//       );
//     };
//   }, []);

//   return (
//     <main className="container im-card">
//       <div className="pgroup">
//         <ChevronLeftIcon className="fs-1 border rounded-circle" data-group="group1" />
//         <div className="product">
//           <div className="pro-name">
//             <h1 className="type">PET</h1>
//             <button>View All</button>
//           </div>
//           <div className="gallery" id="group1">
//             {[...Array(8)].map((_, i) => (
//               <div className="img" key={i}>
//                 <img
//                   src={i === 0 ? 'Image/5936.jpg' : 'Image/b.png'}
//                   alt=""
//                   className="proimg"
//                 />
//                 <h2>Product Name</h2>
//               </div>
//             ))}
//           </div>
//         </div>
//         <ChevronRightIcon className="fs-1 border rounded-circle " data-group="group1" />
//       </div>
//     </main>
//   )
// }
