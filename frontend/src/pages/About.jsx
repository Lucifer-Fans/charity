// import React from "react";
// import { motion } from "framer-motion";
// import about1 from "../assets/hero1.png";
// import about2 from "../assets/about1.png";
// import about3 from "../assets/about2.png";
// import about4 from "../assets/hero4.png";

// const About = () => {
//   return (
//     <div className="relative bg-gray-50 font-sans text-gray-800 overflow-hidden">

//       {/* Floating background shapes */}
//       <motion.div
//         className="absolute top-0 left-0 w-72 h-72 bg-blue-300 rounded-full opacity-30 -translate-x-32 -translate-y-32"
//         animate={{ y: [0, 20, 0] }}
//         transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
//       />
//       <motion.div
//         className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full opacity-20 translate-x-32 translate-y-32"
//         animate={{ y: [0, -20, 0] }}
//         transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
//       />

//       {/* Floating particles */}
//       <div className="absolute inset-0 pointer-events-none">
//         {Array.from({ length: 40 }).map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-50"
//             animate={{
//               x: [0, Math.random() * 200 - 100, 0],
//               y: [0, Math.random() * 200 - 100, 0],
//             }}
//             transition={{ duration: Math.random() * 10 + 5, repeat: Infinity, repeatType: "mirror" }}
//             style={{
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//             }}
//           />
//         ))}
//       </div>

//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white text-center py-28 px-4 overflow-hidden">
//         <div className="absolute inset-0 bg-[url('/src/assets/logo.png')] opacity-10"></div>
//         <h1 className="relative text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
//           The Fabulous Sound Story
//         </h1>
//         <p className="relative text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
//           We don’t just make sound — we craft experiences that move you.
//         </p>
//         <svg
//           className="absolute bottom-0 left-0 w-full h-24"
//           xmlns="http://www.w3.org/2000/svg"
//           preserveAspectRatio="none"
//           viewBox="0 0 1200 120"
//         >
//           <path d="M0 0L1200 120L0 120V0Z" className="fill-white"></path>
//         </svg>
//       </section>

//       {/* Intro Section */}
//       <section className="max-w-6xl mx-auto py-16 px-6 text-center relative z-10">
//         <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
//           At <span className="font-semibold text-blue-700">Fabulous Sound Products</span>, 
//           we believe music deserves to be heard in its purest form. Our journey 
//           began with a vision — to create audio equipment that delivers stunning 
//           clarity, immersive bass, and comfort that lasts for hours. Every headphone, 
//           speaker, and accessory we design embodies that passion.
//         </p>
//       </section>

//       {/* Section 1 - Our Founding */}
//       <section className="relative bg-white py-24 px-6 z-10">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//           <motion.img
//             src={about1}
//             alt="Our Founding"
//             className="rounded-3xl shadow-2xl w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
//             initial={{ opacity: 0, x: -120 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1 }}
//             viewport={{ once: true }}
//           />
//           <div className="space-y-6">
//             <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
//               Our Founding
//             </h2>
//             <p className="text-gray-700 text-lg leading-relaxed">
//               The Crescent Foundation laid in 2008 with the aim for the betterment and upliftment of the weaker & underprivileged community in India. The Crescent Foundation founded under the Public Charitable Trust Registration Act in 2008 is home to peoples and nature beset with problems of poverty, illiteracy, unequal distribution of wealth, exploitation and all the associated ills. This results from a lack of awareness, illiteracy, poor planning, and wanton greed of the section of human society and a world where every child attains the right to survival, protection, development, and participation, envisions building an equal opportunity society. The organization seeks sustainable solutions to long-term problems of the ‘marginalized and weaker section of the society’ through an integrated, community-based, participatory approach that reinforces civil society and government initiative. Through an array of empowering measures, it works to open opportunities for marginalized and weaker sections of society and improve their living conditions. TCF, at present, is engaged in the field of Education in weaker sections and marginalized communities and in the health sector, skill development and women empowerment field with an average of 12000+ beneficiaries till date.
//             </p>
//           </div>
//         </div>
//         {/* Wave divider */}
//         <svg
//           className="mt-24 w-full h-24"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 1440 320"
//         >
//           <path fill="#f3f4f6" fillOpacity="1" d="M0,192L48,181.3C96,171,192,149,288,154.7C384,160,480,192,576,197.3C672,203,768,181,864,165.3C960,149,1056,139,1152,144C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
//         </svg>
//       </section>

