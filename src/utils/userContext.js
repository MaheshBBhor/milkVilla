// src/utils/userContext.js
// import React, { createContext, useState } from "react";

// // Create UserContext
// export const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState(null); // Initialize user state

//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };
import { createContext } from "react";

export const UserContext = createContext({
  user: {
    name: "Mahesh Bhor",
    email: "maheshbhor97@gmail.com",
  },
});
