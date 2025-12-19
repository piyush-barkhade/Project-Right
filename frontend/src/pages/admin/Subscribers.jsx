import { useEffect, useState } from "react";
import api from "../../api/api";

const Subscribers = () => {
  const [subs, setSubs] = useState([]);

  useEffect(() => {
    api.get("/subscribers").then((res) => setSubs(res.data));
  }, []);

  return (
    <div className="p-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-4 border-b border-slate-100">
        <div>
          <h2 className="text-2xl font-black text-[#1e3a8a]">Newsletter</h2>
          <p className="text-slate-500 text-sm">
            Manage your mailing list subscribers
          </p>
        </div>
        <span className="bg-[#fb923c] text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-sm">
          {subs.length} Active Users
        </span>
      </div>

      <div className="bg-slate-50 rounded-lg overflow-hidden border border-slate-200">
        {subs.map((s, index) => (
          <div
            key={s._id}
            className="flex items-center justify-between p-4 hover:bg-white border-b border-slate-200 last:border-0 transition-colors"
          >
            <div className="flex items-center gap-4">
              <span className="text-slate-400 font-mono text-xs">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-[#1e3a8a] font-medium">{s.email}</p>
            </div>
            <div className="h-2 w-2 rounded-full bg-green-400"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subscribers;