//       {/* Section 2 - Founder */}
//       <section className="relative bg-gradient-to-r from-blue-50 to-white py-24 px-6 z-10">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//           <div className="space-y-6">
//             <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
//               Mohammed Siddique
//             </h2>
//             <motion.div
//               className="bg-blue-100 p-8 rounded-3xl shadow-lg relative"
//               initial={{ scale: 0.95, opacity: 0 }}
//               whileInView={{ scale: 1, opacity: 1 }}
//               transition={{ duration: 1 }}
//             >
//               <p className="text-gray-700 text-lg leading-relaxed">
//                 The Crescent foundation is initiated in 2008 by the Mohammed Siddique founded single handed with the mission to work for the betterment and upliftment of underprivileged societies in the education and health and skill development sector. He always says that doing little things with great love’ instead of ‘doing great things alone he born on 13th June 1977 in Nanded city in slum area call Nai Abadi. At his schooling, his financial condition was below the basic needs. Anyhow he completed intermediate, after school education, he enrolled for graduation in B.Sc. from SRTMUN University. Parallel he began his social aims in 1998, with a part-time job to survive and started living for other. after many hurdles and difficulties in the first year of Bachelor degree, where he establishes an NGO known as "NANDED DISTRICT ROLLER SKATING ASSOCIATION", for the Development of Nanded city Sports activities and had taken the responsibility as Chief Functionary (Founder Secretary). In this time, he organized more than 20 tournament & sports camps in these activities above 5000 Children have taken benefit and upgrade their sports skills. He was also a joint secretary of baitul-ul-uloom education society apart from this he was also a secretary of Muslim medical help centre, Muslim. Every human being has right to education, good health, good life style with equal opportunity in 2008 “THE CRESCENT FOUNDATION” was established by Mohammed Siddique with the mission to work for the betterment and upliftment for underprivileged societies in education and health and skill development sector. The organisation focus is to build and transformation life of the underprivileged, backward and weaker section community. To give them standard life style which make them to live a quality life style in the societies. Apart from this THE CRESCENT FOUNDATION has special focused to bring awareness about education and health in underprivileged communities
//               </p>
//             </motion.div>
//           </div>
//           <motion.img
//             src={about2}
//             alt="Innovation and Growth"
//             className="rounded-3xl shadow-2xl w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
//             initial={{ opacity: 0, x: 120 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1 }}
//             viewport={{ once: true }}
//           />
//         </div>
//         {/* Wave divider */}
//         <svg
//           className="mt-24 w-full h-24"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 1440 320"
//         >
//           <path fill="#ffffff" fillOpacity="1" d="M0,224L48,218.7C96,213,192,203,288,197.3C384,192,480,192,576,192C672,192,768,192,864,176C960,160,1056,128,1152,133.3C1248,139,1344,181,1392,202.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
//         </svg>
//       </section>

// {/* Quote Section */}
//       <section className="relative bg-white py-24 px-6 z-10">
//         <div className="max-w-6xl mx-auto text-center">
//           <motion.blockquote
//             className="text-xl sm:text-2xl italic text-gray-800 max-w-3xl mx-auto border-l-4 border-blue-700 pl-6"
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1 }}
//           >
//             "Every child, every individual deserves equal opportunity for survival, education, and development. Our mission is to create lasting impact through compassion and action."
//           </motion.blockquote>
//         </div>
//       </section>
      
