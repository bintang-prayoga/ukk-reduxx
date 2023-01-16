import UserLayout from "../../Layout/UserLayout";

function AdminDashboard() {
  return <div>AdminDashboard</div>;
}

export default AdminDashboard;

AdminDashboard.getLayout = function getLayout(page) {
  return UserLayout.getLayout(page);
};
