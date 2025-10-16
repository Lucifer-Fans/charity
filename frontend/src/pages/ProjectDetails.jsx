// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// const ProjectDetails = () => {
//   const { id } = useParams();
//   const [project, setProject] = useState(null);

//   useEffect(() => {
//     axios.get(`http://localhost:5000/api/projects`)
//       .then(res => {
//         const p = res.data.find(pr => pr._id === id);
//         setProject(p);
//       })
//       .catch(err => console.error(err));
//   }, [id]);

//   if (!project) return <p className="pt-16 text-center">Loading...</p>;

//   return (
//     <div
//       className="pt-16 max-w-7xl mx-auto px-4 md:px-0 py-20 relative"
//       style={{
//         backgroundImage: project.backgroundImage ? `url(${project.backgroundImage})` : 'none',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       <div className={`p-6 rounded shadow-md backdrop-blur-sm bg-white/80`}>
//         <h1 className="text-3xl font-bold mb-4">{project.name}</h1>
//         <p className="mb-4">Project Type: {project.type}</p>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {project.images.map((img, idx) => (
//             <img key={idx} src={img.url} alt={`Project ${idx}`} className="w-full h-64 object-cover rounded" />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectDetails;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    axios.get(`https://thecresent-backend.onrender.com/api/projects`)
      .then(res => {
        const p = res.data.find(pr => pr._id === id);
        setProject(p);
      })
      .catch(err => console.error(err));
  }, [id]);

  if (!project) return <p className="pt-16 text-center text-gray-500">Loading...</p>;

  return (
    <div
      className="pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative"
      style={{
        backgroundImage: project.backgroundImage ? `url(${project.backgroundImage})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="p-4 sm:p-6 md:p-8 rounded-lg shadow-lg backdrop-blur-sm bg-white/90">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{project.name}</h1>
        <p className="mb-4 text-sm sm:text-base md:text-lg">Project Type: <span className="font-semibold">{project.type}</span></p>

        {project.description && (
          <p className="mb-6 text-gray-700 text-sm sm:text-base md:text-lg">{project.description}</p>
        )}

        {/* Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {project.images.map((img, idx) => (
            <div key={idx} className="overflow-hidden rounded-lg shadow-md">
              <img
                src={img.url}
                alt={`Project ${idx + 1}`}
                className="w-full h-64 sm:h-64 md:h-72 lg:h-80 object-cover transform transition duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Additional info */}
        {project.details && (
          <div className="mt-6 space-y-2">
            {project.details.map((detail, i) => (
              <p key={i} className="text-gray-700 text-sm sm:text-base md:text-lg">{detail}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
