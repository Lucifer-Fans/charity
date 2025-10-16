import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Contactbg from "../assets/Contactbg.png";

// Sample gallery images
import gallery1 from '../assets/gallery1.png';
import gallery2 from '../assets/gallery2.png';
import gallery3 from '../assets/gallery3.png';
import gallery4 from '../assets/gallery4.png';
import gallery5 from '../assets/gallery5.png';
import gallery6 from '../assets/gallery6.png';
import gallery7 from '../assets/gallery1.png';
import gallery8 from '../assets/gallery2.png';
import gallery9 from '../assets/gallery3.png';
import gallery10 from '../assets/gallery4.png';
import gallery11 from '../assets/gallery5.png';
import gallery12 from '../assets/gallery6.png';

const galleryImages = [
  gallery1, gallery2, gallery3, gallery4, gallery5, gallery6,
  gallery7, gallery8, gallery9, gallery10, gallery11, gallery12
];

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section className="pt-20 bg-gray-50">
      {/* Header */}
      <header
        className="relative h-64 md:h-72 bg-cover bg-center text-white flex flex-col items-center justify-center text-center py-20 px-16 mb-5 -mt-6 w-full overflow-hidden"
        style={{ backgroundImage: `url(${Contactbg})` }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
        <motion.div
          className="relative z-10 max-w-3xl"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="max-w-2xl mx-auto text-base md:text-lg">
            Explore our collection of images showcasing our work and experiences.
          </p>
        </motion.div>
      </header>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer break-inside-avoid"
              onClick={() => {
                setIndex(idx);
                setOpen(true);
              }}
            >
              <img
                src={img}
                alt={`Gallery ${idx + 1}`}
                className="w-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition duration-300 flex items-center justify-center">
                <span className="text-white text-lg sm:text-xl font-medium">
                  View Image
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={galleryImages.map(src => ({ src }))}
        animation={{ fade: 300 }}
        render={{
          buttonPrev: undefined, // use default navigation
          buttonNext: undefined,
        }}
      />
    </section>
  );
};

export default Gallery;
