export default function ClientCard({ client }) {
  return (
    <div className="bg-white p-5 shadow-md rounded-lg max-w-sm">
      <img
        src={client.image}
        alt={client.name}
        className="w-full h-[220px] object-cover rounded-md mb-4"
      />

      <p className="italic text-gray-600 mb-3">“{client.description}”</p>

      <h4 className="font-bold text-lg">{client.name}</h4>
      <span className="text-sm text-gray-500">{client.designation}</span>
    </div>
  );
}
