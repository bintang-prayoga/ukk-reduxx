import UserLayout from "../../Layout/UserLayout";

function UpdatesPage() {
  return <div>UpdatesPage</div>;
}

export default UpdatesPage;

UpdatesPage.getLayout = function getLayout(page) {
  return UserLayout.getLayout(page);
};
