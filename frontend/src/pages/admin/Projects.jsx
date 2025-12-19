import { useEffect, useState } from "react";
import api from "../../api/api";
import ImageCropper from "../../components/ImageCropper";
import { blobToBase64 } from "../../utils/blobToBase64";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({
    name: "",
    description: "",
    image: null,
  });
  const [loading, setLoading] = useState(false);

  const fetchProjects = async () => {
    try {
      const res = await api.get("/projects");
      setProjects(res.data);
    } catch (err) {
      console.error("Failed to fetch projects:", err);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const submitProject = async (e) => {
    e.preventDefault();
    if (!form.image) return alert("Please crop the image first!");

    setLoading(true);
    try {
      await api.post("/projects", {
        name: form.name,
        description: form.description,
        image: form.image,
      });

      alert("Project Added Successfully!");
      setForm({ name: "", description: "", image: null });
      fetchProjects();
    } catch (err) {
      alert("Submission failed. Check file size.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 sm:p-8">
      <div className="mb-8 border-b border-gray-100 pb-4">
        <h2 className="text-3xl font-extrabold text-[#1e3a8a]">
          Project <span className="text-[#fb923c]">Management</span>
        </h2>
        <p className="text-gray-500">Upload and showcase your latest work</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <form
            onSubmit={submitProject}
            className="sticky top-24 space-y-5 bg-blue-50 p-6 rounded-2xl border border-blue-100 shadow-sm"
          >
            <h3 className="text-lg font-bold text-[#1e3a8a] mb-2">
              Add New Project
            </h3>

            <div>
              <label className="text-xs font-bold uppercase text-blue-900 mb-1 block">
                Project Title
              </label>
              <input
                className="w-full border-gray-200 focus:ring-2 focus:ring-[#fb923c] focus:border-transparent p-3 rounded-xl outline-none transition-all"
                placeholder="e.g. Luxury Apartment Complex"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>

            <div>
              <label className="text-xs font-bold uppercase text-blue-900 mb-1 block">
                Description
              </label>
              <textarea
                className="w-full border-gray-200 focus:ring-2 focus:ring-[#fb923c] focus:border-transparent p-3 rounded-xl outline-none transition-all h-28"
                placeholder="Briefly describe the project details..."
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
              />
            </div>

            <div className="bg-white p-4 rounded-xl border border-dashed border-blue-300">
              <label className="font-semibold block text-sm text-blue-800 mb-3">
                Cover Image (450x350)
              </label>
              <ImageCropper
                onImageCropped={(blob) => setForm({ ...form, image: blob })}
              />
              {form.image && (
                <div className="mt-3 flex items-center gap-2 text-green-600 text-sm font-bold">
                  <span className="bg-green-100 p-1 rounded-full">✓</span> Image
                  Ready
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#fb923c] hover:bg-[#ea580c] text-white font-bold py-3 rounded-xl shadow-lg shadow-orange-200 transition-all transform active:scale-95 disabled:opacity-50"
            >
              {loading ? "Uploading..." : "Publish Project"}
            </button>
          </form>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-xl font-bold text-[#1e3a8a] mb-6 flex items-center gap-2">
            Live Projects
            <span className="bg-blue-100 text-blue-600 text-xs py-1 px-3 rounded-full">
              {projects.length}
            </span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <div
                key={p._id}
                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-[#fb923c]/30 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={p.image}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={p.name}
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#1e3a8a]">
                    Active
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-lg text-gray-800 group-hover:text-[#1e3a8a] transition-colors">
                    {p.name}
                  </h4>
                  <p className="text-gray-500 text-sm mt-2 line-clamp-2 italic">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
