import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const UploadProject = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [editData, setEditData] = useState(null);
  const token = localStorage.getItem('adminToken');

  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:5000/api/projects/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => setEditData(res.data))
        .catch((err) => console.error(err));
    }
  }, [id, token]);

  const handleSuccess = () => {
    alert(`Project ${editData ? 'updated' : 'uploaded'} successfully!`);
    navigate('/');
  };

  // ----- ProjectForm Code -----
  const ProjectForm = ({ editData, onSuccess }) => {
    const [step, setStep] = useState(1);
    const [form, setForm] = useState({
      name: '',
      category: 'current',
      type: '',
      images: [],
      background: null,
    });
    const [additionalImages, setAdditionalImages] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      if (editData) {
        setForm({
          name: editData.name,
          category: editData.category,
          type: editData.type,
          images: editData.images || [],
          background: editData.backgroundImage || null,
        });
      }
    }, [editData]);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    const handleImageChange = (e, index) => {
      const file = e.target.files[0];
      if (!file) return;
      const newImages = [...form.images];
      newImages[index] = file;
      setForm({ ...form, images: newImages });
    };
    const handleAddImage = () => setAdditionalImages([...additionalImages, null]);
    const handleAdditionalImageChange = (e, index) => {
      const file = e.target.files[0];
      const newImages = [...additionalImages];
      newImages[index] = file;
      setAdditionalImages(newImages);
    };
    const handleBackgroundChange = (e) => setForm({ ...form, background: e.target.files[0] });

    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      try {
        const data = new FormData();
        data.append('name', form.name);
        data.append('category', form.category);
        data.append('type', form.type);
        form.images.forEach((img) => img && data.append('images', img));
        additionalImages.forEach((img) => img && data.append('images', img));
        if (form.background) data.append('background', form.background);

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        };

        if (editData) {
          await axios.put(`http://localhost:5000/api/projects/${editData._id}`, data, config);
        } else {
          await axios.post('http://localhost:5000/api/projects', data, config);
        }
        onSuccess();
      } catch (err) {
        console.error(err);
        alert('Failed to upload project.');
      } finally {
        setLoading(false);
      }
    };

    return (
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md space-y-6 w-full max-w-3xl mx-auto"
      >
        {/* Step 1 */}
        {step === 1 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-center md:text-left">Project Details</h2>
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
              <input
                type="text"
                name="name"
                placeholder="Project Name"
                value={form.name}
                onChange={handleChange}
                className="flex-1 p-3 border rounded w-full"
                required
              />
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="flex-1 p-3 border rounded w-full"
              >
                <option value="current">Current</option>
                <option value="upcoming">Upcoming</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            <input
              type="text"
              name="type"
              placeholder="Type (Blood Donation, Education, etc.)"
              value={form.type}
              onChange={handleChange}
              className="w-full p-3 border rounded"
              required
            />
            <button
              type="button"
              onClick={() => setStep(2)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full md:w-auto"
            >
              Next
            </button>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-center md:text-left">Upload Images</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[...Array(10)].map((_, idx) => (
                <input
                  key={idx}
                  type="file"
                  onChange={(e) => handleImageChange(e, idx)}
                  className="w-full"
                />
              ))}

              {additionalImages.map((_, idx) => (
                <input
                  key={`extra-${idx}`}
                  type="file"
                  onChange={(e) => handleAdditionalImageChange(e, idx)}
                  className="w-full"
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleAddImage}
              className="text-blue-500 underline"
            >
              + Add More Images
            </button>

            <div className="mt-4">
              <label className="block mb-2">Background Image:</label>
              <input type="file" onChange={handleBackgroundChange} className="w-full" />
            </div>

            <div className="flex flex-col md:flex-row items-center md:space-x-3 space-y-2 md:space-y-0 mt-4">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="bg-gray-400 px-4 py-2 rounded hover:bg-gray-500 text-white w-full md:w-auto"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={loading}
                className={`px-4 py-2 rounded text-white w-full md:w-auto ${
                  loading
                    ? 'bg-green-300 cursor-not-allowed'
                    : 'bg-green-500 hover:bg-green-600'
                }`}
              >
                {loading ? editData ? 'Updating...' : 'Uploading...' : editData ? 'Update Project' : 'Upload Project'}
              </button>
            </div>
          </div>
        )}
      </form>
    );
  };

  // ----- End ProjectForm -----

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-grow p-4 md:p-8 w-full">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-10">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center md:text-left">
            {editData ? 'Edit Project' : 'Upload Project'}
          </h1>

          <ProjectForm editData={editData} onSuccess={handleSuccess} />
        </div>
      </div>
    </div>
  );
};

export default UploadProject;
