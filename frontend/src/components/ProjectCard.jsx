export default function ProjectCard({ project }) {
  return (
    <div className="group relative overflow-hidden shadow-lg rounded-lg">
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-6 bg-white">
        <h3 className="text-xl font-bold mb-2">{project.name}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <button className="border-2 border-black px-4 py-2 hover:bg-black hover:text-white transition">
          READ MORE
        </button>
      </div>
    </div>
  );
}
