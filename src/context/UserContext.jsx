import { createContext } from "react";

// Create Context
export const UserContext = createContext();

// Provider Component
export const UserProvider = ({ children }) => {
  const user = "Alok Kumar";

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};