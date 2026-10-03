import { useSelector } from "react-redux";

interface customerInitialState {
  fullName: string;
  nationalId: number;
  createdAt: string;
}

interface state {
  customer: customerInitialState;
}

function Customer() {
  const customer = useSelector((state: state) => state.customer.fullName);
  console.log(customer);
  return <h2>👋 Welcome, {customer}</h2>;
}

export default Customer;
