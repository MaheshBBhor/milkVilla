import { createContext } from "react";

export const UserContext = createContext({
  user: {
    name: "Mahesh Bhor",
    email: "maheshbhor97@gmail.com",
  },
});
