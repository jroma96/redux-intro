const customerInitialState = {
  fullName: "",
  nationalId: 0,
  createdAt: "",
};

type customerAction =
  | {
      type: "customer/createCustomer";
      payload: { fullName: string; nationalId: number; createdAt: string };
    }
  | {
      type: "customer/updateFullName";
      payload: { fullName: string };
    };

export default function customerReducer(
  state = customerInitialState,
  action: customerAction,
) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalId: action.payload.nationalId,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateFullName":
      return {
        ...state,
        fullName: action.payload.fullName,
      };
    default:
      return state;
  }
}

export function createCustomer(fullName: string, nationalId: number) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalId, createdAt: new Date().toISOString() },
  };
}

export function updateFullName(fullName: string) {
  return { type: "customer/updateFullName", payload: { fullName } };
}
