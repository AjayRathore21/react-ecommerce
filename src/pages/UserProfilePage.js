import Navbar from "../features/navbar/Navbar";
import UserProfile from "../features/user/components/UserProfile";
export default function UserProfilePage() {
  return (
    <>
      <Navbar>
        <h1 className="mx-auto text-lg font-bold">Hii There </h1>
        <UserProfile></UserProfile>
      </Navbar>
    </>
  );
}
