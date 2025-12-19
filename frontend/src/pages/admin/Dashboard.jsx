import { Routes, Route } from "react-router-dom";
import AdminNavbar from "../../components/AdminNavbar";
import Projects from "./Projects";
import Clients from "./Clients";
import Contacts from "./Contacts";
import Subscribers from "./Subscribers";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <AdminNavbar />
      <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 min-h-[80vh] overflow-hidden">
          <Routes>
            <Route path="projects" element={<Projects />} />
            <Route path="clients" element={<Clients />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="subscribers" element={<Subscribers />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
