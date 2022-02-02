import React, { createContext, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [formData, setformData] = useState({
    url: "",
    type: "GET",
  });

  const [paramsData, setParamsData] = useState([]);
  const [headerData, setHeaderData] = useState([]);
  const [Jsontext, setJsontext] = useState('');


  return (
    <DataContext.Provider
      value={{
        formData,
        setformData,
        paramsData,
        setParamsData,
        headerData,
        setHeaderData,
        Jsontext,
        setJsontext
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