//       {/* Section 3 - Voice of Founder */}
//       <section className="relative bg-white py-24 px-6 z-10">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//           <motion.img
//             src={about3}
//             alt="Voice of Founder"
//             className="rounded-3xl shadow-2xl w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
//             initial={{ opacity: 0, x: -120 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1 }}
//             viewport={{ once: true }}
//           />
//           <div className="space-y-6">
//             <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
//               VOICE OF FOUNDER
//             </h2>
//             <motion.div
//               className="bg-blue-50 p-6 rounded-3xl shadow-md relative"
//               initial={{ y: 20, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               transition={{ duration: 1 }}
//             >
//               <p className="text-gray-700 text-lg leading-relaxed">
//                 The Crescent Foundation has established itself as an organization committed towards welfare and empowerment, Upliftment, and transformation the life of the marginalized and voiceless section of the society. The organization has worked with multiple stakeholders: governmental bodies, media, private sector National NGOs and organizations to create a platform and an understanding towards this margined and voiceless section of the society. Taking impetus from its previous work TCF this year articulated and highlighted issues of important of education for daily wages working family, marginalized and Below poverty line family and working children at the Marathwada level as well. We continuously trying and giving our best to decommercialization of education system through crescent public school at Nanded District. TCF was able to present its experience of working with local School and campuses how to bring the education awareness and the decommercialization process in school systems with sustainability of organization the presentation also included how its work on sensitization and working with local governments private organization and juvenile justice system led to greater impact. TCF also understands the Barrier in education for marginalized and weaker section of the society. To ensure opportunities of education, health, nutrition, play and survival it was thus necessary to work on the concept of decommercialization of education system in Marathwada. All these activities made it possible for with the help of TCF hardworking and dedicated team and some of corporate social responsibilities team
//               </p>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Section 4 - Looking Ahead */}
//       <section className="relative bg-gradient-to-r from-blue-50 to-white py-24 px-6 z-10">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//           <div className="space-y-6">
//             <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
//               Looking Ahead
//             </h2>
//             <p className="text-gray-700 text-lg leading-relaxed">
//               As we continue to grow, our vision remains clear — to connect people through sound. From professional studios to everyday listeners, we’re here to make every moment you listen truly fabulous.
//             </p>
//           </div>
//           <motion.img
//             src={about4}
//             alt="Future Vision"
//             className="rounded-3xl shadow-2xl w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
//             initial={{ opacity: 0, x: 120 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1 }}
//             viewport={{ once: true }}
//           />
//         </div>
//       </section>

//       {/* Mission & Vision */}
//       <section className="relative bg-gray-100 py-28 px-6 z-10">
//         <div className="max-w-6xl mx-auto text-center mb-16">
//           <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Our Mission & Vision</h2>
//           <p className="text-gray-700 text-lg max-w-4xl mx-auto leading-relaxed">
//             The heart of Fabulous Sound Products lies in our passion for redefining how the world listens, experiences, and connects through sound.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
//           <motion.div
//             className="bg-white rounded-3xl shadow-2xl p-10 text-center hover:shadow-3xl transition duration-500"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             viewport={{ once: true }}
//           >
//             <h3 className="text-2xl font-semibold text-blue-700 mb-4">Our Mission</h3>
//             <p className="text-gray-700 text-lg leading-relaxed">
//               Our mission is to touch millions of lives and spread happiness to the underprivileged People of India on a sustainable basis. We will make use of multiple platforms and mediums to reach this goal and be one of the most respected NGO known for its practice and ethics...
//             </p>
//           </motion.div>

//           <motion.div
//             className="bg-white rounded-3xl shadow-2xl p-10 text-center hover:shadow-3xl transition duration-500"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.2 }}
//             viewport={{ once: true }}
//           >
//             <h3 className="text-2xl font-semibold text-blue-700 mb-4">Our Vision</h3>
//             <p className="text-gray-700 text-lg leading-relaxed">
//               The Crescent Foundation home to peoples and nature beset with problems of poverty, illiteracy, unequal distribution of wealth, exploitation and all the associated ills. This is a result of lack of awareness, illiteracy, poor planning, and wanton greed of the section of human society and a world in which every child attains the right to survival, protection, development, and participation.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default About;

//square box
import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import about1 from "../assets/hero1.png";
import about2 from "../assets/about1.png";
import about3 from "../assets/about2.png";
import about4 from "../assets/hero4.png";

const StatCard = ({ number, label, delay = 0 }) => (
  <motion.div
    className="bg-white shadow-2xl rounded-3xl p-6 text-center hover:shadow-3xl transition"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay }}
    viewport={{ once: true }}
  >
    <h3 className="text-3xl font-bold text-blue-700 mb-2">
      <CountUp
        start={0}
        end={parseInt(number.replace(/\D/g, ""))}
        duration={2}
        delay={delay}
        separator=","
      />
      {number.includes("+") ? "+" : ""}
    </h3>
    <p className="text-gray-700">{label}</p>
  </motion.div>
);

