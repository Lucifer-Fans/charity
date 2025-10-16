// import React, { useEffect, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/autoplay';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Contactbg from "../assets/Contactbg.png";
// import { motion } from 'framer-motion';

// const Projects = () => {
//   const navigate = useNavigate();

//   const ProjectSlider = ({ category }) => {
//     const [projects, setProjects] = useState([]);

//     useEffect(() => {
//       axios
//         .get('http://localhost:5000/api/projects')
//         .then(res => {
//           const filtered = res.data.filter(p => p.category === category);
//           setProjects(filtered);
//         })
//         .catch(err => console.error(err));
//     }, [category]);

//     return (
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         slidesPerView={5}
//         spaceBetween={20}
//         navigation
//         autoplay={{ delay: 5000 }}
//         loop={true}
//         pagination={{ clickable: true }}
//         breakpoints={{
//           320: { slidesPerView: 1 },
//           640: { slidesPerView: 2 },
//           768: { slidesPerView: 3 },
//           1024: { slidesPerView: 5 },
//         }}
//         className="w-full py-4"
//       >
//         {projects.map(project => (
//           <SwiperSlide key={project._id}>
//             <div
//               className="cursor-pointer hover:scale-105 transform transition duration-300"
//               onClick={() =>
//                 category === 'upcoming' ? null : navigate(`/projects/${project._id}`)
//               }
//             >
//               <img
//                 src={project.images[0]?.url}
//                 alt={project.name}
//                 className="w-full h-48 object-cover rounded"
//               />
//               <h3 className="text-center mt-2 font-semibold">{project.name}</h3>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     );
//   };

//   return (
//     <div className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
//       {/* Hero Section */}
//       <header
//         className="relative h-64 md:h-72 bg-cover bg-center text-white flex flex-col items-center justify-center text-center py-20 px-16 mb-5 -mt-6 w-screen overflow-hidden"
//         style={{ backgroundImage: `url(${Contactbg})` }}
//       >
//         <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
//         <motion.div
//           className="relative z-10 max-w-3xl"
//           initial={{ opacity: 0, y: -40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
//           <p className="max-w-2xl mx-auto text-base md:text-lg">
//             Explore our current, upcoming, and completed projects that shape our mission.
//           </p>
//         </motion.div>
//       </header>

//       {/* Current Projects */}
//       <section>
//         <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">
//           Current Projects
//         </h2>
//         <ProjectSlider category="current" />
//       </section>

//       {/* Upcoming Projects */}
//       <section>
//         <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">
//           Upcoming Projects
//         </h2>
//         <ProjectSlider category="upcoming" />
//       </section>

//       {/* Completed Projects */}
//       <section>
//         <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">
//           Completed Projects
//         </h2>
//         <ProjectSlider category="completed" />
//       </section>
//     </div>
//   );
// };

// export default Projects;

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Contactbg from "../assets/Contactbg.png";
import { motion } from 'framer-motion';

const Projects = () => {
  const navigate = useNavigate();
  const [allProjects, setAllProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch all projects once
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/projects')
      .then(res => setAllProjects(res.data))
      .catch(err => {
        console.error(err);
        setError('Failed to load projects. Please try again later.');
      })
      .finally(() => setLoading(false));
  }, []);

  // Reusable Project Slider component
  const ProjectSlider = ({ title, category }) => {
    const projects = allProjects.filter(p => p.category === category);

    return (
      <section className="w-full px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center md:text-left text-gray-900">
          {title}
        </h2>

        {loading && (
          <p className="text-center text-gray-500">Loading projects...</p>
        )}
        {error && (
          <p className="text-center text-red-500">{error}</p>
        )}
        {!loading && !error && projects.length === 0 && (
          <p className="text-center text-gray-500">No projects available.</p>
        )}

        {!loading && !error && projects.length > 0 && (
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={5}
            spaceBetween={20}
            navigation
            autoplay={{ delay: 5000 }}
            loop={true}
            pagination={{ clickable: true }}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
            className="w-full py-4"
          >
            {projects.map(project => (
              <SwiperSlide key={project._id}>
                <div
                  className="cursor-pointer hover:scale-105 transform transition duration-300"
                  onClick={() =>
                    category === 'upcoming'
                      ? null
                      : navigate(`/projects/${project._id}`)
                  }
                >
                  <img
                    src={project.images[0]?.url || '/placeholder.jpg'}
                    alt={project.name || 'Project image'}
                    className="w-full h-48 object-cover rounded"
                  />
                  <h3 className="text-center mt-2 font-semibold text-gray-800">
                    {project.name}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </section>
    );
  };

  return (
    <div className="pt-20 pb-20 bg-gray-50 flex flex-col items-center">
      {/* Full-width Hero Header */}
      <header
        className="relative h-64 md:h-72 bg-cover bg-center text-white flex flex-col items-center justify-center text-center py-20 px-16 mb-5 -mt-6 w-full"
        style={{ backgroundImage: `url(${Contactbg})` }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
        <motion.div
          className="relative z-10 max-w-3xl"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Projects</h1>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-100">
            Explore our current, upcoming, and completed projects that shape our mission.
          </p>
        </motion.div>
      </header>

      {/* Project Sections */}
      <div className="w-full space-y-16 max-w-7xl">
        <ProjectSlider title="Current Projects" category="current" />
        <ProjectSlider title="Upcoming Projects" category="upcoming" />
        <ProjectSlider title="Completed Projects" category="completed" />
      </div>
    </div>
  );
};

export default Projects