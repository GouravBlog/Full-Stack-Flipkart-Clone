import { createContext, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  let [account, toogleAccount] = useState("");
  return (
    <DataContext.Provider
      value={{
        account,
        toogleAccount,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