const About = () => {
  return (
    <div className="relative bg-gray-50 font-sans text-gray-800 overflow-hidden">

      {/* Floating background shapes */}
      <motion.div
        className="absolute top-0 left-0 w-72 h-72 bg-blue-300 rounded-full opacity-30 -translate-x-32 -translate-y-32"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full opacity-20 translate-x-32 translate-y-32"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-50"
            animate={{
              x: [0, Math.random() * 200 - 100, 0],
              y: [0, Math.random() * 200 - 100, 0],
            }}
            transition={{ duration: Math.random() * 10 + 5, repeat: Infinity, repeatType: "mirror" }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white text-center py-28 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/src/assets/logo.png')] opacity-10"></div>
        <h1 className="relative text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
          The Crescent Foundation Story
        </h1>
        <p className="relative text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
          We don’t just make sound — we craft experiences that move you.
        </p>
        <svg
          className="absolute bottom-0 left-0 w-full h-24"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          {/* <path d="M0 0L1200 120L0 120V0Z" className="fill-white"></path> */}
        </svg>
      </section>

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 text-center relative z-10">
        <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
          At <span className="font-semibold text-blue-700">The Crescent Foundation</span>, 
          we believe every individual deserves equal opportunity for survival, education, and development.
        </p>
      </section>

      {/* Stats Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 z-10 relative">
        <StatCard number="12,000+" label="Beneficiaries Reached" />
        <StatCard number="50+" label="Community Projects" delay={0.2} />
        <StatCard number="15" label="Years of Service" delay={0.4} />
        <StatCard number="100+" label="Volunteers Engaged" delay={0.6} />
      </section>

      {/* Section 1 - Our Founding */}
      <section className="relative bg-white py-24 px-6 z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.img
            src={about1}
            alt="Our Founding"
            className="rounded-3xl shadow-2xl w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Founding
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              The Crescent Foundation laid in 2008 with the aim for the betterment and upliftment of the weaker & underprivileged community in India. The Crescent Foundation founded under the Public Charitable Trust Registration Act in 2008 is home to peoples and nature beset with problems of poverty, illiteracy, unequal distribution of wealth, exploitation and all the associated ills. This results from a lack of awareness, illiteracy, poor planning, and wanton greed of the section of human society and a world where every child attains the right to survival, protection, development, and participation, envisions building an equal opportunity society. The organization seeks sustainable solutions to long-term problems of the ‘marginalized and weaker section of the society’ through an integrated, community-based, participatory approach that reinforces civil society and government initiative. Through an array of empowering measures, it works to open opportunities for marginalized and weaker sections of society and improve their living conditions. TCF, at present, is engaged in the field of Education in weaker sections and marginalized communities and in the health sector, skill development and women empowerment field with an average of 12000+ beneficiaries till date.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 - Founder */}
      <section className="relative bg-gradient-to-r from-blue-50 to-white py-24 px-6 z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Mohammed Siddique
            </h2>
            <motion.div
              className="bg-blue-100 p-8 rounded-3xl shadow-lg relative"
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <p className="text-gray-700 text-lg leading-relaxed">
                The Crescent foundation is initiated in 2008 by the Mohammed Siddique founded single handed with the mission to work for the betterment and upliftment of underprivileged societies in the education and health and skill development sector. He always says that doing little things with great love’ instead of ‘doing great things alone he born on 13th June 1977 in Nanded city in slum area call Nai Abadi. At his schooling, his financial condition was below the basic needs. Anyhow he completed intermediate, after school education, he enrolled for graduation in B.Sc. from SRTMUN University. Parallel he began his social aims in 1998, with a part-time job to survive and started living for other. after many hurdles and difficulties in the first year of Bachelor degree, where he establishes an NGO known as "NANDED DISTRICT ROLLER SKATING ASSOCIATION", for the Development of Nanded city Sports activities and had taken the responsibility as Chief Functionary (Founder Secretary). In this time, he organized more than 20 tournament & sports camps in these activities above 5000 Children have taken benefit and upgrade their sports skills. He was also a joint secretary of baitul-ul-uloom education society apart from this he was also a secretary of Muslim medical help centre, Muslim. Every human being has right to education, good health, good life style with equal opportunity in 2008 “THE CRESCENT FOUNDATION” was established by Mohammed Siddique with the mission to work for the betterment and upliftment for underprivileged societies in education and health and skill development sector. The organisation focus is to build and transformation life of the underprivileged, backward and weaker section community. To give them standard life style which make them to live a quality life style in the societies. Apart from this THE CRESCENT FOUNDATION has special focused to bring awareness about education and health in underprivileged communities.
              </p>
            </motion.div>
          </div>
          <motion.img
            src={about2}
            alt="Founder"
            className="rounded-3xl shadow-2xl w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
        </div>
      </section>

      {/* Quote Section */}
      <section className="relative bg-white py-24 px-6 z-10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.blockquote
            className="text-xl sm:text-2xl italic text-gray-800 max-w-3xl mx-auto border-l-4 border-blue-700 pl-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            "Every child, every individual deserves equal opportunity for survival, education, and development. Our mission is to create lasting impact through compassion and action."
          </motion.blockquote>
        </div>
      </section>

      {/* Section 3 - Voice of Founder */}
      <section className="relative bg-white py-24 px-6 z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.img
            src={about3}
            alt="Voice of Founder"
            className="rounded-3xl shadow-2xl w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              VOICE OF FOUNDER
            </h2>
            <motion.div
              className="bg-blue-50 p-6 rounded-3xl shadow-md relative"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <p className="text-gray-700 text-lg leading-relaxed">
                The Crescent Foundation has established itself as an organization committed towards welfare and empowerment, Upliftment, and transformation the life of the marginalized and voiceless section of the society. The organization has worked with multiple stakeholders: governmental bodies, media, private sector National NGOs and organizations to create a platform and an understanding towards this margined and voiceless section of the society. Taking impetus from its previous work TCF this year articulated and highlighted issues of important of education for daily wages working family, marginalized and Below poverty line family and working children at the Marathwada level as well. We continuously trying and giving our best to decommercialization of education system through crescent public school at Nanded District. TCF was able to present its experience of working with local School and campuses how to bring the education awareness and the decommercialization process in school systems with sustainability of organization the presentation also included how its work on sensitization and working with local governments private organization and juvenile justice system led to greater impact. TCF also understands the Barrier in education for marginalized and weaker section of the society. To ensure opportunities of education, health, nutrition, play and survival it was thus necessary to work on the concept of decommercialization of education system in Marathwada. All these activities made it possible for with the help of TCF hardworking and dedicated team and some of corporate social responsibilities team.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4 - Looking Ahead */}
      <section className="relative bg-gradient-to-r from-blue-50 to-white py-24 px-6 z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Looking Ahead
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our vision is to continue connecting people and communities through sustainable initiatives in education, health, and social development.
            </p>
          </div>
          <motion.img
            src={about4}
            alt="Future Vision"
            className="rounded-3xl shadow-2xl w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative bg-gray-100 py-28 px-6 z-10">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Our Mission & Vision</h2>
          <p className="text-gray-700 text-lg max-w-4xl mx-auto leading-relaxed">
            We strive to empower communities, ensuring every individual has access to education, health, and equal opportunities for a better future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            className="bg-white rounded-3xl shadow-2xl p-10 text-center hover:shadow-3xl transition duration-500"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Our Mission</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our mission is to touch millions of lives and spread happiness to the underprivileged People of India on a sustainable basis. We will make use of multiple platforms and mediums to reach this goal and be one of the most respected NGO known for its practice and ethics. TCF was formed to respond to this issue and is the initiative and effort to facilitate Empowering community development process.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-3xl shadow-2xl p-10 text-center hover:shadow-3xl transition duration-500"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Our Vision</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              The Crescent Foundation home to peoples and nature beset with problems of poverty, illiteracy, unequal distribution of wealth, exploitation and all the associated ills. This is a result of lack of awareness, illiteracy, poor planning, and wanton greed of the section of human society and A world in which every child attains the right to survival, protection, development, and participation.
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default About;
