import Sidebar from "@/components/admin/Sidebar";

export default function AdminDashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 p-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p>Welcome to the admin panel.</p>
      </div>
    </div>
  );
}
