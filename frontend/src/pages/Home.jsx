import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
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

  // Progress bar logic
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/projects');
        const currentProjects = res.data
          .filter((p) => p.category === 'current')
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // newest first
        setProjects(currentProjects);
      } catch (err) {
        console.error('Failed to fetch projects:', err);
      }
    };
    fetchProjects();
  }, []);

  // Progress animation logic
  useEffect(() => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((p) => (p < 100 ? p + 1 : 100));
    }, 50); // adjust speed
    return () => clearInterval(interval);
  }, [activeIndex]);

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
              <img src={slide.img} alt="" className="w-full h-[500px] object-cover" />
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
              <img src={slide.img} alt="" className="w-full h-[400px] object-cover" />
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Innovating for a Better Tomorrow
          </h2>
          <p className="text-gray-700 mb-6 text-base sm:text-lg">
            Our organization is committed to sustainable solutions that make real impact in the
            communities we serve.
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

      {/* Projects Section */}
      <section className="py-0">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
          Currently Running Projects
        </h2>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex);
              setProgress(0);
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
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
                  <Link to={`/projects/${project._id}`}>
                    <div className="rounded-lg overflow-hidden shadow-lg relative group cursor-pointer">
                      <img
                        src={project.images?.[0]?.url || 'https://via.placeholder.com/400x300'}
                        alt={project.name}
                        className="w-full h-64 md:h-72 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                        <span className="text-white text-base sm:text-lg font-semibold">
                          View Details
                        </span>
                      </div>
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-center mt-3 text-gray-800">
                      {project.name}
                    </h3>
                  </Link>
                </SwiperSlide>
              ))
            ) : (
              <p className="text-center text-gray-500">No projects running currently.</p>
            )}
          </Swiper>

          {/* Progress Indicators */}
          {projects.length > 0 && (
            <div className="flex justify-center gap-2 mt-6">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    swiperRef.current?.slideToLoop(index);
                    setActiveIndex(index);
                  }}
                  className={`relative w-10 sm:w-14 h-1.5 rounded-full overflow-hidden transition-all duration-300 ${activeIndex === index ? 'scale-110' : 'scale-100'
                    }`}
                >
                  <div
                    className={`absolute inset-0 transition-colors duration-300 ${activeIndex === index ? 'bg-gray-300' : 'bg-gray-200'
                      }`}
                  ></div>

                  {activeIndex === index && (
                    <motion.div
                      key={index}
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.05, ease: 'linear' }}
                      className="absolute left-0 top-0 h-full bg-blue-500 rounded-full shadow-[0_0_6px_2px_rgba(59,130,246,0.5)]"
                    />
                  )}
                </button>
              ))}
            </div>
          )}

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
      </section>

      {/* Gallery Section */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Gallery</h2>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
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

      {/* About Hover Section */}
      <section className="relative max-w-7xl mx-auto my-10 px-4 sm:px-6 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl group shadow-lg"
        >
          <motion.img
            src={about}
            alt="About The Crescent Foundation"
            className="w-full h-[22rem] sm:h-[26rem] md:h-[30rem] lg:h-[34rem] xl:h-[38rem] object-cover object-center transform group-hover:scale-110 transition duration-700 ease-in-out"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-center text-white px-6">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-sm sm:text-base md:text-lg leading-relaxed mb-6 max-w-2xl"
            >
              The Crescent Foundation was initiated in 2008 by Mohammed Siddique, founded
              single-handedly with the mission to work for the upliftment of underprivileged
              societies in education, health, and skill development sectors.
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
      <section className="bg-blue-400 py-16 text-center text-white px-4 sm:px-6">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 tracking-wide">
          "Be Part of the Change"
        </h3>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto italic">
          Join us in making a difference. Your support can transform lives and create opportunities for thousands in need.
        </p>
        <Link
          to="/donate"
          className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-base sm:text-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-100"
        >
          Donate Now
        </Link>
      </section>
    </div>
  );
};

export default Home;
