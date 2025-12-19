import { useEffect, useState } from "react";
import api from "../../api/api";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    api.get("/contacts").then((res) => setContacts(res.data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
      {contacts.map((c) => (
        <div
          key={c._id}
          className="group border border-slate-100 p-5 rounded-xl bg-white hover:border-[#fb923c] transition-colors shadow-sm"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-10 w-10 bg-blue-100 text-[#1e3a8a] flex items-center justify-center rounded-full font-bold">
              {c.fullName[0]}
            </div>
            <p className="font-bold text-slate-800">{c.fullName}</p>
          </div>
          <div className="space-y-1 text-sm text-slate-600">
            <p className="flex items-center gap-2">📧 {c.email}</p>
            <p className="flex items-center gap-2">📱 {c.mobile}</p>
            <p className="flex items-center gap-2 font-medium text-[#fb923c]">
              📍 {c.city}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contacts;
