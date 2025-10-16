// import React, { useEffect, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/autoplay';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // ✅ FIXED IMPORT
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const ProjectSlider = ({ category }) => {
//   const [projects, setProjects] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios
//       .get('http://localhost:5000/api/projects')
//       .then(res => {
//         const filtered = res.data.filter(p => p.category === category);
//         setProjects(filtered);
//       })
//       .catch(err => console.error(err));
//   }, [category]);

//   return (
//     <Swiper
//       modules={[Navigation, Pagination, Autoplay]}
//       slidesPerView={5}
//       spaceBetween={20}
//       navigation
//       autoplay={{ delay: 5000 }}
//       loop={true}
//       pagination={{ clickable: true }}
//       breakpoints={{
//         320: { slidesPerView: 1 },
//         640: { slidesPerView: 2 },
//         768: { slidesPerView: 3 },
//         1024: { slidesPerView: 5 },
//       }}
//       className="w-full py-4"
//     >
//       {projects.map(project => (
//         <SwiperSlide key={project._id}>
//           <div
//             className="cursor-pointer hover:scale-105 transform transition duration-300"
//             onClick={() =>
//               category === 'upcoming' ? null : navigate(`/projects/${project._id}`)
//             }
//           >
//             <img
//               src={project.images[0]?.url}
//               alt={project.name}
//               className="w-full h-48 object-cover rounded"
//             />
//             <h3 className="text-center mt-2 font-semibold">{project.name}</h3>
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default ProjectSlider;
