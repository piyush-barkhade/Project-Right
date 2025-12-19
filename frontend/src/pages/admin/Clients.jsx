import { useEffect, useState } from "react";
import api from "../../api/api";
import ImageCropper from "../../components/ImageCropper";
import { blobToBase64 } from "../../utils/blobToBase64";

export default function Clients() {
  const [clients, setClients] = useState([]);
  const [form, setForm] = useState({
    name: "",
    designation: "",
    description: "",
    image: null,
  });
  const [loading, setLoading] = useState(false);

  const fetchClients = async () => {
    try {
      const res = await api.get("/clients");
      setClients(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.image) {
      alert("Please crop and select an image first!");
      return;
    }

    setLoading(true);
    try {
      const imageBase64 =
        form.image instanceof Blob
          ? await blobToBase64(form.image)
          : form.image;

      await api.post("/clients", {
        name: form.name,
        designation: form.designation,
        description: form.description,
        image: imageBase64,
      });

      alert("Client added successfully!");
      setForm({ name: "", designation: "", description: "", image: null });
      fetchClients();
    } catch (err) {
      console.error(err);
      alert("Failed to add client");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 sm:p-8">
      <div className="mb-10 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-black text-[#1e3a8a] uppercase tracking-tight">
          Client <span className="text-[#fb923c]">Testimonials</span>
        </h2>
        <div className="h-1.5 w-20 bg-[#fb923c] mx-auto mt-2 rounded-full"></div>
      </div>

      <div className="max-w-3xl mx-auto bg-white p-6 sm:p-10 rounded-3xl shadow-xl shadow-blue-900/5 border border-gray-100 mb-16">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Client Full Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border-b-2 border-gray-100 focus:border-[#fb923c] p-3 outline-none transition-colors font-medium text-lg"
            />
            <input
              type="text"
              placeholder="Designation (e.g. CEO, Google)"
              value={form.designation}
              onChange={(e) =>
                setForm({ ...form, designation: e.target.value })
              }
              className="w-full border-b-2 border-gray-100 focus:border-[#fb923c] p-3 outline-none transition-colors text-gray-600"
            />
            <textarea
              placeholder="What did the client say?"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              className="w-full bg-gray-50 border-none focus:ring-2 focus:ring-[#fb923c]/20 p-4 rounded-xl outline-none h-32 transition-all italic"
            />
          </div>

          <div className="flex flex-col justify-between">
            <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100">
              <label className="text-sm font-bold text-[#ea580c] mb-2 block uppercase">
                Client Photo
              </label>
              <ImageCropper
                onImageCropped={(blob) => setForm({ ...form, image: blob })}
              />
              {form.image && (
                <p className="mt-2 text-xs font-bold text-orange-600">
                  ✓ Portrait Ready
                </p>
              )}
            </div>

            <button
              type="submit"
              className="mt-4 bg-[#1e3a8a] hover:bg-[#1e40af] text-white py-4 rounded-xl font-bold uppercase tracking-widest transition-all shadow-lg shadow-blue-200"
              disabled={loading}
            >
              {loading ? "Saving..." : "Add Client Review"}
            </button>
          </div>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {clients.map((c) => (
          <div
            key={c._id}
            className="bg-white p-8 rounded-2xl border border-gray-50 shadow-sm relative hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center text-center"
          >
            <div className="absolute top-4 left-4 text-6xl text-orange-100 font-serif leading-none">
              “
            </div>

            <img
              src={c.image}
              alt={c.name}
              className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-md ring-2 ring-[#fb923c] mb-6"
            />

            <p className="text-gray-600 italic mb-6 leading-relaxed relative z-10">
              {c.description}
            </p>

            <div className="mt-auto">
              <h4 className="font-extrabold text-[#1e3a8a] text-lg uppercase tracking-wide">
                {c.name}
              </h4>
              <span className="text-xs font-bold text-[#fb923c] uppercase">
                {c.designation}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
