import UserLayout from "../../Layout/UserLayout";

function DraftsPage() {
  return <div>DraftsPage</div>;
}

export default DraftsPage;

DraftsPage.getLayout = function getLayout(page) {
  return UserLayout.getLayout(page);
};
