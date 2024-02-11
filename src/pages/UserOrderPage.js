import UserOrders from "../features/user/components/UserOrders";
import Navbar from "../features/navbar/Navbar";
export default function UserOrderPage() {
  return (
    <>
      <Navbar>
        <h1 className="mx-auto text-lg font-bold">My Orders </h1>
        <UserOrders></UserOrders>
      </Navbar>
    </>
  );
}
