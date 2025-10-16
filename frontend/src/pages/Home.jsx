import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import axios from 'axios';
import 'swiper/css';
import 'swiper/css/navigation';

import hero1 from '../assets/hero1.png';
import hero2 from '../assets/hero2.png';
import hero3 from '../assets/hero3.png';
import orgImg from '../assets/org.png';
import gallery1 from '../assets/gallery1.png';
import gallery2 from '../assets/gallery2.png';
import gallery3 from '../assets/gallery3.png';
import gallery4 from '../assets/gallery4.png';
import gallery5 from '../assets/gallery5.png';
import gallery6 from '../assets/gallery6.png';
import about from '../assets/about.png';

const slides = [
  { id: 1, img: hero1 },
  { id: 2, img: hero2 },
  { id: 3, img: hero3 },
];

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [projects, setProjects] = useState([]);
  const [galleryImages] = useState([gallery1, gallery2, gallery3, gallery4, gallery5, gallery6]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get('https://thecresent-backend.onrender.com/api/projects');
        const currentProjects = res.data.filter(p => p.category === 'current');
        setProjects(currentProjects);
      } catch (err) {
        console.error('Failed to fetch projects:', err);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section Desktop */}
      <div className="hidden md:block relative">
        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          navigation
          loop
          onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
          className="w-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <img
                src={slide.img}
                alt=""
                className="w-full h-[500px] object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Hero Section Mobile */}
      <div className="block md:hidden relative">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
          className="w-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <img
                src={slide.img}
                alt=""
                className="w-full h-[400px] object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Organization Info */}
      <section className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-0 flex flex-col md:flex-row items-center gap-10">
        <motion.div
          className="md:w-1/2"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img src={orgImg} alt="Organization" className="rounded-lg shadow-lg w-full" />
        </motion.div>

        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Innovating for a Better Tomorrow</h2>
          <p className="text-gray-700 mb-6 text-base sm:text-lg">
            Our organization is committed to sustainable solutions that make real impact in the communities we serve.
          </p>
          <div className="flex justify-center">
            <Link
              to="/about"
              className="bg-blue-500 px-6 py-3 rounded-lg font-semibold text-white hover:bg-blue-600 transition duration-300"
            >
              Know More
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Projects Section (with Animated Progress Bar + Centered Icons) */}
      <section className="py-0">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Currently Running Projects</h2>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 relative">
          {/* State & Logic */}
          {(() => {
            const [activeIndex, setActiveIndex] = React.useState(0);
            const [progress, setProgress] = React.useState(0);

            React.useEffect(() => {
              const interval = setInterval(() => {
                setProgress((prev) => {
                  if (prev >= 100) return 0;
                  return prev + 1;
                });
              }, 50);
              return () => clearInterval(interval);
            }, [activeIndex]);

            return (
              <div className="w-full relative">
                {/* Swiper Carousel */}
                <Swiper
                  modules={[Autoplay, Navigation]}
                  autoplay={{ delay: 5000, disableOnInteraction: false }}
                  loop
                  navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                  }}
                  onSlideChange={(swiper) => {
                    setActiveIndex(swiper.realIndex);
                    setProgress(0);
                  }}
                  spaceBetween={20}
                  slidesPerView={1}
                  breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 4 },
                  }}
                >
                  {projects.length > 0 ? (
                    projects.map((project) => (
                      <SwiperSlide key={project._id}>
                        <div className="rounded-lg overflow-hidden shadow-lg relative">
                          <div className="relative group">
                            <img
                              src={project.images?.[0]?.url || 'https://via.placeholder.com/400x300'}
                              alt={project.name}
                              className="w-full h-64 md:h-72 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                              <Link
                                to={`/projects/${project._id}`}
                                className="text-white text-base sm:text-lg font-semibold"
                              >
                                View Details
                              </Link>
                            </div>
                          </div>
                          <h3 className="text-base sm:text-lg font-semibold text-center mt-3 text-gray-800">
                            {project.name}
                          </h3>
                        </div>
                      </SwiperSlide>
                    ))
                  ) : (
                    <p className="text-center text-gray-500">No projects running currently.</p>
                  )}
                </Swiper>

                {/* Animated Progress Bar */}
                <div className="flex justify-center gap-2 mt-8">
                  {projects.map((_, index) => (
                    <div
                      key={index}
                      className="w-10 h-1 bg-gray-300 rounded overflow-hidden relative"
                    >
                      {activeIndex === index && (
                        <div
                          className="h-full bg-blue-500 transition-all duration-100"
                          style={{ width: `${progress}%` }}
                        ></div>
                      )}
                    </div>
                  ))}
                </div>


                {/* View More Button */}
                <div className="text-center mt-8">
                  <Link
                    to="/projects"
                    className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300 text-sm sm:text-base"
                  >
                    View More Projects
                  </Link>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Gallery</h2>
        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          navigation
          loop
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {galleryImages.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={img}
                alt={`Gallery ${idx + 1}`}
                className="rounded-lg w-full h-64 sm:h-72 md:h-80 object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="text-center mt-8">
          <Link
            to="/gallery"
            className="bg-blue-500 px-6 py-3 rounded-lg font-semibold text-white hover:bg-blue-600 transition duration-300 text-sm sm:text-base"
          >
            View Full Gallery
          </Link>
        </div>
      </section>

      {/* About Image Hover Section */}
      <section className="relative max-w-7xl mx-auto my-10 px-4 sm:px-6 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl group shadow-lg"
        >
          {/* Image with subtle floating animation */}
          <motion.img
            src={about}
            alt="About The Crescent Foundation"
            className="w-full h-[22rem] sm:h-[26rem] md:h-[30rem] lg:h-[34rem] xl:h-[38rem] object-cover object-center transform group-hover:scale-110 transition duration-700 ease-in-out"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-center text-white px-6">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-sm sm:text-base md:text-lg leading-relaxed mb-6 max-w-2xl"
            >
              The Crescent Foundation is initiated in 2008 by Mohammed Siddique, founded single-handedly with the mission
              to work for the betterment and upliftment of underprivileged societies in the education, health, and skill
              development sectors. He always says, ‘doing little things with great love’ instead of ‘doing great things alone’.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Link
                to="/about"
                className="bg-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300 text-sm sm:text-base"
              >
                Know More
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Quote Section */}
      <section className="bg-gray-500 py-20 text-center text-white px-4 sm:px-6">
        <blockquote className="text-xl sm:text-2xl md:text-4xl font-semibold mb-6">
          "The best way to find yourself is to lose yourself in the service of others."
        </blockquote>
        <Link
          to="/donate"
          className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 text-sm sm:text-base"
        >
          Donate Us
        </Link>
      </section>

    </div>
  );
};

export default Home;
